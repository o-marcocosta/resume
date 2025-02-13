const translations = {
    en: {
        name: "Marco Túlio Costa",
        title: "Software Engineer | Full-stack Developer | Specialist in React, .NET, and Azure",
        professional_summary_title: "Professional Summary",
        professional_summary: "Software Engineer with over 12 years of programming experience, specialized in React, .NET, Azure, Java, and Python. A technical reference in architecture, best practices, and the development of scalable solutions, with strong adaptability and a fast learning curve for new technologies.",
        professional_experience_title: "Professional Experience",
        education_title: "Education",
        technical_skills_title: "Technical Skills",
        certifications_title: "Certifications",
        accenture_role: "Software Engineer",
        accenture_responsibility_1: "Software development with React, .NET, Azure Functions, Cosmos DB, and Azure Cloud.",
        accenture_responsibility_2: "Distributed software architecture definition and implementation, integrating services between Azure.cn and global Azure.",
        accenture_responsibility_3: "Implementation of PoC and knowledge sharing on LLMs and Gen AI.",
        liven_role: "Product Manager",
        liven_responsibility_1: "Management of technology teams and product planning.",
        liven_responsibility_2: "Allocation of squads and schedule management in agile projects.",
        fila_role: "Backend Developer",
        fila_responsibility_1: "Infrastructure optimization with Google Cloud Run.",
        fila_responsibility_2: "Development of notification system with Google Cloud Tasks.",
        serasa_role: "Python RPA Developer",
        serasa_responsibility_1: "Automation of financial processes with Python, Selenium, and Flask.",
        serasa_responsibility_2: "Collaboration on global projects with teams from Europe and Latin America.",
        serasa_responsibility_3: "Mentoring and training of new interns in RPA.",
        ufla_course: "Computer Science",
        furnas_course: "Electrical Engineering Technician",
        if_course: "Professional Course in Web Design",
        skill_js: "JavaScript (React, Node.js)",
        skill_python: "Python",
        skill_java: "Java",
        skill_gcp: "Google Cloud Platform (GCP)",
        skill_docker: "Docker & Kubernetes",
        skill_csharp: "C# (.NET Core, Azure Functions)",
        skill_clean_architecture: "Clean Architecture",
        cert_azure: "Microsoft Certified: Azure Fundamentals",
        cert_kanban: "Kanban Practitioner Certified",
        cert_six_sigma: "Yellow Belt Lean Six Sigma",
        skill_git: "Git",
        skill_firebase: "Firebase"
    },
    pt: {
        name: "Marco Túlio Costa",
        title: "Engenheiro de Software | Desenvolvedor Full-stack | Especialista em React, .NET e Azure",
        professional_summary_title: "Resumo Profissional",
        professional_summary: "Engenheiro de Software com mais de 12 anos de experiência em programação, especializado em React, .NET, Azure, Java e Python. Referência técnica em arquitetura, melhores práticas e desenvolvimento de soluções escaláveis, com forte adaptabilidade e rápida curva de aprendizado para novas tecnologias.",
        professional_experience_title: "Experiência Profissional",
        education_title: "Educação",
        technical_skills_title: "Habilidades Técnicas",
        certifications_title: "Certificações",
        accenture_role: "Engenheiro de Software",
        accenture_responsibility_1: "Desenvolvimento de software com React, .NET, Azure Functions, Cosmos DB e Azure Cloud.",
        accenture_responsibility_2: "Definição e implementação de arquitetura de software distribuído, integrando serviços entre Azure.cn e Azure global.",
        accenture_responsibility_3: "Implementação de PoC e disseminação de conhecimento sobre LLMs e Gen AI.",
        liven_role: "Gerente de Produto",
        liven_responsibility_1: "Gestão de equipes de tecnologia e planejamento de produtos.",
        liven_responsibility_2: "Alocação de squads e gestão de cronogramas em projetos ágeis.",
        fila_role: "Desenvolvedor Backend",
        fila_responsibility_1: "Otimização da infraestrutura com Google Cloud Run.",
        fila_responsibility_2: "Desenvolvimento de sistema de notificações com Google Cloud Tasks.",
        serasa_role: "Desenvolvedor RPA Python",
        serasa_responsibility_1: "Automação de processos financeiros com Python, Selenium e Flask.",
        serasa_responsibility_2: "Colaboração em projetos globais com equipes da Europa e América Latina.",
        serasa_responsibility_3: "Mentoria e treinamento de novos estagiários em RPA.",
        ufla_course: "Ciência da Computação",
        furnas_course: "Técnico em Eletrotécnica",
        if_course: "Curso Profissionalizante em Web Design",
        skill_js: "JavaScript (React, Node.js)",
        skill_python: "Python",
        skill_java: "Java",
        skill_gcp: "Google Cloud Platform (GCP)",
        skill_docker: "Docker & Kubernetes",
        skill_csharp: "C# (.NET Core, Azure Functions)",
        skill_clean_architecture: "Clean Architecture",
        cert_azure: "Microsoft Certified: Azure Fundamentals",
        cert_kanban: "Kanban Practitioner Certified",
        cert_six_sigma: "Yellow Belt Lean Six Sigma",
        skill_git: "Git",
        skill_firebase: "Firebase"
    }
    
};


function setLanguage(language) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[language][key];
    });
}
