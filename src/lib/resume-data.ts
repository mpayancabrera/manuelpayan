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
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SSR', 'Chakra UI'],
    testing: ['Jest', 'React Testing Library', 'Playwright', 'Cypress'],
    buildtools: ['Vite', 'Webpack'],
    codequality: ['ESLint', 'Prettier', 'SonarQube', 'Git'],
    designtools: ['Figma', 'Sketch'],
    devopscloud: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'GCP', 'Azure'],
    backendbasic: ['Node.js', 'PHP (Symfony)', 'Python (Flask)'],
    projectmanagement: ['Agile (Scrum/Kanban)', 'Jira', 'CI/CD']
  },
  experience: [
    {
      id: 'en-exp-1',
      company: 'StubHub International',
      title: 'Senior Frontend Developer',
      dates: 'Jun 2022 – Present',
      description:
        'Led frontend development using React and Next.js, driving architectural improvements and performance optimizations.\nMigrated legacy CI/CD pipelines from Concourse to GitHub Actions, streamlining deployment processes.\nRearchitected monolithic projects into Next.js, improving scalability and maintainability.\nEnhanced Core Web Vitals and reduced Time to Interactive (TTI) through systematic performance optimization.\nImplemented SSR strategies to boost SEO performance and initial load times.\nChampioned testing adoption across the platform, migrating from outdated libraries (Mocha, Enzyme) to modern testing stack (Jest, React Testing Library).\nCollaborated with cross-functional teams to deliver features aligned with product roadmap.'
    },
    {
      id: 'en-exp-2',
      company: 'Version 1',
      title: 'Frontend Developer',
      dates: 'Jul 2021 – Jun 2022',
      description:
        'Developed user interfaces for international clients in capital markets and cryptocurrency sectors using React (CRA) and styled-components.\nDesigned UI/UX workflows with Figma for new features, ensuring seamless integration with Python-based APIs.\nBuilt containerized infrastructure with Docker and authored Kubernetes configuration files for deployment.\nWorked across multi-cloud environments including Azure and AWS, adapting solutions to different infrastructure requirements.'
    },
    {
      id: 'en-exp-3',
      company: 'PcComponentes',
      title: 'Full Stack Developer',
      dates: 'Mar 2019 – Jul 2021',
      description:
        'Refactored legacy PHP/Symfony monolith into microservices architecture using Flask and React.\nDeveloped modern frontend with React, implementing SSR and TypeScript for improved performance and type safety.\nEstablished CI/CD pipelines using GitLab, Docker, and Kubernetes, assisting in the infrastructure modernization process.\nImplemented SEO optimization strategies to enhance platform visibility and organic traffic.\nApplied Domain-Driven Design (DDD), CQRS patterns, and RabbitMQ for efficient service orchestration.'
    },
    {
      id: 'en-exp-4',
      company: 'University of Granada',
      title: 'Software Engineer',
      dates: 'Jul 2017 – Mar 2019',
      description:
        'Built web systems to optimize visitor flows to the Alhambra using Django and AngularJS.\nApplied neural networks and data forecasting techniques for real-time prediction.'
    },
    {
      id: 'en-exp-5',
      company: 'SICE',
      title: 'Software Engineer',
      dates: 'Jun 2016 – Jul 2017',
      description:
        'Developed new web platform for Intelligent Transport Systems using React and Mapbox for geospatial visualization.\nBuilt backend services with PHP and contributed to desktop application development using C#.\nCoordinated directly with international clients to gather requirements and deliver solutions.'
    }
  ],
  education: [
    {
      id: 'en-edu-1',
      institution: 'University of Granada',
      degree: "Master's in Data Science & Computer Engineering",
      dates: '2017 – 2019',
      description: ''
    },
    {
      id: 'en-edu-2',
      institution: 'University of Granada',
      degree: 'Graduate in Computer Engineering',
      dates: '2010 – 2015',
      description: 'Specialization in Information Systems and Databases'
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
    {
      id: 'en-lang-2',
      language: 'English',
      proficiency: 'B1 certified – Professional experience with international clients'
    }
  ],
  interests: ['Frontend architecture', 'Performance optimization', 'Sports', 'Travel', 'AI', 'Autobiographies']
};

