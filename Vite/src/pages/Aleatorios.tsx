import React from "react";
import { usePageClass } from "../hooks/usePageClass";
import { Link } from "../router";

export const Aleatorios = () => {
  usePageClass("page-aleatorios");

  React.useEffect(() => {
    document.title = "Projetos Diversos";
  }, []);

  return (
    <main>
      <section id="main-title">
        <div className="container">
          <h1>Projetos Diversos</h1>
          <p>Uma lista de projetos variados que compartilho aqui.</p>
        </div>
      </section>

      <section className="project-section surface">
        <div className="container narrow">
          <h2>Listas de Projetos</h2>
          <p>Em breve adicionarei mais experimentos e pequenos estudos que valem ser vistos.</p>
          <ul className="project-list">
            <li>
              <strong>Deus:</strong> Acesse <Link to="/paginas/aleatorios/projetos/God">aqui</Link>.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
