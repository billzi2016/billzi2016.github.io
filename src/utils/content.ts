export type Lang = "en" | "zh";

export const defaultLang: Lang = "en";

export function getLangValue(item: any, lang: Lang = defaultLang, baseName = ""): string {
  if (!item) return "";
  if (!baseName) return item[lang] || "";
  if (item[baseName] && typeof item[baseName] === "object") {
    return item[baseName][lang] || "";
  }
  const suffix = lang === "zh" ? "Zh" : "En";
  return item[`${baseName}${suffix}`] || item[baseName] || "";
}

export function splitTopLevelList(value: unknown): string[] {
  const text = String(value || "");
  const items: string[] = [];
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

export function normalizeAuthorName(author: string): string {
  const cleaned = String(author).trim();
  if (!cleaned || cleaned.toLowerCase() === "others") return "";
  if (!cleaned.includes(",")) return cleaned;

  const parts = cleaned.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return cleaned;
  return `${parts.slice(1).join(" ")} ${parts[0]}`.trim();
}

export function getAuthorRank(item: any): number {
  const normalizedAuthors = (item.authors || []).map(normalizeAuthorName).filter(Boolean);
  const index = normalizedAuthors.indexOf("Ziqian Bi");
  return index === -1 ? 999 : index;
}

export function getPublicationBucket(item: any): "published" | "preprint" | "unpublished" {
  const venue = String(item.venue || "").toLowerCase();
  if (venue.includes("arxiv")) return "preprint";
  if (venue) return "published";
  return "unpublished";
}

export function comparePublications(a: any, b: any): number {
  const rankDiff = getAuthorRank(a) - getAuthorRank(b);
  if (rankDiff !== 0) return rankDiff;

  const yearA = Number(a.year) || 0;
  const yearB = Number(b.year) || 0;
  if (yearA !== yearB) return yearB - yearA;

  return String(a.title || "").localeCompare(String(b.title || ""));
}

export function formatProjectLanguage(language: string, lang: Lang = defaultLang): string {
  if (language === "none") {
    return lang === "zh" ? "未标注主要语言" : "No primary language listed";
  }
  return language || "";
}

export function getProjectKey(item: any): string {
  if (typeof item === "string") return item;
  if (item && item.name) return item.name;
  return "";
}

export function resolveProjectItem(item: any, catalog: Record<string, any>): any {
  if (typeof item === "string") return catalog[item] || { name: item };
  if (item?.name && catalog[item.name]) return { ...catalog[item.name], ...item };
  return item || {};
}

export const selectedPublicationKeys = [
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
