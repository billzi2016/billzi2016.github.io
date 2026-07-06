# Tools

This directory contains repository maintenance scripts.

Files here are source tools, not public website assets. They should not be moved into `public/` unless they are meant to be downloaded by site visitors.

## `render_piano_m4a.py`

Offline utility for rendering local MIDI files into piano-only M4A files.

Default paths:

- input MIDI: `public/assets/midi/`
- output M4A: `public/assets/m4a/`
- piano samples: `public/assets/soundfonts/site-grand-piano/acoustic_grand_piano/`

Requirements:

- Python 3
- `numpy`
- `scipy`
- `ffmpeg`

Example:

```bash
python3 tools/render_piano_m4a.py
```

Override paths when needed:

```bash
python3 tools/render_piano_m4a.py --input public/assets/midi --output public/assets/m4a
```
