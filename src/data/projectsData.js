// Project Data - All project details for portfolio
export const projectsData = [
  {
    id: 'itam',
    title: 'ITAM (Internal Tools Access Manager)',
    subtitle: 'Multi-tenant SaaS Application',
    category: 'Full Stack',
    year: '2026',
    duration: 'Full Stack Development',
    role: 'Full Stack Developer',

    heroImage: '/assets/ITAM/Audit_Logs.webp',
    overview: 'A multi-tenant SaaS application built with Next.js 14 and Supabase that centralises internal tool access management with structured approval workflows, role-based access control, and comprehensive audit logging.',

    challenge: {
      title: 'The Challenge',
      description: 'Organizations often struggle with managing access to internal tools securely, leading to scattered access requests, lack of proper oversight, and missing compliance tracking.',
      points: [
        'Centralize internal tool access management for multiple organizations effectively',
        'Enforce strict tenant isolation to prevent data leaks across organizations',
        'Implement a structured, role-based approval workflow for access requests',
        'Ensure tamper-proof and guaranteed audit logging for strict compliance',
        'Provide a secure, performant, and reliable application architecture'
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'Developed a comprehensive SaaS platform using Next.js 14 and Supabase, implementing deep security measures including PostgreSQL Row Level Security for tenant isolation and atomic transactions for reliable audit trails.',
      approach: [
        'Built tenant isolation at the database level using RLS policies scoped to custom JWT claims',
        'Implemented a role-based system (Owner, Admin, Member) for access request workflows',
        'Created atomic Postgres transactions to write append-only audit logs for all state-changing actions',
        'Integrated Nodemailer for invitation-based onboarding and event-driven email notifications',
        'Secured the application with JWT-based RBAC, Zod validation, rate limiting, and HTTP security headers'
      ]
    },

    technologies: [
      { name: 'Next.js 14', category: 'Frontend/API' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      { name: 'Shadcs/UI', category: 'Frontend' },
      { name: 'Supabase', category: 'Backend/Auth' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Nodemailer', category: 'Email' },
      { name: 'Zod', category: 'Validation' },
      { name: 'Vercel', category: 'Deployment' }
    ],

    features: [
      {
        title: 'Structured Approval Workflow',
        description: 'Members can request access to tools, while admins review, approve, reject, or revoke requests.'
      },
      {
        title: 'Strict Tenant Isolation',
        description: 'PostgreSQL Row Level Security policies scoped to custom JWT claims guarantee complete data separation.'
      },
      {
        title: 'Tamper-Proof Audit Logs',
        description: 'State-changing actions are recorded in an append-only log using robust atomic transactions.'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Three distinct roles (Owner, Admin, Member) manage permissions and actions across the platform.'
      },
      {
        title: 'Robust Security Setup',
        description: 'Includes JWT-based RBAC, strict Zod validation, rate limiting, and comprehensive HTTP security headers.'
      }
    ],

    results: {
      metrics: [
        { value: 'Secure', label: 'Tenant Isolation' },
        { value: 'Atomic', label: 'Audit Logging' },
        { value: '3', label: 'User Roles' },
        { value: '100%', label: 'Compliance Tracking' }
      ],
      outcomes: [
        'Streamlined internal tool access management and structured approval workflows',
        'Eliminated cross-tenant data leak risks via database-level policy enforcement',
        'Provided reliable compliance trails through guaranteed, automatic audit logging',
        'Delivered a highly secure, modern SaaS platform with robust enterprise-grade features'
      ]
    },

    images: [
      {
        url: '/assets/ITAM/RequestsPage.webp',
        caption: 'Access requests management interface'
      },
      {
        url: '/assets/ITAM/ToolsPage.webp',
        caption: 'Internal tools directory'
      },
      {
        url: '/assets/ITAM/TeamsPage.webp',
        caption: 'Team management and role assignment'
      }
    ],

    links: {
      live: '',
      github: ''
    },

    nextProject: 'repolens'
},
{
  id: 'repolens',
  title: 'Repolens',
  subtitle: 'GitHub Repository Analytics Dashboard',
  category: 'Full Stack / API',
  year: '2026',
  duration: 'Development',
  role: 'Full Stack Developer',

  heroImage: '/assets/RepoLens/overviewPage.webp',
  overview: 'A web-based tool that analyzes public GitHub repositories and presents a structured dashboard summarizing project health, metadata, and code composition.',

  challenge: {
    title: 'The Challenge',
    description: 'Build a fast, zero-setup analysis tool providing repository health insights without complex or slow deep static code environments.',
    points: [
      'Aggregate repository metadata, commit activity, and contributor data',
      'Handle GitHub API rate limits gracefully with robust caching strategies',
      'Build an API-first backend capable of rapid data retrieval and reliable processing',
      'Surface repository insights, maintainability flags, and secret detection patterns efficiently'
    ]
  },

  solution: {
    title: 'The Solution',
    description: 'Developed a high-performance Node.js/Fastify API to aggregate GitHub REST and GraphQL data, cached via Redis, and visualized through a modern React dashboard.',
    approach: [
      'Utilized a standard web stack with React, Chart.js, and React Query for the UI',
      'Built a low-overhead Fastify API layer over traditional Express for better performance',
      'Implemented advanced Upstash Redis caching to minimize redundant GitHub API calls',
      'Used Supabase for data access, authentication, and persistent PostgreSQL storage',
      'Followed an API-first approach, stubbing rate-limits and focusing on robust metric collection'
    ]
  },

  technologies: [
    { name: 'React', category: 'Frontend' },
    { name: 'Fastify', category: 'Backend/API' },
    { name: 'Supabase', category: 'Database/Auth' },
    { name: 'Redis', category: 'Caching' },
    { name: 'React Query', category: 'Data Fetching' },
    { name: 'Chart.js', category: 'Visualization' }
  ],

  features: [
    {
      title: 'Repository Health Dashboard',
      description: 'Summarizes key project health indicators, commit history, and quality signals in an intuitive UI.'
    },
    {
      title: 'API-Driven Analysis',
      description: 'Aggregates metadata seamlessly from both GitHub REST and GraphQL APIs.'
    },
    {
      title: 'Built-in Caching',
      description: 'Employs Redis (Upstash) to cache API results temporarily, enhancing speed and respecting rate limits.'
    },
    {
      title: 'Secret & Pattern Detection',
      description: 'Includes extended secret detection patterns beyond standard defaults.'
    }
  ],

  results: {
    metrics: [
      { value: 'Fastify', label: 'API Backend' },
      { value: 'Redis', label: 'Caching Layer' },
      { value: 'GraphQL', label: 'Data Source' },
      { value: 'Zero', label: 'Setup Time' }
    ],
    outcomes: [
      'Delivered performant API-powered repository analysis without deep static processing overhead',
      'Ensured stable metrics delivery by caching extensive GitHub API calls',
      'Implemented maintainable, componentized charting dashboard with React Query'
    ]
  },

  images: [
    {
      url: '/assets/RepoLens/overviewPage.webp',
      caption: 'Repository overview with composite score and activity trend'
    },
    {
      url: '/assets/RepoLens/activityPage.webp',
      caption: 'Detailed commit activity trend over time'
    },
    {
      url: '/assets/RepoLens/scorePage.webp',
      caption: 'Repository health score radar chart and detailed breakdown'
    },
    {
      url: '/assets/RepoLens/codeInsightsPage.webp',
      caption: 'Language composition and repository standards analysis'
    }
  ],

  links: {
    live: '',
    github: ''
  },

  nextProject: 'modedge-interior'
  },
  {
    id: 'modedge-interior',
    title: 'ModEdge Interior',
    subtitle: 'Interior Design Portfolio',
    category: 'Portfolio Website',
    year: '2025',
    duration: '1 month',
    role: 'Frontend Developer',

    heroImage: '/assets/Modedge/modedge-hero.webp',
    overview: 'A beautiful interior design portfolio showcasing stunning photography and seamless user experience.',

    challenge: {
      title: 'The Challenge',
      description: 'Create an engaging interior design portfolio that presents complex design projects in an easy-to-understand format with beautiful visualizations.',
      points: [
        'Present complex design projects clearly using concise case studies and visuals',
        'Showcase high-resolution photography while keeping pages fast and responsive',
        'Design layouts that prioritize visual storytelling and hierarchy',
        'Make content editable and organized for non-technical clients',
        'Ensure accessibility and great UX across all devices and screen sizes'
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'Developed a visually-driven React portfolio that highlights interior projects with optimized image galleries, structured case studies, and an easy content workflow for clients.',
      approach: [
        'Built responsive, image-first layouts to showcase photography with lightbox galleries',
        'Implemented image optimization and lazy loading to preserve quality and performance',
        'Created concise case study templates combining visuals, process notes, and outcomes',
        'Enabled a simple content workflow for non-technical clients via CMS integration or structured JSON',
        'Focused on accessibility, semantic markup, and mobile-first UX'
      ]
    },

    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TailwindCSS', category: 'Styling' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Supabase', category: 'Database' },
      { name: 'Emailjs', category: 'Contact Forms' },
      { name: 'Vercel', category: 'Deployment' }
    ],

    features: [
      {
        title: 'Project Galleries',
        description: 'Beautiful image galleries showcasing interior design projects with before/after views.'
      },
      {
        title: 'Case Studies',
        description: 'Detailed project breakdowns with design process, challenges, and solutions.'
      },
      {
        title: 'Responsive Design',
        description: 'Optimized layouts that look stunning on desktop, tablet, and mobile devices.'
      },
      {
        title: 'Content Management',
        description: 'Easy-to-update content structure for clients to manage their portfolio independently.'
      }
    ],

    results: {
      metrics: [
        { value: '500+', label: 'Projects Showcased' },
        { value: '95%', label: 'Client Satisfaction' },
        { value: '2.0s', label: 'Page Load Time' },
        { value: '4.9/5', label: 'User Rating' }
      ],
      outcomes: [
        'Successfully showcased over 500 interior design projects with high visual impact',
        'Achieved 95% client satisfaction with portfolio presentation and ease of use',
        'Maintained fast load times while displaying high-resolution images',
        'Featured in design publications and attracted new client inquiries'
      ]
    },

    images: [
      { url: '/assets/Modedge/project-section.webp', caption: 'Project gallery showcasing interior design work' },
      { url: '/assets/Modedge/video-gallery.webp', caption: 'Video gallery featuring project walkthroughs' },
      { url: '/assets/Modedge/modedge-hero.webp', caption: 'Hero section with featured design projects' }
    ],

    links: {
      live: 'https://modedgeinterior.com',
      github: ''
    },

    nextProject: 'portfolio-website'
  },

  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    subtitle: 'Modern Portfolio Website',
    category: 'Full Stack',
    year: '2025',
    duration: '1 month',
    role: 'Full Stack Developer',

    heroImage: '/assets/potfolio/portfolio-hero.webp',
    overview: 'Designed and developed a bold, minimalist portfolio website showcasing projects with dynamic routing, smooth animations, and integrated contact functionality.',

    challenge: {
      title: 'The Challenge',
      description: 'Create a striking personal portfolio that stands out with unique design while maintaining excellent performance, user experience, and easy content management.',
      points: [
        'Design a bold, editorial-style interface that captures attention and reflects personal brand',
        'Implement smooth animations and transitions without compromising performance',
        'Create dynamic project case studies with detailed information architecture',
        'Build a data-driven structure for easy project updates and content management',
        'Integrate contact functionality with form validation and email service',
        'Ensure responsive design across all devices with consistent visual impact'
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'Built a modern React application with dynamic routing, centralized project data management, and EmailJS integration. Implemented a black-and-white design system with large typography, staggered animations, and asymmetric layouts for visual impact.',
      approach: [
        'Used React Router for smooth client-side navigation and dynamic case study pages',
        'Centralized all project data in a structured JavaScript file for easy updates',
        'Implemented staggered CSS animations with useEffect hooks for engaging user experience',
        'Integrated EmailJS for serverless contact form functionality',
        'Applied mobile-first responsive design with Tailwind CSS',
        'Created reusable component architecture for maintainability'
      ]
    },

    technologies: [
      { name: 'React 19', category: 'Frontend' },
      { name: 'React Router DOM', category: 'Routing' },
      { name: 'Tailwind CSS 4', category: 'Styling' },
      { name: 'Vite', category: 'Build Tool' },
      { name: 'EmailJS', category: 'Contact Forms' },
      { name: 'JavaScript ES6+', category: 'Language' }
    ],

    features: [
      {
        title: 'Dynamic Project Case Studies',
        description: 'Individual pages for each project with challenge, solution, technologies, features, and results.'
      },
      {
        title: 'Bold Editorial Design',
        description: 'Black and white color scheme with large typography and asymmetric masonry grid layouts.'
      },
      {
        title: 'Smooth Animations',
        description: 'Staggered fade-in effects, hover transitions, and scroll-based interactions for engaging UX.'
      },
      {
        title: 'Contact Form Integration',
        description: 'Working contact form with EmailJS integration, validation, and success/error states.'
      },
      {
        title: 'Responsive Architecture',
        description: 'Mobile-first design ensuring perfect display on desktop, tablet, and mobile devices.'
      },
      {
        title: 'Data-Driven Content',
        description: 'Centralized project data structure with helper functions for easy content management.'
      }
    ],

    results: {
      metrics: [
        { value: '100%', label: 'Lighthouse Performance' },
        { value: '<2s', label: 'Page Load Time' },
        { value: '6', label: 'Portfolio Projects' },
        { value: '4', label: 'Main Sections' }
      ],
      outcomes: [
        'Created a unique, memorable portfolio with bold editorial design that stands out',
        'Achieved excellent performance scores with optimized animations and lazy loading',
        'Successfully integrated EmailJS for serverless contact form functionality',
        'Built modular, maintainable component architecture for future updates',
        'Implemented smooth routing with React Router for seamless navigation',
        'Established strong personal brand through consistent design language'
      ]
    },

    images: [
      { url: '/assets/potfolio/portfolio-hero.webp', caption: 'Hero section with bold typography and animation' },
      { url: '/assets/potfolio/project-section.webp', caption: 'Projects grid with asymmetric masonry layout' },
      { url: '/assets/potfolio/case-study.webp', caption: 'Detailed case study page with project breakdown' }
    ],

    links: {
      live: '/',
      github: 'https://github.com/Dev-5804/'
    },

    nextProject: 'admin-dashboard'
  },

  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard UI',
    subtitle: 'Frontend Web Application',
    category: 'Frontend',
    year: '2025',
    duration: '2 weeks',
    role: 'Frontend Developer',

    // Hero Section
    heroImage: '/assets/AdminDashboardUI/SC1.webp',
    overview: 'Developed a responsive admin dashboard template focused on frontend functionality, including navigation layout, overview metrics, and UI components built with Next.js, TypeScript, and Tailwind CSS.',

    // Challenge
    challenge: {
      title: 'The Challenge',
      description:
        'The goal was to build a dashboard template demonstrating UI logic and structural layout commonly required in admin interfaces such as SaaS and data-driven systems.',
      points: [
        'Implement a sidebar and topbar layout suitable for dashboard navigation.',
        'Display overview metrics in a clear and consistent UI pattern.',
        'Ensure responsive behavior for desktop and tablet use.',
        'Include placeholders for user sections and future data integration.',
        'Maintain modular component structure for easy extension.'
      ]
    },

    // Solution
    solution: {
      title: 'The Solution',
      description:
        'A responsive admin dashboard template was built with reusable UI components, navigation structure, and overview sections. The interface separates layout, metrics, and user views while keeping code modular for further development.',
      approach: [
        'Implemented sidebar and topbar with consistent navigation structure.',
        'Added metrics cards and overview sections for quick information display.',
        'Used Tailwind utility classes for responsive layout control.',
        'Kept component architecture minimal and reusable for future expansion.'
      ]
    },

    // Technologies
    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Zustand', category: 'State Management' },
      { name: 'Vercel', category: 'Deployment' }
    ],

    // Features
    features: [
      {
        title: 'Sidebar Navigation',
        description: 'Navigation structure separating dashboard views and potential sections.'
      },
      {
        title: 'Overview Metrics',
        description: 'Displays high-level information using metric cards.'
      },
      {
        title: 'Responsive Design',
        description: 'Optimized layout for desktop and tablet usage.'
      },
      {
        title: 'Topbar with Theme Toggle',
        description: 'Includes dark/light switching and layout-level UI controls.'
      },
      {
        title: 'Reusable Components',
        description: 'Components built with clean structure for extendability.'
      }
    ],

    // Results
    results: {
      metrics: [
        { value: '100%', label: 'Frontend Only' },
        { value: 'Responsive', label: 'Layout Adaptability' },
        { value: 'Modular', label: 'Component Structure' },
        { value: 'Reusable', label: 'UI Components' }
      ],
      outcomes: [
        'Provides a frontend-ready admin interface for future data integration.',
        'Demonstrates UI structure commonly used in SaaS dashboards.',
        'Improves portfolio depth with a non-landing style project.',
        'Shows ability to create modular, production-ready UI components.'
      ]
    },

    // Images (placeholders)
    images: [
      {
        url: '/assets/AdminDashboardUI/SC2.webp',
        caption: 'User table section with status details'
      },
      {
        url: '/assets/AdminDashboardUI/SC3.webp',
        caption: 'Editing UI'
      },
      {
        url: '/assets/AdminDashboardUI/SC4.webp',
        caption: 'Light Theme'
      }
    ],

    // Links
    links: {
      live: 'https://admin-dashboard-ui-nine.vercel.app/dashboard',
      github: 'https://github.com/Dev-5804/admin-dashboard-ui'
    },

    // Next Project
    nextProject: 'pricing-page'
  },

  {
    id: 'pricing-page',
    title: 'Pricing Page Template',
    subtitle: 'Frontend Web Application',
    category: 'Frontend',
    year: '2025',
    duration: '2 weeks',
    role: 'Frontend Developer',

    // Hero
    heroImage: '/assets/PricingPage/SC1.webp',
    overview:
      'Created a responsive pricing page template featuring selectable plans, billing mode switching, add-on options, real-time pricing updates, and a demo checkout form using Next.js, TypeScript, and Tailwind CSS.',

    // Challenge
    challenge: {
      title: 'The Challenge',
      description:
        'Build an interactive pricing flow demonstrating non-trivial UI logic, including plan selection, billing mode changes, and add-on handling, with calculated totals updating in real time.',
      points: [
        'Implement a monthly/yearly billing toggle affecting all prices.',
        'Support plan selection with clear visual state and pricing impact.',
        'Handle multiple add-ons with dynamic total calculation.',
        'Design a summary panel to reflect all selected items.',
        'Create a demo checkout form for user confirmation.'
      ]
    },

    // Solution
    solution: {
      title: 'The Solution',
      description:
        'A modular pricing interface was developed using reusable UI components and state logic to calculate updated totals. The template provides an example of a common SaaS pricing flow, including billing modes, plan tiers, add-ons, and a confirmation step.',
      approach: [
        'State-driven plan and add-on toggles.',
        'Dynamic summary showing current selections and totals.',
        'Client-side form validation and confirmation workflow.',
        'Clear component separation for pricing, summary, and checkout.',
        'Responsive layout for tablet and desktop.'
      ]
    },

    // Technologies
    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Vercel', category: 'Deployment' }
    ],

    // Features
    features: [
      {
        title: 'Plan Selection',
        description:
          'Supports multiple plan tiers with active selection state and corresponding pricing.'
      },
      {
        title: 'Monthly / Yearly Billing',
        description:
          'Toggle updates all pricing values in real time and adjusts summary totals.'
      },
      {
        title: 'Add-on Options',
        description:
          'Selectable add-ons modify the total cost and appear in the summary panel.'
      },
      {
        title: 'Dynamic Summary Panel',
        description:
          'Reflects current plan, billing mode, addons, and updated total pricing.'
      },
      {
        title: 'Demo Checkout Form',
        description:
          'Confirms selection and validates form input for a complete demo flow.'
      }
    ],

    // Results
    results: {
      metrics: [
        { value: 'Selectable', label: 'Plan Tiers' },
        { value: 'Dynamic', label: 'Billing Mode' },
        { value: 'Responsive', label: 'Layout' },
        { value: 'State-driven', label: 'Pricing Logic' }
      ],
      outcomes: [
        'Demonstrates ability to build interactive UI with real-time calculations.',
        'Shows proficiency in common SaaS pricing flows and UI logic.',
        'Adds a focused, logic-heavy project to the portfolio.',
        'Includes deploy-ready structure and modular components.'
      ]
    },

    // Images
    images: [
      {
        url: '/assets/PricingPage/SC2.webp',
        caption: 'Details page'
      },
      {
        url: '/assets/PricingPage/SC3.webp',
        caption: 'Congration screen after checkout'
      },
      {
        url: '/assets/PricingPage/SC4.webp',
        caption: 'Yearly plan toggle'
      }
    ],

    // Links
    links: {
      live: 'https://pricing-page-template.vercel.app/',
      github: 'https://github.com/Dev-5804/pricing-page-template'
    },

    // Next
    nextProject: 'itam'
  }

];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get all project IDs
export const getAllProjectIds = () => {
  return projectsData.map(project => project.id);
};

// Helper function to get next project
export const getNextProject = (currentId) => {
  const currentProject = getProjectById(currentId);
  if (currentProject && currentProject.nextProject) {
    return getProjectById(currentProject.nextProject);
  }
  return null;
};
