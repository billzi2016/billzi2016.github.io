// 站点级交互：中英文切换、深浅色切换、导航高亮，以及统一内容源渲染。
const translations = {
  common: {
    en: {
      navHome: "Home",
      navExperience: "Experience",
      navProjects: "Projects",
      navPublications: "Publications",
      navMusic: "Music",
      citePaper: "Cite this paper",
      copied: "Copied",
      langToggle: "中文",
      themeToggleLight: "Dark",
      themeToggleDark: "Light",
      contactSchoolOne: "Purdue University",
      contactSchoolTwo: "Indiana University",
    },
    zh: {
      navHome: "首页",
      navExperience: "经历",
      navProjects: "项目",
      navPublications: "论文",
      navMusic: "音乐",
      citePaper: "引用这篇论文",
      copied: "已复制",
      langToggle: "EN",
      themeToggleLight: "深色",
      themeToggleDark: "浅色",
      contactSchoolOne: "普渡大学",
      contactSchoolTwo: "印第安纳大学",
    },
  },
  page: {
    home: {
      en: {
        lead:
          "I am a Ph.D. candidate working across large language models, multimodal AI, medical AI, sensing security, and machine learning systems. I am most interested in roles that require both research depth and engineering execution: Research Engineer, Applied Scientist, ML Engineer, and LLM / AI Systems roles.",
        guideTitle: "Site Guide",
        guideExperience:
          "Full CV-style page with research interests, technical skills, industry experience, research experience, and education.",
        guideProjects:
          "Ranked GitHub repository index, from the most job-relevant AI / systems work to the full repository archive.",
        guidePublications:
          "Representative publications first, followed by the complete publication list formatted for reading.",
        guideMusic:
          "A local classical MIDI room with shuffled playback, lightweight controls, and a small listening queue.",
        guideFocus: "Current Focus",
        researchTitle: "Research Interests",
        skillsTitle: "Technical Skills",
        highlightsTitle: "Selected Highlights",
      },
      zh: {
        lead:
          "我目前是博士阶段学生，研究方向覆盖大语言模型、多模态 AI、医学 AI、感知安全和机器学习系统。我希望匹配的是同时要求研究深度与工程执行力的岗位，例如 Research Engineer、Applied Scientist、ML Engineer 和 LLM / AI Systems 相关职位。",
        guideTitle: "站点导览",
        guideExperience: "完整在线简历页面，包含研究兴趣、技术技能、工业经历、研究经历和教育背景。",
        guideProjects: "按重要性排序的 GitHub 项目索引，以及完整仓库列表。",
        guidePublications: "先展示代表性论文，再展示完整且可读的论文清单。",
        guideMusic: "本地古典 MIDI 小播放器，支持随机播放、简单控制和轻量播放列表。",
        guideFocus: "当前重点",
        researchTitle: "研究兴趣",
        skillsTitle: "技术技能",
        highlightsTitle: "代表性亮点",
      },
    },
    experience: {
      en: {
        pageTag: "Full CV-style experience page.",
        researchTitle: "Research Interests",
        skillsTitle: "Technical Skills",
        industryTitle: "Industry Experience",
        researchExpTitle: "Research Experience",
        educationTitle: "Education",
      },
      zh: {
        pageTag: "完整在线简历式经历页面。",
        researchTitle: "研究兴趣",
        skillsTitle: "技术技能",
        industryTitle: "工业界经历",
        researchExpTitle: "研究经历",
        educationTitle: "教育背景",
      },
    },
    projects: {
      en: {
        pageTag: "Complete public GitHub repository list, ordered by importance first.",
        rankingTitle: "Repository Ranking",
        rankingNote:
          "The first section is ordered by current relevance to my AI / ML / research-engineering profile. The complete repository index below includes every public repository I was able to read from GitHub.",
        allTitle: "Complete Repository Index",
        allNote:
          "Every public repository visible in the current GitHub readout. This list follows the latest successful read.",
      },
      zh: {
        pageTag: "完整公开 GitHub 仓库列表，前面先按重要性排序。",
        rankingTitle: "项目重要性排序",
        rankingNote:
          "前一部分按照我当前 AI / ML / 研究工程方向的相关性排序。后一部分保留本次成功读取到的全部公开仓库。",
        allTitle: "完整仓库索引",
        allNote: "下面保留本次 GitHub 读取中可见的全部公开仓库，并按读取顺序列出。",
      },
    },
    publications: {
      en: {
        pageTag: "Representative publications first, followed by the complete publication list.",
        selectedTitle: "Selected Publications",
        selectedNote:
          "This section is ordered by representative value for my current profile: first-author work, formally published work, and papers most relevant to AI / ML / LLM / sensing / medical AI roles.",
        archiveTitle: "All Publications",
        archiveNote:
          "The full publication list below is reformatted from the current BibTeX source into a human-readable bibliography.",
        publishedGroupTitle: "Published",
        preprintGroupTitle: "arXiv / Preprint",
        unpublishedGroupTitle: "Unpublished / In Preparation",
      },
      zh: {
        pageTag: "先看代表性论文，后面是完整论文列表。",
        selectedTitle: "代表性论文",
        selectedNote:
          "这里优先按我当前方向的代表性排序：第一作者工作、正式发表论文，以及最贴近 AI / ML / LLM / 感知 / 医学 AI 求职方向的论文。",
        archiveTitle: "完整论文列表",
        archiveNote: "下面的完整论文列表由当前 BibTeX 源文件整理成人类可读格式，不再直接展示原始条目。",
        publishedGroupTitle: "已发表",
        preprintGroupTitle: "arXiv / 预印本",
        unpublishedGroupTitle: "未发表 / 准备中",
      },
    },
    music: {
      en: {
        pageTag: "A small listening room with a local shuffled MIDI playlist.",
        introTitle: "Listening Room",
        playlistTitle: "Playlist",
        playlistNote:
          "All files are stored locally inside this site. Playback defaults to 20% volume and keeps shuffling after each piece finishes.",
        nowPlaying: "Now Playing",
        volumeLabel: "Volume",
        randomLabel: "Shuffle Next",
        prevLabel: "Previous",
        nextLabel: "Next",
      },
      zh: {
        pageTag: "一个使用本地 MIDI 随机播放的小型听音房。",
        introTitle: "听音房",
        playlistTitle: "播放列表",
        playlistNote:
          "所有文件都保存在站点本地。默认音量为 20%，每首结束后会继续随机切换下一首。",
        nowPlaying: "当前播放",
        volumeLabel: "音量",
        randomLabel: "随机下一首",
        prevLabel: "上一首",
        nextLabel: "下一首",
      },
    },
  },
};

