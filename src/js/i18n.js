const TRANSLATIONS = {
  en: {
    // Toolbar
    'btn.print': 'Print',
    'btn.pdf': 'Download PDF',

    // Header
    'headline': 'Senior Software Engineer | Tech Lead | Cloud & Distributed Systems',

    // Section headings
    'section.summary': 'Professional Summary',
    'section.experience': 'Professional Experience',
    'section.skills': 'Technical Skills',
    'section.education': 'Education',
    'section.certifications': 'Certifications',
    'section.languages': 'Languages',
    'section.talks': 'Talks & Community',

    // Summary
    'summary.p1': 'Software Engineer with strong expertise in C#, .NET, and Azure, leading technical delivery for business-critical enterprise applications, including systems subject to SOX controls and integrations with SAP. Experienced in solution design and architecture while remaining hands-on, with a strong background in system modernization, .NET upgrades, NoSQL-to-SQL database migrations, and the redesign of integrations and distributed workflows.',

    // Accenture
    'accenture.company': 'Accenture Brazil',
    'accenture.role': 'Software Engineer / Tech Lead',
    'accenture.date': 'Jul 2023 - Present',

    'accenture.li1': 'Led technical delivery for critical enterprise applications using C#, .NET, Azure, and React, acting as the technical reference for a team of 4 engineers from solution design through production go-live',

    'accenture.li2': 'Built an internal backend and frontend framework with reusable .NET and React components and patterns, adopted across four applications and reducing project startup time by approximately 40%',

    'accenture.li3': 'Led the migration from Cosmos DB to SQL Server, contributing to relational modeling, application restructuring, and technical direction of the team throughout the transition',

    'accenture.li4': 'Redesigned distributed workflows integrated with SAP, reviewing the architecture across the application, queues, and services to simplify the flow and improve maintainability',

    'accenture.li5': 'Led the technical adaptation of a business-critical application to meet SOX controls, coordinating technical changes and cross-team dependencies',

    'accenture.li6': 'Modernized Azure Functions applications from .NET 6 to .NET 10, assessing technical dependencies and infrastructure impacts to complete the upgrade within a short timeframe',

    'accenture.li7': 'Led the technical development of a new enterprise application from inception, guiding a team of 2 engineers through requirements gathering, architecture, prioritization, development, and client engagement',

    // Fila Digital
    'fila.role': 'Backend Developer',

    'fila.li1': 'Led the infrastructure migration from Kubernetes to Google Cloud Run, eliminating infrastructure idle time and reducing operational costs by approximately 35%.',

    'fila.li2': 'Developed a scheduled notification system using Google Cloud Tasks and Cloud Functions',

    'fila.li3': 'Contributed to backend evolution and system scalability improvements',

    'fila.li4': 'Introduced and applied Clean Architecture principles',

    // Liven Tech
    'liven.role': 'Product Manager',

    'liven.li1': 'Managed cross-functional teams (engineering, QA, product) delivering SaaS solutions',

    'liven.li2': 'Led product planning, backlog prioritization, and delivery coordination',

    'liven.li3': 'Defined product requirements and aligned technical solutions with business goals',

    'liven.li4': 'Worked closely with stakeholders to keep deliveries on time and within scope',

    // Serasa
    'serasa.role': 'Python RPA Developer',

    'serasa.li1': 'Developed automation solutions using Python, Selenium, and web automation tools',

    'serasa.li2': 'Contributed to global projects, collaborating with teams across Europe and Latin America',

    'serasa.li3': 'Trained and mentored new team members in automation practices',

    'serasa.li4': 'Participated in digital transformation initiatives within financial operations',

    // Skill categories
    'skills.languages': 'Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.cloud': 'Cloud & Infrastructure',
    'skills.arch': 'Architecture & Practices',
    'skills.databases': 'Databases',
    'skills.ai': 'AI & Productivity',

    // Skill values
    'skills.databases.val': 'SQL and NoSQL databases (relational and document-oriented)',

    'skills.ai.val': 'GitHub Copilot, Prompt Engineering, AI-assisted development workflows',

    // Education
    'edu.degree1': "Bachelor's Degree in Computer Science",
    'edu.degree2': 'Technical Diploma in Electrotechnics',
    'edu.degree3': 'Professional Course in Web Design',

    // Languages
    'lang.pt': 'Portuguese — Native',
    'lang.en': 'English — Professional Working Proficiency',
    'lang.es': 'Spanish — Professional Working Proficiency',

    // Certifications
    'cert.li1': 'Microsoft Certified: Azure Fundamentals',
    'cert.li2': 'Kanban Practitioner Certified',
    'cert.li3': 'Yellow Belt Lean Six Sigma',

    // Talks
    'talks.li1': 'Delivered a talk on Clean Architecture for software developers (2024)',

    'talks.li2': 'Delivered a talk on technology careers for Computer Science students (2024)',

    'talks.li3': 'Conducted talks and workshops on Web Development and React (2015-2020)',
  },

  pt: {
    // Toolbar
    'btn.print': 'Imprimir',
    'btn.pdf': 'Baixar PDF',

    // Header
    'headline': 'Engenheiro de Software Sênior | Tech Lead | Cloud & Sistemas Distribuídos',

    // Section headings
    'section.summary': 'Resumo Profissional',
    'section.experience': 'Experiência Profissional',
    'section.skills': 'Habilidades Técnicas',
    'section.education': 'Formação Acadêmica',
    'section.certifications': 'Certificações',
    'section.languages': 'Idiomas',
    'section.talks': 'Palestras & Comunidade',

    // Summary
    'summary.p1': 'Engenheiro de Software com forte experiência em C#, .NET e Azure, liderando entregas técnicas em aplicações corporativas críticas, incluindo sistemas sujeitos a controles SOX e integrações com SAP. Atua na definição de soluções e arquitetura sem se afastar da implementação, com experiência em modernização de sistemas, evolução entre versões do .NET, migração de bancos NoSQL para SQL e reestruturação de integrações e fluxos distribuídos.',

    // Accenture
    'accenture.company': 'Accenture Brasil',
    'accenture.role': 'Software Engineer / Tech Lead',
    'accenture.date': 'jul 2023 - presente',

    'accenture.li1': 'Lidera entregas técnicas em aplicações corporativas críticas, atuando com C#, .NET, Azure e React como referência técnica de um time de 4 engenheiros, da definição da solução até a entrada em produção',

    'accenture.li2': 'Criou um framework interno para backend e frontend, com componentes e padrões reutilizáveis em .NET e React, adotado em quatro aplicações e com redução de aproximadamente 40% no tempo de startup dos projetos em que foi utilizado',

    'accenture.li3': 'Conduziu a migração de Cosmos DB para SQL Server, participando da modelagem relacional, reestruturação da aplicação e direcionamento técnico do time durante a transição',

    'accenture.li4': 'Liderou a reestruturação de fluxos distribuídos integrados ao SAP, revisando a arquitetura entre aplicação, filas e serviços para simplificar o fluxo e facilitar sua manutenção e evolução',

    'accenture.li5': 'Liderou a adequação de uma aplicação crítica aos controles de compliance SOX, coordenando mudanças técnicas e dependências entre diferentes times',

    'accenture.li6': 'Realizou a modernização de aplicações Azure Functions do .NET 6 para o .NET 10, avaliando dependências técnicas e impactos de infraestrutura para viabilizar a atualização em curto prazo',

    'accenture.li7': 'Liderou tecnicamente o desenvolvimento de uma nova aplicação corporativa desde sua concepção, coordenando um time de 2 desenvolvedores no levantamento de requisitos, arquitetura, priorização das entregas, desenvolvimento e relacionamento com o cliente',

    // Fila Digital
    'fila.role': 'Desenvolvedor Backend',

    'fila.li1': 'Liderou a migração da infraestrutura de Kubernetes para Google Cloud Run, eliminando o tempo de ociosidade da infraestrutura e reduzindo em aproximadamente 35% os custos operacionais.',

    'fila.li2': 'Desenvolveu um sistema de notificações agendadas utilizando Google Cloud Tasks e Cloud Functions',

    'fila.li3': 'Contribuiu para a evolução do backend e melhorias de escalabilidade do sistema',

    'fila.li4': 'Introduziu e aplicou os princípios de Clean Architecture',

    // Liven Tech
    'liven.role': 'Gerente de Produto',

    'liven.li1': 'Gerenciou equipes multifuncionais (engenharia, QA, produto) na entrega de soluções SaaS',

    'liven.li2': 'Liderou planejamento de produto, priorização de backlog e coordenação de entregas',

    'liven.li3': 'Definiu requisitos de produto e alinhou soluções técnicas com objetivos de negócio',

    'liven.li4': 'Atuou junto a stakeholders para garantir entregas dentro do escopo e dos prazos',

    // Serasa
    'serasa.role': 'Desenvolvedor Python RPA',

    'serasa.li1': 'Desenvolveu soluções de automação com Python, Selenium e ferramentas de automação web',

    'serasa.li2': 'Contribuiu para projetos globais, colaborando com equipes na Europa e América Latina',

    'serasa.li3': 'Treinou e mentorou novos integrantes da equipe em práticas de automação',

    'serasa.li4': 'Participou de iniciativas de transformação digital em operações financeiras',

    // Skill categories
    'skills.languages': 'Linguagens',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.cloud': 'Cloud & Infraestrutura',
    'skills.arch': 'Arquitetura & Práticas',
    'skills.databases': 'Bancos de Dados',
    'skills.ai': 'IA & Produtividade',

    // Skill values
    'skills.databases.val': 'Bancos de dados SQL e NoSQL (relacionais e orientados a documentos)',

    'skills.ai.val': 'GitHub Copilot, Prompt Engineering, fluxos de trabalho assistidos por IA',

    // Education
    'edu.degree1': 'Bacharelado em Ciência da Computação',
    'edu.degree2': 'Curso Técnico em Eletrotécnica',
    'edu.degree3': 'Curso Profissionalizante em Web Design',

    // Languages
    'lang.pt': 'Português — Nativo',
    'lang.en': 'Inglês — Avançado / Uso profissional',
    'lang.es': 'Espanhol — Avançado / Uso profissional',

    // Certifications
    'cert.li1': 'Microsoft Certified: Azure Fundamentals',
    'cert.li2': 'Kanban Practitioner Certified',
    'cert.li3': 'Yellow Belt Lean Six Sigma',

    // Talks
    'talks.li1': 'Palestra sobre Clean Architecture para desenvolvedores (2024)',

    'talks.li2': 'Palestra sobre carreira no mercado de tecnologia para estudantes de Computação (2024)',

    'talks.li3': 'Ministrou palestras e minicursos sobre Desenvolvimento Web e React (2015-2020)',
  }
};

function applyLang(lang) {
  if (!TRANSLATIONS[lang]) return;

  document.documentElement.lang = lang;
  document.title =
    'Marco Túlio Costa - ' + (lang === 'pt' ? 'Currículo' : 'Resume');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = TRANSLATIONS[lang][el.dataset.i18n];

    if (text !== undefined) {
      el.textContent = text;

      // If the localized element is inside a button,
      // propagate the text to accessibility attributes.
      const parent = el.parentElement;

      if (parent && parent.tagName.toLowerCase() === 'button') {
        parent.setAttribute('aria-label', text);
        parent.setAttribute('title', text);
      }
    }
  });

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('resume-lang', lang);
}

function initLang() {
  const saved = localStorage.getItem('resume-lang');
  const preferred =
    saved || (navigator.language.startsWith('pt') ? 'pt' : 'en');

  applyLang(preferred);
}