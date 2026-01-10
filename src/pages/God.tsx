import React from "react";
import { usePageClass } from "../hooks/usePageClass";
import { Link } from "../router";
import logo from "../assets/god/logo.png";

type TypewriterTextProps = {
  text: string;
  className?: string;
};

const TypewriterText = ({ text, className }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    let timeout: number | null = null;

    const addNext = () => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index += 1;
        timeout = window.setTimeout(addNext, 100);
      }
    };

    setDisplayText("");
    addNext();

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

export const God = () => {
  usePageClass("page-god");

  React.useEffect(() => {
    document.title = "Deus te abençoe!";
  }, []);

  React.useEffect(() => {
    const icon = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (!icon) return;
    const previous = icon.href;
    icon.href = logo;
    return () => {
      icon.href = previous;
    };
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <TypewriterText className="dynamic-text" text="Meu Portfólio" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="ui-btn">
                <TypewriterText className="dynamic-text" text="Home" />
              </Link>
            </li>
            <li>
              <Link to="/paginas/aleatorios" className="ui-btn">
                <TypewriterText className="dynamic-text" text="Voltar" />
              </Link>
            </li>
            <li>
              <Link to="/#about" className="ui-btn">
                <TypewriterText className="dynamic-text" text="Sobre" />
              </Link>
            </li>
            <li>
              <Link to="/#skills" className="ui-btn">
                <TypewriterText className="dynamic-text" text="Habilidades" />
              </Link>
            </li>
            <li>
              <Link to="/#projects" className="ui-btn">
                <TypewriterText className="dynamic-text" text="Projetos" />
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="ui-btn">
                <TypewriterText className="dynamic-text" text="Contato" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="meio">
          <section id="main-title">
            <div className="container">
              <h1>Deus ƒoz</h1>
              <p>
                <TypewriterText
                  className="dynamic-text"
                  text="Aqui está uma seção sobre Deus, fiz isso para caso você queira ficar mais próximo a Ele."
                />
              </p>
            </div>
          </section>
        </section>
      </main>
      <footer>
        <div className="social-links">
          <a href="https://github.com/ayrtonborges" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ayrton-borges-620aa1168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