const pageTitles = {
  home: { en: "Ziqian Bi | Home", zh: "毕梓仟 | 首页" },
  experience: { en: "Ziqian Bi | Experience", zh: "毕梓仟 | 经历" },
  projects: { en: "Ziqian Bi | Projects", zh: "毕梓仟 | 项目" },
  publications: { en: "Ziqian Bi | Publications", zh: "毕梓仟 | 论文" },
  music: { en: "Ziqian Bi | Music", zh: "毕梓仟 | 音乐" },
};

const root = document.documentElement;
const body = document.body;
const pageKey = body.dataset.page;
const langBtn = document.getElementById("lang-toggle");
const themeBtn = document.getElementById("theme-toggle");
const siteContent = window.siteContent || {};
const musicLibrary = window.musicLibrary || { tracks: [] };
const musicState = {
  currentIndex: Number(localStorage.getItem("site-music-index") || "0"),
  volume: Number(localStorage.getItem("site-midi-volume") || "0.2"),
  trackGain: 1,
  audioChainReady: false,
  widgetOpen: false,
  widgetInitialized: false,
};
const localGrandPianoSoundfont = "./assets/soundfonts/site-grand-piano";
const selectedPublicationKeys = [
  "bi2025physical",
  "bi2026exploring",
  "bi2025generalbench",
  "xu2023mmlock",
  "bi2025subspace",
  "niu2024large",
  "liang2026comprehensive",
  "korada2025temporal",
  "pan2025cd9",
  "huang2025use",
  "singha2024securing",
  "wang2026predicting",
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalizeAuthorName(author) {
  const cleaned = String(author).trim();
  if (!cleaned || cleaned.toLowerCase() === "others") return "";
  if (!cleaned.includes(",")) return cleaned;

  const parts = cleaned.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return cleaned;
  return `${parts.slice(1).join(" ")} ${parts[0]}`.trim();
}

function getLangValue(item, lang, baseName) {
  if (!item) return "";
  if (!baseName) return item[lang] || "";
  if (item[baseName] && typeof item[baseName] === "object") {
    return item[baseName][lang] || "";
  }
  const suffix = lang === "zh" ? "Zh" : "En";
  return item[`${baseName}${suffix}`] || item[baseName] || "";
}

function buildSkillBlocks(lang) {
  const shared = siteContent.shared || {};
  const skillData = shared.skills || { left: [], right: [] };

  const renderColumn = (items) =>
    items
      .map(
        (item) => `
          <div><span class="skill-label">${escapeHtml(getLangValue(item, lang, "label"))}:</span> ${escapeHtml(
            getLangValue(item, lang, "value"),
          )}</div>
        `,
      )
      .join("");

  return `
    <div class="two-column">
      <div class="skill-block">${renderColumn(skillData.left || [])}</div>
      <div class="skill-block">${renderColumn(skillData.right || [])}</div>
    </div>
  `;
}

function buildEntries(entries, lang) {
  return entries
    .map((entry) => {
      const bullets = (entry.bullets || [])
        .map((bullet) => `<li>${escapeHtml(getLangValue(bullet, lang, ""))}</li>`)
        .join("");
      const note = getLangValue(entry, lang, "note");
      return `
        <div class="entry">
          <div class="entry-heading">
            <h3 class="entry-title">${escapeHtml(getLangValue(entry, lang, "title"))}</h3>
            <div class="entry-meta">${escapeHtml(entry.meta || "")}</div>
          </div>
          <div class="entry-role">${escapeHtml(getLangValue(entry, lang, "role"))}</div>
          ${bullets ? `<ul>${bullets}</ul>` : ""}
          ${note ? `<div class="item-note">${escapeHtml(note)}</div>` : ""}
        </div>
      `;
    })
    .join("");
}

function formatProjectLanguage(language, lang) {
  if (language === "none") {
    return lang === "zh" ? "未标注主要语言" : "No primary language listed";
  }
  return language || "";
}

function buildProjectList(items, lang, showUpdated) {
  return items
    .map((item) => {
      const language = formatProjectLanguage(item.language, lang);
      const meta = showUpdated && item.updated
        ? `${language} · ${lang === "zh" ? "更新于" : "updated"} ${item.updated}`
        : language;
      const note = getLangValue(item, lang, "note");
      return `
        <li>
          <div class="repo-line"><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(
            item.name,
          )}</a> <span class="inline-meta">${escapeHtml(meta)}</span></div>
          ${note ? `<div class="item-note">${escapeHtml(note)}</div>` : ""}
        </li>
      `;
    })
    .join("");
}

function renderHome(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const shared = siteContent.shared || {};
  const home = siteContent.home || {};
  const focusItems = (home.focus || [])
    .map((item) => `<li>${escapeHtml(getLangValue(item, lang, ""))}</li>`)
    .join("");
  const highlightItems = (home.highlights || [])
    .map((item) => `<li>${escapeHtml(getLangValue(item, lang, ""))}</li>`)
    .join("");

  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].guideTitle)}</h2>
      <div class="home-grid">
        <div class="home-panel">
          <h3><a href="./experience.html">${escapeHtml(translations.common[lang].navExperience)}</a></h3>
          <p>${escapeHtml(translations.page.home[lang].guideExperience)}</p>
        </div>
        <div class="home-panel">
          <h3><a href="./projects.html">${escapeHtml(translations.common[lang].navProjects)}</a></h3>
          <p>${escapeHtml(translations.page.home[lang].guideProjects)}</p>
        </div>
        <div class="home-panel">
          <h3><a href="./publications.html">${escapeHtml(translations.common[lang].navPublications)}</a></h3>
          <p>${escapeHtml(translations.page.home[lang].guidePublications)}</p>
        </div>
        <div class="home-panel">
          <h3>${escapeHtml(translations.page.home[lang].guideFocus)}</h3>
          <ul class="plain-list">${focusItems}</ul>
        </div>
      </div>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].researchTitle)}</h2>
      <p>${escapeHtml(getLangValue(shared, lang, "researchInterests"))}</p>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].skillsTitle)}</h2>
      ${buildSkillBlocks(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].highlightsTitle)}</h2>
      <ul class="plain-list">${highlightItems}</ul>
    </section>
  `;
}

function renderExperience(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const shared = siteContent.shared || {};
  const page = siteContent.experience || {};
  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].researchTitle)}</h2>
      <p>${escapeHtml(getLangValue(shared, lang, "researchInterests"))}</p>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].skillsTitle)}</h2>
      ${buildSkillBlocks(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].industryTitle)}</h2>
      ${buildEntries(page.industry || [], lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].researchExpTitle)}</h2>
      ${buildEntries(page.research || [], lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.experience[lang].educationTitle)}</h2>
      ${buildEntries(page.education || [], lang)}
    </section>
  `;
}

