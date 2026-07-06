# billzi2016.github.io

Source code for my personal academic website.

Website: [https://billzi2016.github.io/](https://billzi2016.github.io/)

Chinese documentation: [README_CN.md](README_CN.md)

AI maintenance guide: [AGENTS.md](AGENTS.md)

## Overview

This is an Astro-based static academic portfolio website covering research interests, technical skills, projects, publications, experience, education, personal interests, and a small local music page.

The repository also includes project specs for future maintenance and AI-assisted handoff. They document the Astro migration, the Tailwind/CSS policy, and the rules for keeping the codebase clean.

## Evolution

This site started as a traditional static website written with plain HTML, CSS, and JavaScript. That approach was simple and reliable, but the CSS and repeated page structure became harder to maintain as the site grew.

The current version has been migrated to Astro with Tailwind CSS. Astro keeps the output as static HTML, which fits a personal academic website well: the pages load quickly, deploy cleanly to GitHub Pages, and do not require a large client-side application runtime. Tailwind is used as an engineering layer for more maintainable layout and utility styling, while the existing visual design is preserved.

This project does not use Vue or React as the primary framework because the site is mostly content, navigation, images, publications, and lightweight interaction. A full single-page application framework would add more client-side JavaScript and more architectural overhead than this site needs. Astro gives the useful parts of component-based development without turning the website into a heavy SPA. If a future section needs richer interactive UI, Astro can still host focused client-side components where they are actually needed.

| Dimension               | Original HTML / CSS / JS static site                                                          | Current Astro + Tailwind CSS site                                                                              | Vue / React SPA-style approach                                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Page speed              | Very fast for small pages, but repeated markup and growing CSS made long-term cleanup harder. | Fast static HTML output with component-based source files and limited runtime JavaScript.                      | Can be fast when optimized, but usually ships more JavaScript than this site needs.                                              |
| JavaScript payload      | Minimal at first, then gradually accumulated page renderers and runtime helpers.              | JavaScript is kept for language switching, music continuity, search, lightbox, and other focused interactions. | More client-side runtime by default, especially if the whole site becomes an SPA.                                                |
| Maintainability         | Simple files, but duplicated structure and CSS growth made changes risky.                     | Components, data modules, Tailwind utilities, and split CSS make the project easier to inspect and maintain.   | Strong component model, but introduces state management and app-level structure that is unnecessary for this content-heavy site. |
| SEO and static output   | Static HTML works well, but pages were manually maintained.                                   | Static HTML remains the deployment target, with Astro generating pages from cleaner source structure.          | Needs SSR, SSG, or careful prerendering to match the same static-site behavior cleanly.                                          |
| GitHub Pages deployment | Easy, but relied on manually organized static assets.                                         | Easy: `pnpm build` generates `dist/`, and GitHub Actions deploys the static output.                            | Also possible, but the build/runtime model is heavier for this use case.                                                         |
| Visual preservation     | Original visual design was built here.                                                        | The migration keeps the existing visual design while improving the source structure.                           | A rewrite in Vue or React would create more risk of accidental visual drift.                                                     |
| Best fit                | Small, stable static pages.                                                                   | Personal academic website with mostly static content and selective interactions.                               | Large interactive applications, dashboards, editors, or products with complex client-side state.                                 |

## Pages

- `index.html`: Home
- `experience.html`: Experience and education
- `projects.html`: Project portfolio
- `publications.html`: Publications
- `personal.html`: Personal introduction
- `music.html`: Music page

## Structure

- `src/pages/`: Astro page entry points.
- `src/layouts/`: Shared Astro layout.
- `src/components/`: Header, content sections, image galleries, lists, and other reusable UI components. Complex components can own local CSS in the same directory.
- `src/data/`: Site metadata, navigation links, and generated content modules used by Astro.
- `src/scripts/site/`: Browser runtime modules loaded through Astro/Vite.
- `src/styles/tailwind.css`: Tailwind entry file.
- `src/styles/site/`: Shared foundation CSS imported by Astro through `src/styles/site/main.css`.
- `public/assets/`: Local images, audio, MIDI files, PDF, and asset documentation.
- `public/vendor/`: Third-party browser assets that are loaded directly.
- `tools/`: Repository maintenance scripts that should not be published as site assets.
- `AGENTS.md`: AI maintenance entrypoint and reading order.

## Project Specs

These specs are part of the repository contract. Read them before large refactors or AI-assisted maintenance:

- [Maintenance Plan](specs/maintenance-plan.md)
- [维护方案（中文）](specs/maintenance-plan_CN.md)

- [Astro Migration Plan](specs/astro-migration-plan.md)
- [Astro 迁移方案（中文）](specs/astro-migration-plan_CN.md)

- [Engineering Principles](specs/engineering-principles.md)
- [工程原则（中文）](specs/engineering-principles_CN.md)

They cover the Astro architecture, Tailwind usage, SOLID/DRY rules, CSS ownership, JavaScript ownership, deployment model, testing checklist, and migration history.

## Local Development

```bash
pnpm install
pnpm dev
```

Then open the local Astro dev server, usually `http://localhost:4321/`.

To bind an explicit host and port:

```bash
pnpm dev --host 127.0.0.1 --port 4321
```

## Build

```bash
pnpm build
```

Astro writes the generated static site to `dist/`.

Preview the production build locally:

```bash
pnpm preview
```

Run Astro diagnostics:

```bash
pnpm check
```

Run formatting, CSS lint, Astro check, build, and Playwright smoke tests:

```bash
pnpm validate
```

## Deployment

The site is built with GitHub Actions and deployed to GitHub Pages from the generated Astro output.

## Data Organization

Content data used by Astro lives under:

- `src/data/generated/sharedContent.js`
- `src/data/generated/homeContent.js`
- `src/data/generated/experienceContent.js`
- `src/data/generated/projectsContent.js`
- `src/data/generated/publicationsData.js`
- `src/data/generated/musicLibrary.js`
- `src/data/generated/siteI18n.js`

Astro renders the visible page content and language templates from these modules. The layout also inlines the small runtime data object needed for language switching, music playback continuity, site search, image lightbox behavior, and publication citation buttons. The old browser-side page renderers and duplicated public data scripts have been removed.

## Demo Gallery

### Chinese Homepage in Dark Theme

![Chinese Homepage in Dark Theme](demo/cn-dark.png)

### Chinese Homepage in Light Theme

![Chinese Homepage in Light Theme](demo/cn-light.png)

### English Homepage in Dark Theme

![English Homepage in Dark Theme](demo/en-dark.png)

### English Homepage in Light Theme

![English Homepage in Light Theme](demo/en-light.png)

### Industry Experience Detail

![Industry Experience Detail](demo/exp.png)

### Research Experience and Monitoring Platform

![Research Experience and Monitoring Platform](demo/exp-2.png)

### Personal Introduction and Hardware Projects

![Personal Introduction and Hardware Projects](demo/introd.png)

### Publications Page

![Publications Page](demo/paper.png)

### Projects Page

![Projects Page](demo/proj.png)
