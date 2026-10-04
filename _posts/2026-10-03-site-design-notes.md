---
title: "Building a Robotics Research Blog That Scales"
description: "A sample long-form post showing the intended article format for slee956k.github.io."
date: 2026-10-03 12:00:00 -0400
categories:
  - Engineering
  - Robot Learning
tags:
  - github-pages
  - jekyll
  - research-notes
math: true
---

## Why this structure

A useful technical blog should make it easy to move between **quick notes**, **deep technical articles**, and **topic-based browsing**. The site therefore separates Notes from Posts while keeping Categories as the common navigation layer.

## Long-form article style

Posts are designed for detailed technical writing: equations, implementation notes, diagrams, experiment tables, and references. The reading column stays wide enough for code and math while a desktop table of contents remains visible on the right.

### Example equation

For a residual policy, a useful conceptual decomposition is

\[
a_t = a_t^{\mathrm{nominal}} + \Delta a_t^{\mathrm{RL}}.
\]

This keeps a nominal behavior while allowing reinforcement learning to specialize corrections for contact, uncertainty, or domain shift.

## Categories and tags

Categories should stay broad and stable; tags can be more specific. A post about a VLA manipulation policy might use the categories `Robot Foundation Models` and `Manipulation`, while tags name the specific model, dataset, or algorithm.

## Publishing workflow

1. Draft or refine a note in ChatGPT.
2. Convert it to Markdown with front matter.
3. Commit it under `_notes/` or `_posts/`.
4. GitHub Actions builds the site.
5. GitHub Pages publishes the updated site.

## What comes next

The next iteration can add full-text search, automatic article generation, citation helpers, RSS, analytics, and richer project pages without changing the core information architecture.
