import React from "react";
import { Link } from "../router";
import { usePageClass } from "../hooks/usePageClass";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { scrollToHash } from "../utils/scroll";
import {
  programmingSkills,
  softwareToolsSkills,
  projectManagementSkills,
  designToolsSkills,
  skillDetails,
  type SkillId,
} from "../data/skills";
import euImage from "../assets/eu.png";
import pqflImage from "../assets/pqfl.png";
import aleatoriosImage from "../assets/aleatorios.png";
import vitrineMapa from "../assets/vitrine/mapa.png";

const d = (ms: number): React.CSSProperties =>
  ({ "--d": `${ms}ms` } as React.CSSProperties);

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
          <span className="marquee-item marquee-dot">&middot;</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const skillCategories = [
  { title: "Linguagens & Frameworks", items: programmingSkills },
  { title: "Ferramentas de Desenvolvimento", items: softwareToolsSkills },
  { title: "Gerenciamento de Projetos", items: projectManagementSkills },
  { title: "Design & Gestão de Dados", items: designToolsSkills },
];

const projects = [
  {
    title: "Sistema PQFL",
    desc: "Gestão do Plano de Qualificação de Fornecedores de Leite para laticínios, com aplicativo mobile integrado para visitas técnicas e alertas de não-conformidade.",
    status: "done" as const,
    statusLabel: "Concluído",
    tech: ["Java", "React Native", "Laravel", "MySQL"],
    image: pqflImage,
    link: "/paginas/pqfl",
  },
  {
    title: "Vitrine — SBRE",
    desc: "Contribuições de UX/UI, mapa interativo com clusters, filtros unificados, políticas de permissão e pipeline CI/CD para a Sociedade Brasileira de Restauração Ecológica.",
    status: "done" as const,
    statusLabel: "Concluído",
    tech: ["Laravel", "Leaflet.js", "Jenkins", "Bootstrap"],
    image: vitrineMapa,
    link: "/paginas/vitrine",
  },
  {
    title: "Projetos Diversos",
    desc: "Coleção de experimentos, bots e pequenos projetos que desenvolvo por curiosidade e aprendizado contínuo.",
    status: "experiment" as const,
    statusLabel: "Experimentos",
    tech: ["Python", "Arduino", "Node.js"],
    image: aleatoriosImage,
    link: "/paginas/aleatorios",
  },
];

