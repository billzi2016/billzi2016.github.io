# Engineering Principles

## Scope

This document defines the engineering principles for this Astro personal homepage. It is intentionally practical: the goal is clean, readable, maintainable source code, not abstract purity.

The main principles are:

- SOLID for ownership and module boundaries
- DRY for repeated content and repeated logic
- clear component ownership
- minimal global state
- visual stability during refactors

## SOLID For This Astro Site

### Single Responsibility

Each file should have one clear reason to change.

Examples:

- `src/pages/*.astro` owns routes, not complex markup.
- `SiteLayout.astro` owns document structure, metadata, script order, and global imports.
- `ThemeToggle/` owns the theme toggle markup and CSS.
- `SearchWidget/` owns search overlay CSS while `site-search.js` owns behavior.
- `MusicPlayer/` owns music player CSS while `site-music.js` owns playback behavior.
- `site-music.js` owns persistent music behavior.
- `site-search.js` owns search behavior.

If a file starts collecting unrelated responsibilities, split it by ownership.

### Open/Closed

Prefer extending the site through data, components, or small modules instead of editing unrelated global code.

Examples:

- add project content through data modules instead of hardcoding repeated blocks
- add a reusable UI pattern as a component
- add component-owned CSS beside the component

Avoid adding new rules to global CSS just because it is convenient.

### Liskov Substitution

Reusable components should behave predictably when their props change. They should not rely on hidden page context.

Examples:

- a gallery component should work wherever it receives valid image data
- a list component should not assume it is only used on one page
- a component should not depend on a global DOM element unless that dependency is part of its documented contract

### Interface Segregation

Components should receive only the props they need.

Avoid passing large mixed data objects when a component only needs a title, list, language, or image array.

Smaller props make components easier for humans and AI agents to reuse safely.

### Dependency Inversion

Page components should depend on stable helpers and data modules, not ad hoc DOM state.

Examples:

- use `src/utils/content.ts` for language fallback and normalization
- use `src/data/` for structured content
- use runtime scripts only for browser behavior that cannot be rendered statically

## DRY For This Site

DRY applies when duplication creates maintenance risk.

Use DRY for:

- bilingual content
- repeated project/publication/music data
- language fallback logic
- publication sorting and grouping
- repeated markup patterns
- shared validation and normalization helpers

Do not over-apply DRY.

Keep things separate when:

- two components only look similar but behave differently
- combining them would require unclear flags or branching
- a shared abstraction would make future edits harder
- the visual system is intentionally unique

Good DRY removes real maintenance cost. Bad DRY hides unrelated concepts behind one complicated abstraction.

## CSS Ownership

Global CSS should be small and foundational.

Use global CSS for:

- base typography
- root variables
- document-level behavior
- shared page structure
- responsive rules that coordinate multiple components

Use component CSS for:

- component-specific visuals
- complex animations
- specialized controls
- gallery/lightbox visuals
- music player visuals

Do not create dumping-ground files such as `misc.css` or `common.css`.

## JavaScript Ownership

Runtime JavaScript should be split by system:

- `site.js`: bootstrapping and page-level binding
- `site-router.js`: page transitions and partial navigation
- `site-music.js`: persistent music playback
- `site-search.js`: search UI and index
- `site-lightbox.js`: gallery lightbox
- `site-citation.js`: publication citation copying
- `backgrounds.js`: animated backgrounds

Avoid expanding one script into an unrelated utility bucket.

## AI Maintenance Rules

For AI agents working on this repository:

- patch small sections instead of rewriting whole files
- explain the files being changed before editing
- preserve the current visual design unless explicitly asked to change it
- do not move assets without updating references
- do not add required CDN dependencies
- run validation after structural changes
- keep commit messages in Chinese when committing

## Validation

For meaningful changes, run:

```bash
pnpm build
pnpm exec astro check
pnpm test:e2e
```

Use smaller validation only when the change is clearly documentation-only.
