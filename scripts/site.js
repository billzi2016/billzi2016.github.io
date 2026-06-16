// 站点级交互：中英文切换、深浅色切换、当前导航高亮、本地背景同步。
const translations = {
  common: {
    en: {
      navHome: "Home",
      navExperience: "Experience",
      navProjects: "Projects",
      navPublications: "Publications",
      langToggle: "中文",
      themeToggleLight: "Dark",
      themeToggleDark: "Light",
      contactSchool: "Indiana University",
    },
    zh: {
      navHome: "首页",
      navExperience: "经历",
      navProjects: "项目",
      navPublications: "论文",
      langToggle: "EN",
      themeToggleLight: "深色",
      themeToggleDark: "浅色",
      contactSchool: "印第安纳大学",
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
      },
      zh: {
        pageTag: "先看代表性论文，后面是完整论文列表。",
        selectedTitle: "代表性论文",
        selectedNote:
          "这里优先按我当前方向的代表性排序：第一作者工作、正式发表论文，以及最贴近 AI / ML / LLM / 感知 / 医学 AI 求职方向的论文。",
        archiveTitle: "完整论文列表",
        archiveNote: "下面的完整论文列表由当前 BibTeX 源文件整理成人类可读格式，不再直接展示原始条目。",
      },
    },
  },
};

const root = document.documentElement;
const body = document.body;
const pageKey = body.dataset.page;
const langBtn = document.getElementById("lang-toggle");
const themeBtn = document.getElementById("theme-toggle");

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
  themeBtn.textContent = dark
    ? translations.common[lang].themeToggleDark
    : translations.common[lang].themeToggleLight;
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
  langBtn.textContent = translations.common[lang].langToggle;
  const dark = body.classList.contains("dark-theme");
  themeBtn.textContent = dark
    ? translations.common[lang].themeToggleDark
    : translations.common[lang].themeToggleLight;
}

langBtn.addEventListener("click", () => {
  const current = localStorage.getItem("site-lang") || "en";
  applyLanguage(current === "en" ? "zh" : "en");
});

themeBtn.addEventListener("click", () => {
  const current = localStorage.getItem("site-theme") || "light";
  applyTheme(current === "light" ? "dark" : "light");
});

syncNavState();
applyTheme(localStorage.getItem("site-theme") || "light");
applyLanguage(localStorage.getItem("site-lang") || "en");
