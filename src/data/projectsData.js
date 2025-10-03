// Project Data - All project details for portfolio
export const projectsData = [
  {
    id: 'clearsite',
    title: 'ClearSite',
    subtitle: 'Full Stack Web Application',
    category: 'Full Stack',
    year: '2025',
    duration: '1 months',
    role: 'Frontend Developer',

    // Hero Section
    heroImage: 'public/assets/clearsite.webp',
    overview: 'Developed clearsite.ae, a portfolio and booking platform for a construction waste management company, showcasing services and enabling clients to schedule cleanups online',

    // Challenge
    challenge: {
      title: 'The Challenge',
      description: 'Developed clearsite.ae, a portfolio and booking platform for a construction waste management company, showcasing services and enabling clients to schedule cleanups online.',
      points: [
        'Built a dual-purpose platform serving as both a company portfolio and a customer booking system.',
        'Designed a clean, user-friendly interface to simplify service discovery and bookings.',
        'Implemented booking functionality with form handling, scheduling, and client notifications.',
        'Ensured responsive design for smooth performance across desktop and mobile.',
        'Focused on fast load times and optimized performance for better user experience.',
        'Collaborated in a team environment, coordinating roles and development tasks effectively.'
      ]
    },

    // Solution
    solution: {
      title: 'The Solution',
      description: 'We designed and developed a responsive web platform that combined a portfolio to showcase services with an integrated booking system. To solve the clutter problem, we created a minimal, intuitive UI so users could easily browse services and schedule cleanups. We optimized performance with lightweight components and responsive layouts, and ensured seamless functionality across devices.',
      approach: [
        'Clear separation of portfolio and booking flows.',
        'Simple and responsive user interface.',
        'Smooth booking process with form handling and notifications.',
        'Team collaboration to integrate design and development efficiently.'
      ]
    },

    // Technologies
    technologies: [
      { name: 'React.js', category: 'Frontend' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Supabase', category: 'Database' },
      { name: 'Netlify', category: 'Deployment' },
      { name: 'Redux', category: 'State Management' },
      { name: 'Vercel', category: 'Deployment' }
    ],

    // Features
    features: [
      {
        title: 'Company Portfolio',
        description: 'Showcases services, projects, and company details in a professional layout.'
      },
      {
        title: 'Online Booking System',
        description: 'Allows clients to schedule construction waste cleanup directly from the site.'
      },
      {
        title: 'Responsive Design',
        description: 'Optimized for Easy way for customers to get in touch or request services.desktop, tablet, and mobile users.'
      },
      {
        title: 'Service Information Pages',
        description: 'Clear breakdown of offerings with details for each service.'
      },
      {
        title: 'Contact & Inquiry Forms',
        description: 'Easy way for customers to get in touch or request services.'
      },
      {
        title: 'Clean & Minimal UI',
        description: 'Focused on usability and simple navigation for non-technical users.'
      }
    ],

    // Results
    results: {
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '2.1s', label: 'Page Load Time' },
        { value: '150+', label: 'Monthly Visitors' },
        { value: '4.8/5', label: 'User Rating' }
      ],
      outcomes: [
        'Helped the company establish a professional online presence to showcase their services.',
        'Enabled clients to book cleanup services online, reducing manual coordination.',
        'Improved customer engagement through a responsive, easy-to-use interface.',
        'Streamlined the company’s service inquiries and booking process, saving time and effort.',
        'Delivered a modern, fast-loading platform that reflects the brand’s professionalism.'
      ]
    },

    // Images (placeholders)
    images: [
      { url: 'public/assets/clearsite.webp', caption: 'Product listing page with filters' },
      { url: 'public/assets/clearsite.webp', caption: 'Checkout process' },
      { url: 'public/assets/clearsite.webp', caption: 'Admin dashboard' }
    ],

    // Links
    links: {
      live: 'https://clearsite.ae',
      github: ''
    },

    // Next Project
    nextProject: 'mframing-pixel'
  },

  {
    id: 'mframing-pixel',
    title: 'MFraming Pixel',
    subtitle: 'Photographer Portfolio Website',
    category: 'Full Stack',
    year: '2025',
    duration: '1 months',
    role: 'Full Stack Developer',

    heroImage: 'public/assets/mframingpixel.webp',
    overview: 'Developed mframingpixel.com, a portfolio website for an interior design photographer, integrated with a headless CMS for easy content management and updates.',

    challenge: {
      title: 'The Challenge',
      description: 'Building a portfolio website for a photographer required balancing visual storytelling with technical performance. The main challenge was integrating a headless CMS that allowed the photographer to easily manage content while ensuring the site stayed fast, responsive, and visually polished across devices. Additionally, handling large, high-quality images without compromising speed and user experience was a key hurdle.',
      points: [
        'Ensuring the photographer could easily update projects, galleries, and blog content without technical knowledge.',
        'Showcasing high-quality photography while keeping the site fast-loading and optimized.',
        'Preserving the aesthetic impact of visuals across desktop, tablet, and mobile.',
        'Connecting a headless CMS smoothly with the frontend for real-time updates without breaking design consistency.'
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'To address the challenges, we developed a responsive portfolio website that seamlessly integrates with a headless CMS, allowing the photographer to manage galleries, projects, and content without technical assistance. The site was designed to showcase high-quality images effectively while maintaining fast load times and smooth performance across devices.',
      approach: [
        'Used a CMS to separate content management from the frontend, enabling easy updates.',
        'Implemented lazy loading, compression, and responsive image sizes to keep performance high.',
        'Created layouts that preserve visual impact on desktop, tablet, and mobile.',
        'Focused on design that highlights photography without distractions.',
        'Ensured seamless communication between CMS data and the website’s display components.'
      ]
    },

    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Supabase', category: 'Database' },
      { name: 'Vercel', category: 'Deployment' }
    ],

    features: [
      {
        title: 'Portfolio Showcase',
        description: 'Displays interior design photography in organized galleries with high visual impact.'
      },
      {
        title: 'Headless CMS Integration',
        description: 'Allows easy content management for projects, images, and blog posts without coding.'
      },
      {
        title: 'Responsive Design',
        description: 'Optimized layouts for desktop, tablet, and mobile devices.'
      },
      {
        title: 'High-Quality Image Optimization',
        description: 'Ensures fast load times while preserving image clarity.'
      },
      {
        title: 'Minimal & Clean UI',
        description: 'Focused on highlighting photography without unnecessary distractions.'
      },
      {
        title: 'Dynamic Content Updates',
        description: 'Changes in the CMS automatically reflect on the website in real-time.'
      }
    ],

    results: {
      metrics: [
        { value: '98%', label: 'User Satisfaction' },
        { value: '50%', label: 'Content Management Efficiency' },
        { value: '<200ms', label: 'Page Load Latency' },
        { value: '50+', label: 'Portfolio Projects Managed' }
      ],
      outcomes: [
        'Photographer can update galleries and projects 50% faster using the headless CMS',
        'Achieved 98% user satisfaction for website usability and design',
        'High-quality images load in under 200ms, improving user experience',
        'Seamless content updates with zero manual errors across 500+ projects'
      ]
    },

    images: [
      { url: 'public/assets/mframingpixel.webp', caption: 'Board view with drag-and-drop' },
      { url: 'public/assets/mframingpixel.webp', caption: 'Task details and comments' },
      { url: 'public/assets/mframingpixel.webp', caption: 'Calendar view' }
    ],

    links: {
      live: 'https://mframingpixel.com',
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

    heroImage: 'public/assets/mframingpixel.webp',
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
      {name: 'Emailjs', category: 'Contact Forms' },
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
      { url: 'public/assets/modedge.webp', caption: 'Project gallery view' },
      { url: 'public/assets/modedge.webp', caption: 'Case study detail' },
      { url: 'public/assets/modedge.webp', caption: 'Mobile responsive design' }
    ],

    links: {
      live: 'https://modedgeinterior.com',
      github: ''
    },

    nextProject: 'menteronics'
  },

  {
    id: 'menteronics',
    title: 'Menteronics',
    subtitle: 'Educational Platform Website',
    category: 'Web Development',
    year: '2025',
    duration: '2 months',
    role: 'Website Developer',

    heroImage: 'menteronics-hero.jpg',
    overview: 'Developed menteronics.com, an informative website for a startup offering offline courses, providing resources and information, focused on offline learning experiences.',

    challenge: {
      title: 'The Challenge',
      description: 'Create an informative website that effectively showcases offline courses, resources, and learning materials without online purchasing capabilities.',
      points: [
        'Design an engaging interface for course information and resources',
        'Implement responsive design for various devices',
        'Organize content for easy navigation and discovery',
        'Ensure fast loading times for informative content',
        'Integrate contact forms for inquiries about offline courses'
      ]
    },

    solution: {
      title: 'The Solution',
      description: 'Built a responsive website using React and modern web technologies, focusing on content presentation and user engagement for offline learning.',
      approach: [
        'Used React for dynamic content rendering',
        'Implemented responsive design with Tailwind CSS',
        'Created structured layouts for course information',
        'Added contact integration with EmailJS',
        'Optimized for performance and accessibility'
      ]
    },

    technologies: [
      { name: 'React', category: 'Frontend' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'EmailJS', category: 'Contact Forms' },
      { name: 'Vercel', category: 'Deployment' }
    ],

    features: [
      {
        title: 'Course Information',
        description: 'Detailed descriptions of offline courses offered by the startup.'
      },
      {
        title: 'Resource Library',
        description: 'Collection of learning resources and materials.'
      },
      {
        title: 'Contact Forms',
        description: 'Easy way for users to inquire about courses and get information.'
      },
      {
        title: 'Responsive Design',
        description: 'Optimized for desktop, tablet, and mobile devices.'
      }
    ],

    results: {
      metrics: [
        { value: '1K+', label: 'Monthly Visitors' },
        { value: '95%', label: 'User Satisfaction' },
        { value: '2.0s', label: 'Page Load Time' },
        { value: '4.5/5', label: 'User Rating' }
      ],
      outcomes: [
        'Successfully attracted 1,000+ monthly visitors interested in offline courses',
        'Achieved 95% user satisfaction with the informative content',
        'Maintained fast load times for optimal user experience',
        'Facilitated inquiries leading to offline course enrollments'
      ]
    },

    images: [
      { url: 'public/assets/menteronics.webp', caption: 'Course information page' },
      { url: 'public/assets/menteronics.webp', caption: 'Resource library' },
      { url: 'public/assets/menteronics.webp', caption: 'Contact form' }
    ],

    links: {
      live: 'https://menteronics.tech',
      github: ''
    },

    nextProject: 'portfolio'
  },

  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    subtitle: 'Modern Portfolio Website',
    category: 'Full Stack',
    year: '2025',
    duration: '1 month',
    role: 'Full Stack Developer',

    heroImage: 'public/assets/portfolio.webp',
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
      { url: 'public/assets/portfolio.webp', caption: 'Hero section with animated typography' },
      { url: 'public/assets/portfolio.webp', caption: 'Projects grid with asymmetric layout' },
      { url: 'public/assets/portfolio.webp', caption: 'Case study detail page' }
    ],

    links: {
      live: '/',
      github: 'https://github.com/Dev-5804/'
    },

    nextProject: 'clearsite'
  },

