import React from "react";
import { Link } from "../router";

type NavLink = {
  id: string;
  label: string;
  icon: string;
  hash: string;
};

const links: NavLink[] = [
  { id: "home", label: "Home", icon: "fa-house", hash: "#home" },
  { id: "about", label: "Sobre", icon: "fa-user", hash: "#about" },
  { id: "skills", label: "Habilidades", icon: "fa-bolt", hash: "#skills" },
  { id: "projects", label: "Projetos", icon: "fa-diagram-project", hash: "#projects" },
  { id: "contact", label: "Contato", icon: "fa-message", hash: "#contact" },
];

type NavbarProps = {
  activeId?: string | null;
};

export const Navbar = ({ activeId }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="logo" to="/#home" aria-label="Voltar para a seção inicial" onClick={closeMenu}>
          <i className="fa-solid fa-terminal" aria-hidden="true"></i>
          <span>Ayrton Borges</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Alternar menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
        </button>

        <nav className={isOpen ? "is-open" : ""}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/${link.hash}`}
                  data-nav-id={link.id}
                  className={activeId === link.id ? "is-active" : ""}
                  onClick={closeMenu}
                >
                  <i className={`fa-solid ${link.icon}`} aria-hidden="true"></i>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <Link className="pill" to="/#projects" onClick={closeMenu}>
            <i className="fa-solid fa-rocket" aria-hidden="true"></i>
            <span>Ver projetos</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
