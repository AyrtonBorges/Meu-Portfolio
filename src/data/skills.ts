export const skillDetails = {
  html5: {
    title: "HTML5",
    description:
      "Estruturo páginas semânticas, acessíveis e preparadas para SEO, mantendo a base limpa para evoluir o front-end.",
  },
  css3: {
    title: "CSS3",
    description:
      "Uso Flexbox, Grid e animações sutis para criar interfaces responsivas, com foco em hierarquia visual e tema consistente.",
  },
  javascript: {
    title: "JavaScript",
    description:
      "Interações ricas e integrações com APIs REST/GraphQL. Organização de código em módulos e boas práticas de estado.",
  },
  react: {
    title: "React",
    description:
      "Componentização, hooks e integração com APIs. Já trabalhei com Next.js para SSR e geração estática.",
  },
  nodejs: {
    title: "Node.js",
    description: "Criação de APIs rápidas com Express, autenticação JWT e integrações com bancos SQL/NoSQL.",
  },
  python: {
    title: "Python",
    description:
      "Automação de tarefas, análise de dados e scripts para bots/integrações. Familiaridade com Flask e FastAPI.",
  },
  java: {
    title: "Java",
    description:
      "Aplicações desktop e serviços backend. Conhecimento em padrões de projeto e manipulação de dados com JDBC/JPA.",
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
  beekeeper: {
    title: "Beekeeper Studio",
    description: "Cliente SQL multiplataforma para consultas, inspeção de schemas e gestão visual de bancos.",
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

export type SkillId = keyof typeof skillDetails;

export type SkillCard = {
  id: SkillId;
  icon: string;
  title: string;
  summary: string;
};

export const programmingSkills: SkillCard[] = [
  {
    id: "html5",
    icon: "fab fa-html5",
    title: "HTML5",
    summary: "Estruturas semânticas e acessíveis para a web.",
  },
  {
    id: "css3",
    icon: "fab fa-css3-alt",
    title: "CSS3",
    summary: "Estilos modernos, grids responsivos e animações.",
  },
  {
    id: "javascript",
    icon: "fab fa-js-square",
    title: "JavaScript",
    summary: "Interatividade e integrações com APIs.",
  },
  {
    id: "react",
    icon: "fab fa-react",
    title: "React",
    summary: "Componentização, hooks e UIs modernas.",
  },
  {
    id: "nodejs",
    icon: "fab fa-node-js",
    title: "Node.js",
    summary: "APIs rápidas e escaláveis com Express.",
  },
  {
    id: "python",
    icon: "fab fa-python",
    title: "Python",
    summary: "Automação, análise de dados e integrações.",
  },
  {
    id: "java",
    icon: "fab fa-java",
    title: "Java",
    summary: "Aplicações robustas e desktop.",
  },
  {
    id: "typescript",
    icon: "fab fa-js-square",
    title: "TypeScript",
    summary: "Base sólida para apps Next.js.",
  },
  {
    id: "nextjs",
    icon: "fab fa-react",
    title: "Next.js",
    summary: "SSR, rotas dinâmicas e performance.",
  },
  {
    id: "sql",
    icon: "fas fa-database",
    title: "SQL",
    summary: "Consultas, modelagem e otimização.",
  },
];

export const projectManagementSkills: SkillCard[] = [
  {
    id: "trello",
    icon: "fab fa-trello",
    title: "Trello",
    summary: "Quadros visuais e organização colaborativa.",
  },
  {
    id: "jira",
    icon: "fab fa-jira",
    title: "Jira",
    summary: "Planejamento ágil, épicos e sprints.",
  },
  {
    id: "lucidapp",
    icon: "fas fa-project-diagram",
    title: "Lucid.app",
    summary: "Mapeamento visual de processos.",
  },
  {
    id: "modelio",
    icon: "fas fa-drafting-compass",
    title: "Modelio",
    summary: "Modelagem UML e documentação.",
  },
];

export const softwareToolsSkills: SkillCard[] = [
  {
    id: "docker",
    icon: "fab fa-docker",
    title: "Docker",
    summary: "Ambientes reproduzíveis e portáteis.",
  },
  {
    id: "vscode",
    icon: "fas fa-code",
    title: "VS Code",
    summary: "Editor leve e extensível.",
  },
  {
    id: "github",
    icon: "fab fa-github",
    title: "GitHub",
    summary: "Versionamento e colaboração.",
  },
  {
    id: "jenkins",
    icon: "fas fa-tools",
    title: "Jenkins",
    summary: "Integração e entrega contínua.",
  },
  {
    id: "git",
    icon: "fab fa-git-alt",
    title: "Git",
    summary: "Fluxos de branch e code review.",
  },
  {
    id: "eclipse",
    icon: "fas fa-laptop-code",
    title: "Eclipse",
    summary: "IDE para projetos Java.",
  },
  {
    id: "netbeans",
    icon: "fas fa-code-branch",
    title: "NetBeans",
    summary: "IDE para desktop e mobile.",
  },
  {
    id: "pycharm",
    icon: "fa-brands fa-python",
    title: "PyCharm",
    summary: "Produtividade em Python.",
  },
  {
    id: "platformio",
    icon: "fas fa-microchip",
    title: "Platform.io",
    summary: "Plataforma para IoT.",
  },
  {
    id: "postman",
    icon: "fas fa-server",
    title: "Postman",
    summary: "Testes e documentação de APIs.",
  },
  {
    id: "springtools",
    icon: "fas fa-leaf",
    title: "Spring Tools 4",
    summary: "Stack Spring para Java.",
  },
];

export const designToolsSkills: SkillCard[] = [
  {
    id: "canva",
    icon: "fa-solid fa-pen-nib",
    title: "Canva",
    summary: "Design rápido e apresentações.",
  },
  {
    id: "figma",
    icon: "fab fa-figma",
    title: "Figma",
    summary: "Protótipos e design colaborativo.",
  },
  {
    id: "mysqlworkbench",
    icon: "fas fa-database",
    title: "MySQL Workbench",
    summary: "Modelagem e administração de dados.",
  },
  {
    id: "libreoffice",
    icon: "fas fa-file-alt",
    title: "LibreOffice",
    summary: "Documentos e planilhas.",
  },
  {
    id: "googledrive",
    icon: "fab fa-google-drive",
    title: "Google Drive",
    summary: "Colaboração em tempo real.",
  },
  {
    id: "slack",
    icon: "fab fa-slack",
    title: "Slack",
    summary: "Comunicação de equipes.",
  },
  {
    id: "notion",
    icon: "fas fa-tasks",
    title: "Notion",
    summary: "Documentação e gestão de conhecimento.",
  },
];
