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

