/**
 * GitHub: profile/social and proof links use GreenGem-Star01; RabDash Mobile repo is under GianSolo-aok.
 * Consolidate to one professional account when possible — see FIX 10 note in PORTFOLIO_FIXES checklist.
 */
export const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Gian Cabrera',
  shortName: 'GC',
  /** Page / SEO-friendly title; hero uses heroTitleLines + heroRolesLine. */
  title: 'Gian Cabrera — Software Developer · Researcher',
  /** Line 1: your name (gradient). Line 2: primary role. Roles pipe is heroRolesLine below. */
  heroTitleLines: ['Gian Cabrera', 'Software Developer · Researcher'],
  techBadges: ['Vue 3', 'JavaScript', 'Tailwind CSS', 'Vite', 'REST APIs', 'Data Visualization'],
  /**
   * Full tech stack for the “See all tech” modal.
   * Populate/adjust freely to match your LinkedIn Skills list.
   */
  techStack: {
    frontend: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    backend: ['Python', 'REST APIs'],
    data: ['MongoDB', 'SQL'],
    tools: ['Git', 'Vite'],
  },
  photo: {
    src: '/DP_PORTFOLIO.PNG',
    alt: 'Portrait of Gian Cabrera',
    caption: 'Software Developer · DiWA Center',
    /** Small kicker on portrait overlay. */
    overlayKicker: 'Software · 3D · research',
    /** Hide duplicate name on photo when H1 is already the name. */
    hideName: true,
  },
  /** Hero lead copy (short paragraphs, top-to-bottom). */
  introParagraphs: [
    'Computer Programmer at the DiWA Center (UP Mindanao), building dashboards, AI-assisted tools, reporting workflows, and decision-support systems for disease surveillance and public health. I turn complex data into clear, practical products that help teams read information faster and act with confidence.',
    'I work best in data-heavy environments where clarity, reliability, and usability matter. From analytics dashboards to geospatial and workflow systems, I focus on software that holds up in real-world use.',
  ],
  /** Short chips under the lead (three items; highlights carry NOW/DOMAIN/STACK). */
  heroFocusAreas: [],
  location: 'Davao City, Philippines',
  /** Shown on Contact; header keeps full `location`. */
  timezone: 'PHT',
  currentRole: 'Computer Programmer I at the Mindanao Center for Disease Watch and Analytics',
  availability: 'Open to software engineering, analytics, and dashboard-focused roles.',
  education: 'BS Computer Science, UP Mindanao',
  heroHighlights: [
    {
      label: 'Now',
      value: 'Computer Programmer I',
      detail: 'DiWA · UP Mindanao',
    },
    {
      label: 'Stack',
      value: 'Vue · Python',
      detail: 'MongoDB · SQL',
    },
    {
      label: 'Domain',
      value: 'Public health analytics',
      detail: 'Disease surveillance · Decision support',
    },
  ],
  contactLabel: 'Email me',
  contactHref: 'mailto:gianrubillarcabrera@gmail.com',
  socialLinks: [
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/gian-cabrera-2011b3256',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/GreenGem-Star01',
    },
  ],
  resumeUrl: '/gian-cabrera-resume.pdf',
  credibilityPoints: [
    {
      label: 'Current role',
      value: 'Computer Programmer I',
    },
    {
      label: 'Domain fit',
      value: 'Public health and reporting UX',
    },
    {
      label: 'Strength',
      value: 'Readable data-heavy screens',
    },
  ],
  heroStats: [
    {
      label: 'Current Role',
      value: 'Computer Programmer I',
    },
    {
      label: 'Domain',
      value: 'Public Health Tech',
    },
    {
      label: 'Location',
      value: 'Davao City, PH',
    },
    {
      label: 'Status',
      value: 'Available',
      highlight: true,
    },
  ],
  benchmarkStrip: [
    {
      label: 'Work Style',
      value: 'Clarity-First UI',
      detail: 'Decision-first UI for complex work.',
    },
    {
      label: 'Best Fit',
      value: 'Product UI',
      detail: 'Workflow tools and data-heavy screens.',
    },
  ],
}