function renderProjects(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const projects = siteContent.projects || {};
  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.projects[lang].rankingTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.projects[lang].rankingNote)}</p>
      <ol class="repo-list">${buildProjectList(projects.ranked || [], lang, true)}</ol>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.projects[lang].allTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.projects[lang].allNote)}</p>
      <ol class="repo-list">${buildProjectList(projects.all || [], lang, false)}</ol>
    </section>
  `;
}

function getMusicTrackLabel(track, lang) {
  return lang === "zh" ? track.titleZh || track.titleEn : track.titleEn;
}

function getMusicComposerLabel(track, lang) {
  return lang === "zh" ? track.composerZh || track.composerEn : track.composerEn;
}

function getActiveMidiPlayer() {
  return document.getElementById("floating-midi-player") || document.getElementById("midi-player");
}

function setMidiVolume(level) {
  musicState.volume = Math.min(1, Math.max(0, level));
  localStorage.setItem("site-midi-volume", String(musicState.volume));

  updateMidiOutputLevel();
}

function updateMidiOutputLevel() {
  const finalLevel = Math.min(1.1, Math.max(0, musicState.volume * musicState.trackGain));

  if (musicState.outputGainNode) {
    musicState.outputGainNode.gain.value = finalLevel;
    return;
  }

  if (!window.Tone || !window.Tone.Destination || !window.Tone.Destination.volume) return;

  if (finalLevel <= 0) {
    window.Tone.Destination.volume.value = -60;
    return;
  }

  window.Tone.Destination.volume.value = 20 * Math.log10(finalLevel);
}

function ensureMidiAudioChain() {
  if (musicState.audioChainReady || !window.Tone) return;

  const rawContext = window.Tone.getContext?.().rawContext || window.Tone.context?.rawContext;
  const destinationOutput = window.Tone.Destination?.output;
  if (!rawContext || !destinationOutput || typeof destinationOutput.connect !== "function") {
    musicState.audioChainReady = true;
    return;
  }

  try {
    const compressor = rawContext.createDynamicsCompressor();
    compressor.threshold.value = -26;
    compressor.knee.value = 18;
    compressor.ratio.value = 3.2;
    compressor.attack.value = 0.01;
    compressor.release.value = 0.22;

    const outputGain = rawContext.createGain();
    outputGain.gain.value = musicState.volume;

    destinationOutput.disconnect();
    destinationOutput.connect(compressor);
    compressor.connect(outputGain);
    outputGain.connect(rawContext.destination);

    musicState.outputGainNode = outputGain;
  } catch (error) {
    console.warn("Failed to install MIDI compressor chain.", error);
  }

  musicState.audioChainReady = true;
}

function estimateTrackGain(noteSequence) {
  const notes = noteSequence && Array.isArray(noteSequence.notes) ? noteSequence.notes : [];
  if (!notes.length) return 1;

  const totalTime =
    Number(noteSequence.totalTime) ||
    notes.reduce((max, note) => Math.max(max, Number(note.endTime) || 0), 0) ||
    1;

  const totalDuration = notes.reduce(
    (sum, note) => sum + Math.max(0, (Number(note.endTime) || 0) - (Number(note.startTime) || 0)),
    0,
  );
  const velocityEnergy =
    notes.reduce((sum, note) => {
      const velocity = Number(note.velocity) || 80;
      const normalized = velocity / 127;
      return sum + normalized * normalized;
    }, 0) / notes.length;

  const averagePolyphony = totalDuration / Math.max(totalTime, 0.25);
  const noteDensity = notes.length / Math.max(totalTime, 0.25);
  const loudnessScore =
    Math.sqrt(velocityEnergy) * (0.78 + averagePolyphony * 0.22) * (0.82 + noteDensity * 0.015);

  return Math.min(1.35, Math.max(0.72, 0.94 / Math.max(loudnessScore, 0.18)));
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

  document.querySelectorAll(".playlist-item").forEach((button, index) => {
    button.classList.toggle("is-active", index === musicState.currentIndex);
    button.setAttribute("aria-pressed", index === musicState.currentIndex ? "true" : "false");
  });
}

function switchMusicTrack(index, autoplay) {
  const tracks = musicLibrary.tracks || [];
  const player = getActiveMidiPlayer();
  if (!player || !tracks[index]) return;

  musicState.currentIndex = index;
  localStorage.setItem("site-music-index", String(index));

  const nextSrc = tracks[index].file;
  const startPlayback = () => {
    if (autoplay) {
      player.start().catch?.(() => {});
    }
  };

  player.stop();
  player.src = nextSrc;
  player.reload();
  player.addEventListener("load", startPlayback, { once: true });

  const lang = localStorage.getItem("site-lang") || "en";
  updateMusicPanel(lang);
}

function ensureFloatingMusicWidget() {
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
        <div class="music-volume-row">
          <label id="music-volume-label" class="music-volume-label" for="music-volume">Volume</label>
          <input id="music-volume" class="music-volume" type="range" min="0" max="100" step="1" value="20" />
          <span id="music-volume-value" class="music-volume-value">20%</span>
        </div>
        <ol id="music-mini-playlist" class="playlist-list music-mini-playlist"></ol>
      </div>
      <midi-player id="floating-midi-player" class="music-core-player"></midi-player>
    </div>
  `;
  document.body.appendChild(widget);
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

  const isPlaying = Boolean(player && player.playing);
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
  const widget = ensureFloatingMusicWidget();
  if (!widget) return;

  const title = document.getElementById("music-widget-title");
  const nowPlaying = document.getElementById("music-widget-nowplaying-label");
  const volumeLabel = document.getElementById("music-volume-label");
  const randomButton = document.getElementById("music-random");

  if (title) title.textContent = translations.common[lang].navMusic;
  if (nowPlaying) nowPlaying.textContent = translations.page.music[lang].nowPlaying;
  if (volumeLabel) volumeLabel.textContent = translations.page.music[lang].volumeLabel;
  if (randomButton) randomButton.textContent = translations.page.music[lang].randomLabel;

  renderFloatingPlaylist(lang);
  updateMusicPanel(lang);
  updateMusicPlayButton(lang);
}

