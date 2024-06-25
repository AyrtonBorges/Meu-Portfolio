// script.js
function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// script.js
const skillDetails = {
    html5: {
        title: "HTML5",
        description: "HTML5 uma linguagem muito bom para dar a estrutura do site, a melhor linguagem que só funciona se estiver acompanhada com "+
                     "CSS3 e JavaScript, com HTML5 é possível criar sites responsivos e com uma boa estruturação. \nAprendi HTML5 no técnico de informática, "+
                     "e aprimorei meus conhecimentos durante a faculdade, fazendo cursos online como freeCodeCamp, Mimo e outros."
    },
    css3: {
        title: "CSS3",
        description: "Estilização avançada utilizando CSS3 e preprocessadores. Capaz de criar designs modernos e responsivos, utilizando técnicas como Flexbox e Grid Layout, além de preprocessadores como SASS e LESS."
    },
    javascript: {
        title: "JavaScript",
        description: "Criação de interatividade e funcionalidades dinâmicas com JavaScript. Proficiente em manipulação de DOM, AJAX, APIs e frameworks/bibliotecas como jQuery, React e Vue."
    },
    react: {
        title: "React",
        description: "Conhecimento básico de interfaces de usuário modernas com React. Experiência em criar componentes reutilizáveis, gerenciar estados com hooks e integrar com APIs externas."
    },
    css3: {
        title: "CSS3",
        description: "Estilização avançada utilizando CSS3 e preprocessadores. Capaz de criar designs modernos e responsivos, utilizando técnicas como Flexbox e Grid Layout, além de preprocessadores como SASS e LESS."
    },
    javascript: {
        title: "JavaScript",
        description: "Criação de interatividade e funcionalidades dinâmicas com JavaScript. Proficiente em manipulação de DOM, AJAX, APIs e frameworks/bibliotecas como jQuery, React e Vue."
    },
    react: {
        title: "React",
        description: "Conhecimento básico de interfaces de usuário modernas com React. Experiência em criar componentes reutilizáveis, gerenciar estados com hooks e integrar com APIs externas."
    },
    nodejs: {
        title: "Node.js",
        description: "Construção de servidores eficientes e escaláveis com Node.js. Habilidade em desenvolver APIs RESTful, utilizar frameworks como Express.js e lidar com bases de dados como MongoDB e SQL."
    },
    python: {
        title: "Python",
        description: "Programação avançada em Python para diversas aplicações. Conhecimento em desenvolvimento web com Django e Flask, automação de tarefas e análise de dados com bibliotecas como Pandas e NumPy."
    },
    docker: {
        title: "Docker",
        description: "Containerização de aplicações para garantir consistência e portabilidade. Experiência em criar e gerenciar containers, criar imagens personalizadas e orquestrar contêineres com Docker Compose."
    },
    java: {
        title: "Java",
        description: "Desenvolvimento de aplicações robustas e escaláveis com Java. Proficiente em programação orientada a objetos, desenvolvimento de aplicações web com Spring Boot e criação de aplicações desktop."
    },
    typescript: {
        title: "TypeScript",
        description: "Conhecimento básico sobre TypeScript para aplicações usando o framework Next.js. Capaz de escrever código JavaScript tipado, melhorando a manutenção e a robustez das aplicações."
    },
    nextjs: {
        title: "Next.js",
        description: "Framework React para aplicações web com server-side rendering (SSR) e estáticas. Experiência em configurar rotas dinâmicas, otimizar performance e integrar com back-ends diversos."
    },
    sql: {
        title: "SQL",
        description: "Gerenciamento e manipulação de bancos de dados relacionais. Habilidade em escrever consultas complexas, normalização de dados, e uso de sistemas de gerenciamento como MySQL e PostgreSQL."
    },
    git: {
        title: "Git & GitHub",
        description: "Controle de versão e colaboração em projetos utilizando Git e GitHub. Experiência em ramificação, mesclagem, resolução de conflitos e gerenciamento de repositórios."
    },    
};

function openSkillModal(skill) {
    const modal = document.getElementById("skillModal");
    const title = document.getElementById("skillTitle");
    const description = document.getElementById("skillDescription");

    title.innerText = skillDetails[skill].title;
    description.innerText = skillDetails[skill].description;

    modal.style.display = "block";
}

function closeSkillModal() {
    document.getElementById("skillModal").style.display = "none";
}
