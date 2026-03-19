import React from "react";
import { Link } from "../router";

type NavLink = {
  id: string;
  label: string;
  hash: string;
};

const links: NavLink[] = [
  { id: "home",     label: "Home",     hash: "#home" },
  { id: "about",    label: "Sobre",    hash: "#about" },
  { id: "skills",   label: "Skills",   hash: "#skills" },
  { id: "projects", label: "Projetos", hash: "#projects" },
  { id: "contact",  label: "Contato",  hash: "#contact" },
];

type NavbarProps = {
  activeId?: string | null;
};

export const Navbar = ({ activeId }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-inner">
          <Link className="logo" to="/#home" aria-label="Voltar para o início" onClick={closeMenu}>
            <span className="logo-mark" aria-hidden="true">
              <i className="fa-solid fa-terminal"></i>
            </span>
            Ayrton Borges
          </Link>

          <nav className={isOpen ? "is-open" : ""} aria-label="Navegação principal">
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/${link.hash}`}
                    data-nav-id={link.id}
                    className={activeId === link.id ? "is-active" : ""}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <Link to="/#contact" onClick={closeMenu}>
              Fale comigo
            </Link>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Alternar menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
