function splitTopLevelList(value) {
  const text = String(value || "");
  const items = [];
  let current = "";
  let depth = 0;

  for (const char of text) {
    if (char === "(" || char === "（") depth += 1;
    if (char === ")" || char === "）") depth = Math.max(0, depth - 1);

    if (depth === 0 && [",", "、", ";", "；"].includes(char)) {
      const item = current.trim();
      if (item) items.push(item);
      current = "";
    } else {
      current += char;
    }
  }

  const last = current.trim();
  if (last) items.push(last);
  return items;
}

function buildPills(items, className) {
  return `<div class="${className}">${items
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("")}</div>`;
}

function buildInterestPills(lang) {
  const interests = getLangValue(siteContent.shared || {}, lang, "researchInterests");
  const items = Array.isArray(interests) ? interests : splitTopLevelList(interests);
  return buildPills(items, "interest-pills");
}

function buildSkillBlocks(lang) {
  const shared = siteContent.shared || {};
  const skillData = shared.skills || { left: [], right: [] };
  const items = [...(skillData.left || []), ...(skillData.right || [])];

  return `<div class="skill-list">${items
    .map((item) => {
      const label = getLangValue(item, lang, "label");
      const values = splitTopLevelList(getLangValue(item, lang, "value"));
      return `
        <div class="skill-group">
          <div class="skill-label">${escapeHtml(label)}</div>
          ${buildPills(values, "skill-pills")}
        </div>
      `;
    })
    .join("")}</div>`;
}

function buildAiSkillBlocks(lang) {
  const items = siteContent.shared?.aiSkills || [];
  return `<div class="skill-list ai-skill-list">${items
    .map((item) => {
      const label = getLangValue(item, lang, "label");
      const values = splitTopLevelList(getLangValue(item, lang, "value"));
      return `
        <div class="skill-group">
          <div class="skill-label">${escapeHtml(label)}</div>
          ${buildPills(values, "skill-pills ai-skill-pills")}
        </div>
      `;
    })
    .join("")}</div>`;
}

function buildEntries(entries, lang) {
  return entries
    .map((entry) => {
      const bullets = (entry.bullets || [])
        .map((bullet) => `<li>${escapeHtml(getLangValue(bullet, lang, ""))}</li>`)
        .join("");
      const note = getLangValue(entry, lang, "note");
      const links = (entry.links || [])
        .map(
          (link) =>
            `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(
              getLangValue(link, lang, "label") || link.label || link.url,
            )}</a>`,
        )
        .join("");
      const images = renderProjectImageGrid(entry.images || [], lang, "entry-image-grid");
      return `
        <div class="entry">
          <div class="entry-heading">
            <h3 class="entry-title">${escapeHtml(getLangValue(entry, lang, "title"))}</h3>
            <div class="entry-meta">${escapeHtml(entry.meta || "")}</div>
          </div>
          <div class="entry-role">${escapeHtml(getLangValue(entry, lang, "role"))}</div>
          ${links ? `<div class="entry-links">${links}</div>` : ""}
          ${bullets ? `<ul>${bullets}</ul>` : ""}
          ${note ? `<div class="item-note">${escapeHtml(note)}</div>` : ""}
          ${images}
        </div>
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
      ${buildInterestPills(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].skillsTitle)}</h2>
      ${buildSkillBlocks(lang)}
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].highlightsTitle)}</h2>
      <ul class="plain-list">${highlightItems}</ul>
    </section>
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].aiSkillsTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.home[lang].aiSkillsNote)}</p>
      ${buildAiSkillBlocks(lang)}
    </section>
  `;
}

function renderPersonal(lang) {
  const host = document.getElementById("page-content");
  if (!host) return;
  const page = translations.page.personal[lang];
  const krogerCheeseItems = page.krogerCheeseItems
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const festivalCheeseItems = page.festivalCheeseItems
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const hobbyNavItems = page.hobbyNavItems
    .map(
      (item) => `
        <li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>
      `,
    )
    .join("");
  const electronicsProjects = page.electronicsProjects
    .map((project) => {
      const projectImages = project.images ? renderProjectImageGrid(project.images, lang) : "";
      const donatedNote = project.images
        ? ""
        : `<p class="project-donation-note">${
            lang === "zh" ? "已捐赠给北京工业大学" : "Donated to Beijing University of Technology."
          }</p>`;
      return `
        <div class="home-panel">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.text)}</p>
          ${donatedNote}
          ${projectImages}
        </div>
      `;
    })
    .join("");
  const pianoGroups = page.pianoGroups
    .map(
      (group) => `
        <div class="home-panel">
          <h3>${escapeHtml(group.title)}</h3>
          <ul class="plain-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `,
    )
    .join("");
  const catImages = renderProjectImageGrid(page.catImages, lang);
  const drinkGroups = page.drinkGroups
    .map(
      (group) => `
        <div class="home-panel">
          <h3>${escapeHtml(group.title)}</h3>
          <ul class="plain-list">
            ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `,
    )
    .join("");
  host.innerHTML = `
    <section>
      <h2 class="section-title">${escapeHtml(page.hobbyTitle)}</h2>
      <div class="home-panel">
        <ul class="hobby-nav-list">${hobbyNavItems}</ul>
      </div>
    </section>
    <section id="electronics-making">
      <h2 class="section-title">${escapeHtml(page.electronicsTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.electronicsText)}</p>
      </div>
      <div class="home-grid">${electronicsProjects}</div>
    </section>
    <section id="ai-full-stack-architect">
      <h2 class="section-title">${escapeHtml(page.aiArchitectTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.aiArchitectText)}</p>
${renderProjectImageFigure({ src: "./assets/images/token-by-month.png", caption: page.aiArchitectTokenCaption }, lang, "ai-token-image")}
      </div>
    </section>
    <section id="cat">
      <h2 class="section-title">${escapeHtml(page.catTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.catText)}</p>
        ${catImages}
      </div>
    </section>
    <section id="piano">
      <h2 class="section-title">${escapeHtml(page.pianoTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.pianoIntro)}</p>
      </div>
      <div class="home-grid">${pianoGroups}</div>
    </section>
    <section id="cheese">
      <h2 class="section-title">${escapeHtml(page.cheeseTitle)}</h2>
      <div class="home-panel">
        <h3>${escapeHtml(page.krogerCheeseTitle)}</h3>
        <p>${escapeHtml(page.hobbyText)}</p>
        <ul class="plain-list">${krogerCheeseItems}</ul>
      </div>
      <div class="home-panel">
        <h3>${escapeHtml(page.festivalCheeseTitle)}</h3>
        <ul class="plain-list">${festivalCheeseItems}</ul>
      </div>
    </section>
    <section id="juice-forward-drinks">
      <h2 class="section-title">${escapeHtml(page.drinkTitle)}</h2>
      <div class="home-panel">
        <p>${escapeHtml(page.drinkIntro)}</p>
      </div>
      <div class="home-grid">${drinkGroups}</div>
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
      ${buildInterestPills(lang)}
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
    <section>
      <h2 class="section-title">${escapeHtml(translations.page.home[lang].aiSkillsTitle)}</h2>
      <p class="section-note">${escapeHtml(translations.page.home[lang].aiSkillsNote)}</p>
      ${buildAiSkillBlocks(lang)}
    </section>
  `;
}
