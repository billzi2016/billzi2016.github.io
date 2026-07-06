# billzi2016.github.io

Source code for my personal academic website.

Website: [https://billzi2016.github.io/](https://billzi2016.github.io/)

Chinese documentation: [README_CN.md](README_CN.md)

## Overview

This is an Astro-based static academic portfolio website covering research interests, technical skills, projects, publications, experience, education, personal interests, and a small local music page.

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
- `src/components/`: Header, content sections, image galleries, lists, and other reusable UI components.
- `src/data/`: Site metadata, navigation links, and generated content modules used by Astro.
- `src/styles/tailwind.css`: Tailwind entry file.
- `public/styles/`: Legacy-compatible split CSS imported by `public/styles/main.css`.
- `public/scripts/`: Runtime behavior for theme switching, language switching, music playback, search, routing, publications, and image lightbox.
- `public/assets/`: Local images, audio, MIDI files, PDF, and asset documentation.

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
pnpm exec astro check
```

## Deployment

The site is built with GitHub Actions and deployed to GitHub Pages from the generated Astro output.

## Data Organization

Runtime-compatible source data remains under:

- `public/scripts/data/shared-data.js`
- `public/scripts/data/home-data.js`
- `public/scripts/data/experience-data.js`
- `public/scripts/data/projects-data.js`
- `public/scripts/music-data.js`
- `public/scripts/publications-data.js`

Astro-facing generated data modules live in `src/data/generated/`. The current runtime JavaScript is retained for language switching, music playback continuity, search, image lightbox behavior, and publication citation buttons.

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