export const Home = () => {
  usePageClass("page-home");
  useScrollReveal();

  const [activeSkill, setActiveSkill] = React.useState<SkillId | null>(null);
  const [modalImage, setModalImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    document.title = "Ayrton Borges — Full-stack Developer";
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSkill(null);
        setModalImage(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const whatsappNumber = "5522997218556";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const lines = ["Ola! Tenho uma mensagem pelo site."];
    if (name) lines.push(`Nome: ${name}`);
    if (email) lines.push(`Email: ${email}`);
    if (message) lines.push(`Mensagem: ${message}`);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    e.currentTarget.reset();
  };

  const go = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToHash(hash);
  };

  const activeDetail = activeSkill ? skillDetails[activeSkill] : null;

  return (
    <main>
      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-badge reveal">
            Disponível para projetos
          </div>

          <h1 className="reveal" style={d(80)}>
            Ayrton Borges<span className="cursor" aria-hidden="true">_</span>
          </h1>

          <p className="hero-sub reveal" style={d(160)}>
            Full-stack developer que constrói de ponta a ponta — de sistemas de gestão e
            automações a integrações com hardware.
          </p>

          <div className="hero-actions reveal" style={d(240)}>
            <a className="btn-primary" href="#projects" onClick={go("#projects")}>
              Ver projetos <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
            </a>
            <a className="btn-secondary" href="#contact" onClick={go("#contact")}>
              Vamos conversar
            </a>
          </div>

          <div className="hero-tech reveal" style={d(320)}>
            <span><i className="fa-brands fa-java" aria-hidden="true"></i> Java & Node</span>
            <span><i className="fa-brands fa-react" aria-hidden="true"></i> React & Next</span>
            <span><i className="fa-brands fa-python" aria-hidden="true"></i> Python</span>
            <span><i className="fa-solid fa-microchip" aria-hidden="true"></i> Arduino / ESP32</span>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── About — Bento Grid ── */}
      <section id="about">
        <div className="container">
          <span className="section-label reveal">// sobre</span>
          <h2 className="section-title reveal" style={d(60)}>Sobre Mim</h2>
          <p className="section-desc reveal" style={d(100)}>Trajetória, filosofia e o que me move</p>

          <div className="bento-grid">
            <div className="bento-card bento-bio reveal" style={d(140)}>
              <h2>Desenvolvedor que constrói de ponta a ponta</h2>
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
            </div>

            <div className="bento-card bento-photo reveal" style={d(200)}>
              <img
                src={euImage}
                alt="Ayrton Borges"
                onClick={() => setModalImage(euImage)}
              />
            </div>

            <div className="bento-stats reveal" style={d(260)}>
              <div className="stat-card">
                <span className="stat-value orange">7+</span>
                <span className="stat-label">pessoas no time PQFL</span>
              </div>
              <div className="stat-card">
                <span className="stat-value cyan">3</span>
                <span className="stat-label">especialidades: web, bots, IoT</span>
              </div>
              <div className="stat-card">
                <span className="stat-value green">∞</span>
                <span className="stat-label">curiosidade para aprender</span>
              </div>
            </div>

            <div className="bento-card bento-quote reveal" style={d(320)}>
              <blockquote>
                "Se parece difícil, eu quebro em partes. Se não existe, eu prototipo com o que tenho."
              </blockquote>
              <span className="quote-attr">// Foco em entregar valor rápido, depois refinar.</span>
            </div>

            <div className="bento-card bento-focus reveal" style={d(380)}>
              <h2>Áreas de foco</h2>
              <div className="focus-row">
                <div className="focus-item orange">
                  <i className="fa-solid fa-code" aria-hidden="true"></i>
                  <h3>Web Full-stack</h3>
                  <p>React/Next.js, Node, Java e Laravel</p>
                </div>
                <div className="focus-item cyan">
                  <i className="fa-solid fa-robot" aria-hidden="true"></i>
                  <h3>Bots & Automação</h3>
                  <p>Python, n8n e integrações com APIs</p>
                </div>
                <div className="focus-item green">
                  <i className="fa-solid fa-microchip" aria-hidden="true"></i>
                  <h3>IoT & Hardware</h3>
                  <p>Arduino, ESP32 e comunicação serial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Skills ── */}
      <section id="skills">
        <div className="container">
          <span className="section-label reveal">// habilidades</span>
          <h2 className="section-title reveal" style={d(80)}>Habilidades</h2>
          <p className="section-desc reveal" style={d(120)}>
            Ferramentas e stacks que uso — clique para saber mais
          </p>

          {skillCategories.map((cat, ci) => (
            <div className="skill-category reveal" key={cat.title} style={d(160 + ci * 60)}>
              <h3>{cat.title}</h3>
              <div className="skill-grid">
                {cat.items.map((skill) => (
                  <button
                    className="skill-chip"
                    key={skill.id}
                    onClick={() => setActiveSkill(skill.id)}
                    aria-label={`Ver detalhes sobre ${skill.title}`}
                  >
                    <i className={skill.icon} aria-hidden="true"></i>
                    {skill.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Projects ── */}
      <section id="projects">
        <div className="container">
          <span className="section-label reveal">// projetos</span>
          <h2 className="section-title reveal" style={d(80)}>Projetos</h2>
          <p className="section-desc reveal" style={d(120)}>
            Trabalhos em destaque
          </p>

          <div className="projects-list">
            {projects.map((proj, i) => (
              <Link
                to={proj.link}
                key={proj.title}
                className="project-card reveal"
                style={d(160 + i * 80)}
              >
                <div className="project-img">
                  <img src={proj.image} alt={proj.title} loading="lazy" />
                </div>
                <div className="project-body">
                  <span className={`project-status ${proj.status}`}>
                    {proj.statusLabel}
                  </span>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="project-tech">
                    {proj.tech.map((t) => (
                      <span className="tech-pill" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="project-link">
                    Ver detalhes <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Contact ── */}
      <section id="contact">
        <div className="container">
          <span className="section-label reveal">// contato</span>

          <div className="contact-grid">
            <div className="contact-info reveal" style={d(80)}>
              <h2>
                Vamos construir<br />
                algo <span>juntos?</span>
              </h2>
              <p>
                Projetos de automação, bots, produtos digitais ou integrações com hardware — me
                manda uma mensagem.
              </p>
              <div className="contact-socials">
                <a className="social-link" href="https://instagram.com/ayrtoncborges" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                  Instagram
                </a>
                <a className="social-link" href="https://twitter.com/ayrtoncborges" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                  Twitter / X
                </a>
                <a className="social-link" href="https://www.linkedin.com/in/ayrton-borges-620aa1168" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                  LinkedIn
                </a>
                <a className="social-link" href="mailto:ayrton.cborges@outlook.com">
                  <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                  ayrton.cborges@outlook.com
                </a>
              </div>
            </div>

            <form className="contact-form reveal" style={d(160)} onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Seu nome" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email (opcional)</label>
                <input type="email" id="email" name="email" placeholder="email@exemplo.com" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" placeholder="Qual é a ideia?" required></textarea>
              </div>
              <button type="submit" className="form-submit">
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                Enviar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Skill Modal ── */}
      {activeDetail && (
        <div className="modal-overlay" onClick={() => setActiveSkill(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveSkill(null)} aria-label="Fechar">
              ×
            </button>
            <h3>{activeDetail.title}</h3>
            <p>{activeDetail.description}</p>
          </div>
        </div>
      )}

      {/* ── Image Modal ── */}
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-image-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="" />
          </div>
        </div>
      )}
    </main>
  );
};
