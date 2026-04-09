export const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Gian Cabrera',
  shortName: 'GC',
  title: 'Frontend Developer for Public Health Dashboards',
  kicker: 'Public health dashboards, reporting interfaces, and decision-support systems',
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
  benchmarkStrip: [
    {
      label: 'Work Style',
      value: 'Clarity-First UI',
      detail: 'Readable and practical',
    },
    {
      label: 'Best Fit',
      value: 'Public Health Dashboards',
      detail: 'Reporting and monitoring tools',
    },
    {
      label: 'Proof',
      value: 'Recognition',
      detail: 'Cum Laude, abstract, SPARCS',
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
      label: 'Conference Proceeding',
      title: 'Rabies Vaccination Reporting Abstract',
      description: 'Co-authored an abstract on a mobile reporting system for rabies vaccination and digitized surveillance workflows.',
      linkLabel: 'View proceeding',
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
    title: 'RabDash DC Mobile',
    slug: 'rabdash-dc-mobile-application',
    role: 'Full Stack · Student Intern',
    context:
      'A mobile version of RabDash DC for public and private veterinarians in Davao City.',
    summary:
      'Built to help researchers and veterinary partners record and upload rabies vaccination cases throughout Davao city in one mobile platform.',
    contribution:
      'Built mobile workflows for case input, record submission, and field-friendly reporting.',
    impact:
      'Made rabies vaccination reporting more portable, consistent, and easier to submit from the field.',
    resultLabel: 'Field-ready rabies reporting',
    stack: ['React Native', 'Mobile Application', 'JavaScript', 'Public Health Analytics'],
    featured: true,
    primary: true,
    featuredImage: null,
    liveUrl: '',
    repoUrl: 'https://github.com/GianSolo-aok/Rabdash_Mobile',
    caseStudyUrl: '',
  },
  {
    title: 'IWOMB 2025 Website',
    slug: 'iwomb-2025-website',
    role: 'Full Stack · Website Build',
    context:
      'Website for the 2025 International Workshop on Mathematical Biology in Coron, Palawan.',
    summary:
      'Built a public event website for IWOMB 2025 to centralize workshop information, programme details, speakers, venue, workshops, committees, and application access.',
    contribution:
      'Structured the site around the workshop schedule, abstracts, speakers, venue details, and application flow.',
    impact:
      'Made it easier for attendees and organizers to find the information they needed in one place.',
    resultLabel: 'Workshop information in one place',
    stack: ['Google Sites', 'Information Architecture', 'Event Website'],
    featured: true,
    primary: false,
    featuredImage: null,
    liveUrl: 'https://sites.google.com/up.edu.ph/iwomb2025/',
    repoUrl: '',
    caseStudyUrl: '',
  },
  {
    title: 'DiWA Disease Trends Dashboard',
    slug: 'infectious-disease-trends-dashboard',
    role: 'Full Stack · Dashboard and Reporting Workflow',
    context:
      'Disease surveillance dashboard with hybrid templated and AI-assisted reporting support.',
    summary:
      'Built the DiWA dashboard and reporting workflow, including trend views, hybrid report generation, and backend support for the module.',
    contribution:
      'Owned the dashboard UI, backend logic, and the hybrid reporting system within the same product.',
    impact:
      'Made disease trend review and report preparation faster, more consistent, and easier to maintain.',
    resultLabel: 'Hybrid reporting in one workflow',
    stack: ['Vue 3', 'Backend logic', 'Templates', 'AI-assisted drafting'],
    featured: true,
    primary: false,
    featuredImage: null,
    liveUrl: '',
    repoUrl: '',
    caseStudyUrl: '',
  },
  {
    title: 'RabDash DC Chart Maintenance',
    slug: 'rabdash-dc-chart-maintenance',
    role: 'Frontend · Chart Updates',
    context:
      'Ongoing chart maintenance and visual updates for the RabDash DC website.',
    summary:
      'Maintained and updated the RabDash DC charts so research and surveillance visuals stayed current and readable.',
    contribution:
      'Updated chart components, visuals, and data displays as the site evolved.',
    impact:
      'Kept the dashboard visuals consistent, current, and easier to interpret over time.',
    resultLabel: 'Ongoing chart updates for a live dashboard',
    stack: ['Laravel', 'Chart UI', 'Data Visualization'],
    featured: true,
    primary: false,
    featuredImage: null,
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
    summary:
      'Frontend and dashboard work for disease surveillance and reporting workflows.',
    highlights: [
      'Build interfaces and reporting views for disease surveillance and analytics workflows.',
      'Translate monitoring needs into dashboard modules, KPI summaries, and review flows.',
    ],
  },
  {
    company: 'RabDash DC, UP Mindanao',
    role: 'Student Intern',
    dates: '2023',
    summary:
      'Supported a rabies analytics initiative with public-facing dashboards and visualizations.',
    highlights: [
      'Supported dashboard work for research and local veterinary partners.',
      'Helped turn public health data into usable visual interfaces.',
    ],
  },
  {
    company: 'University of the Philippines Mindanao',
    role: 'BS Computer Science',
    dates: '2020–2024',
    summary:
      'Computing foundation applied to public-interest and analytics-heavy product work.',
    highlights: [
      'Grounded in software engineering, problem solving, and implementation.',
      'Applied computing in public-interest and analytics-focused contexts.',
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
    label: 'Get in touch',
    url: 'https://linkedin.com/in/gian-cabrera-2011b3256',
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
      description: 'Download resume PDF',
      url: '/gian-cabrera-resume.pdf',
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
      'Gian is adaptable, dependable, and easy to work with. He is open to mentorship, shows a strong willingness to learn and improve, and brings thoughtful perspective and strong critical thinking to the work. He can work independently while still collaborating effectively with others.',
    name: 'Guy Ivan Ocon',
    role: 'Software Applications Engineer @ Nascent Batteries | Python Developer | GenAI - LLM',
  },
]
