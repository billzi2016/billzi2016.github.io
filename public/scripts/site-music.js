const musicState = {
  currentIndex: Number(localStorage.getItem("site-music-index") || "0"),
  volume: Number(localStorage.getItem("site-midi-volume") || "0.2"),
  widgetOpen: false,
  widgetInitialized: false,
  restoreTime: 0,
  shouldResume: false,
  saveTimer: null,
};
const musicPlaybackStorageKey = "site-music-playback";

function getMusicTrackLabel(track, lang) {
  return lang === "zh" ? track.titleZh || track.titleEn : track.titleEn;
}

function getMusicComposerLabel(track, lang) {
  return lang === "zh" ? track.composerZh || track.composerEn : track.composerEn;
}

function getActiveMidiPlayer() {
  return document.getElementById("site-audio-player");
}

function shouldDisableMusicWidget() {
  return mobileMediaQuery.matches || pageKey === "music";
}

function parkPersistentAudioPlayer({ hide = true } = {}) {
  const player = getActiveMidiPlayer();
  if (!player) return null;

  if (hide) player.style.display = "none";
  if (player.parentElement !== document.body) {
    document.body.appendChild(player);
  }
  return player;
}

function destroyFloatingMusicWidget() {
  const widget = document.getElementById("music-widget");
  parkPersistentAudioPlayer();
  if (musicState.saveTimer) {
    window.clearInterval(musicState.saveTimer);
    musicState.saveTimer = null;
  }
  if (widget) {
    widget.remove();
  }

  musicState.widgetInitialized = false;
  musicState.widgetOpen = false;
}

function ensurePersistentAudioPlayer() {
  let player = getActiveMidiPlayer();
  if (player) return player;

  player = document.createElement("audio");
  player.id = "site-audio-player";
  player.preload = "auto";
  player.style.display = "none";
  document.body.appendChild(player);
  return player;
}

function placePersistentAudioPlayer(target, className, controls) {
  const player = ensurePersistentAudioPlayer();
  player.className = className;
  player.controls = controls;
  player.style.display = controls ? "" : "none";
  if (player.parentElement !== target) {
    target.appendChild(player);
  }
  return player;
}

function bindPersistentPlayerEvents(player) {
  if (!player || player.dataset.musicEventsBound === "true") return;

  player.addEventListener("loadedmetadata", () => {
    restoreMusicPlaybackOnMetadata(player);
  });
  player.addEventListener("timeupdate", updateMusicProgress);
  player.addEventListener("durationchange", updateMusicProgress);

  player.addEventListener("play", () => {
    if (musicState.saveTimer) window.clearInterval(musicState.saveTimer);
    musicState.saveTimer = window.setInterval(saveMusicPlaybackState, 1000);
    saveMusicPlaybackState();
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
  });

  player.addEventListener("pause", () => {
    if (musicState.saveTimer) {
      window.clearInterval(musicState.saveTimer);
      musicState.saveTimer = null;
    }
    saveMusicPlaybackState();
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
  });

  player.addEventListener("ended", () => {
    saveMusicPlaybackState();
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
    switchMusicTrack(pickRandomTrackIndex(), true);
  });

  player.dataset.musicEventsBound = "true";
}