function initFloatingMusicWidget() {
  if (musicState.widgetInitialized) return;

  const widget = ensureFloatingMusicWidget();
  const tracks = musicLibrary.tracks || [];
  if (!widget || !tracks.length) return;

  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  const player = document.getElementById("floating-midi-player");
  const playToggle = document.getElementById("music-play-toggle");
  const randomBtn = document.getElementById("music-random");
  const volumeSlider = document.getElementById("music-volume");

  ensureMidiAudioChain();
  // 统一切到本地钢琴音源，避免默认电子合成器音色过重。
  player.soundFont = localGrandPianoSoundfont;
  player.src = tracks[musicState.currentIndex].file;
  player.reload();
  setMidiVolume(musicState.volume);
  setMusicWidgetOpen(true);

  playToggle?.addEventListener("click", () => {
    if (player.playing) player.stop();
    else player.start().catch?.(() => {});
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

  player.addEventListener("load", () => {
    musicState.trackGain = estimateTrackGain(player.noteSequence);
    updateMidiOutputLevel();
    updateMusicPanel(localStorage.getItem("site-lang") || "en");
  });

  player.addEventListener("start", () => {
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
  });

  player.addEventListener("stop", (event) => {
    updateMusicPlayButton(localStorage.getItem("site-lang") || "en");
    if (event.detail && event.detail.finished) {
      switchMusicTrack(pickRandomTrackIndex(), true);
    }
  });

  musicState.widgetInitialized = true;
}

function bindMusicPage(lang) {
  const tracks = musicLibrary.tracks || [];
  if (!tracks.length) return;

  if (!Number.isFinite(musicState.currentIndex) || musicState.currentIndex >= tracks.length) {
    musicState.currentIndex = 0;
  }

  const player = document.getElementById("midi-player");
  if (!player) return;

  ensureMidiAudioChain();
  player.soundFont = null;
  player.src = tracks[musicState.currentIndex].file;
  player.reload();
  setMidiVolume(musicState.volume);
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

  player.addEventListener("stop", (event) => {
    if (event.detail && event.detail.finished) {
      switchMusicTrack(pickRandomTrackIndex(), true);
    }
  });

  player.addEventListener("load", () => {
    musicState.trackGain = estimateTrackGain(player.noteSequence);
    updateMidiOutputLevel();
  });
}

function renderMusic(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;

  const tracks = musicLibrary.tracks || [];
  const playlist = tracks
    .map(
      (track, index) => `
        <li>
          <button class="playlist-item" type="button" data-index="${index}">
            <span class="playlist-title">${escapeHtml(getMusicTrackLabel(track, lang))}</span>
            <span class="playlist-meta">${escapeHtml(getMusicComposerLabel(track, lang))}</span>
          </button>
        </li>
      `,
    )
    .join("");

  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.music[lang].introTitle)}</h2>
      <p class="section-note">${escapeHtml(
        lang === "zh" ? musicLibrary.introZh || "" : musicLibrary.introEn || "",
      )}</p>
      <div class="music-layout">
        <div class="music-stage">
          <div class="music-nowplaying">
            <div class="music-label">${escapeHtml(translations.page.music[lang].nowPlaying)}</div>
            <div id="music-current-title" class="music-current-title"></div>
            <div id="music-current-meta" class="music-current-meta"></div>
          </div>
          <div class="music-player-wrap">
            <midi-player id="midi-player"></midi-player>
            <midi-visualizer id="midi-visualizer" type="piano-roll"></midi-visualizer>
          </div>
          <div class="music-controls">
            <button id="music-prev" class="pub-copy-btn" type="button">${escapeHtml(
              translations.page.music[lang].prevLabel,
            )}</button>
            <button id="music-random" class="pub-copy-btn" type="button">${escapeHtml(
              translations.page.music[lang].randomLabel,
            )}</button>
            <button id="music-next" class="pub-copy-btn" type="button">${escapeHtml(
              translations.page.music[lang].nextLabel,
            )}</button>
          </div>
          <div class="music-volume-row">
            <label class="music-volume-label" for="music-volume">${escapeHtml(
              translations.page.music[lang].volumeLabel,
            )}</label>
            <input id="music-volume" class="music-volume" type="range" min="0" max="100" step="1" value="20" />
            <span id="music-volume-value" class="music-volume-value">20%</span>
          </div>
        </div>
        <div class="music-playlist">
          <h3 class="pub-group-title">${escapeHtml(translations.page.music[lang].playlistTitle)}</h3>
          <p class="section-note">${escapeHtml(translations.page.music[lang].playlistNote)}</p>
          <ol class="playlist-list">${playlist}</ol>
        </div>
      </div>
    </section>
  `;

  bindMusicPage(lang);
}

function formatPublicationAuthors(authors) {
  if (!authors || authors.length === 0) return "";

  const normalizedAuthors = authors
    .map(normalizeAuthorName)
    .filter(Boolean);

  if (normalizedAuthors.length === 0) return "";

  const highlight = (author) =>
    author === "Ziqian Bi"
      ? `<span class="pub-highlight">${escapeHtml(author)}</span>`
      : escapeHtml(author);

  if (normalizedAuthors.length < 3) {
    return normalizedAuthors.map(highlight).join(", ");
  }

  const firstTwoAuthors = normalizedAuthors.slice(0, 2);
  const firstTwo = firstTwoAuthors.map(highlight).join(", ");

  if (firstTwoAuthors.includes("Ziqian Bi")) {
    return `${firstTwo}, et al.`;
  }

  return `${firstTwo}, et al., <span class="pub-highlight">Ziqian Bi</span>, et al.`;
}

function formatVenueAndYear(item, lang) {
  const venue = getLangValue(item, lang, "venue");
  if (venue && item.year) return `${escapeHtml(venue)}, ${escapeHtml(item.year)}.`;
  if (venue) return `${escapeHtml(venue)}.`;
  if (item.year) return `${escapeHtml(item.year)}.`;
  return "";
}

function getPublicationTitle(item, lang) {
  if (lang === "zh" && window.publicationTitleTranslations) {
    return window.publicationTitleTranslations[item.title] || item.title || "";
  }
  return item.title || "";
}

function getAuthorRank(item) {
  const normalizedAuthors = (item.authors || [])
    .map(normalizeAuthorName)
    .filter(Boolean);
  const index = normalizedAuthors.indexOf("Ziqian Bi");
  return index === -1 ? 999 : index;
}

function getPublicationBucket(item) {
  const venue = (item.venue || "").toLowerCase();
  if (venue.includes("arxiv")) return "preprint";
  if (venue) return "published";
  return "unpublished";
}

function comparePublications(a, b) {
  const rankDiff = getAuthorRank(a) - getAuthorRank(b);
  if (rankDiff !== 0) return rankDiff;

  const yearA = Number(a.year) || 0;
  const yearB = Number(b.year) || 0;
  if (yearA !== yearB) return yearB - yearA;

  return (a.title || "").localeCompare(b.title || "");
}

function buildPublicationItem(item, lang) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="pub-item">
      <div class="pub-main">
        <div class="pub-line">
          <span class="pub-authors">${formatPublicationAuthors(item.authors)}</span>.
          <em>${escapeHtml(getPublicationTitle(item, lang))}</em>.
          ${formatVenueAndYear(item, lang)}
        </div>
      </div>
      <div class="pub-copy">
        <button class="pub-copy-btn" type="button" data-bibtex="${escapeHtml(item.bibtex)}">
          ${escapeHtml(translations.common[lang].citePaper)}
        </button>
      </div>
    </div>
  `;
  return li;
}

