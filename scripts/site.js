// 站点级交互：中英文切换、深浅色切换、导航高亮，以及统一内容源渲染。
const translations = window.siteTranslations || {};
const pageTitles = window.sitePageTitles || {};

const root = document.documentElement;
const body = document.body;
const pageKey = body.dataset.page;
const siteContent = window.siteContent || {};
const musicLibrary = window.musicLibrary || { tracks: [] };
const sharedHeaderPath = "./partials/header.html";
const mobileMediaQuery = window.matchMedia("(max-width: 760px), (hover: none) and (pointer: coarse)");
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getLangBtn() {
  return document.getElementById("lang-toggle");
}

function getThemeBtn() {
  return document.getElementById("theme-toggle");
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

function renderProjectImageFigure(image, lang, figureClass = "") {
  const caption = getLangValue(image, lang, "caption") || image.caption || "";
  const className = ["project-image", figureClass].filter(Boolean).join(" ");
  return `
    <figure class="${escapeHtml(className)}">
      <button class="project-image-button" type="button" data-lightbox-src="${escapeHtml(
        image.src,
      )}" data-lightbox-caption="${escapeHtml(caption)}" aria-label="${escapeHtml(caption)}">
        <img src="${escapeHtml(image.src)}" alt="${escapeHtml(caption)}" loading="lazy" />
      </button>
      <figcaption>${escapeHtml(caption)}</figcaption>
    </figure>
  `;
}

function renderProjectImageGrid(images, lang, extraClass = "") {
  if (!images || images.length === 0) return "";
  const countClass = `project-image-grid-count-${Math.min(images.length, 3)}`;
  const fourImageClass = images.length === 4 ? "project-image-grid-four" : "";
  const sixImageClass = images.length === 6 ? "project-image-grid-six" : "";
  const className = ["project-image-grid", countClass, fourImageClass, sixImageClass, extraClass]
    .filter(Boolean)
    .join(" ");
  return `<div class="${escapeHtml(className)}">${images
    .map((image) => renderProjectImageFigure(image, lang))
    .join("")}</div>`;
}

function renderPageContent(lang) {
  if (pageKey === "home") renderHome(lang);
  if (pageKey === "experience") renderExperience(lang);
  if (pageKey === "projects") renderProjects(lang);
  if (pageKey === "publications") renderPublications(lang);
  if (pageKey === "personal") renderPersonal(lang);
  if (pageKey === "music") renderMusic(lang);
}

function syncNavState() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const active = link.dataset.page === pageKey;
    link.classList.toggle("is-active", active);
    link.setAttribute("aria-current", active ? "page" : "false");
  });
}

function bindNavigationPlaybackSave() {
  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.dataset.musicSaveBound === "true") return;
    link.addEventListener("click", () => {
      saveMusicPlaybackState();
    });
    link.dataset.musicSaveBound = "true";
  });
}

function applyTheme(theme) {
  const dark = theme === "dark";
  root.classList.toggle("dark-theme", dark);
  body.classList.toggle("dark-theme", dark);
  localStorage.setItem("site-theme", dark ? "dark" : "light");
  const lang = localStorage.getItem("site-lang") || "en";
  const themeBtn = getThemeBtn();
  if (themeBtn) {
    const label = dark
      ? translations.common[lang].themeToggleDark
      : translations.common[lang].themeToggleLight;
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }
  if (window.SiteBackgrounds) {
    window.SiteBackgrounds.syncBackgrounds();
  }
}

function ensureLanguageSwitchMarkup() {
  const langBtn = getLangBtn();
  if (!langBtn || langBtn.dataset.switchReady === "true") return;
  langBtn.classList.add("language-switch");
  langBtn.innerHTML = `
    <span class="language-switch-option language-switch-option-en">EN</span>
    <span class="language-switch-option language-switch-option-zh">中文</span>
    <span class="language-switch-thumb"></span>
  `;
  langBtn.dataset.switchReady = "true";
}

function applyLanguage(lang) {
  localStorage.setItem("site-lang", lang);
  root.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const common = translations.common[lang][key];
    const page = translations.page[pageKey] && translations.page[pageKey][lang][key];
    const value = page || common;
    if (value && node.dataset.i18nRich === "true") {
      node.innerHTML = value;
    } else if (value) {
      node.textContent = value;
    }
  });

  if (pageTitles[pageKey]) {
    document.title = pageTitles[pageKey][lang];
  }

  const langBtn = getLangBtn();
  if (langBtn) {
    ensureLanguageSwitchMarkup();
    langBtn.dataset.lang = lang;
    langBtn.setAttribute("aria-label", translations.common[lang].langToggle);
    langBtn.setAttribute("title", translations.common[lang].langToggle);
  }

  const dark = body.classList.contains("dark-theme");
  const themeBtn = getThemeBtn();
  if (themeBtn) {
    const label = dark
      ? translations.common[lang].themeToggleDark
      : translations.common[lang].themeToggleLight;
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }

  renderPageContent(lang);
  updateFloatingMusicWidget(lang);
  updateSiteSearchLanguage(lang);
}

// 页头改成通过 partial 动态加载后，按钮绑定需要在插入 DOM 之后再做。
function bindHeaderControls() {
  const langBtn = getLangBtn();
  const themeBtn = getThemeBtn();

  if (langBtn && langBtn.dataset.bound !== "true") {
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem("site-lang") || "en";
      applyLanguage(current === "en" ? "zh" : "en");
    });
    langBtn.dataset.bound = "true";
  }

  if (themeBtn && themeBtn.dataset.bound !== "true") {
    themeBtn.addEventListener("click", () => {
      const current = localStorage.getItem("site-theme") || "light";
      applyTheme(current === "light" ? "dark" : "light");
    });
    themeBtn.dataset.bound = "true";
  }
}

// 通过 localhost 运行时，统一从 partial 加载页头，避免每个页面重复维护。
async function loadSharedHeader() {
  const slot = document.getElementById("shared-header-slot");
  if (!slot || slot.dataset.loaded === "true") return;

  try {
    const response = await fetch(sharedHeaderPath, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load shared header: ${response.status}`);
    }
    slot.innerHTML = await response.text();
    slot.dataset.loaded = "true";
  } catch (error) {
    console.error("Failed to load shared header partial.", error);
  }
}

async function bootstrapSite() {
  applyTheme(localStorage.getItem("site-theme") || "light");
  initFloatingMusicWidget();
  await loadSharedHeader();
  bindHeaderControls();
  syncNavState();
  bindNavigationPlaybackSave();
  initProjectImageLightbox();
  ensureLanguageSwitchMarkup();
  applyLanguage(localStorage.getItem("site-lang") || "en");
  initSiteSearch();
  requestAnimationFrame(() => {
    root.classList.remove("theme-preload");
  });
}

bootstrapSite();
window.addEventListener("pagehide", saveMusicPlaybackState);
window.addEventListener("beforeunload", saveMusicPlaybackState);
