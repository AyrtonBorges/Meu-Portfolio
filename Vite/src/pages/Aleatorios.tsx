import React from "react";
import { usePageClass } from "../hooks/usePageClass";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Aleatorios = () => {
  usePageClass("page-aleatorios");
  useScrollReveal();

  React.useEffect(() => {
    document.title = "Projetos Diversos — Ayrton Borges";
  }, []);

  return (
    <main>
      <section id="main-title">
        <div className="container">
          <span className="project-label">
            <span className="dot" aria-hidden="true"></span>
            // experimentos
          </span>
          <h1>Projetos Diversos</h1>
          <p>Uma lista de projetos variados que compartilho aqui.</p>
        </div>
      </section>

      <section className="project-section">
        <div className="container narrow reveal">
          <span className="section-num">// 01</span>
          <h2>Lista de Projetos</h2>
          <p>Em breve adicionarei mais experimentos e pequenos estudos que valem ser vistos.</p>
          <ul className="project-list">
            {/* Projetos futuros aqui */}
          </ul>
        </div>
      </section>
    </main>
  );
};
