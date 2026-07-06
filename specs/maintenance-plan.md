# Maintenance Plan

## Objective

This repository is a personal homepage and a public engineering sample. The code should stay clean, predictable, fast, and easy for another engineer or reviewer to understand.

The current direction is:

- Astro for static page generation and component structure
- Tailwind CSS for routine layout and utility styling
- small local CSS files for complex visual components
- pnpm for dependency management
- Playwright smoke tests for fragile user-facing behavior
- GitHub Actions for deployment to GitHub Pages

The visual design is intentionally stable. Refactors should preserve the current look unless a change explicitly asks for visual redesign.

## Architecture

Astro is the shell of the site. It provides file-based routing, shared layouts, reusable `.astro` components, static output, and Vite bundling without requiring a client-side React or Vue runtime.

The site is mostly static content with a few interactive islands:

- language switching
- theme switching
- animated backgrounds
- client-side search
- project image lightbox
- persistent music playback across page transitions

This is why Astro is a better fit than React or Vue here. React/Vue would add a larger runtime and an application state model that the site does not need. Astro keeps the source componentized while producing a lightweight static site.

## Source Layout

```text
src/
  components/
    Header.astro
    HeaderControls.astro
    PrimaryNav.astro
    ThemeToggle/
      ThemeToggle.astro
      theme-toggle.css
    LanguageSwitch/
      LanguageSwitch.astro
      language-switch.css
    ProjectGallery/
      ProjectImageGrid.astro
      ProjectImageFigure.astro
      media-gallery.css
      lightbox.css
    MusicPlayer/
    SearchWidget/
    Publications/
    *InitialContent.astro
  data/
    generated/
    pageMeta.ts
    siteLinks.ts
  layouts/
    SiteLayout.astro
  pages/
    index.astro
    experience.astro
    projects.astro
    publications.astro
    personal.astro
    music.astro
  scripts/
    site/
      site.js
      site-router.js
      site-music.js
      site-search.js
      site-lightbox.js
      site-citation.js
      backgrounds.js
  styles/
    tailwind.css
    site/
      main.css
      base.css
      header.css
      sections.css
      content-components.css
      responsive.css
```

`public/` is only for static files that must be served as-is:

- images
- audio
- soundfonts
- local vendor files
- `.nojekyll`

Do not put new source CSS or source JavaScript in `public/`.

## Astro Rules

Pages in `src/pages/` should stay thin. A page should select metadata, declare the route-level layout, and render the matching content component.

`SiteLayout.astro` owns document-level structure:

- `<html>`, `<head>`, and shared metadata
- global CSS imports
- runtime data injection
- script ordering
- shared header and navigation

Content components own page sections and static markup. They should receive `lang` and render deterministic HTML from `src/data/`.

When a UI element becomes independently maintained, move it into a directory:

```text
ComponentName/
  ComponentName.astro
  component-name.css
```

The component imports its own CSS. This prevents global CSS from becoming a dumping ground.

## Data Rules

Generated content lives in `src/data/generated/`. Hand-maintained shared metadata lives in `src/data/`.

Content rendering should use helpers from `src/utils/content.ts` instead of duplicating language fallback, sorting, or normalization logic inside components.

Avoid hardcoding duplicated English/Chinese content in components. If content is reusable or translated, it belongs in data.

## CSS Policy

Global CSS is allowed only for shared foundations:

- base typography
- root variables
- document-level behavior
- shared page layout
- header shell layout
- section primitives
- responsive rules that coordinate multiple components

Component-specific CSS belongs beside the component that owns it.

Avoid these patterns:

- `misc.css`, `common.css`, or other dumping-ground files
- adding new selectors to a large global file without clear ownership
- styling one page through selectors that belong to another page
- relying on source files from `public/styles`
- required runtime styling from remote CDNs

## Tailwind Policy

Use Tailwind for ordinary styling:

- spacing
- alignment
- grids and flex layout
- sizing
- borders
- simple typography
- simple responsive behavior

Keep handwritten CSS for visual systems where utilities would be noisy or less maintainable:

- animated theme toggle
- persistent music player
- search overlay
- project image gallery and lightbox
- Matrix/canvas backgrounds
- complex transitions and animations

Tailwind should reduce boring layout CSS. It should not force complex visual components into unreadable class strings.

## Engineering Principles

SOLID and DRY rules are centralized in [Engineering Principles](engineering-principles.md). Follow that file for component ownership, CSS ownership, JavaScript ownership, abstraction boundaries, and AI maintenance rules.

## JavaScript Policy

Runtime JavaScript lives in `src/scripts/site/` and is bundled by Astro/Vite.

Responsibilities:

- `site.js`: bootstrapping, shared helpers, page-level binding
- `site-router.js`: partial navigation and page transitions
- `site-music.js`: persistent music state, playlist controls, audio element ownership
- `site-search.js`: client-side search index and search UI
- `site-lightbox.js`: project gallery lightbox
- `site-citation.js`: publication citation copy buttons
- `backgrounds.js`: animated visual backgrounds