export const projects = [
  {
    title: 'RabDash DC Mobile',
    slug: 'rabdash-dc-mobile-application',
    typeLabel: 'Mobile App',
    role: 'Full Stack · Student Intern',
    audience: 'City Veterinary Office (CVO) + private veterinarians in Davao City',
    context: 'Android app for rabies vaccination case reporting in Davao City.',
    scope: 'Rabies case reporting',
    surface: 'Field submission workflow',
    summary: 'Mobile reporting application platform for seamless reporting of rabies vaccination and cases for both City Veterinarians Office (CVO) and private veterinarians in Davao City.',
    contribution: 'Full stack work across mobile UI, auth, and submission flows.',
    impact: 'Faster field submissions and cleaner records.',
    spotlight: {
      outcome: 'CVO + private vet reporting flow shipped.',
      role: 'Full stack: UI, auth, and submission workflow.',
      constraints: 'Android-only · requires internet connection.',
    },
    resultLabel: 'Field-ready rabies reporting',
    stack: ['React Native', 'Mobile Application', 'JavaScript', 'Public Health Analytics'],
    featured: true,
    primary: true,
    featuredImage: '/login.png',
    featuredImageAlt: 'Login screen',
    featuredImageCaption: 'Login',
    featuredSlides: [
      {
        src: '/login.png',
        alt: 'Login screen',
        caption: 'Login',
      },
      {
        src: '/register.png',
        alt: 'Register screen',
        caption: 'Register',
      },
      {
        src: '/reset_forgotten_password.png',
        alt: 'Reset forgotten password screen',
        caption: 'Reset password',
      },
      {
        src: '/Landing_page.png',
        alt: 'Landing page screen',
        caption: 'Landing page',
      },
      {
        src: '/menu_cvo.png',
        alt: 'CVO menu screen',
        caption: 'CVO menu',
      },
      {
        src: '/User_Profile.png',
        alt: 'User profile screen',
        caption: 'User profile',
      },
      {
        src: '/Downloadable_Forms_CVO.png',
        alt: 'Downloadable forms screen (CVO)',
        caption: 'Downloadable forms',
      },
      {
        src: '/CVO_Data_Tables_Menu.png',
        alt: 'CVO data tables menu screen',
        caption: 'Data tables menu',
      },
    ],
    screens: [],
    liveUrl: '',
    repoUrl: 'https://github.com/GianSolo-aok/Rabdash_Mobile',
    caseStudyUrl: '',
  },
  {
    title: 'IWOMB 2025 Website',
    slug: 'iwomb-2025-website',
    typeLabel: 'Event Website',
    role: 'Full Stack · Website Build',
    audience: 'Workshop attendees and organizers',
    context: 'Workshop website for schedule, applications, and attendee access.',
    scope: 'Programme and applications',
    surface: 'Conference information hub',
    summary: 'Centralized workshop info and links.',
    contribution: 'Information architecture and page structure.',
    impact: 'Reduced back-and-forth for attendees.',
    impactLead: 'Single hub for schedules and applications',
    resultLabel: 'Workshop information in one place',
    previewAccent: 'form',
    stackGroups: {
      tech: ['Google Sites'],
      domain: ['Event website', 'Information architecture'],
    },
    stack: ['Google Sites', 'Information Architecture', 'Event Website'],
    featured: true,
    primary: false,
    featuredImage: null,
    cardImage: '/iwomb2025.png',
    cardKind: 'Public site',
    cardStat: 'Google Sites',
    highlightSecondary: false,
    liveUrl: 'https://sites.google.com/up.edu.ph/iwomb2025/',
    repoUrl: '',
    caseStudyUrl: '',
  },
  {
    title: 'DiWA Disease Trends Dashboard',
    slug: 'infectious-disease-trends-dashboard',
    typeLabel: 'Dashboard ·AI reporting system',
    role: 'Dashboard · AI reporting system',
    audience: 'Public health reporting teams',
    context: 'Trend dashboards and templated reporting in one workflow.',
    scope: 'Trend review and report generation',
    surface: 'Hybrid workflow module',
    summary: 'Dashboard + reporting workflow in one module.',
    contribution: 'UI, workflow logic, and module integration.',
    impact: 'Faster trend review and report prep.',
    impactLead: 'Faster trend review and report prep',
    resultLabel: 'Hybrid reporting in one workflow',
    previewAccent: 'chart',
    stackGroups: {
      tech: ['Vue 3', 'Templates', 'AI-assisted drafting', 'Backend logic'],
      domain: ['Surveillance', 'Reporting'],
    },
    stack: ['Vue 3', 'Backend logic', 'Templates', 'AI-assisted drafting'],
    featured: true,
    primary: false,
    featuredImage: null,
    cardImage: '/dashboard1.png',
    cardKind: 'Internal product',
    cardStat: 'Hybrid reporting',
    highlightSecondary: true,
    liveUrl: '',
    repoUrl: '',
    caseStudyUrl: '',
  },
  {
    title: 'RabDash DC Chart Maintenance',
    slug: 'rabdash-dc-chart-maintenance',
    typeLabel: 'Chart Maintenance',
    role: 'Frontend · Chart Updates',
    audience: 'Research and surveillance users',
    context: 'Live dashboard chart updates and visual maintenance.',
    scope: 'Live chart updates',
    surface: 'Dashboard visual upkeep',
    summary: 'Kept charts current and readable.',
    contribution: 'Chart UI updates and refinements.',
    impact: 'Consistent visuals as data changes.',
    impactLead: 'Charts stay current as data evolves',
    resultLabel: 'Ongoing chart updates for a live dashboard',
    previewAccent: 'chart',
    chartVariant: 'bars',
    stackGroups: {
      tech: ['Laravel', 'Chart UI', 'Data visualization'],
      domain: ['Data visualization', 'Live dashboard'],
    },
    stack: ['Laravel', 'Chart UI', 'Data Visualization'],
    featured: true,
    primary: false,
    featuredImage: null,
    cardImage: '/rabdash.png',
    cardKind: 'Live system',
    cardStat: 'Charts in production',
    highlightSecondary: false,
    liveUrl: 'https://rabdash.com/',
    repoUrl: '',
    caseStudyUrl: '',
  },
]

