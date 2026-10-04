---
title: "Residual RL: Quick Note"
description: "A short note template for BC nominal + RL residual policies."
date: 2026-10-03 11:00:00 -0400
tags:
  - residual-rl
  - manipulation
  - assembly
---

## Core idea

Use an existing nominal controller or behavior-cloned policy to produce a baseline action and train a residual policy to make bounded corrections.

## Why it is useful

This decomposition is attractive when the nominal policy already solves most of the task but needs additional robustness around contact transitions, insertion tolerances, or sim-to-real mismatch.

## Note template

Use this page type for compact research summaries. Promote a note to a full post when it grows into a complete technical article with experiments, figures, and references.
