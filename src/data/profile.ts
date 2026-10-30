export const PROFILE = {
  name: 'Maneesh Singh Dhanik',
  firstName: 'Maneesh',
  role: 'Software Engineer',
  speciality: 'WordPress Developer',
  tagline: 'WordPress · PHP · React · AI-assisted engineering',
  location: 'Noida, Uttar Pradesh, India',
  roots: 'Kumaon, Uttarakhand',
  email: 'manishdhanik786@gmail.com',
  available: true,
  links: {
    linkedin: 'https://in.linkedin.com/in/maneesh-singh-dhanik-4720a4190',
    github: 'https://github.com/Md00659711',
    wporg: 'https://profiles.wordpress.org/manishdhanik/',
  },
  summary: [
    'I am Maneesh Singh Dhanik, a software engineer and freelance WordPress developer based in Noida, India. I build WordPress the way engineers build software: Bedrock and Composer for structure, custom plugins instead of plugin soup, Gutenberg blocks written in React, and caching that holds up when traffic spikes.',
    'Over 6+ years I have shipped custom plugins, WordPress VIP enterprise projects, deep WooCommerce and payment-gateway work, multilingual WPML networks and API integrations, including codebases larger than 50GB. I take ownership end to end: requirements, estimates, code review, CI/CD and production.',
    'AI is part of my daily workflow: I use it to explore ideas, scaffold code and review changes faster, and every line is still read and owned by me before it ships. I am also deepening my Generative AI skills through the Namaste AI program.',
  ],
};

export const STATS = [
  { value: 6, suffix: '+', label: 'Years building for the web' },
  { value: 3, suffix: 'M', label: 'Peak visits supported on a busy Monday' },
  { value: 65, suffix: '%', label: 'Faster page loads from one query fix' },
  { value: 50, suffix: 'GB+', label: 'Largest codebase worked on' },
];

// Distributed teams I've worked with. `tz` is an IANA time zone, used for the live clocks.
export const TEAMS = [
  { country: 'India', code: 'IN', tz: 'Asia/Kolkata', home: true },
  { country: 'United Kingdom', code: 'UK', tz: 'Europe/London' },
  { country: 'United States', code: 'US', tz: 'America/New_York' },
  { country: 'Brazil', code: 'BR', tz: 'America/Sao_Paulo' },
  { country: 'Serbia', code: 'RS', tz: 'Europe/Belgrade' },
  { country: 'Malta', code: 'MT', tz: 'Europe/Malta' },
  { country: 'Cyprus', code: 'CY', tz: 'Asia/Nicosia' },
  { country: 'Australia', code: 'AU', tz: 'Australia/Sydney' },
  { country: 'New Zealand', code: 'NZ', tz: 'Pacific/Auckland' },
];

// The "Off the clock" section. Each line is written like a WordPress hook.
export const INTERESTS = [
  {
    icon: '🏏',
    title: 'Cricket',
    code: "while ( is_weekend() ) { play_cricket(); }",
    text: 'My favourite way to switch off. Cricket is a team game first, and that is how I like to work too.',
  },
  {
    icon: '🥾',
    title: 'Trekking',
    code: "wp_trail( 'himalaya', [ 'pace' => 'steady' ] );",
    text: 'I grew up in the hills, so trails feel like home. A long climb clears the head better than any debugger.',
  },
  {
    icon: '🏋️',
    title: 'Gym',
    code: "add_action( 'morning', 'lift_heavy' );",
    text: 'Strength training keeps me disciplined. Consistency beats intensity, in the gym and in a codebase.',
  },
  {
    icon: '🥗',
    title: 'Healthy living',
    code: "apply_filters( 'lifestyle', 'balanced' );",
    text: 'Good food, real sleep, moving every day. A healthy routine is how I stay sharp for the hard problems.',
  },
];

// The "hook" lines typed out in the hero. Feel free to add your own.
export const HOOKS = [
  "add_action( 'init', 'build_fast_websites' );",
  "add_filter( 'the_content', 'make_it_multilingual' );",
  "register_block_type( 'maneesh/react-blocks' );",
  "add_filter( 'workflow', 'ai_assisted_human_reviewed' );",
  "do_action( 'ship_to_production' );",
];