function readSavedMusicPlayback() {
  try {
    const raw = sessionStorage.getItem(musicPlaybackStorageKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("Failed to read saved music playback state.", error);
    return null;
  }
}

function saveMusicPlaybackState() {
  const player = getActiveMidiPlayer();
  if (!player) return;

  const payload = {
    index: musicState.currentIndex,
    time: Number(player.currentTime || 0),
    playing: Boolean(!player.paused),
    volume: musicState.volume,
    savedAt: Date.now(),
  };

  try {
    sessionStorage.setItem(musicPlaybackStorageKey, JSON.stringify(payload));
  } catch (error) {
    console.warn("Failed to save music playback state.", error);
  }
}

function applySavedMusicPlayback() {
  const saved = readSavedMusicPlayback();
  if (!saved) return;

  if (Number.isFinite(saved.index)) {
    musicState.currentIndex = Math.max(0, Number(saved.index));
  }
  if (Number.isFinite(saved.volume)) {
    musicState.volume = Math.min(1, Math.max(0, Number(saved.volume)));
  }

  musicState.restoreTime = Number(saved.time) || 0;
  musicState.shouldResume = Boolean(saved.playing);
}

function restoreMusicPlaybackOnMetadata(player, { resume = true } = {}) {
  updateMidiOutputLevel();
  if (musicState.restoreTime > 0) {
    player.currentTime = musicState.restoreTime;
    musicState.restoreTime = 0;
  }
  if (resume && musicState.shouldResume) {
    player.play().catch?.(() => {});
    musicState.shouldResume = false;
  }
  updateMusicPanel(localStorage.getItem("site-lang") || "en");
  updateMusicProgress();
}

function setMidiVolume(level) {
  musicState.volume = Math.min(1, Math.max(0, level));
  localStorage.setItem("site-midi-volume", String(musicState.volume));

  updateMidiOutputLevel();
}

function updateMidiOutputLevel() {
  const finalLevel = Math.min(1, Math.max(0, musicState.volume));
  const player = getActiveMidiPlayer();

  if (player && "volume" in player) {
    player.volume = finalLevel;
  }
}

function formatMusicTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateMusicProgress() {
  const player = getActiveMidiPlayer();
  const progress = document.getElementById("music-progress");
  const elapsed = document.getElementById("music-progress-elapsed");
  const duration = document.getElementById("music-progress-duration");

  if (!player || !progress) return;

  const trackDuration = Number.isFinite(player.duration) ? player.duration : 0;
  const currentTime = Number.isFinite(player.currentTime) ? player.currentTime : 0;
  progress.max = trackDuration > 0 ? String(Math.floor(trackDuration)) : "0";
  progress.value = trackDuration > 0 ? String(Math.min(Math.floor(currentTime), Math.floor(trackDuration))) : "0";

  if (elapsed) elapsed.textContent = formatMusicTime(currentTime);
  if (duration) duration.textContent = formatMusicTime(trackDuration);
}

function bindMusicProgressControls() {
  const progress = document.getElementById("music-progress");
  const player = getActiveMidiPlayer();
  if (!progress || !player || progress.dataset.bound === "true") return;

  progress.addEventListener("input", (event) => {
    const nextTime = Number(event.target.value || "0");
    if (Number.isFinite(nextTime)) {
      player.currentTime = nextTime;
      updateMusicProgress();
      saveMusicPlaybackState();
    }
  });

  progress.dataset.bound = "true";
  updateMusicProgress();
}

function pickRandomTrackIndex() {
  const tracks = musicLibrary.tracks || [];
  if (tracks.length <= 1) return 0;

  let nextIndex = musicState.currentIndex;
  while (nextIndex === musicState.currentIndex) {
    nextIndex = Math.floor(Math.random() * tracks.length);
  }
  return nextIndex;
}

function updateMusicPanel(lang) {
  const tracks = musicLibrary.tracks || [];
  const current = tracks[musicState.currentIndex];
  if (!current) return;

  const titleHost = document.getElementById("music-current-title");
  const metaHost = document.getElementById("music-current-meta");
  const slider = document.getElementById("music-volume");
  const volumeValue = document.getElementById("music-volume-value");

  if (titleHost) titleHost.textContent = getMusicTrackLabel(current, lang);
  if (metaHost) metaHost.textContent = getMusicComposerLabel(current, lang);
  if (slider) slider.value = String(Math.round(musicState.volume * 100));
  if (volumeValue) volumeValue.textContent = `${Math.round(musicState.volume * 100)}%`;
  updateMusicProgress();

  document.querySelectorAll(".playlist-item").forEach((button, index) => {
    button.classList.toggle("is-active", index === musicState.currentIndex);
    button.setAttribute("aria-pressed", index === musicState.currentIndex ? "true" : "false");
  });
}

function switchMusicTrack(index, autoplay) {
  const tracks = musicLibrary.tracks || [];
  const player = getActiveMidiPlayer();
  if (!player || !tracks[index]) return;

  const nextSrc = tracks[index].file;
  const isSameTrack = index === musicState.currentIndex && player.getAttribute("src") === nextSrc;
  if (isSameTrack) {
    if (autoplay) player.play().catch?.(() => {});
    return;
  }

  musicState.currentIndex = index;
  musicState.restoreTime = 0;
  musicState.shouldResume = false;
  localStorage.setItem("site-music-index", String(index));

  const startPlayback = () => {
    player.currentTime = 0;
    updateMusicProgress();
    if (autoplay) {
      player.play().catch?.(() => {});
    }
  };

  player.pause();
  player.src = nextSrc;
  player.load();
  player.addEventListener(
    "loadedmetadata",
    () => {
      musicState.restoreTime = 0;
      musicState.shouldResume = false;
      startPlayback();
    },
    { once: true },
  );

  const lang = localStorage.getItem("site-lang") || "en";
  updateMusicPanel(lang);
  saveMusicPlaybackState();
}

function ensureFloatingMusicWidget() {
  if (shouldDisableMusicWidget()) return null;
  if (!musicLibrary.tracks || musicLibrary.tracks.length === 0) return null;

  let widget = document.getElementById("music-widget");
  if (widget) return widget;

  widget = document.createElement("aside");
  widget.id = "music-widget";
  widget.className = "music-widget";
  widget.innerHTML = `
    <div class="music-widget-panel">
      <div class="music-widget-head">
        <div id="music-widget-title" class="music-widget-title">Music</div>
      </div>
      <div class="music-widget-body">
        <div id="music-widget-nowplaying-label" class="music-label">Now Playing</div>
        <div id="music-current-title" class="music-current-title"></div>
        <div id="music-current-meta" class="music-current-meta"></div>
        <div class="music-mini-controls">
          <button id="music-play-toggle" class="pub-copy-btn" type="button">Play</button>
          <button id="music-random" class="pub-copy-btn" type="button">Shuffle Next</button>
        </div>
        <div class="music-progress-row">
          <span id="music-progress-elapsed" class="music-progress-time music-progress-elapsed">0:00</span>
          <input id="music-progress" class="music-progress" type="range" min="0" max="0" step="1" value="0" aria-label="Playback progress" />
          <span id="music-progress-duration" class="music-progress-time">0:00</span>
        </div>
        <div class="music-volume-row">
          <label id="music-volume-label" class="music-volume-label" for="music-volume">Volume</label>
          <input id="music-volume" class="music-volume" type="range" min="0" max="100" step="1" value="20" />
          <span id="music-volume-value" class="music-volume-value">20%</span>
        </div>
        <ol id="music-mini-playlist" class="playlist-list music-mini-playlist"></ol>
        <p id="music-source-note" class="music-source-note"></p>
      </div>
    </div>
  `;
  document.body.appendChild(widget);
  placePersistentAudioPlayer(widget.querySelector(".music-widget-panel"), "music-core-player", false);
  return widget;
}

function setMusicWidgetOpen(open) {
  const widget = document.getElementById("music-widget");
  if (!widget) return;

  musicState.widgetOpen = open;
  widget.classList.toggle("is-collapsed", !open);
}

function updateMusicPlayButton(lang) {
  const button = document.getElementById("music-play-toggle");
  const player = getActiveMidiPlayer();
  if (!button) return;

  const isPlaying = Boolean(player && !player.paused);
  button.textContent = isPlaying
    ? lang === "zh"
      ? "暂停"
      : "Pause"
    : lang === "zh"
      ? "播放"
      : "Play";
}

function renderFloatingPlaylist(lang) {
  const host = document.getElementById("music-mini-playlist");
  if (!host) return;

  host.innerHTML = (musicLibrary.tracks || [])
    .map(
      (track, index) => `
        <li>
          <button class="playlist-item playlist-item-compact" type="button" data-index="${index}">
            <span class="playlist-title">${escapeHtml(getMusicTrackLabel(track, lang))}</span>
            <span class="playlist-meta">${escapeHtml(getMusicComposerLabel(track, lang))}</span>
          </button>
        </li>
      `,
    )
    .join("");
}

function updateFloatingMusicWidget(lang) {
  if (pageKey === "music") {
    destroyFloatingMusicWidget();
    return;
  }

  if (shouldDisableMusicWidget()) {
    destroyFloatingMusicWidget();
    return;
  }

  const widget = ensureFloatingMusicWidget();
  if (!widget) return;

  const title = document.getElementById("music-widget-title");
  const nowPlaying = document.getElementById("music-widget-nowplaying-label");
  const volumeLabel = document.getElementById("music-volume-label");
  const randomButton = document.getElementById("music-random");
  const sourceNote = document.getElementById("music-source-note");

  if (title) title.textContent = translations.common[lang].navMusic;
  if (nowPlaying) nowPlaying.textContent = translations.page.music[lang].nowPlaying;
  if (volumeLabel) volumeLabel.textContent = translations.page.music[lang].volumeLabel;
  if (randomButton) randomButton.textContent = translations.page.music[lang].randomLabel;
  if (sourceNote) {
    sourceNote.textContent =
      lang === "zh" ? musicLibrary.sourceNoteZh || "" : musicLibrary.sourceNoteEn || "";
  }

  renderFloatingPlaylist(lang);
  updateMusicPanel(lang);
  updateMusicPlayButton(lang);
}

function initFloatingMusicWidget() {
  if (shouldDisableMusicWidget()) {
    destroyFloatingMusicWidget();
    return;
  }

  if (musicState.widgetInitialized) return;

  const widget = ensureFloatingMusicWidget();
  const tracks = musicLibrary.tracks || [];
  if (!widget || !tracks.length) return;

  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  applySavedMusicPlayback();
  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  const player = getActiveMidiPlayer();
  const playToggle = document.getElementById("music-play-toggle");
  const randomBtn = document.getElementById("music-random");
  const volumeSlider = document.getElementById("music-volume");

  const nextSrc = tracks[musicState.currentIndex].file;
  if (player.getAttribute("src") !== nextSrc) {
    player.src = nextSrc;
    player.load();
  }
  setMidiVolume(musicState.volume);
  bindPersistentPlayerEvents(player);
  bindMusicProgressControls();
  setMusicWidgetOpen(true);

  playToggle?.addEventListener("click", () => {
    if (player.paused) player.play().catch?.(() => {});
    else player.pause();
  });

  randomBtn?.addEventListener("click", () => {
    switchMusicTrack(pickRandomTrackIndex(), true);
  });

  volumeSlider?.addEventListener("input", (event) => {
    const level = Number(event.target.value || "20") / 100;
    setMidiVolume(level);
    updateMusicPanel(localStorage.getItem("site-lang") || "en");
  });

  widget.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest(".playlist-item-compact");
    if (!(button instanceof HTMLElement)) return;
    const index = Number(button.dataset.index || "0");
    switchMusicTrack(index, true);
  });

  musicState.widgetInitialized = true;
}

