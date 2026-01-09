import React from "react";
import { usePageClass } from "../hooks/usePageClass";
import appMobile from "../assets/pqfl/app_mobile.png";
import reuniaoSemanal from "../assets/pqfl/reuniaosemanal.png";
import foto1 from "../assets/pqfl/foto1.jpg";
import foto2 from "../assets/pqfl/foto2.jpg";
import notion from "../assets/pqfl/notion.png";
import notion2 from "../assets/pqfl/notion2.png";
import projeto from "../assets/pqfl/projeto.png";

export const Pqfl = () => {
  usePageClass("page-pqfl");
  const [modalImage, setModalImage] = React.useState<string | null>(null);
  const [isMobileShot, setIsMobileShot] = React.useState(false);

  React.useEffect(() => {
    document.title = "Projeto Sistema PQFL";
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalImage(null);
        setIsMobileShot(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openModal = (src: string, mobileShot = false) => {
    setModalImage(src);
    setIsMobileShot(mobileShot);
  };

  return (
    <main>
      <section id="main-title">
        <div className="container">
          <h1>Sistema de Gerenciamento PQFL</h1>
          <p>Software e app mobile para garantir qualidade do leite e conformidade com IN 76/77.</p>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow intro-grid">
          <div>
            <div className="pill soft">Projeto em desenvolvimento</div>
            <h2>Panorama rápido</h2>
            <p>
              Ferramenta completa para o Plano de Qualificação de Fornecedores de Leite (PQFL),
              unindo desktop e aplicativo de campo.
            </p>
            <ul className="checklist">
              <li>
                <i className="fa-solid fa-circle-check"></i> Visitas técnicas, laudos e histórico por
                produtor.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Alertas de não conformidade (CPP, CBT,
                temperatura, etc.).
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Relatórios e gráficos automáticos para
                auditorias.
              </li>
            </ul>
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-number">7</span>
                <span className="stat-label">pessoas no time multidisciplinar</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2</span>
                <span className="stat-label">plataformas: desktop + mobile</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">IN 76/77</span>
                <span className="stat-label">aderência às normas do MAPA</span>
              </div>
            </div>
          </div>
          <div className="feature-grid">
            <div className="mini-card">
              <div className="icon-circle">
                <i className="fa-solid fa-desktop"></i>
              </div>
              <h3>Desktop robusto</h3>
              <p>Gestão completa de produtores, tanques, visitas e laboratório.</p>
            </div>
            <div className="mini-card">
              <div className="icon-circle">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <h3>App de campo</h3>
              <p>Coleta offline/online para técnicos, sincronizada em tempo real.</p>
            </div>
            <div className="mini-card">
              <div className="icon-circle">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Qualidade</h3>
              <p>Alertas preventivos e rastreabilidade para auditorias.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Introdução</h2>
          <p>
            Software para gerenciamento do Plano de Qualificação de Fornecedores de Leite (PQFL),
            alinhado às Instruções Normativas 76 e 77/2018 do MAPA. Desenvolvido por uma equipe de 7
            integrantes do IFF (Campus Bom Jesus do Itabapoana) em parceria com um laticínio local,
            financiado por bolsas do CNPq e Faperj.
          </p>
          <p>
            Automatiza visitas técnicas, avaliação de fornecedores, monitoramento de dados
            laboratoriais e conformidade regulatória. Com isso, o laticínio ganha eficiência
            operacional e segurança na cadeia de qualidade do leite.
          </p>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Versão Mobile</h2>
          <p>
            Além da versão desktop, o projeto conta com aplicativo em <strong>React Native</strong>,
            integrado a <strong>API Laravel 12</strong>. Técnicos registram relatórios em campo com
            sincronização automática, mantendo dados seguros e prontos para decisão.
          </p>
          <ul className="checklist">
            <li>
              <i className="fa-solid fa-signal"></i> Funciona online/offline com sincronização
              posterior.
            </li>
            <li>
              <i className="fa-solid fa-clipboard-list"></i> Formulários guiados para visitas
              técnicas.
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> Registro de localização e contexto da
              coleta.
            </li>
          </ul>
          <div className="project-images2">
            <img
              src={appMobile}
              alt="Tela do aplicativo mobile em React Native"
              onClick={() => openModal(appMobile, true)}
              className="mobile-shot"
            />
          </div>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Algumas fotos do projeto</h2>
          <p>
            As fotos registram as reuniões semanais da equipe, que começou com 5 pessoas e cresceu
            conforme as demandas. A segunda imagem mostra a entrega do primeiro MVP ao laticínio,
            após um ano de coleta de requisitos, desenvolvimento, homologação e testes.
          </p>
          <div className="project-images">
            <img src={reuniaoSemanal} alt="Reunião semanal com a equipe" onClick={() => openModal(reuniaoSemanal)} />
            <img src={foto1} alt="Foto com a equipe do laticínio local" onClick={() => openModal(foto1)} />
            <img src={foto2} alt="Foto com a equipe do laticínio local" onClick={() => openModal(foto2)} />
          </div>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Objetivo</h2>
          <p>
            Desenvolver um software desktop especializado para o gerenciamento completo do PQFL,
            automatizando controle de qualidade e conformidade de fornecedores. Facilita visitas
            técnicas, análise de laboratório, gestão de produtores/tanques e gera relatórios e
            alertas automáticos.
          </p>
          <div className="highlight-grid">
            <div className="highlight">
              <i className="fa-solid fa-bell"></i>
              <div>
                <h4>Alertas preventivos</h4>
                <p>Identifica não conformidades (CPP/CBT/temperatura) e sugere ações corretivas.</p>
              </div>
            </div>
            <div className="highlight">
              <i className="fa-solid fa-chart-line"></i>
              <div>
                <h4>Relatórios e gráficos</h4>
                <p>Saídas automáticas para auditoria e acompanhamento da qualidade do leite.</p>
              </div>
            </div>
            <div className="highlight">
              <i className="fa-solid fa-shield-halved"></i>
              <div>
                <h4>Rastreabilidade</h4>
                <p>Histórico completo por produtor, coleta e visita técnica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Metodologia</h2>
          <p>
            O desenvolvimento segue a abordagem ágil <strong>Scrumban</strong>, unindo práticas de
            Scrum e Kanban aplicadas no Notion para gestão e visibilidade.
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Requisitos</h4>
                <p>Entrevistas e questionários com a cooperativa e técnicos.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Prototipagem</h4>
                <p>Fluxos e telas validados em LucidChart e protótipos de alta fidelidade.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Desenvolvimento</h4>
                <p>Entrega iterativa; ajustes contínuos em regras de negócio e base de dados.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Testes</h4>
                <p>Usabilidade e performance com feedback semanal do laticínio.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot"></div>
              <div>
                <h4>Documentação</h4>
                <p>Material técnico e preparação para registro no INPI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <div className="project-images2">
            <img src={notion} alt="Lista de tarefas no Notion" onClick={() => openModal(notion)} />
            <img src={notion2} alt="Sprints do projeto no Notion" onClick={() => openModal(notion2)} />
          </div>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Arquitetura do sistema</h2>
          <p>O Sistema PQFL é dividido em camadas claras:</p>
          <div className="arch-grid">
            <div className="arch-card">
              <h4>Frontend</h4>
              <p>Java Swing (JFrame) com WindowBuilder para acelerar criação visual e manter consistência.</p>
            </div>
            <div className="arch-card">
              <h4>Backend</h4>
              <p>Java para regras de negócio e integrações; API Laravel para o app mobile.</p>
            </div>
            <div className="arch-card">
              <h4>Banco de dados</h4>
              <p>MySQL Server + Workbench para modelagem, versionamento de schema e queries otimizadas.</p>
            </div>
          </div>
          <h3>Tela do projeto</h3>
          <div className="project-images2">
            <img src={projeto} alt="Tela do projeto em Java" onClick={() => openModal(projeto)} />
          </div>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Tecnologias utilizadas</h2>
          <div className="stack-grid">
            <span className="stack-pill">Java</span>
            <span className="stack-pill">Eclipse IDE</span>
            <span className="stack-pill">MySQL Server</span>
            <span className="stack-pill">MySQL Workbench</span>
            <span className="stack-pill">WindowBuilder</span>
            <span className="stack-pill">Laravel API</span>
            <span className="stack-pill">React Native</span>
            <span className="stack-pill">Visual Studio Code</span>
            <span className="stack-pill">GitHub</span>
            <span className="stack-pill">Notion</span>
            <span className="stack-pill">LucidChart</span>
          </div>
        </div>
      </section>

      <div
        id="imageModal"
        className="modal"
        style={{ display: modalImage ? "block" : "none" }}
        onClick={() => {
          setModalImage(null);
          setIsMobileShot(false);
        }}
      >
        <span
          className="close"
          onClick={() => {
            setModalImage(null);
            setIsMobileShot(false);
          }}
          aria-label="Fechar modal"
        >
          &times;
        </span>
        <img
          className={`modal-content ${isMobileShot ? "mobile-shot-modal" : ""}`}
          id="modalImage"
          src={modalImage ?? ""}
          alt=""
          onClick={(event) => event.stopPropagation()}
        />
        <div id="caption"></div>
      </div>
    </main>
  );
};
