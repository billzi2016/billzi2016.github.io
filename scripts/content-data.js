// Aggregates split content data files into the single runtime object used by renderers.
window.siteContent = {
  shared: window.siteSharedContent || {},
  home: window.siteHomeContent || {},
  experience: window.siteExperienceContent || {},
  projects: window.siteProjectsContent || {},
};
