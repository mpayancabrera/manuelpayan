import type {ResumeFormData, Language, UiTranslations, PortfolioItemEntry} from './types';

export const defaultResumeDataEn: ResumeFormData = {
  name: 'Manuel Payán Cabrera',
  jobTitle: 'Senior Frontend Developer',
  email: 'mpayancabrera@gmail.com',
  phone: '+34 637 043 626',
  website: 'https://manuelpayan.com',
  github: 'https://github.com/mpayancabrera',
  linkedin: 'https://www.linkedin.com/in/manuelpayancabrera',
  summary:
    'Senior Frontend Developer with 10 years of professional experience, including 8 years specializing in frontend development. Expert in building high-performance web applications using React, Next.js, TypeScript, and Node.js. Strong focus on scalable architecture, UX/UI quality, and performance optimization. Proven ability to lead frontend initiatives, collaborate across teams, and deliver impactful solutions—most recently in eCommerce, finance, and enterprise environments.',
  skills: {
    Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SSR', 'Chakra UI'],
    Testing: ['Jest', 'React Testing Library', 'Playwright', 'Cypress'],
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'GCP', 'Azure'],
    Tooling: ['Vite', 'Webpack', 'ESLint', 'Prettier', 'Figma'],
    'Backend (Basic)': ['Node.js', 'PHP (Symfony)', 'Python (Flask)'],
    Others: ['Git', 'Agile (Scrum/Kanban)', 'Jira', 'CI/CD']
  },
  experience: [
    {
      id: 'en-exp-1',
      company: 'StubHub International',
      title: 'Senior Frontend Developer (React, Next.js)',
      dates: 'Jun 2022 – Present',
      description:
        'Led architectural improvements and performance optimizations in a React + Next.js platform, enhancing Core Web Vitals and reducing TTI.\nDesigned and implemented scalable SSR solutions, improving SEO and load performance.\nCollaborated with backend, design, and product teams to deliver features aligned with business KPIs.'
    },
    {
      id: 'en-exp-2',
      company: 'Version 1',
      title: 'Frontend Developer (React)',
      dates: 'Jul 2021 – Jun 2022',
      description:
        'Delivered web platforms for international clients in capital markets and crypto.\nIntegrated DevOps workflows using Docker, Kubernetes and multi-cloud environments.\nContributed to design-system alignment using Figma and Sketch.'
    },
    {
      id: 'en-exp-3',
      company: 'PcComponentes',
      title: 'Full Stack Developer',
      dates: 'Mar 2019 – Jul 2021',
      description:
        'Refactored legacy PHP/Symfony monolith into microservices with Flask and React.\nDeveloped new frontend in React with SSR and TypeScript.\nApplied DDD, CQRS and RabbitMQ in service orchestration.'
    },
    {
      id: 'en-exp-4',
      company: 'University of Granada',
      title: 'Software Engineer',
      dates: 'Jul 207 – Mar 2019',
      description:
        'Built web systems to optimize visitor flows to the Alhambra using Django and AngularJS.\nApplied neural networks and data forecasting techniques for real-time prediction.'
    },
    {
      id: 'en-exp-5',
      company: 'SICE',
      title: 'Software Engineer',
      dates: 'Jun 2016 – Jul 2017',
      description:
        'Developed new features for smart transportation platforms using React and PHP.\nCoordinated directly with international clients.'
    }
  ],
  education: [
    {
      id: 'en-edu-1',
      institution: 'University of Granada',
      degree: "Master's in Data Science & Computer Engineering",
      dates: '2017 – 2019',
      description: 'Completed with honors'
    },
    {
      id: 'en-edu-2',
      institution: 'University of Granada',
      degree: 'BSc in Computer Engineering',
      dates: '2010 – 2015',
      description: 'Specialized in Information Systems and Databases'
    }
  ],
  courses: [
    {id: 'en-course-1', name: 'Testing Modern Frontend Applications', issuer: 'CodelyTV', year: '2020', link: '#'},
    {id: 'en-course-2', name: 'Docker & Kubernetes: The Complete Guide', issuer: 'Udemy', year: '2019', link: '#'},
    {
      id: 'en-course-3',
      name: 'Advanced Web Development with Django & Ionic',
      issuer: '6 Cocos',
      year: '2016',
      link: '#'
    }
  ],
  languages: [
    {id: 'en-lang-1', language: 'Spanish', proficiency: 'Native'},
    {id: 'en-lang-2', language: 'English', proficiency: 'Intermediate (B1) – working on improving to B2+ level'}
  ],
  interests: ['Frontend architecture', 'Performance optimization', 'Tennis', 'Autobiographies', 'Tech mentoring']
};

