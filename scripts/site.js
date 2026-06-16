// 站点级交互：中英文切换、深浅色切换、导航高亮，以及统一内容源渲染。
const translations = {
  common: {
    en: {
      navHome: "Home",
      navExperience: "Experience",
      navProjects: "Projects",
      navPublications: "Publications",
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
  },
};

const pageTitles = {
  home: { en: "Ziqian Bi | Home", zh: "毕梓仟 | 首页" },
  experience: { en: "Ziqian Bi | Experience", zh: "毕梓仟 | 经历" },
  projects: { en: "Ziqian Bi | Projects", zh: "毕梓仟 | 项目" },
  publications: { en: "Ziqian Bi | Publications", zh: "毕梓仟 | 论文" },
};

const root = document.documentElement;
const body = document.body;
const pageKey = body.dataset.page;
const langBtn = document.getElementById("lang-toggle");
const themeBtn = document.getElementById("theme-toggle");
const siteContent = window.siteContent || {};
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
          <em>${escapeHtml(getLangValue(item, lang, "title"))}</em>.
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
applyTheme(localStorage.getItem("site-theme") || "light");
applyLanguage(localStorage.getItem("site-lang") || "en");
