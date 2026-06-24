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
