import React from "react";
import { usePageClass } from "../hooks/usePageClass";
import { useScrollReveal } from "../hooks/useScrollReveal";
import mapaImage from "../assets/vitrine/mapa.png";
import painelImage from "../assets/vitrine/painel.png";

const examples = [
  {
    id: "mapa",
    title: "Mapa interativo",
    description: "Clusters e ícones por tipo para navegação rápida.",
    image: mapaImage,
    alt: "Mapa interativo da plataforma",
  },
  {
    id: "painel",
    title: "Painel de indicadores",
    description: "Gráficos e métricas com filtros unificados.",
    image: painelImage,
    alt: "Painel de indicadores da plataforma",
  },
];

export const Vitrine = () => {
  usePageClass("page-vitrine");
  useScrollReveal();

  React.useEffect(() => {
    document.title = "Vitrine SBRE — Ayrton Borges";
  }, []);

  return (
    <main>
      <section id="main-title">
        <div className="container">
          <span className="project-label">
            <span className="dot" aria-hidden="true"></span>
            // projeto concluído
          </span>
          <h1>Vitrine da Sociedade Brasileira de Restauração Ecológica</h1>
          <p>Contribuições em front-end, back-end e operação para um produto mais confiável e amigável.</p>
        </div>
      </section>

      <section className="project-section">
        <div className="container narrow intro-grid">
          <div className="reveal">
            <div className="pill soft">Concluído</div>
            <h2>Panorama rápido</h2>
            <p>
              Atuei na evolução e manutenção do sistema Vitrine da SBRE, com foco em experiência do
              usuário, confiabilidade das rotinas principais e padronização do produto.
            </p>
            <ul className="checklist">
              <li>
                <i className="fa-solid fa-circle-check"></i> UX/UI: navbar, sidebar, autenticação e responsividade.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Mapa interativo com clusters, ícones e tutorial.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Filtros, listagens, paginação e performance.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Policies de autorização, formulários e validações.
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Pipeline de deploy com Jenkins + n8n e relatórios.
              </li>
            </ul>
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-number">Front + Back</span>
                <span className="stat-label">UX, mapas, filtros e policies</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">Mapa & Filtros</span>
                <span className="stat-label">Clusters, marcadores e buscas refinadas</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">CI/CD</span>
                <span className="stat-label">Jenkins + n8n para relatórios</span>
              </div>
            </div>
          </div>
          <div className="feature-grid reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            <div className="mini-card">
              <div className="icon-circle">
                <i className="fa-solid fa-compass"></i>
              </div>
              <h3>UX de navegação</h3>
              <p>Navbar/sidebar revisadas, feedbacks em telas de login, cadastro e recuperação.</p>
            </div>
            <div className="mini-card">
              <div className="icon-circle">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <h3>Mapa interativo</h3>
              <p>Clusters, ícones por tipo, zoom mobile e camadas reorganizadas.</p>
            </div>
            <div className="mini-card">
              <div className="icon-circle">
                <i className="fa-solid fa-filter"></i>
              </div>
              <h3>Filtros e listas</h3>
              <p>Busca ampliada, paginação e UI padronizada para cards e filtros.</p>
            </div>
            <div className="mini-card">
              <div className="icon-circle">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Policies e acesso</h3>
              <p>Padronização de autorização, visibilidade por perfil e regras claras.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="container narrow reveal">
          <span className="section-num">// 01</span>
          <h2>Principais entregas</h2>
          <div className="deliverable-grid">
            <div className="deliverable-card">
              <h3>UX/UI e navegação</h3>
              <ul>
                <li>Navbar, sidebar e navegação mais consistentes e responsivas.</li>
                <li>Telas de autenticação alinhadas (login, cadastro, recuperação, termos).</li>
                <li>Feedbacks de loading e estados vazios para reduzir sensação de travamento.</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <h3>Mapa interativo</h3>
              <ul>
                <li>Clusters e ícones específicos por tipo de recurso.</li>
                <li>Ajustes de zoom e interação mobile com cards/sidebars.</li>
                <li>Camadas reorganizadas e renomeadas para clareza.</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <h3>Busca, filtros e listagens</h3>
              <ul>
                <li>Correções de filtros (UF, tipo, tags) e campo de busca expandido.</li>
                <li>UI padronizada para cards + área de filtros; paginação para grandes volumes.</li>
                <li>Correção de erros que afetavam queries e performance percebida.</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <h3>Painéis e indicadores</h3>
              <ul>
                <li>Painéis com totais, gráficos por recortes e indicadores principais.</li>
                <li>Filtros unificados entre gráficos e listagens (tipo, UF, bioma, período).</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <h3>Permissões e visibilidade</h3>
              <ul>
                <li>Refatoração das policies de autorização para maior confiabilidade.</li>
                <li>Visibilidade por perfil: o que pode listar, cadastrar ou visualizar.</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <h3>Formulários e qualidade</h3>
              <ul>
                <li>Validações claras, máscaras e campos condicionais com dicas contextuais.</li>
                <li>Ajustes em campos críticos: site, coordenadas, telefone/whatsapp.</li>
                <li>Telas de visualização padronizadas em cards para melhor leitura.</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <h3>Arquitetura e manutenção</h3>
              <ul>
                <li>Separação de rotas/serviços e refino de responsabilidades.</li>
                <li>Correções recorrentes em módulos críticos e consistência visual.</li>
              </ul>
            </div>
            <div className="deliverable-card">
              <h3>Deploy e observabilidade</h3>
              <ul>
                <li>Pipelines Jenkins com etapas de build, validações e cache.</li>
                <li>Integração com n8n para relatórios detalhados e centralização de execução.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="container narrow reveal">
          <span className="section-num">// 02</span>
          <h2>Exemplos da plataforma</h2>
          <p>Alguns recortes reais da interface com mapa interativo e indicadores.</p>
          <div className="example-grid">
            {examples.map((item) => (
              <article className="example-card" key={item.id}>
                <img className="example-image" src={item.image} alt={item.alt} loading="lazy" />
                <div className="example-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="container narrow reveal">
          <span className="section-num">// 03</span>
          <h2>Tecnologias e práticas</h2>
          <div className="stack-grid">
            <span className="stack-pill">Laravel (Services/Policies)</span>
            <span className="stack-pill">Blade + Bootstrap</span>
            <span className="stack-pill">JavaScript (Leaflet/Clusters)</span>
            <span className="stack-pill">Mapa interativo</span>
            <span className="stack-pill">UX/UI</span>
            <span className="stack-pill">Paginação e performance</span>
            <span className="stack-pill">CI/CD Jenkins</span>
            <span className="stack-pill">n8n (relatórios)</span>
            <span className="stack-pill">Cache e otimização</span>
            <span className="stack-pill">Observabilidade</span>
          </div>
          <div className="highlight-grid" style={{ marginTop: "32px" }}>
            <div className="highlight">
              <i className="fa-solid fa-rocket"></i>
              <div>
                <h4>Entrega contínua</h4>
                <p>Pequenas melhorias liberadas com previsibilidade e cache atualizado.</p>
              </div>
            </div>
            <div className="highlight">
              <i className="fa-solid fa-person-shelter"></i>
              <div>
                <h4>Respeito às permissões</h4>
                <p>Policies padronizadas garantem que cada perfil veja apenas o que pode acionar.</p>
              </div>
            </div>
            <div className="highlight">
              <i className="fa-solid fa-hand-holding-hand"></i>
              <div>
                <h4>Guias e tutoriais</h4>
                <p>Modal/tutorial no mapa e microexplicações em campos e formulários.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
