#!/usr/bin/env python3
"""
把当前目录里的 MIDI 文件离线渲染成钢琴 M4A。

设计目标：
- 不依赖 mido / pretty_midi 等额外 Python 包，方便在本机直接运行。
- 所有 MIDI 声部都强制使用同一个 acoustic grand piano 采样。
- 输出到 ./m4a，不覆盖原始 .mid 文件。
- 先生成临时 WAV，再调用 ffmpeg 转成 M4A，最后删除临时文件。

注意：
- 这里使用的是网站已有的本地 MP3 钢琴采样，不是系统 MIDI 合成器。
- MIDI 文件如果有踏板控制，会按 sustain pedal 做基础延音处理。
"""

from __future__ import annotations

import argparse
import math
import struct
import subprocess
import tempfile
import wave
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from scipy.io import wavfile
from scipy.signal import resample_poly


SAMPLE_RATE = 44_100
DEFAULT_TEMPO_US_PER_QUARTER = 500_000
PIANO_MIN_PITCH = 21
PIANO_MAX_PITCH = 108
PIANO_VELOCITIES = [15, 31, 47, 63, 79, 95, 111, 127]
DEFAULT_RELEASE_SECONDS = 6.2
MASTER_GAIN = 0.62


@dataclass
class MidiNote:
    """一个已经配对好的 MIDI 音符。"""

    pitch: int
    velocity: int
    start_tick: int
    end_tick: int
    channel: int


@dataclass
class TempoEvent:
    """MIDI tempo 事件，单位是每四分音符多少微秒。"""

    tick: int
    tempo_us_per_quarter: int


def read_varlen(data: bytes, offset: int) -> tuple[int, int]:
    """读取 MIDI 的 variable-length quantity。"""

    value = 0
    while True:
        byte = data[offset]
        offset += 1
        value = (value << 7) | (byte & 0x7F)
        if not byte & 0x80:
            return value, offset


def parse_midi(path: Path) -> tuple[int, list[TempoEvent], list[MidiNote]]:
    """解析标准 MIDI 文件，返回 ticks-per-quarter、tempo 事件和音符列表。"""

    data = path.read_bytes()
    if data[:4] != b"MThd":
        raise ValueError(f"{path.name} 不是标准 MIDI 文件")

    header_length = struct.unpack(">I", data[4:8])[0]
    midi_format, track_count, division = struct.unpack(">HHH", data[8:14])
    if division & 0x8000:
        raise ValueError(f"{path.name} 使用 SMPTE timing，本脚本暂不支持")

    offset = 8 + header_length
    tempo_events = [TempoEvent(0, DEFAULT_TEMPO_US_PER_QUARTER)]
    notes: list[MidiNote] = []

    for _ in range(track_count):
        if data[offset : offset + 4] != b"MTrk":
            raise ValueError(f"{path.name} MIDI track header 异常")
        track_length = struct.unpack(">I", data[offset + 4 : offset + 8])[0]
        track_data = data[offset + 8 : offset + 8 + track_length]
        offset += 8 + track_length

        parse_track(track_data, tempo_events, notes)

    tempo_events.sort(key=lambda item: item.tick)
    notes.sort(key=lambda item: (item.start_tick, item.pitch))
    return division, tempo_events, notes


def parse_track(track_data: bytes, tempo_events: list[TempoEvent], notes: list[MidiNote]) -> None:
    """解析单条 MIDI track。"""

    offset = 0
    tick = 0
    running_status: int | None = None
    active_notes: dict[tuple[int, int], list[tuple[int, int]]] = {}
    sustain_down = {channel: False for channel in range(16)}
    sustained_notes: dict[int, list[MidiNote]] = {channel: [] for channel in range(16)}

    while offset < len(track_data):
        delta, offset = read_varlen(track_data, offset)
        tick += delta
        status = track_data[offset]

        if status < 0x80:
            if running_status is None:
                raise ValueError("MIDI running status 缺失")
            status = running_status
        else:
            offset += 1
            if status < 0xF0:
                running_status = status

        if status == 0xFF:
            meta_type = track_data[offset]
            offset += 1
            length, offset = read_varlen(track_data, offset)
            payload = track_data[offset : offset + length]
            offset += length

            if meta_type == 0x51 and length == 3:
                tempo = int.from_bytes(payload, "big")
                tempo_events.append(TempoEvent(tick, tempo))
            if meta_type == 0x2F:
                break
            continue

        if status in (0xF0, 0xF7):
            length, offset = read_varlen(track_data, offset)
            offset += length
            running_status = None
            continue

        event_type = status & 0xF0
        channel = status & 0x0F

        if event_type in (0xC0, 0xD0):
            offset += 1
            continue

        data1 = track_data[offset]
        data2 = track_data[offset + 1]
        offset += 2

        if event_type == 0x90 and data2 > 0:
            active_notes.setdefault((channel, data1), []).append((tick, data2))
        elif event_type in (0x80, 0x90):
            close_note(channel, data1, tick, active_notes, sustain_down, sustained_notes, notes)
        elif event_type == 0xB0 and data1 == 64:
            previous = sustain_down[channel]
            sustain_down[channel] = data2 >= 64
            if previous and not sustain_down[channel]:
                for note in sustained_notes[channel]:
                    note.end_tick = tick
                    notes.append(note)
                sustained_notes[channel].clear()

    # 兜底关闭没有 note-off 的音符，避免坏 MIDI 让音无限长。
    final_tick = tick
    for (channel, pitch), starts in active_notes.items():
        for start_tick, velocity in starts:
            notes.append(MidiNote(pitch, velocity, start_tick, final_tick, channel))
    for channel_notes in sustained_notes.values():
        for note in channel_notes:
            note.end_tick = final_tick
            notes.append(note)


