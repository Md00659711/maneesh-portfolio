// Global site settings. Every page reads from here, so you change things in one place.
export const SITE = {
  name: 'Maneesh Singh Dhanik',
  shortName: 'Maneesh',
  title: 'Maneesh Singh Dhanik — Software Engineer & WordPress Developer',
  description:
    'Software engineer and WordPress developer with 6+ years building fast, scalable platforms in PHP, React and Gutenberg, with an AI-assisted, performance-first workflow.',
  locale: 'en_IN',
  lang: 'en',
  twitterHandle: '',
};

// Main navigation. `href` values starting with "/#" are sections on the home page;
// real pages (like /projects/) work the same way, so adding a page is just adding a line here.
export const NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Mindset', href: '/#mindset' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Contact', href: '/#contact' },
];
