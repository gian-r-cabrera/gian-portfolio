export const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Gian Cabrera',
  shortName: 'GC',
  title: 'Frontend Developer for Public Health Dashboards and Analytics',
  kicker: 'Public health dashboards, analytics interfaces, and decision-support systems',
  photo: {
    src: '/DP_PORTFOLIO.PNG',
    alt: 'Portrait of Gian Cabrera',
    caption: 'Frontend developer focused on public health dashboards and analytics products.',
  },
  intro:
    'I build interfaces that turn surveillance data and reporting workflows into usable products.',
  credibility:
    'Focused on public health analytics, disease monitoring, and data-heavy systems that need clarity.',
  location: 'Davao City, Philippines',
  currentRole: 'Computer Programmer I at the Mindanao Center for Disease Watch and Analytics',
  availability: 'Open to software engineering, analytics, and dashboard-focused roles.',
  education: 'BS Computer Science, UP Mindanao',
  contactLabel: 'Email me',
  contactHref: 'mailto:gianrubillarcabrera@gmail.com',
  focusAreas: [
    'Vue 3 interfaces',
    'Dashboard engineering',
    'Surveillance reporting',
  ],
  featuredLink: {
    label: 'View Public Work',
    url: 'https://your-public-work-link.com',
  },
  resumeUrl: 'https://your-resume-link.com',
  credibilityPoints: [
    {
      label: 'Current role',
      value: 'Computer Programmer I at the Mindanao Center for Disease Watch and Analytics',
    },
    {
      label: 'Domain fit',
      value: 'Public health and analytics UX',
    },
    {
      label: 'Strength',
      value: 'Readable data-heavy screens',
    },
  ],
  benchmarkStrip: [
    {
      label: 'Work Style',
      value: 'Clarity-First UI',
      detail: 'Readable and practical',
    },
    {
      label: 'Best Fit',
      value: 'Analytics Frontend',
      detail: 'Dashboards and KPI views',
    },
    {
      label: 'Proof',
      value: 'Public Health Products',
      detail: 'RabDash and surveillance tools',
    },
    {
      label: 'Location',
      value: 'Davao City',
      detail: 'Metro Davao, Philippines',
    },
  ],
}

export const proof = {
  highlights: [
    {
      label: 'Award',
      title: 'Cum Laude Graduate',
      description: 'Graduated with Latin honors in BS Computer Science from UP Mindanao.',
    },
    {
      label: 'Publication',
      title: 'Rabies Vaccination Reporting Publication',
      description: 'Co-authored a published abstract on a mobile reporting system for rabies vaccination and digitized surveillance workflows.',
      linkLabel: 'View publication',
      link: 'https://ojs.upmin.edu.ph/index.php/jcsh/article/view/70',
    },
    {
      label: 'Organization',
      title: 'SPARCS Finance Committee',
      description: 'Member of SPARCS, serving on the finance committee.',
    },
  ],
  profiles: [],
}

