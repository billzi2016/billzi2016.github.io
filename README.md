# billzi2016.github.io

Source code for Ziqian Bi's personal academic website.

Website: [https://billzi2016.github.io/](https://billzi2016.github.io/)

Chinese documentation: [README_CN.md](README_CN.md)

## Overview

This is a static academic portfolio website covering research interests, technical skills, projects, publications, experience, education, and a small music page.

## Pages

- `index.html`: Home
- `experience.html`: Experience and education
- `projects.html`: Project portfolio
- `publications.html`: Publications
- `personal.html`: Personal introduction
- `music.html`: Music page

## Structure

- `partials/header.html`: Shared site header loaded by JavaScript.
- `templates/head.html`: Shared `<head>` template used by the page generator.
- `styles/`: Split CSS files imported by `styles/main.css`.
- `scripts/data/`: Split content data files by domain.
- `scripts/content-data.js`: Thin aggregator that exposes `window.siteContent`.
- `scripts/site-*.js`: Page renderers and runtime behavior.
- `tools/`: Maintenance scripts for generated static fragments and cache-busting versions.

## Local Preview

```bash
python3 server.py
```

Then open `http://localhost:8000/`.

## Maintenance Tools

Regenerate repeated page `<head>` blocks after editing `templates/head.html` or page metadata in `tools/generate_pages.py`:

```bash
python3 tools/generate_pages.py
```

Update the stylesheet cache-busting version across all static pages:

```bash
python3 tools/bump_css_version.py 20260624-1
```

## Development Workflow

For normal content edits, update the relevant file under `scripts/data/`, then keep `scripts/content-data.js` as the thin aggregation layer.

When changing page metadata or shared `<head>` content, edit `templates/head.html` or the page metadata in `tools/generate_pages.py`, then run:

```bash
python3 tools/generate_pages.py
```

When changing `styles/main.css` imports or needing a fresh browser cache key, run:

```bash
python3 tools/bump_css_version.py 20260624-1
```

Before committing structural changes, run a lightweight syntax check:

```bash
node --check scripts/content-data.js
```

## Data Organization

Main content data is split into:

- `scripts/data/shared-data.js`
- `scripts/data/home-data.js`
- `scripts/data/experience-data.js`
- `scripts/data/projects-data.js`

The static HTML pages load those files first, then load `scripts/content-data.js`, which assembles the single runtime object used by the renderers.
