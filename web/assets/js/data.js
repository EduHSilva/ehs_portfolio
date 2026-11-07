window.PORTFOLIO_PROJECTS = [
  {
    id: "microservices",
    title: { pt: "Plataforma de Microsserviços", en: "Microservices Platform" },
    description: {
      pt: "Backend modular em Java/Spring Boot com gateway, autenticação, finanças, CRM, pagamentos, e-mail e service discovery. Serviços independentes, mensageria e PostgreSQL.",
      en: "Modular Java/Spring Boot backend with gateway, authentication, finances, CRM, payments, e-mail and service discovery. Independent services, messaging and PostgreSQL."
    },
    categories: ["backend"],
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "RabbitMQ", "Docker", "AWS"],
    link: "https://github.com/EduHSilva/microservices",
    icon: "server",
    accent: ["#4f46e5", "#7c3aed"],
    featured: true
  },
  {
    id: "studyflow",
    title: { pt: "StudyFlow", en: "StudyFlow" },
    description: {
      pt: "Painel de estudos com cronograma, tarefas, notas, pomodoro e acompanhamento de projetos. Cliente web em Vue 3 e app Android nativo em Kotlin/Compose.",
      en: "Study dashboard with schedule, tasks, notes, pomodoro and project tracking. Vue 3 web client and native Android app built with Kotlin/Compose."
    },
    categories: ["web", "mobile"],
    tags: ["Vue 3", "TypeScript", "Vite", "Kotlin", "Jetpack Compose", "Playwright"],
    link: "https://github.com/EduHSilva/ehs_study",
    icon: "layers",
    accent: ["#0ea5e9", "#4f46e5"]
  },
  {
    id: "finances",
    title: { pt: "Finances", en: "Finances" },
    description: {
      pt: "Aplicativo de controle financeiro com fluxo de caixa e acompanhamento de despesas. Web em Nuxt 4/Vue 3 e cliente Android em Kotlin com Jetpack Compose.",
      en: "Personal finance app for cash flow and expense tracking. Nuxt 4/Vue 3 web client and Android client built with Kotlin and Jetpack Compose."
    },
    categories: ["web", "mobile"],
    tags: ["Nuxt 4", "Vue 3", "TypeScript", "Kotlin", "Jetpack Compose"],
    link: "https://github.com/EduHSilva/finances",
    icon: "database",
    accent: ["#10b981", "#0ea5e9"]
  },
  {
    id: "admin",
    title: { pt: "EHS Admin", en: "EHS Admin" },
    description: {
      pt: "Dashboard administrativo com autenticação, layout responsivo, tabelas e tema claro/escuro. Base para os painéis internos da plataforma EHS.",
      en: "Administrative dashboard with authentication, responsive layout, tables and light/dark theme. The foundation for the internal EHS platform panels."
    },
    categories: ["web"],
    tags: ["Nuxt 4", "Vue 3", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/EduHSilva/ehs_admin",
    icon: "layout",
    accent: ["#8b5cf6", "#ec4899"]
  },
  {
    id: "crm",
    title: { pt: "CRM Platform", en: "CRM Platform" },
    description: {
      pt: "Frontend de CRM para pequenos negócios: pipeline de vendas, gestão de leads e clientes, com interface modular integrada via API Gateway.",
      en: "CRM frontend for small businesses: sales pipeline, lead and customer management, with a modular interface integrated through an API Gateway."
    },
    categories: ["web"],
    tags: ["Nuxt 3", "TypeScript", "REST API", "Microservices"],
    link: null,
    icon: "activity",
    accent: ["#f59e0b", "#ef4444"]
  },
  {
    id: "fitness",
    title: { pt: "Fitness", en: "Fitness" },
    description: {
      pt: "Aplicativo de dieta e treinos. Cliente web em Nuxt 4 conectado ao gateway da plataforma, com base Flutter legada mantida como referência de migração.",
      en: "Diet and workout app. Nuxt 4 web client connected to the platform gateway, with a legacy Flutter base kept as a migration reference."
    },
    categories: ["web"],
    tags: ["Nuxt 4", "Vue 3", "REST API", "Flutter (legado)"],
    link: "https://github.com/EduHSilva/routine",
    icon: "activity",
    accent: ["#14b8a6", "#84cc16"]
  },
  {
    id: "shops",
    title: { pt: "EHS Shops", en: "EHS Shops" },
    description: {
      pt: "Aplicativo Android nativo em Kotlin com Jetpack Compose, explorando navegação, componentes declarativos e integração com APIs.",
      en: "Native Android app built with Kotlin and Jetpack Compose, exploring navigation, declarative UI components and API integration."
    },
    categories: ["mobile"],
    tags: ["Kotlin", "Jetpack Compose", "Android", "Gradle"],
    link: "https://github.com/EduHSilva/ehs_shop",
    icon: "bag",
    accent: ["#f97316", "#f43f5e"]
  },
  {
    id: "portfolio",
    title: { pt: "Portfólio Pessoal", en: "Personal Portfolio" },
    description: {
      pt: "Este site: HTML, CSS e JavaScript puros, sem framework. Tema claro/escuro, conteúdo bilíngue e publicação via nginx em container.",
      en: "This website: plain HTML, CSS and JavaScript, no framework. Light/dark theme, bilingual content and containerized nginx deployment."
    },
    categories: ["web"],
    tags: ["HTML", "CSS", "JavaScript", "nginx", "Docker"],
    link: "https://github.com/EduHSilva/ehs_portfolio",
    icon: "code",
    accent: ["#64748b", "#4f46e5"]
  }
];
