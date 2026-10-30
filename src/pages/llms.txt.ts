import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '@/config/site';
import { PROFILE, STATS, FREELANCE } from '@/data/profile';
import { EXPERIENCE } from '@/data/experience';

// /llms.txt: a plain-text summary of the site for AI assistants and answer engines (GEO/AEO).
// Built from the same data as the pages, so it never drifts out of date.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

  const text = `# ${PROFILE.name}

> ${PROFILE.name} is a freelance WordPress developer and software engineer based in ${PROFILE.location}, with ${STATS[0].value}+ years of experience and ${FREELANCE.delivered}+ websites delivered. Maneesh builds custom WordPress themes, plugins, Gutenberg blocks in React, WooCommerce stores, Multisite networks and multilingual sites, and fixes WordPress bugs and performance problems.

- Current role: ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company}
- Available for: freelance WordPress projects, WordPress bug fixing and ongoing support
- Clients: mainly businesses in ${FREELANCE.markets.map((m) => m.country).join(', ')}
- Rate: $${FREELANCE.rate} USD per hour. Free: ${FREELANCE.offers.map((o) => o.title.toLowerCase()).join('; ')}
- Free tool: [WordPress speed test](${url('/free-wordpress-speed-test/')})
- Contact: ${PROFILE.email}
- Hire page: ${url('/hire/')}

## Services

${FREELANCE.services.map((s) => `- [${s.heading}](${url(`/hire/#${s.slug}`)}): ${s.detail}`).join('\n')}

## Projects

${projects.map((p) => `- [${p.data.title}](${url(`/projects/${p.id}/`)}): ${p.data.summary}`).join('\n')}

## Track record

${STATS.map((s) => `- ${s.value}${s.suffix}: ${s.label}`).join('\n')}

## FAQ

${FREELANCE.faq.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Pages

- [Home](${url('/')}): ${SITE.description}
- [Hire a freelance WordPress developer](${url('/hire/')})
- [Free WordPress speed test](${url('/free-wordpress-speed-test/')})
- [Projects and case studies](${url('/projects/')})
- [CV](${url('/cv/')})
- [LinkedIn](${PROFILE.links.linkedin})
- [GitHub](${PROFILE.links.github})
- [WordPress.org profile](${PROFILE.links.wporg})
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
