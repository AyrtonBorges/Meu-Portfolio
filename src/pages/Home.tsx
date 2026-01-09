import React from "react";
import { Link } from "../router";
import { usePageClass } from "../hooks/usePageClass";
import { SkillCarousel } from "../components/SkillCarousel";
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

export const Home = () => {
  usePageClass("page-home");
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
    document.title = "Meu Portfólio | Ayrton Borges";
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.alert("Obrigado pela mensagem! Vou responder em breve.");
        form.reset();
      } else {
        window.alert("Opa! Houve um problema no envio, tente novamente.");
      }
    } catch (error) {
      window.alert("Opa! Houve um problema no envio, tente novamente.");
    }
  };

  const activeDetail = activeSkill ? skillDetails[activeSkill] : null;
  const openImageModal = (src: string) => setModalImage(src);
  const closeModals = () => {
    setActiveSkill(null);
    setModalImage(null);
  };

  return (
    <main>
      <section id="home">
        <div className="container">
          <div className="intro surface hero-grid">
            <div className="intro-text">
              <p className="eyebrow">Full-stack • Bots • IoT</p>
              <h1>Bem-vindo ao meu portfólio</h1>
              <p>
                Olá! Eu sou <strong>Ayrton Borges</strong>, desenvolvedor apaixonado por criar
                soluções úteis: de sistemas de gestão e bots a integrações com hardware.
              </p>
              <div className="cta-row">
                <Link className="pill" to="/#projects">
                  <i className="fa-solid fa-rocket" aria-hidden="true"></i>
                  <span>Veja meus projetos</span>
                </Link>
                <Link className="ghost-btn" to="/#contact">
                  <span>Vamos conversar</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="hero-tags">
                <span className="badge">Back-end Java &amp; Node</span>
                <span className="badge">React &amp; Next.js</span>
                <span className="badge">Automação e Bots</span>
              </div>
            </div>
            <div className="intro-image">
              <div
                className="image-frame"
                role="button"
                tabIndex={0}
                aria-label="Ampliar foto de Ayrton Borges"
                onClick={() => openImageModal(euImage)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImageModal(euImage);
                  }
                }}
              >
                <img src={euImage} alt="Foto de Ayrton Borges" />
              </div>
              <div className="status-card surface">
                <p className="status-title">Em construção contínua</p>
                <p className="status-meta">Projetos acadêmicos e pessoais documentados aqui.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-heading">
            <h2>Sobre Mim</h2>
            <p>Um pouco da minha trajetória e filosofia</p>
          </div>
          <div className="about-grid">
            <div className="surface about-card">
              <div className="about-header">
                <span className="about-chip">Full-stack</span>
                <span className="about-chip">Bots &amp; IoT</span>
              </div>
              <p>
                Bem-vindo ao meu espaço de portfólio! Sou <strong>Ayrton Borges</strong>,
                desenvolvedor full-stack, formado em Técnico em Informática e cursando Engenharia
                de Computação. Experiência em HTML, CSS, JavaScript, React, Node.js e bancos de
                dados. Gosto de resolver problemas complexos e criar aplicações intuitivas e
                eficientes.
              </p>
              <p>
                Hoje trabalho no sistema de gerenciamento PQFL (Plano de Qualificação de
                Fornecedores de Leite) para um laticínio parceiro. Especialidade em back-end,
                participando também do front-end para garantir experiência completa.
              </p>
              <ul className="about-points">
                <li>
                  <i className="fa-solid fa-rocket"></i> Produtos digitais end-to-end: da arquitetura à
                  entrega.
                </li>
                <li>
                  <i className="fa-solid fa-robot"></i> Automações e bots para mensageria e
                  integrações.
                </li>
                <li>
                  <i className="fa-solid fa-microchip"></i> Conexão com hardware (Arduino/ESP32) quando
                  precisa sair da tela.
                </li>
              </ul>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">pessoas no time PQFL</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">áreas: web, bots, IoT</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">curiosidade para aprender</span>
                </div>
              </div>
            </div>
            <div className="surface about-card philosophy">
              <h3>Minha filosofia</h3>
              <p>
                Acredito que tudo na programação é possível. Como disse Marco Aurélio: "Se você
                mesmo não consegue, com o seu esforço, realizar algo, não pense que isso é
                impossível ao ser humano; se, entretanto, algo é possível ao ser humano e lhe é
                próprio, pense que isso também lhe é acessível."
              </p>
              <div className="about-tags">
                <span className="badge">Desktop</span>
                <span className="badge">Eletrônica</span>
                <span className="badge">APIs</span>
                <span className="badge">Automação</span>
              </div>
              <div className="about-quote">
                <i className="fa-solid fa-lightbulb"></i>
                <div>
                  <p className="quote-text">
                    "Se parece difícil, eu quebro em partes. Se não existe, eu prototipo com o que
                    tenho."
                  </p>
                  <p className="quote-meta">Foco em entregar valor rápido, depois refinar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-heading">
            <h2>Habilidades</h2>
            <p>Ferramentas e stacks que uso para entregar valor</p>
          </div>

          <h3 className="subheading">Linguagens de programação</h3>
          <SkillCarousel id="programming-carousel" items={programmingSkills} onSelect={setActiveSkill} />

          <h3 className="subheading">Gerenciamento de projetos</h3>
          <SkillCarousel
            id="project-management-carousel"
            items={projectManagementSkills}
            onSelect={setActiveSkill}
          />

          <h3 className="subheading">Ferramentas de desenvolvimento</h3>
          <SkillCarousel id="software-tools-carousel" items={softwareToolsSkills} onSelect={setActiveSkill} />

          <h3 className="subheading">Design e gestão de dados</h3>
          <SkillCarousel id="design-tools-carousel" items={designToolsSkills} onSelect={setActiveSkill} />
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-heading">
            <h2>Meus Projetos</h2>
            <p>Alguns trabalhos que estão em destaque</p>
          </div>
          <div className="project-gallery">
            <div className="card">
              <img
                src={pqflImage}
                className="card__image card__image--contain"
                alt="Projeto PQFL"
                onClick={() => openImageModal(pqflImage)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImageModal(pqflImage);
                  }
                }}
              />
              <div className="card__content">
                <p className="card__title">Sistema PQFL (em desenvolvimento)</p>
                <p className="card__description">
                  Gestão do Plano de Qualificação de Fornecedores de Leite para laticínios, com
                  aplicativo integrado para visitas técnicas.
                </p>
                <Link to="/paginas/pqfl" className="pr-btn">
                  <span>Ver mais</span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={vitrineMapa}
                className="card__image"
                alt="Mapa da Vitrine da Restauracao"
                onClick={() => openImageModal(vitrineMapa)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImageModal(vitrineMapa);
                  }
                }}
              />
              <div className="card__content">
                <p className="card__title">Vitrine da Restauração — contribuições</p>
                <p className="card__description">
                  Melhorias em UX, mapa interativo, filtros, permissões e pipeline de deploy.
                </p>
                <Link to="/paginas/vitrine" className="pr-btn">
                  <span>Ver mais</span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={aleatoriosImage}
                className="card__image"
                alt="Projetos diversos"
                onClick={() => openImageModal(aleatoriosImage)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImageModal(aleatoriosImage);
                  }
                }}
              />
              <div className="card__content">
                <p className="card__title">Projetos Diversos</p>
                <p className="card__description">
                  Coleção de experimentos e pequenos projetos que compartilho por aqui.
                </p>
                <Link to="/paginas/aleatorios" className="pr-btn">
                  <span>Ver mais</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-heading">
            <h2>Contato</h2>
            <p>Conte sobre sua ideia ou envie um oi</p>
          </div>
          <div className="contact-grid surface">
            <form action="https://formspree.io/f/mblrrwwl" method="post" onSubmit={handleFormSubmit}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Seu nome" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="email@exemplo.com" required />

              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" placeholder="Como posso ajudar?" required></textarea>

              <button type="submit">Enviar</button>
            </form>
            <div className="contact-card">
              <h3>Vamos conversar</h3>
              <p>Curte projetos de automação, bots ou produtos digitais? Me manda uma mensagem.</p>
              <div className="social-links contact-links">
                <a href="https://instagram.com/ayrtoncborges" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://twitter.com/ayrtoncborges" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/ayrton-borges-620aa1168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="imageModal"
        className="modal"
        style={{ display: modalImage ? "block" : "none" }}
        onClick={() => setModalImage(null)}
      >
        <span className="close" onClick={() => setModalImage(null)} aria-label="Fechar modal">
          &times;
        </span>
        <img
          className="modal-content"
          id="modalImage"
          src={modalImage ?? ""}
          alt=""
          onClick={(event) => event.stopPropagation()}
        />
        <div id="caption"></div>
      </div>

      <div
        id="skillModal"
        className="modal skill-modal"
        style={{ display: activeDetail ? "block" : "none" }}
        onClick={closeModals}
      >
        <span className="close" onClick={() => setActiveSkill(null)} aria-label="Fechar modal">
          &times;
        </span>
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          <h2 id="skillTitle">{activeDetail?.title}</h2>
          <p id="skillDescription">{activeDetail?.description}</p>
        </div>
      </div>
    </main>
  );
};
