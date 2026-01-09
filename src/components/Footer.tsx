import { Link } from "../router";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-shell">
        <div className="footer-top">
          <div>
            <strong>Pronto para colaborar?</strong>
            <div className="muted">Projetos, bots, IoT e produtos digitais.</div>
          </div>
          <div className="footer-links">
            <a href="mailto:ayrton.cborges@outlook.com">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              Email
            </a>
            <a href="https://github.com/ayrtonborges" target="_blank" rel="noreferrer">
              <i className="fab fa-github" aria-hidden="true"></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayrton-borges-620aa1168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              LinkedIn
            </a>
            <Link to="/#contact">
              <i className="fa-solid fa-message" aria-hidden="true"></i>
              Contato
            </Link>
          </div>
        </div>
        <p className="footnote">&copy; {year} Ayrton Borges. Portfólio em constante evolução.</p>
      </div>
    </footer>
  );
};