export const defaultResumeDataEs: ResumeFormData = {
  ...defaultResumeDataEn,
  jobTitle: 'Desarrollador Frontend Senior',
  linkedin: 'https://www.linkedin.com/in/manuelpayancabrera',
  summary:
    'Desarrollador Frontend Senior con 10 años de experiencia profesional, incluyendo 8 años especializándome en desarrollo frontend. Experto en construir aplicaciones web de alto rendimiento utilizando React, Next.js, TypeScript y Node.js. Fuerte enfoque en arquitectura escalable, calidad UX/UI y optimización del rendimiento. Capacidad demostrada para liderar iniciativas frontend, colaborar entre equipos y entregar soluciones impactantes, más recientemente en entornos de eCommerce, finanzas y empresariales.',
  skills: {
    frontend: defaultResumeDataEn.skills.frontend,
    testing: defaultResumeDataEn.skills.testing,
    buildtools: defaultResumeDataEn.skills.buildtools,
    codequality: defaultResumeDataEn.skills.codequality,
    designtools: defaultResumeDataEn.skills.designtools,
    devopscloud: defaultResumeDataEn.skills.devopscloud,
    backendbasic: defaultResumeDataEn.skills.backendbasic,
    projectmanagement: defaultResumeDataEn.skills.projectmanagement
  },
  experience: defaultResumeDataEn.experience.map((exp) => ({
    ...exp,
    id: exp.id.replace('en-', 'es-'),
    title:
      exp.title === 'Senior Frontend Developer'
        ? 'Desarrollador Frontend Senior'
        : exp.title === 'Frontend Developer'
        ? 'Desarrollador Frontend'
        : exp.title === 'Full Stack Developer'
        ? 'Desarrollador Full Stack'
        : exp.title === 'Software Engineer'
        ? 'Ingeniero de Software'
        : exp.title,
    description:
      exp.company === 'StubHub International'
        ? 'Lideré el desarrollo frontend utilizando React y Next.js, impulsando mejoras arquitectónicas y optimizaciones de rendimiento.\nMigré pipelines CI/CD heredados de Concourse a GitHub Actions, optimizando los procesos de despliegue.\nRearquitecturé proyectos monolíticos hacia Next.js, mejorando la escalabilidad y mantenibilidad.\nMejoré Core Web Vitals y reduje el Time to Interactive (TTI) mediante optimización sistemática del rendimiento.\nImplementé estrategias SSR para potenciar el rendimiento SEO y los tiempos de carga inicial.\nImpulsé la adopción de testing en toda la plataforma, migrando desde librerías obsoletas (Mocha, Enzyme) hacia un stack moderno de testing (Jest, React Testing Library).\nColaboré con equipos multifuncionales para entregar funcionalidades alineadas con la hoja de ruta del producto.'
        : exp.company === 'Version 1'
        ? 'Desarrollé interfaces de usuario para clientes internacionales en sectores de mercados de capitales y criptomonedas utilizando React (CRA) y styled-components.\nDiseñé flujos UI/UX con Figma para nuevas funcionalidades, asegurando una integración fluida con APIs basadas en Python.\nConstruí infraestructura contenerizada con Docker y creé archivos de configuración de Kubernetes para despliegue.\nTrabajé en entornos multi-cloud incluyendo Azure y AWS, adaptando soluciones a diferentes requisitos de infraestructura.'
        : exp.company === 'PcComponentes'
        ? 'Refactoricé monolito PHP/Symfony heredado hacia arquitectura de microservicios utilizando Flask y React.\nDesarrollé frontend moderno con React, implementando SSR y TypeScript para mejorar el rendimiento y la seguridad de tipos.\nEstablecí pipelines CI/CD utilizando GitLab, Docker y Kubernetes, asistiendo en el proceso de modernización de infraestructura.\nImplementé estrategias de optimización SEO para mejorar la visibilidad de la plataforma y el tráfico orgánico.\nApliqué Domain-Driven Design (DDD), patrones CQRS y RabbitMQ para una orquestación eficiente de servicios.'
        : exp.company === 'University of Granada'
        ? 'Construí sistemas web para optimizar los flujos de visitantes a la Alhambra utilizando Django y AngularJS.\nApliqué redes neuronales y técnicas de predicción de datos para predicción en tiempo real.'
        : exp.company === 'SICE'
        ? 'Desarrollé nueva plataforma web para Sistemas Inteligentes de Transporte utilizando React y Mapbox para visualización geoespacial.\nConstruí servicios backend con PHP y contribuí al desarrollo de aplicación de escritorio utilizando C#.\nCoordiné directamente con clientes internacionales para recopilar requisitos y entregar soluciones.'
        : exp.description
  })),
  education: defaultResumeDataEn.education.map((edu) => ({
    ...edu,
    id: edu.id.replace('en-', 'es-'),
    degree:
      edu.degree === "Master's in Data Science & Computer Engineering"
        ? 'Máster en Ciencia de Datos e Ingeniería Informática'
        : edu.degree === 'Graduate in Computer Engineering'
        ? 'Graduado en Ingeniería Informática'
        : edu.degree,
    description:
      edu.description === 'Specialization in Information Systems and Databases'
        ? 'Especialización en Sistemas de Información y Bases de Datos'
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
    {
      id: 'es-lang-2',
      language: 'Inglés',
      proficiency: 'B1 certificado – Experiencia profesional con clientes internacionales'
    }
  ],
  interests: ['Arquitectura frontend', 'Optimización del rendimiento', 'Deportes', 'Viajes', 'IA', 'Autobiografías']
};

export const portfolioItemsData: PortfolioItemEntry[] = [
  {
    id: 'port-item-1',
    titleKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.title',
    descriptionKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.description',
    imageUrl: '/images/portfolio/boda-carmen-manuel.png',
    imageAltKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.imageAlt',
    liveLink: 'https://labodadecarmenymanuel.com',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Wedding Site'],
    categoryKey: 'portfolioPage.projectDetails.laBodaDeCarmenYManuel.category',
    dataAiHint: 'wedding website screenshot'
  },
  {
    id: 'port-item-2',
    titleKey: 'portfolioPage.projectDetails.bilky.title',
    descriptionKey: 'portfolioPage.projectDetails.bilky.description',
    imageUrl: '/images/portfolio/bilky.png',
    imageAltKey: 'portfolioPage.projectDetails.bilky.imageAlt',
    liveLink: 'https://www.bilky.es/es',
    tags: ['PHP', 'Symfony', 'HTML', 'CSS', 'Twig', 'MySQL'],
    categoryKey: 'portfolioPage.projectDetails.bilky.category',
    dataAiHint: 'business management platform screenshot'
  },
  {
    id: 'port-item-3',
    titleKey: 'portfolioPage.projectDetails.inmobiliaria30.title',
    descriptionKey: 'portfolioPage.projectDetails.inmobiliaria30.description',
    imageUrl: '/images/portfolio/inmobiliaria30.png',
    imageAltKey: 'portfolioPage.projectDetails.inmobiliaria30.imageAlt',
    liveLink: 'https://www.inmobiliaria30.com/',
    tags: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    categoryKey: 'portfolioPage.projectDetails.inmobiliaria30.category',
    dataAiHint: 'real estate website screenshot'
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
            buildtools: 'Build Tools',
            codequality: 'Code Quality',
            designtools: 'Design Tools',
            devopscloud: 'DevOps & Cloud',
            backendbasic: 'Backend (Basic)',
            projectmanagement: 'Project Management'
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
        },
        bilky: {
          title: 'Bilky - Business Management Platform',
          description:
            'Collaborated with Bilky to develop key features for their comprehensive business management platform. Built employee vacation management module and time tracking system using PHP (Symfony) and Twig templates. Focused on creating intuitive interfaces for HR workflows and employee self-service functionality.',
          imageAlt: 'Screenshot of Bilky platform',
          category: 'Enterprise Software'
        },
        inmobiliaria30: {
          title: 'Inmobiliaria 3.0 - Real Estate Platform',
          description:
            'Collaborated on the development of a modernized website for Inmobiliaria 3.0. Updated the legacy website with fresh designs and built a new property management portal using Django (Python). Implemented features for property listings, search functionality, and administrative tools for real estate management.',
          imageAlt: 'Screenshot of Inmobiliaria 3.0 website',
          category: 'Real Estate'
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
            buildtools: 'Herramientas de Construcción',
            codequality: 'Calidad de Código',
            designtools: 'Herramientas de Diseño',
            devopscloud: 'DevOps & Cloud',
            backendbasic: 'Backend (Básico)',
            projectmanagement: 'Gestión de Proyectos'
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
        },
        bilky: {
          title: 'Bilky - Plataforma de Gestión Empresarial',
          description:
            'Colaboré con Bilky en el desarrollo de funcionalidades clave para su plataforma integral de gestión empresarial. Desarrollé el módulo de gestión de vacaciones de empleados y el sistema de control de horas utilizando PHP (Symfony) y plantillas Twig. Enfocado en crear interfaces intuitivas para flujos de trabajo de RRHH y funcionalidades de autoservicio para empleados.',
          imageAlt: 'Captura de pantalla de la plataforma Bilky',
          category: 'Software Empresarial'
        },
        inmobiliaria30: {
          title: 'Inmobiliaria 3.0 - Plataforma Inmobiliaria',
          description:
            'Colaboré en el desarrollo de la web modernizada para Inmobiliaria 3.0. Actualicé el sitio web heredado con diseños frescos y construí un nuevo portal de gestión de inmuebles utilizando Django (Python). Implementé funcionalidades para listados de propiedades, búsqueda y herramientas administrativas para la gestión inmobiliaria.',
          imageAlt: 'Captura de pantalla del sitio web Inmobiliaria 3.0',
          category: 'Inmobiliario'
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
