// Builds /og/<slug>.png for every entry in getOgPages(), using Satori (layout → SVG) and Sharp (SVG → PNG).
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { getOgPages, type OgPage } from '@/lib/og';

export const getStaticPaths: GetStaticPaths = async () =>
  (await getOgPages()).map((page) => ({ params: { slug: page.slug }, props: { page } }));

const fontDir = join(process.cwd(), 'node_modules/@fontsource');
const fonts = Promise.all([
  readFile(join(fontDir, 'space-grotesk/files/space-grotesk-latin-500-normal.woff')),
  readFile(join(fontDir, 'space-grotesk/files/space-grotesk-latin-700-normal.woff')),
  readFile(join(fontDir, 'jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff')),
]);

// Tiny helper so we can describe the layout without JSX.
type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: (Node | string)[]): Node => ({
  type,
  props: { style: { display: 'flex', ...style }, children },
});

const C = { bg: '#0b0d12', line: '#1c2130', text: '#e8eaf0', muted: '#9198a8', faint: '#5f6678', accent: '#7b8cff', hot: '#ffb547' };

function layout(p: OgPage): Node {
  const subtitle = p.subtitle.length > 150 ? `${p.subtitle.slice(0, 147)}…` : p.subtitle;
  return h(
    'div',
    {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      background: C.bg,
      backgroundImage: `radial-gradient(circle at 85% 15%, rgba(123,140,255,0.28), transparent 45%), linear-gradient(${C.line} 1px, transparent 1px), linear-gradient(90deg, ${C.line} 1px, transparent 1px)`,
      backgroundSize: '100% 100%, 60px 60px, 60px 60px',
      color: C.text,
      fontFamily: 'Space Grotesk',
    },
    h(
      'div',
      { alignItems: 'center', gap: 16 },
      h('div', { width: 56, height: 56, borderRadius: 14, background: C.text, color: C.bg, alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700 }, 'M', h('span', { color: '#3858e9' }, '/')),
      h('div', { fontFamily: 'JetBrains Mono', fontSize: 22, color: C.muted }, 'maneesh', h('span', { color: C.faint }, '.dev')),
    ),
    h(
      'div',
      { flexDirection: 'column' },
      h('div', { fontFamily: 'JetBrains Mono', fontSize: 24, color: C.accent, marginBottom: 18 }, `// ${p.eyebrow}`),
      h('div', { fontSize: p.title.length > 22 ? 70 : 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }, p.title),
      h('div', { marginTop: 24, fontSize: 28, color: C.muted, lineHeight: 1.4, maxWidth: 980 }, subtitle),
    ),
    h(
      'div',
      { alignItems: 'center', justifyContent: 'space-between' },
      h(
        'div',
        { gap: 10 },
        ...p.tags.map((t) => h('div', { padding: '8px 16px', border: `1px solid ${C.line}`, borderRadius: 999, fontFamily: 'JetBrains Mono', fontSize: 18, color: C.muted, background: '#12151c' }, t)),
      ),
      h('div', { fontFamily: 'JetBrains Mono', fontSize: 20, color: C.hot }, 'Kumaoni Pahadi · Uttarakhand'),
    ),
  );
}

export const GET: APIRoute = async ({ props }) => {
  const [medium, bold, mono] = await fonts;
  const svg = await satori(layout(props.page as OgPage) as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Space Grotesk', data: medium, weight: 500, style: 'normal' },
      { name: 'Space Grotesk', data: bold, weight: 700, style: 'normal' },
      { name: 'JetBrains Mono', data: mono, weight: 500, style: 'normal' },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
