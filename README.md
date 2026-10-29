# Maneesh Singh Dhanik — Portfolio (Astro)

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at http://localhost:4321           |
| `npm run build`   | Build the static site into `dist/`            |
| `npm run preview` | Preview the built site locally                |

## Where things live

```
src/
├── config/site.ts          # Site name, default SEO description, main nav
├── data/                   # ✏️  Your content (edit text here, not in components)
│   ├── profile.ts          #   name, email, links, summary, stats, hero code lines
│   ├── skills.ts           #   skill groups + marquee
│   └── experience.ts       #   jobs + education
├── content/projects/*.md   # ✏️  One Markdown file = one project + its own page
├── content.config.ts       # Validates project frontmatter
├── layouts/BaseLayout.astro# <html>, <head>, header/footer, page transitions
├── components/
│   ├── seo/SEO.astro       # title, description, canonical, Open Graph, JSON-LD
│   ├── layout/             # Header, Footer, CommandPalette ("/" quick nav)
│   ├── sections/           # Home page sections (Hero, About, Skills, ...)
│   └── ui/                 # Reusable pieces (Block, ProjectCard, Breadcrumbs)
├── pages/                  # 🧭 Every file here is a URL
│   ├── index.astro         #   /
│   ├── projects/index.astro#   /projects/
│   ├── projects/[slug].astro#  /projects/<file-name>/
│   ├── 404.astro
│   └── robots.txt.ts       #   /robots.txt
└── styles/global.css       # Colour/font tokens (light + dark), base styles
```

## Common tasks

**Add a project** — copy `src/content/projects/sentry-medical.md`, rename it
(the file name becomes the URL), edit the frontmatter. It appears on the home
page, `/projects/`, the sitemap and the `/` palette automatically.

**Add a new page** (e.g. `/about/`) — create `src/pages/about.astro`:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---
<BaseLayout title="About" description="One sentence for Google, ~150 characters.">
  <section class="section"><div class="container">…</div></section>
</BaseLayout>
```

Then add it to `NAV` in `src/config/site.ts`.

**Add a blog later** — add a `blog` collection in `src/content.config.ts`
(same pattern as `projects`), then `src/pages/blog/index.astro` and
`src/pages/blog/[slug].astro`.

**Share images (Open Graph)** — generated automatically at build time by
`src/pages/og/[slug].png.ts`. When you add a new page, add an entry to
`getOgPages()` in `src/lib/og.ts`, otherwise it uses the home image.

**Terminal commands** — edit `commands()` in `src/components/layout/Terminal.astro`.
Open it on the site with the `` ` `` key.

**CV page** — `/cv/` is built from the same data files. "Download PDF" uses the
browser's print dialog (choose "Save as PDF").

**Engineering mindset** — the `define()` lines live in `MINDSET` in `src/data/profile.ts`.

**"Ask about me" assistant** — answers are the `topics` list in
`src/components/layout/Assistant.astro` (keywords → answer). It runs fully in the
browser; to use a real LLM later, replace `answer()` with a call to a serverless function.

**Blueprint mode** — press `B`. Add `data-bp="Name"` to any element to label it.

**Boot intro** — `src/components/ui/BootIntro.astro`, shown once per browser session.

## Before deploying

1. Set your real domain in `astro.config.mjs` → `site`.
2. Deploy `dist/` to Netlify, Vercel, Cloudflare Pages or GitHub Pages (all free for static sites).
