import { Search, Bot, Code, Database, Sparkles, Globe, type LucideIcon } from 'lucide-react';

export interface WorkMetric {
  label: string;
  value: string;
}

export interface WorkCase {
  slug: string;
  client: string;
  industry: string;
  service: string;
  filter: string;
  icon: LucideIcon;
  color: 'blue' | 'violet' | 'amber' | 'emerald' | 'rose' | 'cyan';
  tagline: string;
  challenge: string;
  solution: string;
  solutionDetail: string[];
  results: string;
  metrics: WorkMetric[];
  deliverables: string[];
  quote: string;
  author: string;
  role: string;
  initials: string;
  timeline: string;
  year: string;
  /**
   * Visual type:
   * 'screenshot' — browser chrome + screenshot (custom software/portals)
   * 'metrics'    — colored panel with key result numbers (AI/data/automation)
   * 'portfolio'  — full-bleed image card, image-first (branding/web design)
   */
  visualType: 'screenshot' | 'metrics' | 'portfolio';
  /** For visualType='screenshot': path to hero screenshot, e.g. /images/work/growthhub-hero.png */
  heroImage?: string;
  /** For visualType='screenshot': additional gallery screenshots */
  galleryImages?: string[];
  /** Live site URL (optional) */
  liveUrl?: string;
}

