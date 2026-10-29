// Shown on the home page as a WordPress-style "Plugins" screen.
export type SkillGroup = {
  slug: string;
  name: string;
  description: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    slug: 'wordpress',
    name: 'WordPress Core',
    description: 'Custom themes, plugins and the modern WordPress stack.',
    items: ['WordPress', 'Bedrock', 'Sage / Acorn', 'Custom Themes', 'Plugin Development', 'Gutenberg Blocks', 'Multisite', 'WordPress VIP'],
  },
  {
    slug: 'frontend',
    name: 'PHP & Frontend',
    description: 'Server-side PHP and interfaces that work in every browser.',
    items: ['PHP (OOP)', 'Laravel Blade', 'JavaScript', 'React', 'Angular', 'jQuery', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS'],
  },
  {
    slug: 'commerce',
    name: 'E-commerce & CMS',
    description: 'Stores, structured content and search.',
    items: ['WooCommerce', 'Payment Gateways', 'ACF', 'WPML', 'Algolia', 'Shopify', 'Webflow', 'Wix'],
  },
  {
    slug: 'backend',
    name: 'Backend & APIs',
    description: 'Data, integrations and the glue between systems.',
    items: ['MySQL', 'REST APIs', 'Third-party APIs', 'AJAX', 'Query Optimisation', 'Caching'],
  },
  {
    slug: 'devops',
    name: 'DevOps & Tooling',
    description: 'Local-to-production workflows that are repeatable.',
    items: ['Docker', 'Composer', 'NPM', 'Git', 'GitHub Actions', 'Buddy', 'CI/CD', 'SSH', 'cPanel', 'SSL', 'Grafana', 'Linux'],
  },
  {
    slug: 'ai',
    name: 'AI-Assisted Engineering',
    description: 'Using AI to move faster, with human review on every line.',
    items: ['AI Pair Programming', 'Prompt Design', 'AI Code Review', 'Generative AI (learning)', 'LLM APIs (learning)'],
  },
  {
    slug: 'quality',
    name: 'SEO & Quality',
    description: 'Making sites findable, fast and safe.',
    items: ['Technical SEO', 'Yoast SEO', 'XML Sitemaps', 'Canonical URLs', 'Performance', 'Cross-browser Testing', 'Security', 'Agile / Scrum', 'Jira', 'PR / Code Review'],
  },
];

// Short list for the scrolling marquee in the hero.
export const MARQUEE = ['WordPress', 'PHP', 'Gutenberg', 'React', 'AI-assisted', 'Performance', 'WooCommerce', 'Bedrock', 'ACF', 'WPML', 'Tailwind', 'Docker', 'REST API', 'Algolia', 'MySQL', 'Git'];
