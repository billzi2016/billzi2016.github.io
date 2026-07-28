export const contactLinks = [
  {
    href: "https://scholar.google.com/citations?user=4z9m238AAAAJ",
    label: "Google Scholar",
  },
  {
    href: "./assets/resume-july-28-2026.pdf",
    label: "[PDF] Resume",
  },
  {
    href: "https://github.com/billzi2016",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ziqian-bi/",
    label: "LinkedIn",
  },
] as const;

export const primaryNavLinks = [
  {
    page: "home",
    href: "./index.html",
    i18nKey: "navHome",
    label: "Home",
  },
  {
    page: "experience",
    href: "./experience.html",
    i18nKey: "navExperience",
    label: "Experience",
  },
  {
    page: "projects",
    href: "./projects.html",
    i18nKey: "navProjects",
    label: "Projects",
  },
  {
    page: "publications",
    href: "./publications.html",
    i18nKey: "navPublications",
    label: "Publications",
  },
  {
    page: "academicService",
    href: "./academic-service.html",
    i18nKey: "navAcademicService",
    label: "Academic Service",
  },
  {
    page: "personal",
    href: "./personal.html",
    i18nKey: "navPersonalIntro",
    label: "Personal Introduction",
  },
] as const;