function bindMusicPage(lang) {
  const tracks = musicLibrary.tracks || [];
  if (!tracks.length) return;

  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  const placeholder = document.getElementById("audio-player");
  const wrap = placeholder?.parentElement;
  if (!wrap) return;
  const player = placePersistentAudioPlayer(wrap, "music-page-audio", true);
  player.id = "site-audio-player";
  placeholder.remove();

  applySavedMusicPlayback();
  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  const nextSrc = tracks[musicState.currentIndex].file;
  if (player.getAttribute("src") !== nextSrc) {
    player.src = nextSrc;
    player.load();
  }
  setMidiVolume(musicState.volume);
  bindPersistentPlayerEvents(player);
  bindMusicProgressControls();
  updateMusicPanel(lang);

  const prevBtn = document.getElementById("music-prev");
  const nextBtn = document.getElementById("music-next");
  const randomBtn = document.getElementById("music-random");
  const volumeSlider = document.getElementById("music-volume");

  prevBtn?.addEventListener("click", () => {
    const nextIndex =
      musicState.currentIndex === 0 ? tracks.length - 1 : musicState.currentIndex - 1;
    switchMusicTrack(nextIndex, true);
  });

  nextBtn?.addEventListener("click", () => {
    const nextIndex = (musicState.currentIndex + 1) % tracks.length;
    switchMusicTrack(nextIndex, true);
  });

  randomBtn?.addEventListener("click", () => {
    switchMusicTrack(pickRandomTrackIndex(), true);
  });

  volumeSlider?.addEventListener("input", (event) => {
    const level = Number(event.target.value || "20") / 100;
    setMidiVolume(level);
    updateMusicPanel(localStorage.getItem("site-lang") || "en");
  });

  document.querySelectorAll(".playlist-item").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index || "0");
      switchMusicTrack(index, true);
    });
  });

}