export const projects = [
  {
    title: 'RabDash DC Analytics Dashboard',
    slug: 'rabdash-dc-analytics-dashboard',
    role: 'Student Intern, Dashboard Support',
    context:
      'A public-facing analytics site for rabies research and local program visibility in Davao City.',
    summary:
      'Supported a public-facing rabies analytics dashboard built to help researchers and local partners track case patterns, research outputs, and program context in Davao City.',
    contribution:
      'Worked on dashboard UI and information presentation so surveillance and research signals were easier to scan.',
    impact:
      'Helped package complex rabies surveillance and research information into a clearer interface that supports the long-term goal of a rabies-free Davao City.',
    resultLabel: 'Public-facing analytics for research and local program visibility',
    stack: ['Vue', 'Dashboard UI', 'Data Visualization', 'Public Health Analytics'],
    featured: true,
    primary: true,
    featuredImage: null,
    liveUrl: 'https://rabdash.com/',
    repoUrl: '',
    caseStudyUrl: '',
  },
  {
    title: 'Rabies Phylogenomics Visualization',
    slug: 'rabies-phylogenomics-visualization',
    role: 'Interactive Analytics UI',
    context:
      'A visualization workflow for inspecting rabies evolution, transmission, and sequence patterns across the Davao Region.',
    summary:
      'Worked on a visualization experience for exploring rabies evolution, transmission routes, diversity, and sequence frequencies across the Davao Region.',
    contribution:
      'Focused on making complex lineage and transmission information more explorable through interface design.',
    impact:
      'Made lineage and transmission analysis easier to inspect in one place instead of leaving insights trapped in static research materials.',
    resultLabel: 'Simplified exploration of genomics and transmission patterns',
    stack: ['Interactive Maps', 'Genomics Visualization', 'Analytics UX'],
    featured: true,
    primary: false,
    featuredImage: null,
    liveUrl: 'https://rabdash.com/dashboard/maps/phylogenomics',
    repoUrl: '',
    caseStudyUrl: '',
  },
  {
    title: 'Infectious Disease Trends Dashboard',
    slug: 'infectious-disease-trends-dashboard',
    role: 'Frontend and Dashboard Engineering',
    context:
      'A disease monitoring interface focused on trend views, KPIs, and classification patterns for surveillance work.',
    summary:
      'Built trend modules and KPI views for infectious disease monitoring, with interfaces designed to surface classification, demographic, and time-based patterns more clearly.',
    contribution:
      'Implemented trend views and summary panels that reduced the need to inspect raw tables first.',
    impact:
      'Reduced dependence on raw tables and manual readouts by pushing the most important surveillance slices into a faster decision-support workflow.',
    resultLabel: 'Faster access to trend and KPI patterns for surveillance review',
    stack: ['Vue 3', 'Tailwind CSS', 'KPI Design', 'Surveillance Reporting'],
    featured: true,
    primary: false,
    featuredImage: null,
    liveUrl: '',
    repoUrl: '',
    caseStudyUrl: '',
  },
  {
    title: 'Operations and Reporting Workflow Interfaces',
    slug: 'operations-and-reporting-workflow-interfaces',
    role: 'UI Implementation and Workflow Support',
    context:
      'Internal reporting and operations views for teams reviewing outputs, updates, and ongoing analytics work.',
    summary:
      'Translated fragmented operational data into cleaner reporting views for teams managing analytics outputs, stakeholder updates, and internal decision support.',
    contribution:
      'Turned fragmented inputs into more structured screens for review and reporting.',
    impact:
      'Improved visibility and consistency for teams reviewing program performance over time, especially where clarity matters more than raw data volume.',
    resultLabel: 'Clearer internal reporting and operational review flows',
    stack: ['Dashboard Layouts', 'Reporting UX', 'Data Normalization'],
    featured: true,
    primary: false,
    featuredImage: null,
    liveUrl: '',
    repoUrl: '',
    caseStudyUrl: '',
  },
]

export const experience = [
  {
    company: 'Mindanao Center for Disease Watch and Analytics',
    role: 'Computer Programmer',
    dates: 'Current',
    summary:
      'Frontend and dashboard work for disease surveillance, reporting, and analytics-focused workflows.',
    highlights: [
      'Build interfaces and reporting views for disease surveillance and public health analytics workflows.',
      'Translate monitoring needs into dashboard modules, KPI summaries, and review flows that are easier to act on.',
      'Work at the boundary between engineering, research, and decision support where interface clarity affects decision speed.',
    ],
  },
  {
    company: 'RabDash DC, UP Mindanao',
    role: 'Student Intern',
    dates: '2023',
    summary:
      'Supported a rabies analytics initiative with public-facing dashboards and visualization work.',
    highlights: [
      'Supported dashboard work for a rabies analytics initiative involving research and local veterinary partners.',
      'Contributed to turning public health data into usable visual interfaces.',
      'Built experience working with data-heavy products where context matters as much as implementation.',
    ],
  },
  {
    company: 'University of the Philippines Mindanao',
    role: 'BS Computer Science',
    dates: 'Academic foundation',
    summary:
      'Computing background applied to public-interest and analytics-heavy product work.',
    highlights: [
      'Grounded in software engineering, problem solving, and technical implementation.',
      'Applied computing work in real public-interest and analytics-focused contexts.',
    ],
  },
]

