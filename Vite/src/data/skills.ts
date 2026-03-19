export const skillDetails = {
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
  laravel: {
    title: "Laravel",
    description: "APIs RESTful, services, policies e migrations. Usado em produção no projeto Vitrine SBRE.",
  },
  docker: {
    title: "Docker",
    description: "Ambientes reproduzíveis, Dockerfiles enxutos e Docker Compose para serviços locais.",
  },
  git: {
    title: "Git",
    description: "Fluxos de branch (feature/release), rebase e resolução de conflitos.",
  },
  github: {
    title: "GitHub",
    description: "Versionamento, code review e automações via Actions.",
  },
  jenkins: {
    title: "Jenkins",
    description: "Pipelines de CI/CD para build, testes e deploy contínuos.",
  },
  postman: {
    title: "Postman",
    description: "Criação de coleções, testes e documentação de APIs.",
  },
  jira: {
    title: "Jira",
    description: "Gestão ágil com épicos, sprints e rastreamento de issues.",
  },
  trello: {
    title: "Trello",
    description: "Organização visual de tarefas e cadência de entregas com time enxuto.",
  },
  figma: {
    title: "Figma",
    description: "Protótipos interativos e design colaborativo.",
  },
  notion: {
    title: "Notion",
    description: "Documentação viva, wikis e acompanhamento de projetos.",
  },
  mysqlworkbench: {
    title: "MySQL Workbench",
    description: "Modelagem, migração e administração de bancos MySQL.",
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
    id: "javascript",
    icon: "fab fa-js-square",
    title: "JavaScript",
    summary: "Interatividade e integrações com APIs.",
  },
  {
    id: "typescript",
    icon: "fab fa-js-square",
    title: "TypeScript",
    summary: "Tipagem segura para React e Node.",
  },
  {
    id: "react",
    icon: "fab fa-react",
    title: "React",
    summary: "Componentização, hooks e UIs modernas.",
  },
  {
    id: "nextjs",
    icon: "fab fa-react",
    title: "Next.js",
    summary: "SSR, rotas dinâmicas e performance.",
  },
  {
    id: "nodejs",
    icon: "fab fa-node-js",
    title: "Node.js",
    summary: "APIs rápidas e escaláveis com Express.",
  },
  {
    id: "java",
    icon: "fab fa-java",
    title: "Java",
    summary: "Aplicações robustas e desktop.",
  },
  {
    id: "python",
    icon: "fab fa-python",
    title: "Python",
    summary: "Automação, análise de dados e bots.",
  },
  {
    id: "laravel",
    icon: "fab fa-laravel",
    title: "Laravel",
    summary: "APIs RESTful e services em PHP.",
  },
  {
    id: "sql",
    icon: "fas fa-database",
    title: "SQL",
    summary: "Consultas, modelagem e otimização.",
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
    id: "git",
    icon: "fab fa-git-alt",
    title: "Git",
    summary: "Fluxos de branch e code review.",
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
    id: "postman",
    icon: "fas fa-server",
    title: "Postman",
    summary: "Testes e documentação de APIs.",
  },
];

export const projectManagementSkills: SkillCard[] = [
  {
    id: "jira",
    icon: "fab fa-jira",
    title: "Jira",
    summary: "Planejamento ágil, épicos e sprints.",
  },
  {
    id: "trello",
    icon: "fab fa-trello",
    title: "Trello",
    summary: "Quadros visuais e organização colaborativa.",
  },
  {
    id: "notion",
    icon: "fas fa-tasks",
    title: "Notion",
    summary: "Documentação e gestão de conhecimento.",
  },
];

export const designToolsSkills: SkillCard[] = [
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
];
