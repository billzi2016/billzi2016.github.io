function formatProjectLanguage(language, lang) {
  if (language === "none") {
    return lang === "zh" ? "未标注主要语言" : "No primary language listed";
  }
  return language || "";
}

function resolveProjectItem(item) {
  const projects = siteContent.projects || {};
  const catalog = projects.catalog || {};

  if (typeof item === "string") {
    return catalog[item] || { name: item };
  }

  if (item && item.name && catalog[item.name]) {
    return { ...catalog[item.name], ...item };
  }

  return item || {};
}

function buildProjectList(items, lang, showUpdated) {
  return items
    .map((rawItem) => {
      const item = resolveProjectItem(rawItem);
      const language = formatProjectLanguage(item.language, lang);
      const updated =
        showUpdated && item.updated ? `${lang === "zh" ? "更新于" : "updated"} ${item.updated}` : "";
      const note = getLangValue(item, lang, "note");
      const images = (item.images || [])
        .map((image) => {
          const caption = getLangValue(image, lang, "caption") || image.caption || "";
          return `
            <figure class="project-image">
              <button class="project-image-button" type="button" data-lightbox-src="${escapeHtml(
                image.src,
              )}" data-lightbox-caption="${escapeHtml(caption)}" aria-label="${escapeHtml(caption)}">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(caption)}" loading="lazy" />
              </button>
              <figcaption>${escapeHtml(caption)}</figcaption>
            </figure>
          `;
        })
        .join("");
      return `
        <li>
          <div class="repo-line"><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(
            item.name,
          )}</a> <span class="project-language-pill">${escapeHtml(language)}</span>${
            updated ? ` <span class="inline-meta">${escapeHtml(updated)}</span>` : ""
          }</div>
          ${note ? `<div class="item-note">${escapeHtml(note)}</div>` : ""}
          ${images ? `<div class="project-image-grid">${images}</div>` : ""}
        </li>
      `;
    })
    .join("");
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