// The "Engineering mindset" section: principles written as wp-config.php constants.
export const MINDSET = [
  {
    name: 'MEASURE_BEFORE_OPTIMISING',
    value: 'true',
    title: 'Measure first, then fix',
    text: 'I profile before I touch anything: Query Monitor, slow-query logs, Grafana. Fixing the real bottleneck is how six queries became one and pages got 65% faster.',
  },
  {
    name: 'OWN_IT_TO_PRODUCTION',
    value: 'true',
    title: 'Done means deployed',
    text: 'Requirements, code, review, CI/CD, monitoring. Docker locally, GitHub Actions or Buddy to ship, and I stay with it after release. "Works on my machine" is not done.',
  },
  {
    name: 'AI_ASSISTED_HUMAN_REVIEWED',
    value: 'true',
    title: 'AI drafts, engineers decide',
    text: 'I use AI to explore approaches, scaffold boilerplate and review diffs faster. Every line is still read, tested and owned by me. AI speeds up the work; it does not replace judgement.',
  },
  {
    name: 'CHOOSE_BORING_TECH',
    value: 'true',
    title: 'Proven tools, used well',
    text: 'WordPress, PHP and MySQL power a huge part of the web. Using proven tools with sharp engineering (caching, indexing, clean architecture) beats chasing whatever is new this month.',
  },
  {
    name: 'LEAVE_IT_BETTER',
    value: 'true',
    title: 'Every PR leaves it cleaner',
    text: 'PSR standards, small functions, clear names, useful commit messages. On a 50GB+ codebase, small improvements on every pull request add up.',
  },
  {
    name: 'ASYNC_BY_DEFAULT',
    value: "'UTC+5:30'",
    title: 'Clear across time zones',
    text: 'I work with teams from New Zealand to Brazil. Written updates, clear tickets and honest estimates keep everyone moving while I sleep, and the other way round.',
  },
  {
    name: 'WP_DEBUG',
    value: "'always_on_in_my_head'",
    title: 'Curious about the why',
    text: 'Off in production, always on in my head. I want to know why something broke, not just how to patch it, so the same bug does not come back next month.',
  },
];

