// Social share images (Open Graph). One PNG is generated per entry in getOgPages() at build time.
// When you add a new page, add an entry here too, or it will fall back to the home image.
import { getCollection } from 'astro:content';
import { SITE } from '@/config/site';
import { PROFILE } from '@/data/profile';

export type OgPage = { slug: string; eyebrow: string; title: string; subtitle: string; tags: string[] };

export async function getOgPages(): Promise<OgPage[]> {
  const projects = await getCollection('projects');
  return [
    { slug: 'home', eyebrow: `${PROFILE.role} · ${PROFILE.speciality}`, title: PROFILE.name, subtitle: SITE.description, tags: ['WordPress', 'PHP', 'React', 'AI-assisted'] },
    { slug: 'projects', eyebrow: 'Projects', title: 'Projects & case studies', subtitle: 'WordPress, WooCommerce and Gutenberg platforms I have built.', tags: [] },
    { slug: 'cv', eyebrow: 'CV / Résumé', title: PROFILE.name, subtitle: `${PROFILE.role} & ${PROFILE.speciality} · 6+ years · ${PROFILE.location}`, tags: ['Download PDF'] },
    ...projects.map((p) => ({
      slug: `projects-${p.id}`,
      eyebrow: 'Case study',
      title: p.data.title,
      subtitle: p.data.summary,
      tags: p.data.stack.slice(0, 4),
    })),
  ];
}

/** "/projects/sigma-world/" → "projects-sigma-world", "/" → "home" */
export const ogSlugFromPath = (pathname: string) => pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home';
