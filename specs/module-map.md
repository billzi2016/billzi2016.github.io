# Module Map

This document explains what each major module owns and where future changes should go.

## Top-Level Areas

| Area            | Location                           | Responsibility                                                                                       | Do not put here                                           |
| --------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Routes          | `src/pages/`                       | Astro route entry points and page-level metadata selection.                                          | Complex markup, browser logic, large CSS.                 |
| Layout          | `src/layouts/SiteLayout.astro`     | HTML document shell, shared metadata, global CSS imports, runtime data injection, script order.      | Page-specific content or one-off UI behavior.             |
| Components      | `src/components/`                  | Reusable UI markup and component-owned CSS.                                                          | Global runtime state that belongs in `src/scripts/site/`. |
| Data            | `src/data/`                        | Site metadata, navigation links, generated bilingual content modules.                                | Browser DOM code or presentational CSS.                   |
| Runtime scripts | `src/scripts/site/`                | Browser behavior that cannot be rendered statically.                                                 | Static content, component markup, source data.            |
| Shared styles   | `src/styles/site/`                 | Base tokens, document styles, header shell, shared section/list primitives, responsive coordination. | Component-specific visual systems.                        |
| Tailwind entry  | `src/styles/tailwind.css`          | Tailwind layers and utility entrypoint.                                                              | Handwritten component styling.                            |
| Public assets   | `public/assets/`, `public/vendor/` | Files served directly by the website.                                                                | Source tools, build scripts, private notes.               |
| Tools           | `tools/`                           | Repository maintenance scripts.                                                                      | Files meant to be served to site visitors.                |
| Specs           | `specs/`                           | Architecture, maintenance, migration, and engineering rules.                                         | Runtime source code.                                      |

## Component Modules

| Module               | Location                                                                             | Owns                                            | Notes                                                      |
| -------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------- | ---------------------------------------------------------- |
| Header               | `src/components/Header.astro`                                                        | Shared site header composition.                 | Keep page-specific behavior out.                           |
| Header controls      | `src/components/HeaderControls.astro`                                                | Composition of language and theme controls.     | Individual control visuals live in child directories.      |
| Primary navigation   | `src/components/PrimaryNav.astro`                                                    | Shared navigation links and active state hooks. | Runtime active-state binding lives in `site.js`.           |
| Theme toggle         | `src/components/ThemeToggle/`                                                        | Animated theme switch markup and CSS.           | Keep animation CSS local to the component.                 |
| Language switch      | `src/components/LanguageSwitch/`                                                     | Language switch markup and CSS.                 | Language state binding lives in `site.js`.                 |
| Project gallery      | `src/components/ProjectGallery/`                                                     | Project image markup, grid CSS, lightbox CSS.   | Lightbox runtime behavior lives in `site-lightbox.js`.     |
| Publications         | `src/components/Publications/` and `src/components/PublicationsInitialContent.astro` | Publication list presentation.                  | Citation copy behavior lives in `site-citation.js`.        |
| Music player         | `src/components/MusicInitialContent.astro`, `src/components/MusicPlayer/`            | Music page markup and music player CSS.         | Persistent playback behavior lives in `site-music.js`.     |
| Search widget        | `src/components/SearchWidget/`                                                       | Search overlay CSS.                             | DOM creation and search behavior live in `site-search.js`. |
| Interest pills       | `src/components/InterestPills/`                                                      | Research-interest pill rendering and CSS.       | Data comes from `src/data/generated/`.                     |
| Skill blocks         | `src/components/SkillBlocks/`                                                        | Skill group rendering and CSS.                  | Keep normalization in `src/utils/content.ts`.              |
| Entry lists          | `src/components/EntryList.astro`                                                     | Reusable experience/education list rendering.   | Project image rendering delegates to `ProjectGallery`.     |
| Page initial content | `src/components/*InitialContent.astro`                                               | Static page section markup generated from data. | Keep route files thin.                                     |

## Runtime Script Modules

| Script             | Responsibility                                                               | High-risk rule                                            |
| ------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------- |
| `site.js`          | Bootstrapping, language switching, theme switching, page binding, nav state. | Do not turn it into an unrelated utility bucket.          |
| `site-router.js`   | Partial navigation and page transitions.                                     | Must preserve script re-binding and music state.          |
| `site-music.js`    | Persistent music state, audio element ownership, playlist controls.          | Page transitions must not stop playback unexpectedly.     |
| `site-search.js`   | Client-side search document building, search UI creation, result rendering.  | Search must remain local and browser-side.                |
| `site-lightbox.js` | Project gallery lightbox open/close/navigation behavior.                     | Keep selectors aligned with `ProjectGallery`.             |
| `site-citation.js` | BibTeX copy button behavior.                                                 | Keep copied-state UI scoped to citation buttons.          |
| `backgrounds.js`   | Light particle background and dark Matrix background.                        | Tune named constants instead of scattering magic numbers. |

## Placement Rules

- New page: add a route in `src/pages/`, then move substantial markup into a component.
- New repeated UI: create or extend a component under `src/components/`.
- New component visuals: add CSS beside the owning component.
- New shared foundation style: add to `src/styles/site/` only when it truly affects multiple modules.
- New runtime behavior: add to the owning `src/scripts/site/` module or create a focused script.
- New content: prefer `src/data/` over hardcoding duplicate strings in components.
- New public file: use `public/assets/` only when the site must serve that file directly.
- New maintenance script: use `tools/`, not `public/`.