// Freelance work: the home-page "Hire me" section and the /hire/ landing page.
// `heading` and `detail` are the search-friendly versions used on /hire/; `title` and `text` are the short card versions.
export const FREELANCE = {
  delivered: 100,
  rate: 10, // USD per hour
  // The markets the freelance pages are written for. `code` matches TEAMS.
  markets: [
    { country: 'United States', code: 'US', flag: '🇺🇸' },
    { country: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
    { country: 'Australia', code: 'AU', flag: '🇦🇺' },
    { country: 'New Zealand', code: 'NZ', flag: '🇳🇿' },
  ],
  // Free extras, chosen from what the top-ranking agencies and freelancers offer.
  offers: [
    { icon: '⚡', title: 'Free speed & health check', text: 'Run the free WordPress speed test, or send me your link and I will review the site and list what to fix.' },
    { icon: '📝', title: 'Free written estimate', text: 'A clear scope, price and timeline before any work starts. No call needed, no obligation.' },
    { icon: '🛟', title: '7 days of free support', text: 'After every fix or launch, I fix anything related that comes up in the next 7 days at no cost.' },
  ],
  // Why clients stay: shown on /hire/. Facts about how clients work with me, not quotes.
  trust: [
    { icon: '🔁', title: 'Clients come back', text: 'Most clients return with their next project, and many have given me several. Repeat work is how most of my projects start.' },
    { icon: '🎨', title: 'Work clients are proud of', text: 'Clients regularly tell me they love the design and how the site works. That is the standard I hold every project to.' },
    { icon: '🧭', title: 'Easy to manage', text: 'I build sites your team can update on their own, and I keep you posted in writing, so working with me is simple.' },
    { icon: '🤝', title: 'Trusted long term', text: 'Clients in the US, UK and New Zealand trust me with live sites, logins and launches, and keep working with me.' },
  ],
  services: [
    {
      icon: '🎨',
      title: 'Theme development',
      heading: 'Custom WordPress theme development',
      slug: 'custom-theme',
      text: 'Custom themes built from your design: block themes, classic themes or Bedrock setups, fast and easy for editors to use.',
      detail:
        'Pixel-accurate custom WordPress themes built from your Figma or design files: block themes with full site editing, classic PHP themes, or Bedrock and Composer setups for teams. Clean, documented code that is fast, accessible and easy for your editors to manage.',
    },
    {
      icon: '🧩',
      title: 'Plugin development',
      heading: 'Custom WordPress plugin development',
      slug: 'custom-plugin',
      text: 'Custom plugins for the features your business needs, instead of stacking ten plugins that half fit.',
      detail:
        'Custom WordPress plugins for the features your business actually needs: bookings, directories, custom post types, REST API endpoints, CRM and third-party API integrations. One well-built plugin instead of ten that half fit and slow the site down.',
    },
    {
      icon: '🧱',
      title: 'Gutenberg blocks',
      heading: 'Gutenberg block development',
      slug: 'block-library',
      text: 'Native blocks written in React, so editors can build pages themselves without breaking the design.',
      detail:
        'Native Gutenberg blocks written in React, plus block patterns and theme.json styling, so your team can build new pages without a developer and without breaking the design. I also convert ACF and page-builder layouts to native blocks.',
    },
    {
      icon: '🛒',
      title: 'WooCommerce',
      heading: 'WooCommerce development',
      slug: 'woocommerce-custom',
      text: 'Stores, checkout customisation, payment gateways and integrations with the tools you already use.',
      detail:
        'WooCommerce stores built and customised: checkout changes, product and pricing rules, subscriptions, payment gateway integrations and connections to your ERP, shipping or accounting tools. Fixes for checkout and payment errors that cost you sales.',
    },
    {
      icon: '⚡',
      title: 'Speed optimisation',
      heading: 'WordPress speed optimisation',
      slug: 'performance-audit',
      text: 'Core Web Vitals, slow queries, caching and heavy scripts. Measured before and after, so you see the difference.',
      detail:
        'A slow WordPress site loses visitors and Google rankings. I audit Core Web Vitals (LCP, INP, CLS), slow database queries, caching, images and heavy scripts, fix the real bottleneck, and show you the before and after numbers.',
    },
    {
      icon: '🌐',
      title: 'Multisite',
      heading: 'WordPress Multisite development',
      slug: 'multisite-network',
      text: 'One WordPress network for many sites or brands, with shared code and one place to update.',
      detail:
        'WordPress Multisite networks for companies running many sites, brands or regions: shared themes and plugins, one place to update, and per-site control where you need it. Migrations from separate installs into one network.',
    },
    {
      icon: '🏢',
      title: 'WordPress VIP',
      heading: 'WordPress VIP development',
      slug: 'wordpress-vip',
      text: 'Enterprise WordPress on the VIP platform: code that meets VIP standards and passes code review first time.',
      detail:
        'Enterprise WordPress VIP development: themes, plugins and features written to WordPress VIP coding standards, built for VIP caching and platform rules, and ready to pass VIP code review. Experience delivering on VIP projects for high-traffic publishers and brands.',
    },
    {
      icon: '🗣️',
      title: 'Multilingual',
      heading: 'Multilingual WordPress (WPML)',
      slug: 'multilingual',
      text: 'WPML and multi-market sites: translations, language URLs and SEO set up so each market works properly.',
      detail:
        'Multilingual and multi-market WordPress sites with WPML: language URLs, hreflang, translated menus and media, and per-country content, set up so each market ranks in its own language. Clean-up of duplicate translations on existing sites.',
    },
    {
      icon: '📰',
      title: 'Content-heavy sites',
      heading: 'News and content-heavy WordPress sites',
      slug: 'content-platform',
      text: 'News, magazine and directory sites with custom post types, smart filters and search that stays fast at scale.',
      detail:
        'News, magazine, directory and media sites with tens of thousands of posts: custom post types, taxonomies, filters, fast search and editorial workflows that stay quick at scale. Experience with sites handling millions of visits.',
    },
    {
      icon: '🐞',
      title: 'Bug fixing & support',
      heading: 'WordPress bug fixing and support',
      slug: 'wp-support',
      text: 'Something broke after an update? White screen, errors, a feature that stopped working. I find the cause and fix it.',
      detail:
        'Fast WordPress bug fixing for errors, broken layouts, plugin conflicts and features that stopped working, plus monthly WordPress support and maintenance: updates, backups, security checks and small changes, so your site keeps running.',
    },
  ],
  // Errors people search for when their site breaks. Shown on /hire/ as a debug log.
  problems: [
    { error: 'There has been a critical error on this website', fix: 'Fatal PHP errors traced and fixed' },
    { error: 'White screen of death', fix: 'Blank pages and admin brought back' },
    { error: 'Site broke after a plugin, theme or WordPress update', fix: 'Conflict found, fixed and tested' },
    { error: 'Error establishing a database connection', fix: 'Database and hosting issues resolved' },
    { error: 'WooCommerce checkout or payment not working', fix: 'Checkout and gateway errors fixed' },
    { error: 'Site fails Core Web Vitals / loads slowly', fix: 'Speed and Core Web Vitals improved' },
    { error: 'wp-admin is very slow', fix: 'Slow queries and heavy plugins cleaned up' },
    { error: 'Errors after upgrading PHP', fix: 'Code updated for PHP 8.x' },
    { error: 'Layout broken on mobile', fix: 'Responsive styles repaired' },
    { error: 'Contact form emails not arriving', fix: 'SMTP and email delivery fixed' },
  ],
  process: [
    { title: 'Tell me what you need', text: 'Send the bug, the feature or the project brief. A link and a few lines is enough to start.' },
    { title: 'Written estimate', text: 'I review the site or brief and send a clear scope, price and timeline before any work begins.' },
    { title: 'Build and test', text: 'Work happens on a staging copy, never straight on your live site, and is tested before launch.' },
    { title: 'Launch and support', text: 'I deploy, check everything on the live site and stay available for fixes and future changes.' },
  ],
  // Common questions from freelance clients, shown as resolved support-forum threads.
  faq: [
    {
      q: 'Do you take small jobs, or only full websites?',
      a: 'Both. A single bug fix, one new feature or a full build: tell me what you need and I will say honestly whether I am the right fit.',
    },
    {
      q: 'My WordPress site is slow. Can you fix it?',
      a: 'Yes. I measure first (Core Web Vitals, Query Monitor, slow queries), fix the real bottleneck, then measure again so you can see the result. On one project a single query fix made pages 65% faster.',
    },
    {
      q: 'Something broke after a plugin or WordPress update. Can you help?',
      a: 'Yes. I find which update caused it, fix the cause rather than hiding the error, and test the rest of the site before handing it back.',
    },
    {
      q: 'Can you work on a site someone else built?',
      a: 'Yes, most support work is on existing sites. I review the code first, explain what I find in plain words, and then fix it without breaking what already works.',
    },
    {
      q: 'Have you worked on WordPress VIP projects?',
      a: 'Yes. I have delivered work on WordPress VIP, the enterprise WordPress platform. I write code to VIP coding standards and its platform rules (caching, no direct file writes, safe database queries), so it passes VIP code review and holds up under enterprise traffic.',
    },
    {
      q: 'How much do you charge?',
      a: '$10 per hour (USD). Bug fixes and small changes are billed by the hour, and larger projects get a fixed price based on a free written estimate, so you know the cost before I start.',
    },
    {
      q: 'Do you offer ongoing WordPress support and maintenance?',
      a: 'Yes. Updates, backups, security checks, small changes and fixes, so your site keeps running while you focus on your business.',
    },
    {
      q: 'Do you work with clients in the US, UK, Australia and New Zealand?',
      a: 'Yes, most of my clients are in the US, UK and New Zealand. From India (UTC+5:30) my working day overlaps with UK mornings, US East Coast mornings and Australian and NZ afternoons, and work often moves forward while you sleep.',
    },
    {
      q: 'Is anything free?',
      a: 'Yes: a free speed and health check of your site, a free written estimate before any work, and 7 days of free support after every fix or launch.',
    },
    {
      q: 'Who owns the code?',
      a: 'You do. The code goes into your repository or server, with notes on how it works, so any developer can take it over later.',
    },
  ],
};
