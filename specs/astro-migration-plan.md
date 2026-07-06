# Astro Migration Plan

## Status

Completed.

This document records how the site was migrated from a traditional static HTML/CSS/JavaScript homepage into an Astro + Tailwind static site. It is kept as project history and as a reference for future maintainers.

## Background

The original site was a hand-maintained static homepage:

- HTML files at the repository root
- global CSS files
- global browser JavaScript
- assets served directly from `public/` or root-level paths
- local preview through a small Python server

That approach worked for a small site, but the CSS and JavaScript boundaries became harder to maintain as the homepage grew. Repeated content, bilingual rendering, page-specific behavior, theme switching, search, image galleries, and music playback all started sharing too much global state.

## Goals

The migration had four goals:

1. Preserve the exact current visual design.
2. Move the site into a modern static build system.
3. Make CSS and JavaScript ownership clearer.
4. Keep the final deployed site static and fast.

Non-goals:

- no React/Vue rewrite
- no visual redesign
- no CDN dependency for required assets
- no removal of music or media assets
- no client-side single-page application rewrite

## Why Astro

Astro was selected because the site is content-heavy and mostly static. It gives the project:

- file-based static routes
- reusable `.astro` components
- shared layouts
- Vite bundling
- zero required client runtime for ordinary content pages
- static HTML output for GitHub Pages

React and Vue were intentionally not used as the main framework. They are excellent for application-style interfaces, but this personal homepage does not need a large client runtime or app-wide component state. Astro gives enough structure without turning the site into a heavy frontend app.

## Why Tailwind

Tailwind was introduced to reduce ordinary layout CSS:

- spacing
- grid/flex layout
- alignment
- sizing
- simple responsive rules
- simple typography utilities

Tailwind is not meant to replace every handwritten style. Complex visual systems can remain as local CSS when that is clearer:

- animated theme toggle
- Matrix/canvas backgrounds
- persistent music player
- search overlay
- project gallery and lightbox
- detailed transitions

The long-term rule is: Tailwind for boring layout, local CSS for owned complex components.

## Migration Strategy

The migration was done in controlled steps:

1. Tag the legacy static version.
2. Add Astro, Vite, pnpm, and project scripts.
3. Move page content into `src/pages/` and `src/components/`.
4. Create `SiteLayout.astro` for shared HTML structure.
5. Move shared data into `src/data/`.
6. Move runtime scripts into `src/scripts/site/`.
7. Move source CSS into `src/styles/`.
8. Add Tailwind as the utility layer.
9. Preserve `public/assets/` for audio, images, soundfonts, and local vendor files.
10. Replace the old local Python server with `pnpm dev`.
11. Switch GitHub Pages deployment to an Astro build workflow.
12. Add Playwright smoke tests for critical behavior.

## Engineering Principles

The migration followed SOLID and DRY principles in a pragmatic frontend form:

- Astro pages became thin route files with one responsibility.
- Shared document structure moved into `SiteLayout.astro`.
- Repeated page sections moved into components.
- Shared content and translation data moved into `src/data/`.
- Shared normalization helpers moved into `src/utils/content.ts`.
- Runtime behavior was split by system under `src/scripts/site/`.
- Component-specific CSS started moving beside the owning component.

DRY was applied to duplicated content, repeated rendering patterns, and shared helper logic. It was not used to force unrelated visual systems into one abstraction.

The long-term rules are maintained in [Engineering Principles](engineering-principles.md).

## Resulting Structure

```text
src/
  components/
  data/
  layouts/
  pages/
  scripts/
  styles/
public/
  assets/
  vendor/
specs/
.github/workflows/
```

Important boundaries:

- `src/pages/` owns routes.
- `src/layouts/SiteLayout.astro` owns document structure and script ordering.
- `src/components/` owns reusable markup.
- `src/data/` owns structured content and metadata.
- `src/scripts/site/` owns runtime behavior.
- `src/styles/` owns source CSS and Tailwind entrypoints.
- `public/` owns served static assets only.

## Completed Work

- Created the Astro project structure.
- Added pnpm scripts for development, build, preview, type checking, and e2e tests.
- Migrated static pages into Astro routes.
- Preserved the existing visual design.
- Localized required frontend assets.
- Kept music assets and soundfont assets under `public/assets/`.
- Moved source JavaScript from public/static paths into `src/scripts/site/`.
- Moved source CSS into `src/styles/` and component-owned CSS directories.
- Added Tailwind build support.
- Removed the old Python server entrypoint.
- Added GitHub Actions deployment for GitHub Pages.
- Added Playwright smoke tests.
- Added project maintenance specs.

## Validation

The expected validation commands are:

```bash
pnpm build
pnpm exec astro check
pnpm test:e2e
```

The smoke test suite should confirm:

- homepage renders
- language switch works
- theme switch works
- core routes render their headings
- music page binds the persistent player
- critical pages do not emit browser console errors

## Git Tags

Historical tags were used to preserve important states:

- `legacy-static-html-2026-07-06`: original static HTML/CSS/JS site before Astro migration
- `astro-migration-2026-07-06`: Astro migration milestone
- `pre-css-refactor-2026-07-06`: checkpoint before deeper CSS cleanup

These tags should not be deleted. They document the architectural transition.

## Deployment Model

Deployment should use GitHub Actions:

1. install dependencies with pnpm
2. build the site with Astro
3. upload `dist/`
4. deploy to GitHub Pages

The site should not rely on GitHub Pages Jekyll processing.

## Future Rules

Future work should continue from the Astro structure, not from the old static HTML model.

Do not reintroduce:

- root-level source HTML as the primary editing surface
- source CSS or JavaScript under `public/`
- CDN dependencies for required runtime assets
- large unowned global CSS files
- a Python server as the normal development workflow

When extending the site, use the ownership rules in `specs/maintenance-plan.md`.