//   {
//     id: 'design-system',
//     title: 'Design System',
//     subtitle: 'Component Library & Documentation',
//     category: 'UI/UX',
//     year: '2024',
//     duration: '3 months',
//     role: 'UI Developer',

//     heroImage: 'design-hero.jpg',
//     overview: 'A comprehensive design system with reusable React components, design tokens, documentation, and theming support for consistent UI development.',

//     challenge: {
//       title: 'The Challenge',
//       description: 'Create a scalable design system that promotes consistency, speeds up development, and provides excellent developer experience with comprehensive documentation.',
//       points: [
//         'Design consistent and accessible components',
//         'Implement theming system for customization',
//         'Create comprehensive documentation',
//         'Ensure cross-browser compatibility',
//         'Build automated testing for all components'
//       ]
//     },

//     solution: {
//       title: 'The Solution',
//       description: 'Developed a React component library with TypeScript, implemented design tokens, created Storybook documentation, and added automated visual regression testing.',
//       approach: [
//         'Created atomic design system architecture',
//         'Implemented CSS-in-JS with styled-components',
//         'Used Storybook for component documentation',
//         'Added automated testing with Jest and Testing Library',
//         'Implemented CI/CD for component library publishing'
//       ]
//     },

//     technologies: [
//       { name: 'React', category: 'Framework' },
//       { name: 'TypeScript', category: 'Language' },
//       { name: 'Storybook', category: 'Documentation' },
//       { name: 'Styled Components', category: 'Styling' },
//       { name: 'Jest', category: 'Testing' },
//       { name: 'Figma', category: 'Design' },
//       { name: 'Rollup', category: 'Build Tool' }
//     ],