export const cases: WorkCase[] = [
  /* ── Real client projects ── */
  {
    slug: 'habesha-food',
    client: 'Habesha Food',
    industry: 'Food & Restaurant',
    service: 'Custom Software',
    filter: 'Web Design',
    icon: Globe,
    color: 'emerald',
    tagline: 'A full digital presence for an authentic Ethiopian restaurant brand.',
    challenge: 'Habesha Food needed a complete digital identity — a website that captured the warmth and authenticity of their brand, made it easy for customers to explore the menu, and drove reservations and orders online.',
    solution: 'We designed and built a full-stack restaurant website with menu management, online ordering integration, and a brand identity system that reflects the rich cultural heritage of Ethiopian cuisine.',
    solutionDetail: [
      'Custom website design and development',
      'Online menu with category filtering and dietary tags',
      'Reservation and order flow integration',
      'Brand identity system (colors, typography, photography direction)',
      'Mobile-first responsive design',
    ],
    results: 'The new website launched on time and immediately became the primary channel for reservations and online orders. The brand identity was praised by customers for its authenticity and warmth.',
    metrics: [
      { label: 'Delivery', value: 'On time' },
      { label: 'Mobile score', value: '98/100' },
      { label: 'Satisfaction', value: '5★' },
    ],
    deliverables: [
      'Custom website (Next.js)',
      'Online menu system',
      'Reservation integration',
      'Brand identity system',
      'Mobile-optimized design',
    ],
    quote: 'VyntRise captured exactly what we wanted — a website that feels like our food. Warm, authentic, and beautiful.',
    author: 'Habesha Food Team',
    role: 'Owner',
    initials: 'HF',
    timeline: '4 weeks',
    year: '2025',
    visualType: 'portfolio',
    heroImage: '/images/work/Habesha%20Food/photo_2026-04-09_16-23-33.jpg',
    galleryImages: [
      '/images/work/Habesha%20Food/photo_2026-04-09_16-23-33%20(2).jpg',
      '/images/work/Habesha%20Food/photo_2026-04-09_16-23-33%20(3).jpg',
      '/images/work/Habesha%20Food/photo_2026-04-09_16-23-33%20(4).jpg',
      '/images/work/Habesha%20Food/photo_2026-04-09_16-23-34.jpg',
    ],
  },
  {
    slug: 'liya-cookies',
    client: 'Liya Cookies',
    industry: 'Food & Bakery',
    service: 'Custom Software',
    filter: 'Web Design',
    icon: Globe,
    color: 'rose',
    tagline: 'A delightful online presence for a boutique cookie brand.',
    challenge: 'Liya Cookies is a boutique artisan bakery that needed a website as beautiful as their products — one that showcased their handcrafted cookies, enabled online orders, and built a loyal customer base.',
    solution: 'We built a visually rich e-commerce website with a custom product showcase, order management, and a brand identity that matched the handcrafted, premium feel of the product.',
    solutionDetail: [
      'Custom e-commerce website design and development',
      'Product showcase with high-quality image galleries',
      'Online ordering and checkout flow',
      'Brand identity and visual language',
      'Social media integration',
    ],
    results: 'The website launched to immediate positive feedback. Online orders began within the first week. The brand identity was consistent across web and social, building a recognizable presence.',
    metrics: [
      { label: 'Delivery', value: 'On time' },
      { label: 'Orders week 1', value: '40+' },
      { label: 'Satisfaction', value: '5★' },
    ],
    deliverables: [
      'Custom e-commerce website',
      'Product showcase gallery',
      'Online ordering system',
      'Brand identity system',
      'Social media assets',
    ],
    quote: 'Our website is as beautiful as our cookies. VyntRise understood our brand from day one.',
    author: 'Liya Cookies Team',
    role: 'Founder',
    initials: 'LC',
    timeline: '3 weeks',
    year: '2025',
    visualType: 'portfolio',
    heroImage: '/images/work/Liya%20Cookies/photo_2026-04-09_16-23-32.jpg',
    galleryImages: [
      '/images/work/Liya%20Cookies/photo_2026-04-09_16-23-34.jpg',
    ],
  },
  {
    slug: 'nazaret-market',
    client: 'Nazaret Market',
    industry: 'Retail & Grocery',
    service: 'Custom Software',
    filter: 'Web Design',
    icon: Globe,
    color: 'amber',
    tagline: 'A modern digital storefront for a community grocery market.',
    challenge: 'Nazaret Market needed a professional digital presence that reflected their community-focused brand, made it easy for customers to browse products and promotions, and established trust with a modern, clean design.',
    solution: 'We designed and built a full brand identity and website for Nazaret Market — including a product catalog, weekly promotions system, and a design language that honored their community roots.',
    solutionDetail: [
      'Brand identity design (logo, colors, typography)',
      'Custom website with product catalog',
      'Weekly promotions and deals section',
      'Store information and hours management',
      'Mobile-first responsive design',
    ],
    results: 'The new brand identity and website gave Nazaret Market a professional presence that matched the quality of their products. Customer engagement increased significantly after launch.',
    metrics: [
      { label: 'Delivery', value: 'On time' },
      { label: 'Brand assets', value: '20+' },
      { label: 'Satisfaction', value: '5★' },
    ],
    deliverables: [
      'Brand identity system',
      'Custom website',
      'Product catalog',
      'Promotions management',
      'Print-ready brand assets',
    ],
    quote: 'VyntRise gave us a brand we are proud of. Our customers notice the difference.',
    author: 'Nazaret Market Team',
    role: 'Owner',
    initials: 'NM',
    timeline: '3 weeks',
    year: '2025',
    visualType: 'portfolio',
    heroImage: '/images/work/NAZARET%20MARKET/1.png',
    galleryImages: [
      '/images/work/NAZARET%20MARKET/2.png',
      '/images/work/NAZARET%20MARKET/3.png',
      '/images/work/NAZARET%20MARKET/2.jpg',
    ],
  },
  {
    slug: 'martinez-dental',
    client: 'Martinez Dental Group',
    industry: 'Healthcare',
    service: 'AI Search & Reputation',
    filter: 'AI Search',
    icon: Search,
    color: 'blue',
    tagline: 'From invisible to undeniable — 250% traffic growth in 90 days.',
    challenge: 'A 3-location dental group with a 3.8-star average and almost no organic traffic. Competitors were dominating local search results, and the team had no system for managing the flood of reviews across Google, Yelp, and Healthgrades.',
    solution: 'We deployed a full AI Search & Reputation stack: AI-driven local SEO targeting high-intent dental keywords, centralized review management across 6 platforms, and intelligent response drafting for every new review.',
    solutionDetail: [
      'AI keyword intent mapping for 3 locations across 40+ dental service terms',
      'Google Business Profile optimization and citation building across 80+ directories',
      'Unified review dashboard pulling from Google, Yelp, Healthgrades, Facebook, and Zocdoc',
      'AI-drafted response suggestions reviewed and sent within 2 hours of each review',
      'Monthly reputation audit reports with competitor gap analysis',
    ],
    results: 'Within 90 days, organic traffic increased by 250%. The average review rating climbed from 3.8 to 4.7 stars across all platforms. The team went from spending 5+ hours per week on reputation management to under 30 minutes.',
    metrics: [
      { label: 'Traffic increase', value: '250%' },
      { label: 'Review rating', value: '4.7★' },
      { label: 'Response rate', value: '98%' },
    ],
    deliverables: [
      'AI-powered local SEO strategy and implementation',
      'Unified review management dashboard',
      'Automated review response system',
      'Monthly reputation audit reports',
      'Google Business Profile optimization (3 locations)',
    ],
    quote: '250% traffic increase in 3 months. Our review rating went from 3.8 to 4.7 stars. VyntRise completely transformed our online presence — and we barely had to lift a finger.',
    author: 'Sarah Martinez',
    role: 'Owner',
    initials: 'SM',
    timeline: '60 days',
    year: '2024',
    visualType: 'metrics',
  },
  {
    slug: 'crestline-saas',
    client: 'Crestline SaaS',
    industry: 'Technology',
    service: 'Intelligent Automation',
    filter: 'Automation',
    icon: Bot,
    color: 'violet',
    tagline: 'Leads that never go cold — conversion rate up 40%.',
    challenge: 'A fast-growing SaaS company losing high-intent leads to slow follow-up. The sales team was spending 20+ hours per week on manual outreach, and response times averaged 4 hours — long enough for leads to go cold or choose a competitor.',
    solution: 'We built autonomous lead qualification agents that engage, score, and book meetings in real time — 24/7, without human intervention. The agents integrate directly with their CRM and calendar.',
    solutionDetail: [
      'Real-time lead engagement agent triggered on form submission (< 2 min response)',
      'AI qualification scoring based on company size, intent signals, and ICP fit',
      'Automated meeting booking with calendar sync and confirmation sequences',
      'CRM enrichment and handoff to sales with full context summary',
      'Multi-channel follow-up sequences (email + LinkedIn) for non-responders',
    ],
    results: 'Conversion rate increased by 40% within the first 6 weeks. The sales team reclaimed 20+ hours per week. Average lead response time dropped from 4 hours to under 2 minutes.',
    metrics: [
      { label: 'Conversion rate', value: '+40%' },
      { label: 'Hours saved/week', value: '20+' },
      { label: 'Response time', value: '< 2 min' },
    ],
    deliverables: [
      'Autonomous lead qualification agent',
      'CRM integration and enrichment pipeline',
      'Automated meeting booking system',
      'Multi-channel follow-up sequences',
      'Real-time lead scoring dashboard',
    ],
    quote: 'The AI agents handle our lead follow-up 24/7. Conversion rate up 40% since we launched. It just runs — and our sales team finally has time to focus on closing.',
    author: 'Priya Nair',
    role: 'VP Sales',
    initials: 'PN',
    timeline: '3 weeks',
    year: '2024',
    visualType: 'metrics',
  },
  {
    slug: 'meridian-logistics',
    client: 'Meridian Logistics',
    industry: 'Operations',
    service: 'Data & Analytics',
    filter: 'Data & Analytics',
    icon: Database,
    color: 'amber',
    tagline: 'Six tools became one source of truth in 3 weeks.',
    challenge: 'Operational data scattered across 6 disconnected tools — a CRM, an accounting platform, a spreadsheet-based inventory system, a logistics tracker, a customer portal, and a reporting tool. Reports took 8 hours to compile and were always out of date by the time they were ready.',
    solution: 'We migrated all operational data to a unified database, built bi-directional sync pipelines between all 6 tools, and delivered a real-time analytics dashboard that updates every 15 minutes.',
    solutionDetail: [
      'Full data audit and schema design across 6 source systems',
      'Historical data migration with 100% accuracy validation',
      'Bi-directional sync pipelines with error monitoring and alerting',
      'Real-time analytics dashboard with 12 KPI views',
      'Data governance policies and automated quality checks',
    ],
    results: 'Reporting time dropped from 8 hours to 45 minutes. Data accuracy reached 100% post-migration. The operations team now makes decisions on data that is never more than 15 minutes old.',
    metrics: [
      { label: 'Reporting time', value: '45 min' },
      { label: 'Data accuracy', value: '100%' },
      { label: 'Reporting speed', value: '10x' },
    ],
    deliverables: [
      'Unified operational database',
      'Bi-directional sync pipelines (6 integrations)',
      'Real-time analytics dashboard',
      'Data governance framework',
      'Automated quality monitoring',
    ],
    quote: 'Our data was a mess across 6 tools. VyntRise unified everything in under 3 weeks. Game changer for our reporting — we finally trust our numbers.',
    author: 'James Okafor',
    role: 'COO',
    initials: 'JO',
    timeline: '3 weeks',
    year: '2024',
    visualType: 'metrics',
  },
  {
    slug: 'growthhub-agency',
    client: 'GrowthHub Agency',
    industry: 'Marketing',
    service: 'Custom Software',
    filter: 'Custom Software',
    icon: Code,
    color: 'emerald',
    tagline: 'A custom client portal delivered in 3 weeks, on budget.',
    challenge: 'A fast-growing agency managing 40+ clients across spreadsheets and email threads. No unified view of project status, no client-facing portal, and no automated status updates. Account managers were spending 30% of their time on admin.',
    solution: 'Built a custom client portal with real-time project tracking, file sharing, approval workflows, and automated status updates — integrated with their existing project management tool.',
    solutionDetail: [
      'Custom client portal with role-based access (client vs. internal)',
      'Real-time project status tracking with milestone notifications',
      'File sharing and version control with approval workflows',
      'Automated weekly status email digests to clients',
      'Integration with existing PM tool via API',
    ],
    results: 'Delivered in 3 weeks, within budget. Account managers reclaimed 30% of their time. Client satisfaction scores increased to 4.9/5. Zero scope creep.',
    metrics: [
      { label: 'Delivery time', value: '3 weeks' },
      { label: 'On-time delivery', value: '95%' },
      { label: 'Client satisfaction', value: '4.9/5' },
    ],
    deliverables: [
      'Custom client portal (web application)',
      'Role-based access control system',
      'Automated notification and digest system',
      'PM tool API integration',
      'Admin dashboard for internal team',
    ],
    quote: 'Delivered exactly what we needed, on time and within budget. The team was exceptional throughout — clear communication, zero surprises.',
    author: 'Emily Rodriguez',
    role: 'CEO',
    initials: 'ER',
    timeline: '3 weeks',
    year: '2025',
    visualType: 'screenshot',
    heroImage: '/images/work/growthhub-hero.png',
    galleryImages: [
      '/images/work/growthhub-dashboard.png',
      '/images/work/growthhub-projects.png',
      '/images/work/growthhub-client-view.png',
    ],
    liveUrl: undefined,
  },
  {
    slug: 'techstart-solutions',
    client: 'TechStart Solutions',
    industry: 'Technology',
    service: 'Intelligent Automation',
    filter: 'Automation',
    icon: Bot,
    color: 'violet',
    tagline: 'Strategy over spreadsheets — 20+ hours reclaimed per week.',
    challenge: 'An engineering team spending 20+ hours per week on repetitive internal processes: status updates, ticket routing, report generation, and meeting scheduling. High-value engineers doing low-value work.',
    solution: 'Deployed multi-agent workflow orchestration to automate internal ops — ticket routing, status reporting, and meeting prep — freeing the team to focus on product and strategy.',
    solutionDetail: [
      'Intelligent ticket routing agent with priority scoring',
      'Automated weekly status report generation from Jira + Slack data',
      'Meeting prep agent that summarizes context before each call',
      'Internal knowledge brain (RAG) for instant policy and SOP lookup',
      'Workflow monitoring dashboard with exception alerts',
    ],
    results: 'The team reclaimed 20+ hours per week. Process automation coverage reached 85% of targeted workflows. Team satisfaction scores increased by 40%.',
    metrics: [
      { label: 'Hours saved/week', value: '20+' },
      { label: 'Process coverage', value: '85%' },
      { label: 'Team satisfaction', value: '↑ 40%' },
    ],
    deliverables: [
      'Intelligent ticket routing system',
      'Automated status reporting pipeline',
      'Meeting prep agent',
      'Internal knowledge brain (RAG)',
      'Workflow monitoring dashboard',
    ],
    quote: 'The automation tools saved our team 20+ hours per week. We focus on strategy while VyntRise handles the rest. It changed how we work.',
    author: 'Michael Chen',
    role: 'CTO',
    initials: 'MC',
    timeline: '4 weeks',
    year: '2025',
    visualType: 'metrics',
  },
  {
    slug: 'stackflow',
    client: 'Stackflow',
    industry: 'SaaS',
    service: 'Data & Analytics',
    filter: 'Data & Analytics',
    icon: Database,
    color: 'amber',
    tagline: 'Spreadsheets to a real database in 2 weeks.',
    challenge: 'Core business operations running on a fragile, multi-tab spreadsheet with 12,000+ rows. Version conflicts, accidental deletions, no multi-user support, and queries that took minutes to run.',
    solution: 'Architected and migrated all operational data to a scalable PostgreSQL database with role-based access, automated backups, a clean admin dashboard, and a public-facing API for their product.',
    solutionDetail: [
      'Full data audit and normalization of 12,000+ rows across 8 spreadsheet tabs',
      'PostgreSQL schema design with proper indexing and relationships',
      'Historical data migration with zero data loss',
      'Role-based access control (admin, editor, viewer)',
      'REST API for product integration',
    ],
    results: 'Migration completed in 2 weeks with zero data loss. Query performance improved by 97x. The team can now collaborate in real time without version conflicts.',
    metrics: [
      { label: 'Migration time', value: '2 weeks' },
      { label: 'Data accuracy', value: '100%' },
      { label: 'Query speed', value: '97x' },
    ],
    deliverables: [
      'PostgreSQL database architecture',
      'Full data migration (zero data loss)',
      'Role-based access control',
      'Admin dashboard',
      'REST API for product integration',
    ],
    quote: 'We went from spreadsheets to a real database in 2 weeks. The team was exceptional throughout — they understood our data better than we did.',
    author: 'David Park',
    role: 'Founder',
    initials: 'DP',
    timeline: '2 weeks',
    year: '2025',
    visualType: 'screenshot',
    heroImage: '/images/work/stackflow-hero.png',
    galleryImages: [
      '/images/work/stackflow-dashboard.png',
      '/images/work/stackflow-data-view.png',
    ],
    liveUrl: undefined,
  },
];