export const experience = [
  {
    company: 'Mindanao Center for Disease Watch and Analytics',
    role: 'Computer Programmer',
    dates: '2024–present',
    current: true,
    logoSrc: '/DiWA_Logo.jpeg',
    logoAlt: 'DiWA logo',
    summary: 'Building interfaces for monitoring, reporting, and decision-support workflows.',
    highlights: [
      'Reporting views and review flows.',
      'Dashboard modules and KPI summaries.',
    ],
  },
  {
    company: 'RabDash DC, UP Mindanao',
    role: 'Student Intern',
    dates: '2023',
    logoSrc: '/Rabdash_logo.png',
    logoAlt: 'RabDash logo',
    summary: 'Helped build and refine reporting interfaces for rabies surveillance.',
    highlights: [
      'Charts and navigation improvements.',
      'Made data easier for non-technical users.',
    ],
  },
  {
    company: 'University of the Philippines Mindanao',
    role: 'BS Computer Science',
    dates: '2020–2024',
    logoSrc: '/UPMin_Logo.png',
    logoAlt: 'UP Mindanao seal',
    summary: 'Built a strong foundation in software engineering and systems thinking.',
    highlights: [
      'Software engineering fundamentals.',
      'Maintainable UI and systems thinking.',
    ],
  },
]

export const skills = [
  {
    title: 'Frontend and UI',
    items: ['Vue 3', 'JavaScript', 'Tailwind CSS', 'Responsive layouts'],
  },
  {
    title: 'Tools',
    items: ['Python', 'MongoDB', 'SQL', 'Git'],
  },
  {
    title: 'Domain and product thinking',
    items: ['Dashboard design', 'KPI framing', 'Surveillance reporting', 'Decision-support interfaces'],
  },
  {
    title: 'Collaboration',
    items: ['Cross-functional delivery', 'Research support', 'Public health context'],
  },
]

export const about = {
  sectionLabel: 'About',
  title: 'I build product UI for complex workflows.',
  paragraphs: [
    'Clear screens, faster decisions.',
  ],
  differentiators: [
    'Workflow-first UI',
    'Data-heavy UX',
    'Clarity under pressure',
  ],
}