def close_note(
    channel: int,
    pitch: int,
    tick: int,
    active_notes: dict[tuple[int, int], list[tuple[int, int]]],
    sustain_down: dict[int, bool],
    sustained_notes: dict[int, list[MidiNote]],
    notes: list[MidiNote],
) -> None:
    """处理 note-off；如果踏板踩下，就延迟到踏板释放再真正结束。"""

    stack = active_notes.get((channel, pitch))
    if not stack:
        return

    start_tick, velocity = stack.pop(0)
    note = MidiNote(pitch, velocity, start_tick, tick, channel)
    if sustain_down[channel]:
        sustained_notes[channel].append(note)
    else:
        notes.append(note)


def build_tick_converter(ticks_per_quarter: int, tempo_events: list[TempoEvent]):
    """生成 tick 到秒的转换函数。"""

    compact: list[TempoEvent] = []
    for event in sorted(tempo_events, key=lambda item: item.tick):
        if compact and compact[-1].tick == event.tick:
            compact[-1] = event
        else:
            compact.append(event)

    segments: list[tuple[int, float, int]] = []
    seconds = 0.0
    for index, event in enumerate(compact):
        if index > 0:
            previous = compact[index - 1]
            seconds += (
                (event.tick - previous.tick)
                * previous.tempo_us_per_quarter
                / 1_000_000
                / ticks_per_quarter
            )
        segments.append((event.tick, seconds, event.tempo_us_per_quarter))

    def tick_to_seconds(tick: int) -> float:
        segment_tick, segment_seconds, tempo = segments[0]
        for candidate in segments:
            if candidate[0] <= tick:
                segment_tick, segment_seconds, tempo = candidate
            else:
                break
        return segment_seconds + (tick - segment_tick) * tempo / 1_000_000 / ticks_per_quarter

    return tick_to_seconds


def load_sample(sample_dir: Path, pitch: int, velocity: int) -> np.ndarray:
    """读取最接近当前力度的钢琴采样，转成 mono float32。"""

    nearest_velocity = min(PIANO_VELOCITIES, key=lambda item: abs(item - velocity))
    sample_path = sample_dir / f"p{pitch}_v{nearest_velocity}.mp3"
    if not sample_path.exists():
        raise FileNotFoundError(f"缺少钢琴采样：{sample_path}")

    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as temp_file:
        wav_path = Path(temp_file.name)

    try:
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-v",
                "error",
                "-i",
                str(sample_path),
                "-ac",
                "1",
                "-ar",
                str(SAMPLE_RATE),
                str(wav_path),
            ],
            check=True,
        )
        rate, audio = wavfile.read(wav_path)
    finally:
        wav_path.unlink(missing_ok=True)

    if audio.ndim > 1:
        audio = audio.mean(axis=1)
    audio = audio.astype(np.float32)
    if np.issubdtype(audio.dtype, np.integer):
        audio /= np.iinfo(audio.dtype).max
    else:
        max_abs = np.max(np.abs(audio)) or 1.0
        if max_abs > 1.5:
            audio /= max_abs

    if rate != SAMPLE_RATE:
        audio = resample_poly(audio, SAMPLE_RATE, rate).astype(np.float32)

    return audio