function bindCopyButtons(lang) {
  document.querySelectorAll(".pub-copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const bibtex = button.getAttribute("data-bibtex");
      if (!bibtex) return;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(bibtex);
        } else {
          const helper = document.createElement("textarea");
          helper.value = bibtex;
          helper.setAttribute("readonly", "readonly");
          helper.style.position = "fixed";
          helper.style.opacity = "0";
          document.body.appendChild(helper);
          helper.select();
          document.execCommand("copy");
          helper.remove();
        }
        button.textContent = translations.common[lang].copied;
        button.classList.add("is-copied");
        window.setTimeout(() => {
          const currentLang = localStorage.getItem("site-lang") || "en";
          button.textContent = translations.common[currentLang].citePaper;
          button.classList.remove("is-copied");
        }, 1400);
      } catch (error) {
        console.error("Failed to copy BibTeX.", error);
      }
    });
  });
}

function renderPublications(lang) {
  if (pageKey !== "publications" || !window.publicationsData) return;

  const selectedHost = document.getElementById("selected-publications");
  const publishedHost = document.getElementById("published-publications");
  const preprintHost = document.getElementById("preprint-publications");
  const unpublishedHost = document.getElementById("unpublished-publications");
  if (!selectedHost || !publishedHost || !preprintHost || !unpublishedHost) return;

  selectedHost.innerHTML = "";
  publishedHost.innerHTML = "";
  preprintHost.innerHTML = "";
  unpublishedHost.innerHTML = "";

  const byKey = new Map(window.publicationsData.map((item) => [item.key, item]));
  selectedPublicationKeys.forEach((key) => {
    const item = byKey.get(key);
    if (item) selectedHost.appendChild(buildPublicationItem(item, lang));
  });

  const published = [];
  const preprint = [];
  const unpublished = [];

  window.publicationsData.forEach((item) => {
    const bucket = getPublicationBucket(item);
    if (bucket === "published") published.push(item);
    else if (bucket === "preprint") preprint.push(item);
    else unpublished.push(item);
  });

  published.sort(comparePublications);
  preprint.sort(comparePublications);
  unpublished.sort(comparePublications);

  published.forEach((item) => publishedHost.appendChild(buildPublicationItem(item, lang)));
  preprint.forEach((item) => preprintHost.appendChild(buildPublicationItem(item, lang)));
  unpublished.forEach((item) => unpublishedHost.appendChild(buildPublicationItem(item, lang)));

  bindCopyButtons(lang);
}