export const skills = [
  {
    title: 'Frontend and UI',
    items: ['Vue 3', 'JavaScript', 'Tailwind CSS', 'Vite', 'Responsive layouts'],
  },
  {
    title: 'Analytics and Product Thinking',
    items: [
      'Dashboard design',
      'KPI framing',
      'Surveillance reporting',
      'Decision-support interfaces',
      'Data-heavy UX',
    ],
  },
  {
    title: 'Collaboration',
    items: [
      'Research support',
      'Cross-functional delivery',
      'Public health context',
      'Iterative feature work',
    ],
  },
]

export const about = {
  title: 'I build software for teams that need clarity from complex data.',
  paragraphs: [
    'The work I care about most sits at the intersection of software, analytics, and public impact. I want monitoring systems to feel readable, dependable, and useful under real operating conditions.',
    'That usually means turning noisy or fragmented datasets into a smaller set of views that help stakeholders answer the real question faster. My bias is toward useful systems, not decorative complexity.',
  ],
  differentiators: [
    'Comfortable in data-heavy, domain-specific products',
    'Strong fit for dashboards, KPI views, and reporting interfaces',
    'Most effective where UX clarity directly supports better decisions',
  ],
  principles: [
    'Start from the decision the user needs to make.',
    'Show the few signals that matter first.',
    'Keep interfaces readable under real operational pressure.',
  ],
}

export const contact = {
  title: 'Interested in dashboard engineering or analytics-focused frontend work?',
  intro:
    'I am most useful on products where interface clarity, domain context, and data communication all matter at the same time.',
  availability:
    'Open to roles focused on frontend engineering, analytics interfaces, and decision-support systems.',
  primaryCta: {
    label: 'See Public Work',
    url: 'https://your-public-work-link.com',
  },
  secondaryCta: {
    label: 'Review Selected Work',
    url: '#projects',
  },
  links: [
    {
      label: 'Email',
      description: 'gianrubillarcabrera@gmail.com',
      url: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      label: 'GitHub',
      description: 'github.com/GreenGem-Star01',
      url: 'https://github.com/GreenGem-Star01',
    },
    {
      label: 'LinkedIn',
      description: 'linkedin.com/in/gian-cabrera-2011b3256',
      url: 'https://linkedin.com/in/gian-cabrera-2011b3256',
    },
    {
      label: 'Resume',
      description: 'View resume',
      url: 'https://your-resume-link.com',
    },
  ],
}

proof.profiles = contact.links
  .filter((item) => ['GitHub', 'LinkedIn', 'Resume'].includes(item.label))
  .map((item) => ({
    label: item.label,
    handle:
      item.label === 'GitHub'
        ? item.description
        : item.label === 'LinkedIn'
          ? item.description
          : 'Resume PDF',
    description:
      item.label === 'GitHub'
        ? 'Frontend projects, experiments, and repository history.'
        : item.label === 'LinkedIn'
          ? 'Professional background, experience, and hiring-facing profile.'
          : 'Download resume and experience summary.',
    url: item.url,
  }))

export const recommendations = [
  {
    quote:
      'Replace this with a short endorsement about how you work, what you shipped, or how you contributed to a team.',
    name: 'Name Placeholder',
    role: 'Role Placeholder, Company or Organization',
  },
  {
    quote:
      'Replace this with a recommendation from a mentor, manager, or collaborator who can speak to your reliability and technical judgment.',
    name: 'Name Placeholder',
    role: 'Role Placeholder, Company or Organization',
  },
  {
    quote:
      'Replace this with a quote that highlights communication, delivery speed, ownership, or domain understanding.',
    name: 'Name Placeholder',
    role: 'Role Placeholder, Company or Organization',
  },
]
