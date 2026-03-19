import React from "react";
import { Link } from "../router";
import { usePageClass } from "../hooks/usePageClass";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  designToolsSkills,
  programmingSkills,
  projectManagementSkills,
  skillDetails,
  softwareToolsSkills,
  type SkillId,
} from "../data/skills";
import euImage from "../assets/eu.png";
import pqflImage from "../assets/pqfl.png";
import aleatoriosImage from "../assets/aleatorios.png";
import vitrineMapa from "../assets/vitrine/mapa.png";

const MARQUEE_WORDS = [
  "JAVA", "REACT", "NODE.JS", "PYTHON", "TYPESCRIPT", "NEXT.JS",
  "LARAVEL", "DOCKER", "ARDUINO", "MYSQL", "JENKINS", "GIT",
  "FIGMA", "ESP32", "SPRING", "REST API",
];

const Marquee = () => (
  <div className="marquee-strip" aria-hidden="true">
    <div className="marquee-track">
      {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
        <React.Fragment key={i}>
          <span className="marquee-item">{word}</span>
          <span className="marquee-item marquee-dot">·</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const d = (ms: number): React.CSSProperties => ({ "--d": `${ms}ms` } as React.CSSProperties);

export const Home = () => {
  usePageClass("page-home");
  useScrollReveal();
  const [activeSkill, setActiveSkill] = React.useState<SkillId | null>(null);
  const [modalImage, setModalImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSkill(null);
        setModalImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    document.title = "Ayrton Borges — Full-stack Developer";
  }, []);

  const whatsappNumber = "5522997218556";
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const messageLines = ["Ola! Tenho uma mensagem pelo site."];
    if (name) messageLines.push(`Nome: ${name}`);
    if (email) messageLines.push(`Email: ${email}`);
    if (message) messageLines.push(`Mensagem: ${message}`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
  };

  const activeDetail = activeSkill ? skillDetails[activeSkill] : null;
  const openImageModal = (src: string) => setModalImage(src);
  const closeModals = () => {
    setActiveSkill(null);
    setModalImage(null);
  };

  const openImg = (src: string) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openImageModal(src);
    }
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section id="home">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <span className="hero-dot" aria-hidden="true"></span>
                Disponível para projetos
              </span>

              <h1>
                Ayrton<br />
                Borges<span className="cursor" aria-hidden="true">_</span>
              </h1>

              <p className="hero-desc">
                Full-stack developer que constrói de ponta a ponta — de sistemas de gestão e
                automações a integrações com hardware.
              </p>

              <div className="cta-row">
                <Link className="btn-primary" to="/#projects">
                  <i className="fa-solid fa-rocket" aria-hidden="true"></i>
                  Ver projetos
                </Link>
                <Link className="btn-ghost" to="/#contact">
                  Vamos conversar
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>

              <div className="hero-tech" aria-label="Especialidades">
                <span className="tech-tag">
                  <i className="fa-brands fa-java" aria-hidden="true"></i> Java &amp; Node
                </span>
                <span className="tech-tag">
                  <i className="fa-brands fa-react" aria-hidden="true"></i> React &amp; Next
                </span>
                <span className="tech-tag">
                  <i className="fa-solid fa-robot" aria-hidden="true"></i> Automação
                </span>
                <span className="tech-tag">
                  <i className="fa-solid fa-microchip" aria-hidden="true"></i> Arduino / ESP32
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <div
                className="image-frame"
                role="button"
                tabIndex={0}
                aria-label="Ampliar foto de Ayrton Borges"
                onClick={() => openImageModal(euImage)}
                onKeyDown={openImg(euImage)}
              >
                <img src={euImage} alt="Ayrton Borges" />
              </div>
              <div className="hero-status">
                <span className="status-dot" aria-hidden="true"></span>
                building something new
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── SOBRE ── */}
      <section id="about">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">// 01</span>
            <h2>Sobre Mim</h2>
            <p>Trajetória, filosofia e o que me move</p>
          </div>

          <div className="about-bento">
            <div className="bento-card bento-bio surface reveal" style={d(0)}>
              <h3>Desenvolvedor que constrói de ponta a ponta</h3>
              <p>
                Sou <strong>Ayrton Borges</strong>, desenvolvedor full-stack formado em Técnico em
                Informática e cursando Engenharia de Computação. Trabalho em produtos digitais
                completos: da arquitetura ao deploy, passando por UX e banco de dados.
              </p>
              <p>
                Trabalhei no sistema <strong>PQFL</strong> (Plano de Qualificação de Fornecedores
                de Leite), com foco no back-end e integração mobile — em um time de 7 pessoas, com
                bolsas CNPq e Faperj.
              </p>
              <ul className="bio-points">
                <li>
                  <i className="fa-solid fa-rocket" aria-hidden="true"></i>
                  Produtos digitais end-to-end: da arquitetura à entrega.
                </li>
                <li>
                  <i className="fa-solid fa-robot" aria-hidden="true"></i>
                  Automações e bots para mensageria e integrações.
                </li>
                <li>
                  <i className="fa-solid fa-microchip" aria-hidden="true"></i>
                  Conexão com hardware (Arduino/ESP32) quando precisa sair da tela.
                </li>
              </ul>
            </div>

            <div className="bento-stats surface reveal" style={d(100)}>
              <div className="stat-block">
                <span className="stat-num c-orange">7+</span>
                <span className="stat-label">pessoas no time PQFL</span>
              </div>
              <div className="stat-block">
                <span className="stat-num c-cyan">3</span>
                <span className="stat-label">especialidades: web, bots, IoT</span>
              </div>
              <div className="stat-block">
                <span className="stat-num c-green">∞</span>
                <span className="stat-label">curiosidade para aprender</span>
              </div>
            </div>

            <div className="bento-card bento-quote surface reveal" style={d(200)}>
              <blockquote>
                Se parece difícil, eu quebro em partes. Se não existe, eu prototipo com o que tenho.
              </blockquote>
              <p className="quote-meta">// Foco em entregar valor rápido, depois refinar.</p>
            </div>

            <div className="bento-card bento-focus surface reveal" style={d(300)}>
              <h3>Áreas de foco</h3>
              <div className="focus-grid">
                <div className="focus-item">
                  <i className="fa-solid fa-globe" aria-hidden="true"></i>
                  <span>Web Full-stack</span>
                </div>
                <div className="focus-item">
                  <i className="fa-solid fa-robot" aria-hidden="true"></i>
                  <span>Bots &amp; Automação</span>
                </div>
                <div className="focus-item">
                  <i className="fa-solid fa-microchip" aria-hidden="true"></i>
                  <span>IoT &amp; Hardware</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HABILIDADES ── */}
      <section id="skills">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">// 02</span>
            <h2>Habilidades</h2>
            <p>Ferramentas e stacks que uso — clique para saber mais</p>
          </div>

          <div className="skills-grid">
            <div className="skill-category reveal" style={d(0)}>
              <p className="category-title">
                <i className="fa-solid fa-code" aria-hidden="true"></i>
                Linguagens &amp; Frameworks
              </p>
              <div className="skill-tags">
                {programmingSkills.map((skill, i) => (
                  <button
                    key={skill.id}
                    className="skill-chip reveal"
                    style={d(50 + i * 40)}
                    onClick={() => setActiveSkill(skill.id)}
                    aria-label={`Ver detalhes sobre ${skill.title}`}
                  >
                    <i className={skill.icon} aria-hidden="true"></i>
                    {skill.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="skill-category reveal" style={d(80)}>
              <p className="category-title">
                <i className="fa-solid fa-wrench" aria-hidden="true"></i>
                Ferramentas de Desenvolvimento
              </p>
              <div className="skill-tags">
                {softwareToolsSkills.map((skill, i) => (
                  <button
                    key={skill.id}
                    className="skill-chip reveal"
                    style={d(130 + i * 40)}
                    onClick={() => setActiveSkill(skill.id)}
                    aria-label={`Ver detalhes sobre ${skill.title}`}
                  >
                    <i className={skill.icon} aria-hidden="true"></i>
                    {skill.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="skill-category reveal" style={d(160)}>
              <p className="category-title">
                <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
                Gerenciamento de Projetos
              </p>
              <div className="skill-tags">
                {projectManagementSkills.map((skill, i) => (
                  <button
                    key={skill.id}
                    className="skill-chip reveal"
                    style={d(210 + i * 40)}
                    onClick={() => setActiveSkill(skill.id)}
                    aria-label={`Ver detalhes sobre ${skill.title}`}
                  >
                    <i className={skill.icon} aria-hidden="true"></i>
                    {skill.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="skill-category reveal" style={d(240)}>
              <p className="category-title">
                <i className="fa-solid fa-palette" aria-hidden="true"></i>
                Design &amp; Gestão de Dados
              </p>
              <div className="skill-tags">
                {designToolsSkills.map((skill, i) => (
                  <button
                    key={skill.id}
                    className="skill-chip reveal"
                    style={d(290 + i * 40)}
                    onClick={() => setActiveSkill(skill.id)}
                    aria-label={`Ver detalhes sobre ${skill.title}`}
                  >
                    <i className={skill.icon} aria-hidden="true"></i>
                    {skill.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETOS ── */}
      <section id="projects">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">// 03</span>
            <h2>Projetos</h2>
            <p>Trabalhos em destaque</p>
          </div>

          <div className="project-gallery">
            <div className="project-card reveal" style={d(0)}>
              <div className="project-img-wrap">
                <img
                  src={pqflImage}
                  className="project-image project-image--contain"
                  alt="Projeto PQFL"
                  onClick={() => openImageModal(pqflImage)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={openImg(pqflImage)}
                />
              </div>
              <div className="project-body">
                <span className="project-status">
                  <span className="project-status-dot" aria-hidden="true"></span>
                  Concluído
                </span>
                <p className="project-title">Sistema PQFL</p>
                <p className="project-desc">
                  Gestão do Plano de Qualificação de Fornecedores de Leite para laticínios, com
                  aplicativo mobile integrado para visitas técnicas e alertas de não-conformidade.
                </p>
                <div className="project-tech">
                  <span className="tech-pill">Java</span>
                  <span className="tech-pill">React Native</span>
                  <span className="tech-pill">Laravel</span>
                  <span className="tech-pill">MySQL</span>
                </div>
                <Link to="/paginas/pqfl" className="project-link">
                  Ver detalhes <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            <div className="project-card reveal" style={d(120)}>
              <div className="project-img-wrap">
                <img
                  src={vitrineMapa}
                  className="project-image"
                  alt="Mapa da Vitrine da Sociedade Brasileira de Restauração Ecológica"
                  onClick={() => openImageModal(vitrineMapa)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={openImg(vitrineMapa)}
                />
              </div>
              <div className="project-body">
                <span className="project-status">
                  <span className="project-status-dot" aria-hidden="true"></span>
                  Concluído
                </span>
                <p className="project-title">Vitrine — SBRE</p>
                <p className="project-desc">
                  Contribuições de UX/UI, mapa interativo com clusters, filtros unificados, políticas
                  de permissão e pipeline CI/CD para a Sociedade Brasileira de Restauração Ecológica.
                </p>
                <div className="project-tech">
                  <span className="tech-pill">Laravel</span>
                  <span className="tech-pill">Leaflet.js</span>
                  <span className="tech-pill">Jenkins</span>
                  <span className="tech-pill">Bootstrap</span>
                </div>
                <Link to="/paginas/vitrine" className="project-link">
                  Ver detalhes <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            <div className="project-card reveal" style={d(240)}>
              <div className="project-img-wrap">
                <img
                  src={aleatoriosImage}
                  className="project-image"
                  alt="Projetos diversos"
                  onClick={() => openImageModal(aleatoriosImage)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={openImg(aleatoriosImage)}
                />
              </div>
              <div className="project-body">
                <span className="project-status">
                  <span className="project-status-dot" aria-hidden="true"></span>
                  Experimentos
                </span>
                <p className="project-title">Projetos Diversos</p>
                <p className="project-desc">
                  Coleção de experimentos, bots e pequenos projetos que desenvolvo por curiosidade e
                  aprendizado contínuo.
                </p>
                <div className="project-tech">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">Arduino</span>
                  <span className="tech-pill">Node.js</span>
                </div>
                <Link to="/paginas/aleatorios" className="project-link">
                  Ver mais <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contact">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-label">// 04</span>
            <h2>Contato</h2>
            <p>Conte sobre sua ideia ou envie um oi</p>
          </div>

          <div className="contact-layout">
            <div className="contact-intro reveal" style={d(0)}>
              <h3>
                Vamos construir<br />
                algo <span>juntos?</span>
              </h3>
              <p>
                Projetos de automação, bots, produtos digitais ou integrações com hardware — me
                manda uma mensagem.
              </p>
              <div className="social-links">
                <a
                  href="https://instagram.com/ayrtoncborges"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                  Instagram
                </a>
                <a
                  href="https://twitter.com/ayrtoncborges"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                  Twitter / X
                </a>
                <a
                  href="https://www.linkedin.com/in/ayrton-borges-620aa1168"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                  LinkedIn
                </a>
                <a href="mailto:ayrton.cborges@outlook.com" className="social-link">
                  <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                  ayrton.cborges@outlook.com
                </a>
              </div>
            </div>

            <form className="contact-form reveal" style={d(150)} onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email (opcional)</label>
                <input type="email" id="email" name="email" placeholder="email@exemplo.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" placeholder="Qual é a ideia?" required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                Enviar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── MODAL: IMAGEM ── */}
      <div
        id="imageModal"
        className="modal"
        style={{ display: modalImage ? "block" : "none" }}
        onClick={() => setModalImage(null)}
      >
        <button className="modal-close" onClick={() => setModalImage(null)} aria-label="Fechar modal">
          ×
        </button>
        <img
          className="modal-content"
          src={modalImage ?? ""}
          alt=""
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* ── MODAL: SKILL ── */}
      <div
        id="skillModal"
        className="modal skill-modal"
        style={{ display: activeDetail ? "block" : "none" }}
        onClick={closeModals}
      >
        <button className="modal-close" onClick={() => setActiveSkill(null)} aria-label="Fechar modal">
          ×
        </button>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{activeDetail?.title}</h2>
          <p>{activeDetail?.description}</p>
        </div>
      </div>
    </main>
  );
};