export const colorTokens: Record<string, {
  icon: string; badge: string; bar: string; text: string; border: string; bg: string;
}> = {
  blue:    { icon: 'bg-blue-50 text-blue-600',    badge: 'bg-blue-50 text-blue-600 border-blue-100',    bar: 'bg-blue-500',    text: 'text-blue-600',    border: 'border-blue-200',    bg: 'bg-blue-50'    },
  violet:  { icon: 'bg-violet-50 text-violet-600', badge: 'bg-violet-50 text-violet-600 border-violet-100', bar: 'bg-violet-500', text: 'text-violet-600', border: 'border-violet-200', bg: 'bg-violet-50' },
  amber:   { icon: 'bg-amber-50 text-amber-600',   badge: 'bg-amber-50 text-amber-600 border-amber-100',   bar: 'bg-amber-500',   text: 'text-amber-600',   border: 'border-amber-200',   bg: 'bg-amber-50'   },
  emerald: { icon: 'bg-emerald-50 text-emerald-600', badge: 'bg-emerald-50 text-emerald-600 border-emerald-100', bar: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', bg: 'bg-emerald-50' },
  rose:    { icon: 'bg-rose-50 text-rose-600',     badge: 'bg-rose-50 text-rose-600 border-rose-100',     bar: 'bg-rose-500',    text: 'text-rose-600',    border: 'border-rose-200',    bg: 'bg-rose-50'    },
  cyan:    { icon: 'bg-cyan-50 text-cyan-600',     badge: 'bg-cyan-50 text-cyan-600 border-cyan-100',     bar: 'bg-cyan-500',    text: 'text-cyan-600',    border: 'border-cyan-200',    bg: 'bg-cyan-50'    },
};
