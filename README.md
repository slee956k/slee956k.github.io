# slee956k.github.io

Personal robotics / Physical AI research blog built with Jekyll and GitHub Pages.

## Information architecture

- Home: compact researcher landing page; all content sections are collapsed by default.
- Categories: broad topic navigation.
- Posts: long-form technical articles with a generated table of contents.
- Notes: shorter research notes and ChatGPT-assisted summaries.
- Projects: selected projects.

## Repository visibility

The repository can be private if the GitHub account/organization plan supports GitHub Pages from private repositories. The published Pages site is normally public even when its source repository is private.

## Publish

1. Create a repository named `slee956k.github.io`.
2. Use `main` as the default branch.
3. Add these files and push.
4. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The included `.github/workflows/pages.yml` builds and deploys the site on each push to `main`.

## Add a long article

Create `_posts/YYYY-MM-DD-slug.md` with front matter:

```yaml
---
title: "Article title"
description: "One-line summary"
date: 2026-10-03 12:00:00 -0400
categories:
  - Robot Learning
  - Manipulation
tags:
  - vla
  - residual-rl
---
```

## Add a note

Create `_notes/my-note.md` with:

```yaml
---
title: "Note title"
description: "Short summary"
date: 2026-10-03 12:00:00 -0400
tags:
  - openpi
---
```

The note is published at `/notes/my-note/`.
