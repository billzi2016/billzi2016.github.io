// Stable aggregation entry point for all site translations.
import { commonTranslations } from "./i18n/common";
import { homePageTranslations } from "./i18n/home";
import { experiencePageTranslations } from "./i18n/experience";
import { projectsPageTranslations } from "./i18n/projects";
import { publicationsPageTranslations } from "./i18n/publications";
import { academicServicePageTranslations } from "./i18n/academic-service";
import { personalPageTranslations } from "./i18n/personal";
import { musicPageTranslations } from "./i18n/music";
export { sitePageTitles } from "./i18n/page-titles";

export const siteTranslations = {
  common: commonTranslations,
  page: {
    home: homePageTranslations,
    experience: experiencePageTranslations,
    projects: projectsPageTranslations,
    publications: publicationsPageTranslations,
    academicService: academicServicePageTranslations,
    personal: personalPageTranslations,
    music: musicPageTranslations,
  },
};