export const defaultResumeDataEs: ResumeFormData = {
  ...defaultResumeDataEn,
  jobTitle: 'Desarrollador Frontend Senior',
  linkedin: 'https://www.linkedin.com/in/manuelpayancabrera',
  summary:
    'Desarrollador Frontend Senior con 10 años de experiencia profesional, incluyendo 8 años especializándome en desarrollo frontend. Experto en construir aplicaciones web de alto rendimiento utilizando React, Next.js, TypeScript y Node.js. Fuerte enfoque en arquitectura escalable, calidad UX/UI y optimización del rendimiento. Capacidad demostrada para liderar iniciativas frontend, colaborar entre equipos y entregar soluciones impactantes, más recientemente en entornos de eCommerce, finanzas y empresariales.',
  skills: {
    Frontend: defaultResumeDataEn.skills['Frontend'],
    'Pruebas (Testing)': defaultResumeDataEn.skills['Testing'],
    'DevOps & Cloud': defaultResumeDataEn.skills['DevOps & Cloud'],
    'Herramientas (Tooling)': defaultResumeDataEn.skills['Tooling'],
    'Backend (Básico)': defaultResumeDataEn.skills['Backend (Basic)'],
    Otros: defaultResumeDataEn.skills['Others']
  },
  experience: defaultResumeDataEn.experience.map((exp) => ({
    ...exp,
    id: exp.id.replace('en-', 'es-'),
    title:
      exp.title === 'Senior Frontend Developer (React, Next.js)'
        ? 'Desarrollador Frontend Senior (React, Next.js)'
        : exp.title === 'Frontend Developer (React)'
        ? 'Desarrollador Frontend (React)'
        : exp.title === 'Full Stack Developer'
        ? 'Desarrollador Full Stack'
        : exp.title === 'Software Engineer'
        ? 'Ingeniero de Software'
        : exp.title,
    description:
      exp.company === 'StubHub International'
        ? 'Lideré mejoras arquitectónicas y optimizaciones de rendimiento en una plataforma React + Next.js, mejorando Core Web Vitals y reduciendo TTI.\nDiseñé e implementé soluciones SSR escalables, mejorando SEO y rendimiento de carga.\nColaboré con equipos de backend, diseño y producto para entregar funcionalidades alineadas con KPIs de negocio.'
        : exp.company === 'Version 1'
        ? 'Entregué plataformas web para clientes internacionales en mercados de capitales y cripto.\nIntegré flujos de trabajo DevOps utilizando Docker, Kubernetes y entornos multi-cloud.\nContribuí a la alineación del sistema de diseño utilizando Figma y Sketch.'
        : exp.company === 'PcComponentes'
        ? 'Refactoricé monolito PHP/Symfony legado a microservicios con Flask y React.\nDesarrollé nuevo frontend en React con SSR y TypeScript.\nApliqué DDD, CQRS y RabbitMQ en la orquestación de servicios.'
        : exp.company === 'University of Granada'
        ? 'Construí sistemas web para optimizar los flujos de visitantes a la Alhambra utilizando Django y AngularJS.\nApliqué redes neuronales y técnicas de predicción de datos para predicción en tiempo real.'
        : exp.company === 'SICE'
        ? 'Desarrollé nuevas funcionalidades para plataformas de transporte inteligente utilizando React y PHP.\nCoordiné directamente con clientes internacionales.'
        : exp.description
  })),
  education: defaultResumeDataEn.education.map((edu) => ({
    ...edu,
    id: edu.id.replace('en-', 'es-'),
    degree:
      edu.degree === "Master's in Data Science & Computer Engineering"
        ? 'Máster en Ciencia de Datos e Ingeniería Informática'
        : edu.degree === 'BSc in Computer Engineering'
        ? 'Grado en Ingeniería Informática'
        : edu.degree,
    description:
      edu.description === 'Completed with honors'
        ? 'Completado con honores'
        : edu.description === 'Specialized in Information Systems and Databases'
        ? 'Especializado en Sistemas de Información y Bases de Datos'
        : edu.description
  })),
  courses: defaultResumeDataEn.courses.map((course) => ({
    ...course,
    id: course.id.replace('en-', 'es-'),
    name:
      course.name === 'Testing Modern Frontend Applications'
        ? 'Testing de Aplicaciones Frontend Modernas'
        : course.name === 'Docker & Kubernetes: The Complete Guide'
        ? 'Docker & Kubernetes: La Guía Completa'
        : course.name === 'Advanced Web Development with Django & Ionic'
        ? 'Desarrollo Web Avanzado con Django & Ionic'
        : course.name
  })),
  languages: [
    {id: 'es-lang-1', language: 'Español', proficiency: 'Nativo'},
    {id: 'es-lang-2', language: 'Inglés', proficiency: 'Intermedio (B1) – trabajando para mejorar a nivel B2+'}
  ],
  interests: [
    'Arquitectura frontend',
    'Optimización del rendimiento',
    'Tenis',
    'Autobiografías',
    'Mentoría tecnológica'
  ]
};