Rules:

- keep each script responsible for one system
- avoid new global variables unless they are explicitly part of the runtime contract
- keep required assets local
- preserve music playback across page transitions
- do not introduce React/Vue-style app state unless the site becomes a real app

## Build And Tooling

Use pnpm:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm exec astro check
pnpm test:e2e
```

Expected local workflow:

1. `pnpm dev` for local development.
2. `pnpm build` before shipping.
3. `pnpm exec astro check` for Astro/template diagnostics.
4. `pnpm test:e2e` for smoke coverage.

## Testing Policy

Playwright smoke tests should cover behavior that can break during refactors:

- home page rendering
- language switching
- theme switching
- core page headings
- music page player binding
- playlist controls
- no console errors on critical pages

Add a test when a bug involves page transitions, persistent music, theme state, language state, or generated static routes.

## Deployment

GitHub Pages should deploy from the Astro build workflow in `.github/workflows/deploy.yml`.

The deployment path is:

1. install dependencies with pnpm
2. run Astro build
3. upload `dist/`
4. deploy through GitHub Pages

Do not rely on Jekyll for this repository. `.nojekyll` exists so GitHub Pages serves the generated static files directly.

## Change Checklist

Before pushing meaningful changes:

- visual result is equivalent unless redesign is intentional
- no required CDN dependency was introduced
- music survives page transitions
- language and theme toggles still work
- source CSS/JS stays under `src/`
- `public/` contains only served assets
- build passes
- Astro check passes
- Playwright smoke tests pass
- commit message is clear and in Chinese

## Migration Priority

1. Preserve the current visual design.
2. Keep Astro pages thin and move reusable UI into components.
3. Move component-specific CSS next to the owning component.
4. Convert simple layout CSS to Tailwind utilities.
5. Reduce global CSS to foundation, layout, and cross-component rules.
6. Keep complex interactive systems isolated and tested.
7. Remove obsolete legacy files only after the new path is verified.

## Handoff Guide For Future Maintainers

Start here before changing code:

1. Read this file and `specs/maintenance-plan_CN.md`.
2. Run `git status --short` and do not overwrite unrelated local changes.
3. Identify whether the task is content, layout, component behavior, data, assets, or deployment.
4. Edit the smallest owning file or component directory.
5. Run the relevant validation commands before committing.

Ownership map:

| Task | Primary location | Notes |
| --- | --- | --- |
| Page route | `src/pages/*.astro` | Keep pages thin; delegate markup to components. |
| Shared HTML shell | `src/layouts/SiteLayout.astro` | Owns metadata, script order, global imports, and runtime data injection. |
| Header/nav | `src/components/Header*.astro`, `src/components/PrimaryNav.astro` | Do not hide page-specific behavior here. |
| Theme toggle | `src/components/ThemeToggle/` | CSS stays with the component. |
| Language switch | `src/components/LanguageSwitch/` | CSS stays with the component. |
| Project images/lightbox | `src/components/ProjectGallery/`, `src/scripts/site/site-lightbox.js` | Markup/CSS in component; lightbox runtime in script. |
| Music page/player | `src/components/MusicInitialContent.astro`, `src/scripts/site/site-music.js`, `src/styles/site/music.css` | Preserve persistent playback across navigation. |
| Search | `src/scripts/site/site-search.js`, `src/styles/site/search.css` | Keep the index local and browser-side. |
| Publications | `src/components/PublicationsInitialContent.astro`, `src/scripts/site/site-citation.js` | Citation copy buttons depend on `.pub-copy-btn`. |
| Static assets | `public/assets/` | Required assets must stay local. |
| Generated content | `src/data/generated/` | Do not duplicate generated content in components. |
| Deployment | `.github/workflows/deploy.yml` | GitHub Pages deploys `dist/` from Astro build. |

Decision rules:

- If the change only affects static text or structured content, update `src/data/` first.
- If the change affects repeated markup, create or update an Astro component.
- If the change affects one component's visuals, put CSS beside that component.
- If the change affects page foundations or multiple unrelated components, use `src/styles/site/`.
- If the change affects runtime behavior, update the owning file in `src/scripts/site/`.
- If the change adds required images, audio, fonts, or vendor files, put them under `public/assets/` or `public/vendor/`.

For AI agents:

- Do not rewrite whole files when a small patch is enough.
- Do not rename or move assets unless the references are updated and tested.
- Do not remove `dist/` assets from source control decisions blindly; the source of truth is `public/` plus Astro build output.
- Do not change the visual design unless the user explicitly asks for it.
- Always mention which files are being changed and why before editing.

## Anti-Regression Rules

Do not make the codebase look like a framework demo. This is a personal homepage, so the implementation should be quiet, readable, and professional.

Do not over-componentize static text into tiny meaningless components. Componentization is useful when it creates ownership, reuse, or testable boundaries.

Do not chase zero handwritten CSS at the cost of clarity. The goal is maintainable CSS, not performative utility-class purity.
