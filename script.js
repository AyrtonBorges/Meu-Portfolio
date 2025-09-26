// script.js
function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Habilidades 

const skillDetails = {
    html5: {
        title: "HTML5",
        description: "HTML5 é uma linguagem excelente para fornecer a estrutura de um site. É a melhor linguagem, mas funciona de forma mais eficaz quando acompanhada por CSS3 e JavaScript. Com HTML5, é possível criar sites responsivos e bem estruturados.\n"
                    +"Conheci HTML5 durante o curso técnico de informática e aperfeiçoei meus conhecimentos na faculdade, fazendo cursos online como freeCodeCamp, Mimo, entre outros."
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
        title: "Git",
        description: "Controle de versão e colaboração em projetos utilizando Git. Experiência em ramificação, mesclagem, resolução de conflitos e gerenciamento de repositórios."
    },    
    vscode: {
        title: "Visual Studio Code",
        description: "Editor de código fonte gratuito e aberto. Proporciona uma experiência de desenvolvimento leve e personalizável, com suporte a uma grande variedade de extensões."
    },
    github: {
        title: "GitHub",
        description: "Plataforma de hospedagem de código fonte e colaboração em projetos. Facilita o versionamento, controle de código e colaboração entre equipes de desenvolvimento."
    },
    jenkins: {
        title: "Jenkins",
        description: "Ferramenta de automação de integração contínua. Utilizada para construir, testar e implantar software de forma contínua e automática."
    },
    eclipse: {
        title: "Eclipse",
        description: "Ambiente de desenvolvimento integrado para diversas linguagens de programação. Popular por seu suporte robusto ao desenvolvimento Java."
    },
    netbeans: {
        title: "NetBeans",
        description: "Ambiente de desenvolvimento integrado para Java. Oferece ferramentas poderosas para o desenvolvimento de aplicativos desktop, móveis e web."
    },
    pycharm: {
        title: "PyCharm",
        description: "Ambiente de desenvolvimento integrado para Python. Proporciona uma experiência rica com ferramentas de produtividade, suporte a depuração e integração com frameworks populares."
    },
    platformio: {
        title: "Platform.io",
        description: "Plataforma de desenvolvimento integrado para Internet das Coisas (IoT). Suporta uma vasta gama de placas de desenvolvimento e frameworks, facilitando o desenvolvimento e a depuração."
    },
    postman: {
        title: "Postman",
        description: "Plataforma de colaboração para desenvolvimento de APIs. Simplifica a criação, teste e documentação de APIs, facilitando o trabalho em equipe."
    },
    springtools: {
        title: "Spring Tools 4",
        description: "Conjunto de ferramentas para desenvolvimento com o framework Spring. Auxilia no desenvolvimento de aplicações Java baseadas no Spring Framework."
    },
    trello: {
        title: "Trello",
        description: "Organização de tarefas e projetos em quadros virtuais. Facilita a visualização e gerenciamento de tarefas em equipe."
    },
    jira: {
        title: "Jira",
        description: "Gerenciamento de projetos com foco em desenvolvimento de software. Oferece recursos avançados para rastreamento de bugs, gestão de tarefas e colaboração em equipe."
    },
    lucidapp: {
        title: "Lucid.app",
        description: "Plataforma de gerenciamento de projetos e colaboração para equipes, com recursos visuais e de planejamento. Facilita a criação de diagramas e fluxogramas."
    },
    modelio: {
        title: "Modelio",
        description: "Ferramenta de modelagem e design para desenvolvimento de software. Suporta UML, BPMN e outras linguagens de modelagem."
    },
    libreoffice: {
        title: "LibreOffice",
        description: "Suite de aplicativos para edição de textos, criação de planilhas e apresentações. Oferece uma alternativa gratuita e aberta aos aplicativos de escritório tradicionais."
    },
    googledrive: {
        title: "Google Drive",
        description: "Armazenamento e compartilhamento de arquivos online. Permite colaboração em tempo real em documentos, planilhas e apresentações."
    },
    slack: {
        title: "Slack",
        description: "Plataforma de comunicação para equipes. Facilita a troca de mensagens, arquivos e colaboração em projetos através de canais organizados."
    },
    notion: {
        title: "Notion",
        description: "Plataforma que permite criar notas, banco de dados, listas de tarefas, entre outros recursos. Ideal para organização pessoal e em equipe, com diversas funcionalidades integradas."
    },
    canva: {
        title: "Canva",
        description: "Plataforma online para criação de designs e imagens. Oferece uma interface intuitiva com diversas ferramentas para design gráfico."
    },
    figma: {
        title: "Figma",
        description: "Criação de designs e prototipagem de interfaces de usuário. Permite colaboração em tempo real e integra diversas ferramentas de design."
    },
    mysqlworkbench: {
        title: "MySQL Workbench",
        description: "Ferramenta para modelagem, desenvolvimento e administração de bancos de dados MySQL. Facilita a criação de modelos ER, design de esquemas e administração de bases de dados."
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

// Carousel

document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.skill').length;
        if (items > 3) {
            carousel.classList.remove('centered-carousel');
        } else {
            carousel.classList.add('centered-carousel');
        }
    });

    showSlide(0, 'software-tools-carousel');  // Initialize the software tools carousel
    
});

function showSlide(index, carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel .skill');
    const totalSlides = Math.ceil(slides.length / 3);

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    carousel.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselId) {
    showSlide(currentSlide + 1, carouselId);
}

function prevSlide(carouselId) {
    showSlide(currentSlide - 1, carouselId);
}

// Formspree

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Coleta as informações do formulário
    const formData = new FormData(this);

    // Envia as informações para o Formspree
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Mensagem de sucesso
            alert('Obrigado pela sua Mensagem! Retornarei em breve.');
            this.reset(); // Reseta o formulário
        } else {
            // Mensagem de erro
            alert('Opa! Houve um problema no envio, tente novamente.');
        }
    }).catch(error => {
        // Mensagem de erro
        alert('Opa! Houve um problema no envio, tente novamente.');
    });
});
