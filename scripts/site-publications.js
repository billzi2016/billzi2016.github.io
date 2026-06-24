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
  const selectedKeySet = new Set(selectedPublicationKeys);
  selectedPublicationKeys.forEach((key) => {
    const item = byKey.get(key);
    if (item) selectedHost.appendChild(buildPublicationItem(item, lang));
  });

  const published = [];
  const preprint = [];
  const unpublished = [];

  window.publicationsData.forEach((item) => {
    if (selectedKeySet.has(item.key)) return;
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