function renderPageContent(lang) {
  if (pageKey === "home") renderHome(lang);
  if (pageKey === "experience") renderExperience(lang);
  if (pageKey === "projects") renderProjects(lang);
  if (pageKey === "publications") renderPublications(lang);
}

function syncNavState() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const active = link.dataset.page === pageKey;
    link.classList.toggle("is-active", active);
    link.setAttribute("aria-current", active ? "page" : "false");
  });
}

function applyTheme(theme) {
  const dark = theme === "dark";
  body.classList.toggle("dark-theme", dark);
  localStorage.setItem("site-theme", dark ? "dark" : "light");
  const lang = localStorage.getItem("site-lang") || "en";
  if (themeBtn) {
    themeBtn.textContent = dark
      ? translations.common[lang].themeToggleDark
      : translations.common[lang].themeToggleLight;
  }
  if (window.SiteBackgrounds) {
    window.SiteBackgrounds.syncBackgrounds();
  }
}

function applyLanguage(lang) {
  localStorage.setItem("site-lang", lang);
  root.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const common = translations.common[lang][key];
    const page = translations.page[pageKey] && translations.page[pageKey][lang][key];
    const value = page || common;
    if (value) node.textContent = value;
  });

  if (pageTitles[pageKey]) {
    document.title = pageTitles[pageKey][lang];
  }

  if (langBtn) {
    langBtn.textContent = translations.common[lang].langToggle;
  }

  const dark = body.classList.contains("dark-theme");
  if (themeBtn) {
    themeBtn.textContent = dark
      ? translations.common[lang].themeToggleDark
      : translations.common[lang].themeToggleLight;
  }

  renderPageContent(lang);
  updateFloatingMusicWidget(lang);
}

if (langBtn) {
  langBtn.addEventListener("click", () => {
    const current = localStorage.getItem("site-lang") || "en";
    applyLanguage(current === "en" ? "zh" : "en");
  });
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = localStorage.getItem("site-theme") || "light";
    applyTheme(current === "light" ? "dark" : "light");
  });
}

syncNavState();
initFloatingMusicWidget();
applyTheme(localStorage.getItem("site-theme") || "light");
applyLanguage(localStorage.getItem("site-lang") || "en");