def render_midi_to_wav(midi_path: Path, wav_path: Path, sample_dir: Path) -> None:
    """把单个 MIDI 渲染为钢琴 WAV。"""

    ticks_per_quarter, tempo_events, notes = parse_midi(midi_path)
    if not notes:
        raise ValueError(f"{midi_path.name} 里没有可渲染的音符")

    tick_to_seconds = build_tick_converter(ticks_per_quarter, tempo_events)
    rendered_notes = []
    total_seconds = 0.0
    for note in notes:
        pitch = min(PIANO_MAX_PITCH, max(PIANO_MIN_PITCH, note.pitch))
        start = tick_to_seconds(note.start_tick)
        end = max(start + 0.05, tick_to_seconds(note.end_tick))
        total_seconds = max(total_seconds, end + DEFAULT_RELEASE_SECONDS)
        rendered_notes.append((pitch, note.velocity, start, end))

    output = np.zeros(int(math.ceil(total_seconds * SAMPLE_RATE)) + SAMPLE_RATE, dtype=np.float32)
    sample_cache: dict[tuple[int, int], np.ndarray] = {}

    for pitch, velocity, start, end in rendered_notes:
        nearest_velocity = min(PIANO_VELOCITIES, key=lambda item: abs(item - velocity))
        cache_key = (pitch, nearest_velocity)
        if cache_key not in sample_cache:
            sample_cache[cache_key] = load_sample(sample_dir, pitch, nearest_velocity)

        sample = sample_cache[cache_key]
        start_index = int(start * SAMPLE_RATE)
        nominal_length = max(1, int((end - start + DEFAULT_RELEASE_SECONDS) * SAMPLE_RATE))
        note_audio = sample[:nominal_length].copy()

        note_duration = max(1, int((end - start) * SAMPLE_RATE))
        release_start = min(note_duration, len(note_audio))
        release_length = len(note_audio) - release_start
        if release_length > 0:
            # 曲线前段衰减慢一些，让尾音更接近自然消亡，不要“咔”一下断掉。
            release_curve = np.linspace(1.0, 0.0, release_length, dtype=np.float32) ** 2.85
            note_audio[release_start:] *= release_curve

        # 速度映射略微压缩动态，避免有些 MIDI 力度突兀。
        velocity_gain = (velocity / 127) ** 0.82
        note_audio *= velocity_gain

        end_index = min(len(output), start_index + len(note_audio))
        if end_index > start_index:
            output[start_index:end_index] += note_audio[: end_index - start_index]

    output = normalize_audio(output)
    wavfile.write(wav_path, SAMPLE_RATE, (output * 32767).astype(np.int16))


def normalize_audio(audio: np.ndarray) -> np.ndarray:
    """做轻量峰值归一化和软削波，防止强音爆掉。"""

    audio = soften_highs(audio)
    audio = np.tanh(audio * MASTER_GAIN)
    peak = float(np.max(np.abs(audio))) or 1.0
    target_peak = 0.92
    if peak > target_peak:
        audio *= target_peak / peak
    return audio.astype(np.float32)


def soften_highs(audio: np.ndarray) -> np.ndarray:
    """用很轻的低通混合降低尖锐音头，保留钢琴主体亮度。"""

    if len(audio) < 5:
        return audio

    kernel = np.array([0.08, 0.18, 0.48, 0.18, 0.08], dtype=np.float32)
    softened = np.convolve(audio, kernel, mode="same").astype(np.float32)
    return (audio * 0.56 + softened * 0.44).astype(np.float32)


def convert_wav_to_m4a(wav_path: Path, m4a_path: Path) -> None:
    """调用 ffmpeg 把 WAV 编码成 AAC M4A。"""

    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-v",
            "error",
            "-i",
            str(wav_path),
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-movflags",
            "+faststart",
            str(m4a_path),
        ],
        check=True,
    )


def render_all(input_dir: Path, output_dir: Path, sample_dir: Path) -> None:
    """批量转换当前目录下的全部 MIDI。"""

    output_dir.mkdir(parents=True, exist_ok=True)
    midi_files = sorted(input_dir.glob("*.mid"))
    if not midi_files:
        raise SystemExit(f"没有找到 MIDI 文件：{input_dir}")

    for midi_path in midi_files:
        m4a_path = output_dir / f"{midi_path.stem}.m4a"
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as temp_file:
            wav_path = Path(temp_file.name)

        try:
            print(f"Rendering {midi_path.name} -> {m4a_path.relative_to(input_dir)}")
            render_midi_to_wav(midi_path, wav_path, sample_dir)
            convert_wav_to_m4a(wav_path, m4a_path)
        finally:
            wav_path.unlink(missing_ok=True)


def main() -> None:
    script_dir = Path(__file__).resolve().parent
    default_sample_dir = script_dir / "site-grand-piano" / "acoustic_grand_piano"

    parser = argparse.ArgumentParser(description="Render local MIDI files to piano-only M4A files.")
    parser.add_argument("--input", type=Path, default=script_dir, help="MIDI 输入目录，默认是脚本所在目录。")
    parser.add_argument("--output", type=Path, default=script_dir / "m4a", help="M4A 输出目录。")
    parser.add_argument("--samples", type=Path, default=default_sample_dir, help="钢琴采样目录。")
    args = parser.parse_args()

    if not args.samples.exists():
        raise SystemExit(f"找不到钢琴采样目录：{args.samples}")

    render_all(args.input.resolve(), args.output.resolve(), args.samples.resolve())


if __name__ == "__main__":
    main()
