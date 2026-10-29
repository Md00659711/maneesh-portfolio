// Content Collections: each Markdown file in src/content/projects/ becomes a project.
// The schema validates the frontmatter at build time, so a typo fails loudly instead of silently.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    url: z.string().url().optional(),
    role: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    order: z.number().default(99),
    featured: z.boolean().default(true),
    accent: z.string().default('var(--accent)'),
  }),
});

export const collections = { projects };
