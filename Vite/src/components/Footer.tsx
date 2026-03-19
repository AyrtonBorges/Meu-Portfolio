import { Link } from "../router";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-shell">
        <div className="footer-cta">
          <p className="footer-cta-text">
            Pronto para<br />
            <span>colaborar?</span>
          </p>
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
              href="https://www.linkedin.com/in/ayrton-borges-620aa1168"
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

        <div className="footer-bottom">
          <p className="footnote">// &copy; {year} Ayrton Borges — portfólio em constante evolução.</p>
        </div>
      </div>
    </footer>
  );
};
