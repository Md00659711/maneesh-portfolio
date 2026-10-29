// Rendered as a `git log` style timeline. Newest first.
export type Job = {
  company: string;
  role: string;
  location: string;
  start: string; // ISO "YYYY-MM" so it can be used in <time datetime>
  end: string | null; // null = present
  hash: string; // decorative short "commit hash"
  highlights: string[];
  stack: string[];
};

export const EXPERIENCE: Job[] = [
  {
    company: 'SiGMA World',
    role: 'Web Developer',
    location: 'Noida',
    start: '2025-04',
    end: null,
    hash: 'a7f3c21',
    highlights: [
      'Build and maintain multilingual, multi-network WordPress sites for a global platform with ~3M peak visits on busy Mondays.',
      'Batched several post-status lookups into one indexed query with local caching, cutting real-world page load time by ~65%.',
      'Develop React-based Gutenberg blocks and Tailwind CSS interfaces for editorial and marketing teams.',
      'Custom plugins, ACF structures, WPML logic and REST APIs on a Bedrock + Composer stack, with Docker locally and Git workflows to deploy.',
    ],
    stack: ['Bedrock', 'Gutenberg/React', 'ACF', 'WPML', 'Tailwind', 'Docker'],
  },
  {
    company: 'Infinity Soft Systems',
    role: 'Web Developer',
    location: 'Noida',
    start: '2023-10',
    end: '2025-04',
    hash: '4e9b0d8',
    highlights: [
      'Built and deployed custom WordPress themes with responsive, performance-focused front ends.',
      'Integrated payment gateways, marketing tools, Google Maps, analytics and external APIs.',
      'Customised WooCommerce checkout flows, product displays and discount rules.',
      'Owned client communication: requirements, progress updates and technical discussions.',
    ],
    stack: ['WooCommerce', 'PHP', 'APIs', 'Agile'],
  },
  {
    company: 'Prologic Web Solutions',
    role: 'Web Developer',
    location: 'Noida',
    start: '2021-09',
    end: '2023-09',
    hash: 'c12e6fa',
    highlights: [
      'Developed responsive WordPress sites with a focus on usability and maintainable front-end code.',
      'Tested across browsers and environments, fixing functional and UI bugs before delivery.',
      'Customised themes, layouts and plugins to fit each project.',
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
  },
  {
    company: 'Outright Systems',
    role: 'Web Developer',
    location: 'Noida',
    start: '2021-02',
    end: '2021-09',
    hash: '9d04b3e',
    highlights: [
      'Built and maintained in-house WordPress sites and web apps for CRM and store products.',
      'Worked across front end and back end on features, integrations and maintenance.',
    ],
    stack: ['WordPress', 'PHP', 'MySQL'],
  },
  {
    company: 'Garage Productions',
    role: 'Web Developer',
    location: 'Noida',
    start: '2020-03',
    end: '2021-02',
    hash: '0b1a5e7',
    highlights: [
      'First role: built and maintained WordPress informational sites with HTML, CSS and JavaScript.',
      'Worked extensively with Elementor, WPBakery and plugins to ship responsive pages.',
    ],
    stack: ['WordPress', 'Elementor', 'HTML/CSS'],
  },
];

export const EDUCATION = [
  { title: 'Diploma in Information Technology', org: 'Uttarakhand Board of Technical Education', period: '2016 – 2019', note: "Dean's List / Honors" },
  { title: 'Bachelor of Arts (BA)', org: 'Kumaun University', period: '2015 – 2018', note: '' },
  { title: 'AI / Generative AI Certification', org: 'Namaste AI (NamasteDev)', period: 'In progress', note: '' },
  { title: 'PHP Training', org: 'One-month intensive program', period: '', note: '' },
];
