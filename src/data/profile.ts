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
    'I am a software engineer who specialises in WordPress. I build it the way engineers build software: Bedrock and Composer for structure, custom plugins instead of plugin soup, Gutenberg blocks written in React, and caching that holds up when traffic spikes.',
    'Over 6+ years I have shipped custom plugins, deep WooCommerce and payment-gateway work, multilingual WPML networks and API integrations, including codebases larger than 50GB. I take ownership end to end: requirements, estimates, code review, CI/CD and production.',
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
