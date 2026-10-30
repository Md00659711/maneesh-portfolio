import type { APIRoute } from 'astro';

// Generated at build time so the sitemap URL always matches `site` in astro.config.mjs.
// AI search and answer-engine crawlers are named explicitly so it is clear they are welcome (GEO/AEO).
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  const llms = new URL('llms.txt', site).href;
  const bots = AI_BOTS.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join('\n');
  return new Response(`User-agent: *\nAllow: /\n\n${bots}\n# Plain-text summary for AI assistants: ${llms}\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
