// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Change this to your real domain before deploying.
  // It powers canonical URLs, Open Graph URLs and sitemap.xml.
  site: 'https://maneesh-portfolio-ivory.vercel.app',
  trailingSlash: 'always',
  build: {
    format: 'directory', // /projects/sentry-medical/ -> clean, SEO-friendly URLs
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [sitemap()],
});
