import { Link } from "../router";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-heading">
            Pronto para <span>colaborar?</span>
          </h2>
          <div className="footer-social">
            <a href="mailto:ayrtoncborges@gmail.com">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              Email
            </a>
            <a href="https://github.com/ayrtonborges" target="_blank" rel="noreferrer">
              <i className="fab fa-github" aria-hidden="true"></i>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ayrton-borges-620aa1168" target="_blank" rel="noreferrer">
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
          <p className="footer-copy">// &copy; {year} Ayrton Borges</p>
        </div>
      </div>
    </footer>
  );
};
