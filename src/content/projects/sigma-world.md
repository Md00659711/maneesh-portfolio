---
title: SiGMA World
summary: Full-stack work on a large multilingual WordPress platform serving a global gaming-industry audience, from custom plugins to query and caching fixes.
url: https://sigma.world/
role: Web Developer
year: 2025 – Present
stack: [PHP, WordPress Bedrock, Sage / Acorn, Gutenberg / React, ACF, WPML, SCSS, Git]
highlights:
  - ~65% faster page loads after a query and caching rewrite
  - ~3M peak visits on busy Mondays
  - React-powered Gutenberg blocks for editors
order: 1
accent: '#7b8cff'
---

## The challenge

SiGMA World runs several websites across languages and regions on WordPress. Pages pull a lot of related content, and traffic peaks hard at the start of each week. Every slow query is felt at scale.

## What I built

- **Custom plugins and mu-plugins** on a Bedrock + Sage/Acorn stack, managed with Composer.
- **Gutenberg blocks in React** so editorial and marketing teams can build pages without developer help.
- **ACF content structures** and **WPML multilingual logic** for localised content and metadata.
- **Performance work**: I batched several post-status lookups into a single indexed query with local caching. Real-world page load time dropped by about 65%.

## How I work on it

Docker-based local environments, Git workflows with code review, PSR coding standards, and cross-browser testing before anything goes out.
