# Agent Maintenance Guide

This file is the English AI-maintenance entry point for the documentation site. The canonical repository-level agent guide remains `AGENTS.md` in the repository root and is written in Chinese.

## Read Order

Before making substantial changes, read these documents in order:

1. `README.md`
2. `specs/maintenance-plan.md`
3. `specs/module-map.md`
4. `specs/engineering-principles.md`
5. `specs/astro-migration-plan.md`
6. `docs-site/specs/mkdocs_prd.md`
7. `docs-site/specs/github_action_prd.md`

For Chinese maintenance context, read the matching `.zh.md` or `.zh.md` documents through `docs-site/cn/`.

## Working Rules

- Prefer small patches over whole-file rewrites.
- Keep existing visual behavior unless the change explicitly targets UI behavior.
- Reuse existing Markdown through symbolic links when possible.
- Keep English and Chinese documentation structurally aligned.
- Preserve the Astro portfolio site and the documentation maintenance site as separate concerns.
- Do not introduce CDN dependencies; prefer local assets for network availability.
- Use Spec-Driven Development (SDD): update specs before broad implementation changes.

## Directory Ownership

- `src/`: Astro portfolio source code.
- `public/`: deployed static assets for the portfolio.
- `specs/`: portfolio engineering contracts and module-level maintenance specs.
- `docs-site/specs/`: PRDs and documentation-site implementation requirements.
- `docs-site/cn/`: Chinese documentation entry points and symlinks.
- `docs-site/en/`: English documentation entry points and symlinks.
- `tools/`: maintenance scripts that are not deployed as site assets.

## Validation

For portfolio changes, run:

```bash
pnpm validate
```

For documentation-site changes, validate links and naming manually until a MkDocs build pipeline is added.

## Design Boundary

The public portfolio is the presentation surface. The documentation site is the maintenance surface. They may link to each other, but they should not share build ownership or navigation responsibilities.