export const contact = {
  title: "Let's build products people actually use.",
  intro: 'Open to frontend and product-focused roles.',
  availabilityBadge: 'Open to roles',
  availability: 'Best fit: product UI, data-heavy screens, and workflow tools.',
  links: [
    {
      label: 'Email',
      description: 'gianrubillarcabrera@gmail.com',
      url: 'mailto:gianrubillarcabrera@gmail.com',
      icon: 'mail',
      ariaLabel: 'Email Gian Cabrera',
    },
    {
      label: 'Resume',
      description: 'Download resume',
      url: '/gian-cabrera-resume.pdf',
      icon: 'file',
      hint: 'PDF',
      ariaLabel: 'Download Gian Cabrera resume as PDF',
    },
    {
      label: 'LinkedIn',
      description: 'linkedin.com/in/gian-cabrera-2011b3256',
      url: 'https://linkedin.com/in/gian-cabrera-2011b3256',
      icon: 'linkedin',
      ariaLabel: "Open Gian Cabrera's LinkedIn profile",
    },
    {
      label: 'GitHub',
      description: 'github.com/GreenGem-Star01',
      url: 'https://github.com/GreenGem-Star01',
      icon: 'github',
      ariaLabel: "Open Gian Cabrera's GitHub profile",
    },
  ],
}

export const gallery = {
  title: 'Gallery',
  intro: 'Selected moments from conferences, presentations, demos, and milestones in my journey in tech.',
  events: [
    {
      title: 'PythonAsia 2026',
      meta: 'Manila · Community event',
      photos: [
        {
          title: 'CONFERENCE',
          meta: 'PythonAsia 2026',
          src: '/PythonAsia2026.jpeg',
          alt: 'Photo at PythonAsia 2026 event backdrop',
        },
        {
          title: 'CONFERENCE',
          meta: 'PythonAsia 2026',
          src: '/PythonAsia2026_group.jpeg',
          alt: 'Group photo at PythonAsia 2026 event backdrop',
        },
      ],
    },
    {
      title: 'Pycon Davao 2024',
      meta: 'Davao · Community event',
      photos: [
        {
          title: 'COMMUNITY',
          meta: 'Pycon Davao 2024',
          src: '/PyconDavao2024.jpeg',
          alt: 'Photo from Pycon Davao 2024 event',
        },
        {
          title: 'COMMUNITY',
          meta: 'Pycon Davao 2024',
          src: '/PyconDavao2024_2.jpeg',
          alt: 'Second photo from Pycon Davao 2024 event',
        },
      ],
    },
    {
      title: 'Mindanao Startup Summit',
      meta: 'Mindanao · Startup ecosystem',
      photos: [
        {
          title: 'COMMUNITY',
          meta: 'Mindanao Startup Summit',
          src: '/Mindanao_StartUpSummit1.jpeg',
          alt: 'Photo from Mindanao Startup Summit event',
        },
        {
          title: 'COMMUNITY',
          meta: 'Mindanao Startup Summit',
          src: '/Mindanao_StartUpSummit2.jpeg',
          alt: 'Second photo from Mindanao Startup Summit event',
        },
      ],
    },
    {
      title: 'Thesis defense',
      meta: 'UP Mindanao · Presentation day',
      photos: [
        {
          title: 'PRESENTATION',
          meta: 'Thesis defense',
          src: '/thesis_def1.jpeg',
          alt: 'Thesis defense photo',
        },
        {
          title: 'PRESENTATION',
          meta: 'Thesis defense',
          src: '/thesis_def2.jpeg',
          alt: 'Second thesis defense photo',
        },
      ],
    },
  ],
}

export const recommendations = [
  {
    quote:
      'Gian is technically strong and consistently improves the product with thoughtful features. He communicates clearly, stays organized, and brings steady positivity even under pressure.',
    name: 'Andrew Kenan Songahid',
    role: 'Junior Programmer @ DiWA Center',
    avatarUrl: '',
    linkedinUrl: '',
    sourceLabel: 'Recommendation',
  },
  {
    quote:
      'Gian is adaptable, dependable, and easy to work with. He learns quickly, thinks critically, and can work independently while collaborating well with the team.',
    name: 'Guy Ivan Ocon',
    role: 'Software Applications Engineer @ Nascent Batteries | Python Developer | GenAI - LLM',
    avatarUrl: '',
    linkedinUrl: '',
    sourceLabel: 'Recommendation',
  },
  {
    quote:
      'Gian demonstrates a strong grasp of translating complex public health data into clear, actionable interfaces. His attention to usability in high-stakes reporting environments is evident in every project he contributes to.',
    name: 'Second recommender — update in portfolio.js',
    role: 'Title @ Organization — replace with a professor, supervisor, or colleague',
    avatarUrl: '',
    linkedinUrl: '',
    draft: true,
  },
]
