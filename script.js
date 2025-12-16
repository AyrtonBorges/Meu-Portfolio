const skillDetails = {
  html5: {
    title: "HTML5",
    description: "Estruturo páginas semânticas, acessíveis e preparadas para SEO, mantendo a base limpa para evoluir o front-end.",
  },
  css3: {
    title: "CSS3",
    description: "Uso Flexbox, Grid e animações sutis para criar interfaces responsivas, com foco em hierarquia visual e tema consistente.",
  },
  javascript: {
    title: "JavaScript",
    description: "Interações ricas e integrações com APIs REST/GraphQL. Organização de código em módulos e boas práticas de estado.",
  },
  react: {
    title: "React",
    description: "Componentização, hooks e integração com APIs. Já trabalhei com Next.js para SSR e geração estática.",
  },
  nodejs: {
    title: "Node.js",
    description: "Criação de APIs rápidas com Express, autenticação JWT e integrações com bancos SQL/NoSQL.",
  },
  python: {
    title: "Python",
    description: "Automação de tarefas, análise de dados e scripts para bots/integrações. Familiaridade com Flask e FastAPI.",
  },
  java: {
    title: "Java",
    description: "Aplicações desktop e serviços backend. Conhecimento em padrões de projeto e manipulação de dados com JDBC/JPA.",
  },
  typescript: {
    title: "TypeScript",
    description: "Código mais seguro em projetos React/Next.js e APIs Node, com tipagem para reduzir regressões.",
  },
  nextjs: {
    title: "Next.js",
    description: "SSR, rotas dinâmicas e otimizações de performance para entregar experiências rápidas.",
  },
  sql: {
    title: "SQL",
    description: "Modelagem de dados, consultas otimizadas e criação de relatórios para apoiar decisões.",
  },
  trello: {
    title: "Trello",
    description: "Organização visual de tarefas e cadência de entregas com time enxuto.",
  },
  jira: {
    title: "Jira",
    description: "Gestão ágil com épicos, sprints e rastreamento de issues.",
  },
  lucidapp: {
    title: "Lucid.app",
    description: "Diagramas e fluxos para alinhar processos com a equipe antes da codificação.",
  },
  modelio: {
    title: "Modelio",
    description: "Modelagem UML para documentar arquitetura e casos de uso.",
  },
  docker: {
    title: "Docker",
    description: "Ambientes reproduzíveis, Dockerfiles enxutos e Docker Compose para serviços locais.",
  },
  vscode: {
    title: "Visual Studio Code",
    description: "Editor principal com extensões para lint, testes e produtividade.",
  },
  github: {
    title: "GitHub",
    description: "Versionamento, code review e automações via Actions.",
  },
  jenkins: {
    title: "Jenkins",
    description: "Pipelines de CI/CD para build, testes e deploy contínuos.",
  },
  git: {
    title: "Git",
    description: "Fluxos de branch (feature/release), rebase e resolução de conflitos.",
  },
  eclipse: {
    title: "Eclipse",
    description: "IDE para projetos Java com plugins de produtividade.",
  },
  netbeans: {
    title: "NetBeans",
    description: "Suporte a aplicações desktop e web com bom tooling para Java.",
  },
  pycharm: {
    title: "PyCharm",
    description: "Depuração, testes e produtividade em projetos Python.",
  },
  platformio: {
    title: "Platform.io",
    description: "Ambiente para IoT com suporte a diversas placas e frameworks.",
  },
  postman: {
    title: "Postman",
    description: "Criação de coleções, testes e documentação de APIs.",
  },
  springtools: {
    title: "Spring Tools 4",
    description: "Stack Spring para serviços Java, com suporte a testes e depuração.",
  },
  canva: {
    title: "Canva",
    description: "Criação rápida de peças visuais e apresentações.",
  },
  figma: {
    title: "Figma",
    description: "Protótipos interativos e design colaborativo.",
  },
  mysqlworkbench: {
    title: "MySQL Workbench",
    description: "Modelagem, migração e administração de bancos MySQL.",
  },
  libreoffice: {
    title: "LibreOffice",
    description: "Documentação, planilhas e relatórios offline.",
  },
  googledrive: {
    title: "Google Drive",
    description: "Colaboração em tempo real, organização e compartilhamento.",
  },
  slack: {
    title: "Slack",
    description: "Comunicação e integração com alertas de deploy/monitoramento.",
  },
  notion: {
    title: "Notion",
    description: "Documentação viva, wikis e acompanhamento de projetos.",
  },
};

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  if (!modal || !modalImage) return;

  modal.style.display = "block";
  modalImage.src = src;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function openSkillModal(skill) {
  const detail = skillDetails[skill];
  const modal = document.getElementById("skillModal");
  const title = document.getElementById("skillTitle");
  const description = document.getElementById("skillDescription");

  if (!detail || !modal || !title || !description) return;

  title.innerText = detail.title;
  description.innerText = detail.description;
  modal.style.display = "block";
}

function closeSkillModal() {
  const modal = document.getElementById("skillModal");
  if (modal) {
    modal.style.display = "none";
  }
}

const carouselState = {};

function getPerPage() {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 960) return 2;
  return 3;
}

function showSlide(index, carouselId) {
  const container = document.getElementById(carouselId);
  const track = container?.querySelector(".carousel");
  const slides = track?.querySelectorAll(".skill") || [];
  if (!container || !track || !slides.length) return;

  const perPage = getPerPage();
  slides.forEach((slide) => {
    slide.style.minWidth = `calc(${100 / perPage}% - 10px)`;
  });

  const totalPages = Math.max(1, Math.ceil(slides.length / perPage));
  const normalizedIndex = ((index % totalPages) + totalPages) % totalPages;
  carouselState[carouselId] = normalizedIndex;

  const gap = 14;
  const pageWidth = container.clientWidth + gap;
  track.style.transform = `translateX(${-normalizedIndex * pageWidth}px)`;

  const isCentered = slides.length <= perPage;
  container.classList.toggle("centered-carousel", isCentered);

  const prev = container.querySelector(".carousel-button.prev");
  const next = container.querySelector(".carousel-button.next");
  if (prev && next) {
    const display = isCentered ? "none" : "flex";
    prev.style.display = display;
    next.style.display = display;
  }
}

function nextSlide(carouselId) {
  const current = carouselState[carouselId] || 0;
  showSlide(current + 1, carouselId);
}

function prevSlide(carouselId) {
  const current = carouselState[carouselId] || 0;
  showSlide(current - 1, carouselId);
}

function initCarousels() {
  document.querySelectorAll(".carousel-container").forEach((carousel) => {
    const id = carousel.getAttribute("id");
    if (id) {
      showSlide(carouselState[id] || 0, id);
    }
  });
}

function initForm() {
  const form = document.querySelector('form[action*="formspree"]');
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("Obrigado pela mensagem! Vou responder em breve.");
          this.reset();
        } else {
          alert("Opa! Houve um problema no envio, tente novamente.");
        }
      })
      .catch(() => alert("Opa! Houve um problema no envio, tente novamente."));
  });
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initCarousels, 150);
});

document.addEventListener("DOMContentLoaded", () => {
  initCarousels();
  initForm();
});
