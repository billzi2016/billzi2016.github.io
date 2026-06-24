const siteSearchState = {
  initialized: false,
  lastResults: [],
};

function getSiteSearchCopy(lang) {
  return lang === "zh"
    ? {
        title: "站内搜索",
        subtitle: "浏览器内 regex 搜索，不区分大小写。",
        input: "搜索项目、论文、经历或技能",
        button: "搜索",
        noResults: "没有找到匹配结果。",
        resultPrefix: "搜索结果",
      }
    : {
        title: "Site Search",
        subtitle: "In-browser regex search, case-insensitive.",
        input: "Search projects, papers, experience, or skills",
        button: "Search",
        noResults: "No matching results.",
        resultPrefix: "Results",
      };
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function flattenSearchValue(value, output) {
  if (value === null || value === undefined) return;
  if (typeof value === "string" || typeof value === "number") {
    const text = String(value).trim();
    if (text) output.push(text);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => flattenSearchValue(item, output));
    return;
  }
  if (typeof value === "object") {
    Object.values(value).forEach((item) => flattenSearchValue(item, output));
  }
}

function buildSearchDocuments() {
  const docs = [];
  const addDoc = (type, title, url, payload) => {
    const parts = [];
    flattenSearchValue(payload, parts);
    const text = parts.join(" ").replace(/\s+/g, " ").trim();
    if (!text) return;
    docs.push({
      type,
      title: title || type,
      url,
      text,
    });
  };

  const shared = siteContent.shared || {};
  addDoc("Profile", "Research Interests and Skills", "./experience.html", shared);

  (siteContent.experience?.industry || []).forEach((item) =>
    addDoc("Experience", getLangValue(item, "en", "title"), "./experience.html", item),
  );
  (siteContent.experience?.research || []).forEach((item) =>
    addDoc("Research", getLangValue(item, "en", "title"), "./experience.html", item),
  );
  (siteContent.experience?.education || []).forEach((item) =>
    addDoc("Education", getLangValue(item, "en", "title"), "./experience.html", item),
  );

  Object.values(siteContent.projects?.catalog || {}).forEach((item) =>
    addDoc("Project", item.name, item.url || "./projects.html", item),
  );

  (window.publicationsData || []).forEach((item) =>
    addDoc("Publication", item.title, "./publications.html", item),
  );

  (musicLibrary.tracks || []).forEach((item) =>
    addDoc("Music", item.titleEn || item.titleZh, "./music.html", item),
  );

  return docs;
}

function runRegexSearch(query) {
  const normalized = String(query || "").trim();
  if (!normalized) return [];

  const terms = normalized
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean)
    .slice(0, 8);
  const patterns = terms.map((term) => new RegExp(escapeRegExp(term), "i"));

  return buildSearchDocuments()
    .map((doc) => {
      const haystack = `${doc.title} ${doc.type} ${doc.text}`;
      const score = patterns.reduce((sum, pattern) => sum + (pattern.test(haystack) ? 1 : 0), 0);
      return { ...doc, score };
    })
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 8);
}

function getSearchSnippet(text, query) {
  const cleanText = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleanText) return "";
  const firstTerm = String(query || "").trim().split(/\s+/).find(Boolean);
  const index = firstTerm ? cleanText.toLowerCase().indexOf(firstTerm.toLowerCase()) : -1;
  const start = Math.max(0, index === -1 ? 0 : index - 80);
  return `${start > 0 ? "..." : ""}${cleanText.slice(start, start + 220)}${cleanText.length > start + 220 ? "..." : ""}`;
}

function renderSiteSearchResults(query, results, lang) {
  const copy = getSiteSearchCopy(lang);
  const statusHost = document.getElementById("site-search-status");
  const resultsHost = document.getElementById("site-search-results");
  if (!statusHost || !resultsHost) return;

  statusHost.textContent = `${copy.resultPrefix}: ${results.length}`;

  const resultItems = results.length
    ? results
        .map(
          (item) => `
            <li>
              <a href="${escapeHtml(item.url)}" target="${item.url.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${escapeHtml(item.title)}</a>
              <span>${escapeHtml(item.type)}</span>
              <p>${escapeHtml(getSearchSnippet(item.text, query))}</p>
            </li>
          `,
        )
        .join("")
    : `<li class="site-search-empty">${escapeHtml(copy.noResults)}</li>`;

  resultsHost.innerHTML = `
    <div class="site-search-result-title">${escapeHtml(copy.resultPrefix)} (${results.length})</div>
    <ol>${resultItems}</ol>
  `;
}

function performSiteSearch(query) {
  const lang = localStorage.getItem("site-lang") || "en";
  const results = runRegexSearch(query);
  siteSearchState.lastResults = results;
  renderSiteSearchResults(query, results, lang);
}

function updateSiteSearchLanguage(lang) {
  const widget = document.getElementById("site-search-widget");
  if (!widget) return;
  const copy = getSiteSearchCopy(lang);
  const title = document.getElementById("site-search-title");
  const subtitle = document.getElementById("site-search-subtitle");
  const input = document.getElementById("site-search-input");
  const button = document.getElementById("site-search-submit");
  const status = document.getElementById("site-search-status");
  if (title) title.textContent = copy.title;
  if (subtitle) subtitle.textContent = copy.subtitle;
  if (input) input.placeholder = copy.input;
  if (button) button.textContent = copy.button;
  if (status && siteSearchState.lastResults.length === 0) status.textContent = "";
}

function initSiteSearch() {
  if (mobileMediaQuery.matches) return;
  if (siteSearchState.initialized) return;
  siteSearchState.initialized = true;

  const lang = localStorage.getItem("site-lang") || "en";
  const copy = getSiteSearchCopy(lang);
  const widget = document.createElement("aside");
  widget.id = "site-search-widget";
  widget.className = "site-search-widget";
  widget.innerHTML = `
    <div class="site-search-panel" role="search">
      <div class="site-search-head">
        <div>
          <div id="site-search-title" class="site-search-title">${escapeHtml(copy.title)}</div>
          <div id="site-search-subtitle" class="site-search-subtitle">${escapeHtml(copy.subtitle)}</div>
        </div>
      </div>
      <form id="site-search-form" class="site-search-form">
        <input id="site-search-input" type="search" autocomplete="off" placeholder="${escapeHtml(copy.input)}" />
        <button id="site-search-submit" type="submit">${escapeHtml(copy.button)}</button>
      </form>
      <div id="site-search-status" class="site-search-status"></div>
      <div id="site-search-results" class="site-search-results"></div>
    </div>
  `;
  document.body.appendChild(widget);

  document.getElementById("site-search-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("site-search-input");
    if (!(input instanceof HTMLInputElement)) return;
    performSiteSearch(input.value);
  });
}

