export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      role: "Desarrollador Frontend",
      tagline:
        "Creo experiencias web escalables, rápidas y visualmente impecables. Mi enfoque está en diseñar interfaces que los usuarios disfrutan usar.",
      viewWork: "Ver proyectos",
      contact: "Contacto",
    },
    about: {
      label: "Sobre mí",
      title: "Productos reales para usuarios reales",
      p1: "Soy Desarrollador Frontend en Colombia con experiencia práctica construyendo y manteniendo aplicaciones web en producción. Desde noviembre de 2023 trabajo en proyectos reales que sirven a usuarios de verdad.",
      p2: "Mi enfoque está en el rendimiento frontend, la calidad de las interfaces y escribir código mantenible. Me apasiona crear experiencias que no solo se vean bien, sino que sean rápidas, accesibles y duraderas.",
    },
    skills: {
      label: "Habilidades",
      title: "Tecnologías que domino",
      categories: {
        framework: "Framework",
        language: "Lenguaje",
        markup: "Marcado",
        styling: "Estilos",
        versionControl: "Control de versiones",
      },
    },
    experience: {
      label: "Experiencia",
      title: "Trayectoria profesional",
      period: "Nov 2023 — Actualidad",
      role: "Desarrollador Frontend",
      company: "Soluciones Americana",
      rebrand: "→ Partikle (rebrand 2025)",
      description:
        "Desarrollo, mejora y mantenimiento de aplicaciones web en producción que sirven a usuarios reales.",
      responsibilities: [
        "Desarrollo de interfaces con React, TypeScript y Tailwind CSS",
        "Mejora continua de UI/UX basada en feedback de usuarios",
        "Mantenimiento y soporte de sistemas en producción",
        "Corrección de errores e implementación de nuevas funcionalidades",
        "Optimización de rendimiento y calidad de código",
      ],
    },
    projects: {
      label: "Proyectos",
      title: "Trabajo real, impacto real",
      subtitle:
        "Aplicaciones en producción que he construido y mantengo. Cada proyecto sirve a usuarios reales y sigue evolucionando.",
      visitSite: "Visitar sitio",
      items: [
        {
          title: "Abblo",
          description:
            "Plataforma educativa enfocada en la gestión de cursos de inglés certificados en múltiples niveles. Participé en el desarrollo frontend, mantenimiento y mejora continua de la interfaz, asegurando una experiencia fluida en un entorno productivo.",
        },
        {
          title: "Prizma",
          description:
            "Plataforma académica integral para la gestión de cursos de pregrado y posgrado, incluyendo actividades, evaluaciones y seguimiento académico. Contribuí al desarrollo frontend, optimización de la interfaz y soporte continuo en producción.",
        },
        {
          title: "Consultorio Jurídico Americana",
          description:
            "Plataforma institucional que facilita el acceso a servicios de asesoría jurídica gratuita para la comunidad. Participé en el desarrollo y mantenimiento del sistema, mejorando la usabilidad y los procesos digitales.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Trabajemos juntos",
      subtitle:
        "Si quieres hablar sobre un proyecto o simplemente saludar, siempre estoy abierto a nuevas oportunidades y conversaciones.",
      email: "Correo",
      viewProfile: "Ver perfil",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con React, TypeScript y Tailwind CSS",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      role: "Frontend Developer",
      tagline:
        "I build scalable, fast, and visually stunning web experiences. My focus is on designing interfaces that users love to use.",
      viewWork: "View Work",
      contact: "Contact",
    },
    about: {
      label: "About",
      title: "Real products for real users",
      p1: "I'm a Frontend Developer based in Colombia with hands-on experience building and maintaining production web applications. Since November 2023, I've been working on real-world projects that serve actual users.",
      p2: "My focus is on frontend performance, interface quality, and writing maintainable code. I'm passionate about creating experiences that not only look great but are fast, accessible, and built to last.",
    },
    skills: {
      label: "Skills",
      title: "Technologies I work with",
      categories: {
        framework: "Framework",
        language: "Language",
        markup: "Markup",
        styling: "Styling",
        versionControl: "Version Control",
      },
    },
    experience: {
      label: "Experience",
      title: "Professional journey",
      period: "Nov 2023 — Present",
      role: "Frontend Developer",
      company: "Soluciones Americana",
      rebrand: "→ Partikle (rebrand 2025)",
      description:
        "Development, improvement, and maintenance of production web applications serving real users.",
      responsibilities: [
        "Building interfaces with React, TypeScript, and Tailwind CSS",
        "Continuous UI/UX improvement based on user feedback",
        "Maintenance and support of production systems",
        "Bug fixing and implementation of new features",
        "Performance optimization and code quality improvements",
      ],
    },
    projects: {
      label: "Projects",
      title: "Real work, real impact",
      subtitle:
        "Production applications I've built and maintain. Each project serves real users and continues to evolve.",
      visitSite: "Visit Site",
      items: [
        {
          title: "Abblo",
          description:
            "Educational platform focused on managing certified English courses at multiple levels. I participated in frontend development, maintenance, and continuous improvement of the interface, ensuring a seamless experience in a production environment.",
        },
        {
          title: "Prizma",
          description:
            "Comprehensive academic platform for managing undergraduate and graduate courses, including activities, evaluations, and academic tracking. I contributed to frontend development, interface optimization, and ongoing production support.",
        },
        {
          title: "Consultorio Jurídico Americana",
          description:
            "Institutional platform that provides access to free legal advisory services for the community. I participated in the development and maintenance of the system, improving usability and digital processes.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      subtitle:
        "If you'd like to discuss a project or just say hi, I'm always open to new opportunities and conversations.",
      email: "Email",
      viewProfile: "View Profile",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Built with React, TypeScript & Tailwind CSS",
    },
  },
} as const;

export type Translations = typeof translations;