export const portfolioItemsData: PortfolioItemEntry[] = [
  {
    id: 'port-item-1',
    titleKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.title',
    descriptionKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.description',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAltKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.imageAlt',
    liveLink: 'https://labodadecarmenymanuel.com',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Wedding Site'],
    categoryKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.category',
    dataAiHint: 'website screenshot wedding'
  }
];

export const uiTranslations: Record<Language, UiTranslations> = {
  en: {
    appName: 'Manuel Payán Cabrera - Portfolio',
    languageName: 'English',
    allRightsReserved: 'All rights reserved.',
    themeLabel: 'Theme',

    header: {
      resumeLink: 'Resume',
      portfolioLink: 'Portfolio',
      blogLink: 'Blog',
      toggleNavTooltip: 'Toggle navigation'
    },
    footer: {
      languageSelectorTooltip: 'Select language',
      toggleThemeTooltip: 'Toggle theme'
    },
    homePage: {
      welcomeTitle: "Hello I'm Manuel\u00A0Payán\u00A0Cabrera\nStep in and see my work",
      viewResumeButton: 'View Resume',
      viewPortfolioButton: 'View Portfolio',
      goToBlogButton: 'Go to Blog'
    },
    resumePage: {
      backToHomeButton: 'Back to Home',
      sections: {
        contact: {title: 'Contact'},
        summary: {title: 'About Me'},
        experience: {title: 'Experience'},
        education: {title: 'Education'},
        skills: {
          title: 'Technical Skills',
          categories: {
            frontend: 'Frontend',
            testing: 'Testing',
            devops: 'DevOps & Cloud',
            tooling: 'Tooling',
            backend: 'Backend (Basic)',
            others: 'Others'
          }
        },
        courses: {title: 'Courses & Certifications'},
        languages: {title: 'Languages'},
        interests: {title: 'Interests'}
      },
      sidebar: {
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        websiteLabel: 'Website',
        jobTitleDefault: 'Job Title / Role'
      },
      courseLinkText: 'View Course'
    },
    portfolioPage: {
      pageTitle: 'My Portfolio',
      backToHomeButton: 'Back to Home',
      noProjectsFound: 'Portfolio projects will be added soon.',
      viewProjectButton: 'View Project',
      technologiesLabel: 'Technologies',
      categoryLabel: 'Category',
      projectDetails: {
        laBodaDeCarmenYManuel: {
          title: 'La Boda de Carmen y Manuel',
          description:
            'A beautiful and informative wedding website for Carmen and Manuel, providing guests with all necessary details for their special day. Features include event information, RSVP functionality (conceptual), photo gallery, and contact details.',
          imageAlt: 'Screenshot of La Boda de Carmen y Manuel website',
          category: 'Web Development'
        }
      }
    },
    blogPage: {
      pageTitle: 'Blog',
      backToHomeButton: 'Back to Home',
      comingSoonIntro:
        'My thoughts, articles, and insights will be shared here soon. Stay tuned for content on web development, technology, and more!'
    }
  },
  es: {
    appName: 'Manuel Payán Cabrera - Portafolio',
    languageName: 'Español',
    allRightsReserved: 'Todos los derechos reservados.',
    themeLabel: 'Tema',

    header: {
      resumeLink: 'Currículum',
      portfolioLink: 'Portafolio',
      blogLink: 'Blog',
      toggleNavTooltip: 'Alternar navegación'
    },
    footer: {
      languageSelectorTooltip: 'Seleccionar idioma',
      toggleThemeTooltip: 'Cambiar tema'
    },
    homePage: {
      welcomeTitle: 'Hola Soy Manuel\u00A0Payán\u00A0Cabrera\nEntra y mira mi trabajo',
      viewResumeButton: 'Ver Currículum',
      viewPortfolioButton: 'Ver Portafolio',
      goToBlogButton: 'Ir al Blog'
    },
    resumePage: {
      backToHomeButton: 'Volver al Inicio',
      sections: {
        contact: {title: 'Contacto'},
        summary: {title: 'Sobre Mí'},
        experience: {title: 'Experiencia'},
        education: {title: 'Educación'},
        skills: {
          title: 'Habilidades Técnicas',
          categories: {
            frontend: 'Frontend',
            testing: 'Pruebas (Testing)',
            devops: 'DevOps & Cloud',
            tooling: 'Herramientas (Tooling)',
            backend: 'Backend (Básico)',
            otros: 'Otros'
          }
        },
        courses: {title: 'Cursos y Certificaciones'},
        languages: {title: 'Idiomas'},
        interests: {title: 'Intereses'}
      },
      sidebar: {
        emailLabel: 'Correo Electrónico',
        phoneLabel: 'Teléfono',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        websiteLabel: 'Sitio Web',
        jobTitleDefault: 'Puesto / Rol'
      },
      courseLinkText: 'Ver Curso'
    },
    portfolioPage: {
      pageTitle: 'Mi Portafolio',
      backToHomeButton: 'Volver al Inicio',
      noProjectsFound: 'Los proyectos del portafolio se añadirán pronto.',
      viewProjectButton: 'Ver Proyecto',
      technologiesLabel: 'Tecnologías',
      categoryLabel: 'Categoría',
      projectDetails: {
        laBodaDeCarmenYManuel: {
          title: 'La Boda de Carmen y Manuel',
          description:
            'Un sitio web de bodas elegante e informativo para Carmen y Manuel, que proporciona a los invitados todos los detalles necesarios para su día especial. Incluye información del evento, funcionalidad RSVP (conceptual), galería de fotos y detalles de contacto.',
          imageAlt: 'Captura de pantalla del sitio web La Boda de Carmen y Manuel',
          category: 'Desarrollo Web'
        }
      }
    },
    blogPage: {
      pageTitle: 'Blog',
      backToHomeButton: 'Volver al Inicio',
      comingSoonIntro:
        'Mis reflexiones, artículos e ideas se compartirán aquí pronto. ¡Mantente atento al contenido sobre desarrollo web, tecnología y más!'
    }
  }
};

export const getTranslation = (
  translationsRecord: Record<Language, UiTranslations>,
  path: string,
  lang: Language
): string => {
  const keys = path.split('.');
  let result: any = translationsRecord[lang];
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      // Fallback to English if translation is missing for the current language
      let fallbackResult: any = uiTranslations.en;
      for (const enKey of keys) {
        fallbackResult = fallbackResult?.[enKey];
        if (fallbackResult === undefined) return path; // Return the key itself if not found even in English
      }
      return typeof fallbackResult === 'string' ? fallbackResult : path;
    }
  }
  return typeof result === 'string' ? result : path;
};