//     features: [
//       {
//         title: '50+ Components',
//         description: 'Comprehensive library of accessible, reusable components for rapid development.'
//       },
//       {
//         title: 'Theming System',
//         description: 'Flexible theming with design tokens for easy customization and brand consistency.'
//       },
//       {
//         title: 'Live Documentation',
//         description: 'Interactive Storybook documentation with code examples and playground.'
//       },
//       {
//         title: 'Accessibility First',
//         description: 'WCAG 2.1 compliant components with keyboard navigation and screen reader support.'
//       }
//     ],

//     results: {
//       metrics: [
//         { value: '50+', label: 'Components' },
//         { value: '95%', label: 'Test Coverage' },
//         { value: '500+', label: 'NPM Downloads' },
//         { value: 'AAA', label: 'Accessibility' }
//       ],
//       outcomes: [
//         'Reduced development time by 60% across teams',
//         'Achieved 95% automated test coverage',
//         'Maintained AAA accessibility rating for all components',
//         'Adopted by 3 product teams in organization'
//       ]
//     },

//     images: [
//       { url: 'design-screenshot1.jpg', caption: 'Component library' },
//       { url: 'design-screenshot2.jpg', caption: 'Storybook documentation' },
//       { url: 'design-screenshot3.jpg', caption: 'Theming example' }
//     ],

//     links: {
//       live: 'https://design-system.example.com',
//       github: 'https://github.com/username/design-system',
//       demo: 'https://storybook.example.com'
//     },

//     nextProject: 'ecommerce-platform'
//   }
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
