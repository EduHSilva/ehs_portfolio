export const portfolioData = {
  personal: {
    name: 'Eduardo Henrique da Silva',
    title: {
      en: 'Software Engineer & Data Science Specialist',
      pt: 'Engenheiro de Software & Especialista em Data Science'
    },
    email: 'edu.slhenrique@gmail.com',
    phone: '(16) 99238-8972',
    linkedin: 'https://www.linkedin.com/in/edu-h/',
    github: 'https://github.com/EduHSilva',
    portfolio: 'https://ehs-portfolio.onrender.com/',
    certificates: 'https://drive.google.com/drive/folders/1czaonx8X1fWZ2N5ou35qRsB6NfMATBOF'
  },

  summary: {
    en: 'Professional with postgraduate studies in Data Science/Machine Learning and a Bachelor\'s degree in Software Engineering. Robust theoretical knowledge and solid practical experience in technology and application development, with expertise in backend development using Java and frontend development with JavaScript.',
    pt: 'Profissional com pós-graduação em Data Science/Machine Learning e bacharelado em Engenharia de Software. Conhecimento teórico robusto e sólida experiência prática em tecnologia e desenvolvimento de aplicações, com experiência em desenvolvimento backend com Java e front-end com JavaScript.'
  },

  objective: {
    en: 'Interested in becoming a specialist in either backend development or data science, seeking positions where I can focus my efforts on developing pertinent skills and eventually pursue certifications.',
    pt: 'Tenho interesse em me tornar especialista, seja na área de desenvolvimento backend ou de dados, por isso estou à procura de cargos onde possa focar meus esforços no desenvolvimento das habilidades pertinentes à área e futuramente visar certificações.'
  },

  experience: [
    {
      id: 1,
      position: {
        en: 'Systems Analyst',
        pt: 'Analista de Sistemas'
      },
      company: 'Joycar',
      period: {
        en: 'March 2021 – Present',
        pt: 'Março 2021 – Atualmente'
      },
      description: {
        en: 'Acting as a fullstack developer, actively involved in the entire solution lifecycle, from gathering requirements for new projects/functionalities with clients to maintenance, bug fixing, software documentation, and performance improvements.',
        pt: 'Atuação como desenvolvedor fullstack, sendo atuante em todo ciclo de vida da solução, desde o levantamento de requisitos de novos projetos/funcionalidades junto a clientes até a parte de sustentação, correção de bugs, documentação do software e melhorias de desempenho.'
      },
      technologies: [
        'Java (GWT/Spring)',
        'Android Native (Java)',
        'Swift (iOS)',
        'HTML/CSS/JavaScript',
        'Selenium/AWS Device Farm',
        'AWS (CodePipeline, CloudWatch)'
      ]
    },
    {
      id: 2,
      position: {
        en: 'Technology Assistant',
        pt: 'Auxiliar de Tecnologia'
      },
      company: 'Rochfer',
      period: {
        en: 'June 2020 – February 2021',
        pt: 'Junho 2020 – Fevereiro 2021'
      },
      description: {
        en: 'Acted as a fullstack developer. After the internship became permanent, I had the opportunity to take on projects/maintenance of greater complexity and participate in gathering new requirements from users.',
        pt: 'Atuação como desenvolvedor fullstack. Após efetivação do estágio tive a oportunidade de assumir projetos/manutenções de maior complexidade, bem como atuar no levantamento de novas necessidades junto aos usuários.'
      },
      technologies: [
        'PHP (Laravel)',
        'SQL',
        'ERP Development'
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: {
        en: 'Specialization in Data Science and Machine Learning',
        pt: 'Especialização em Ciência de Dados e Machine Learning'
      },
      institution: 'PUC - Campinas',
      period: '2022 - 2023',
      distinction: null
    },
    {
      id: 2,
      degree: {
        en: 'Bachelor in Software Engineering',
        pt: 'Bacharel em Engenharia de Software'
      },
      institution: 'Uni-FACEF',
      period: '2019 - 2022',
      distinction: {
        en: 'Honor of best student',
        pt: 'Honra de melhor aluno'
      }
    }
  ],

  skills: {
    advanced: [
      'HTML & CSS',
      'Git',
      'Java'
    ],
    intermediate: [
      'SQL',
      'Spring Framework',
      'JavaScript',
      'Python',
      'Microservices Architecture',
      'RabbitMQ',
      'AWS',
      'Software Documentation',
      'Test Automation'
    ],
    basic: [
      'PHP',
      'Golang',
      'Linux',
      'Docker',
      'Apache Spark'
    ]
  },

  languages: {
    en: [
      { language: 'Portuguese', level: 'Native' },
      { language: 'English', level: 'Intermediate (B1)' }
    ],
    pt: [
      { language: 'Português', level: 'Nativo' },
      { language: 'Inglês', level: 'Intermediário (B1)' }
    ]
  }
};

export default portfolioData;