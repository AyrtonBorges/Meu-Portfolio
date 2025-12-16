(function () {
  const links = [
    { id: "home", label: "Home", icon: "fa-house", hash: "#home" },
    { id: "about", label: "Sobre", icon: "fa-user", hash: "#about" },
    { id: "skills", label: "Habilidades", icon: "fa-bolt", hash: "#skills" },
    { id: "projects", label: "Projetos", icon: "fa-diagram-project", hash: "#projects" },
    { id: "contact", label: "Contato", icon: "fa-message", hash: "#contact" },
  ];

  const ensureSlash = (value) => (value.endsWith("/") ? value : `${value}/`);

  function resolveRootPath() {
    const fromDataset = document.body?.dataset?.root;
    if (fromDataset) {
      return ensureSlash(fromDataset);
    }

    const segments = window.location.pathname.split("/").filter(Boolean);
    const repoIndex = segments.indexOf("Meu-Portfolio");
    if (repoIndex === -1) {
      return "./";
    }

    const afterRoot = segments.slice(repoIndex + 1);
    const last = afterRoot[afterRoot.length - 1];
    if (last && last.includes(".")) {
      afterRoot.pop();
    }

    const depth = afterRoot.length;
    return depth === 0 ? "./" : "../".repeat(depth);
  }

  function buildNavbar(rootPath, activeId) {
    const homeHref = `${rootPath}#home`;
    const navItems = links
      .map(
        (link) => `
        <li>
          <a href="${rootPath}${link.hash}" data-nav-id="${link.id}" class="${
            activeId === link.id ? "is-active" : ""
          }">
            <i class="fa-solid ${link.icon}" aria-hidden="true"></i>
            <span>${link.label}</span>
          </a>
        </li>
      `
      )
      .join("");

    return `
      <div class="container nav-shell">
        <a class="logo" href="${homeHref}" aria-label="Voltar para a seção inicial">
          <i class="fa-solid fa-terminal" aria-hidden="true"></i>
          <span>Ayrton Borges</span>
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Alternar menu" data-menu-toggle>
          <span></span>
        </button>

        <nav data-nav>
          <ul>
            ${navItems}
          </ul>
        </nav>

        <div class="nav-cta">
          <a class="pill" href="${rootPath}#projects">
            <i class="fa-solid fa-rocket" aria-hidden="true"></i>
            <span>Ver projetos</span>
          </a>
        </div>
      </div>
    `;
  }

  function buildFooter(rootPath) {
    const year = new Date().getFullYear();
    return `
      <div class="container footer-shell">
        <div class="footer-top">
          <div>
            <strong>Pronto para colaborar?</strong>
            <div class="muted">Projetos, bots, IoT e produtos digitais.</div>
          </div>
          <div class="footer-links">
            <a href="mailto:ayrton.cborges@outlook.com">
              <i class="fa-regular fa-envelope" aria-hidden="true"></i>
              Email
            </a>
            <a href="https://github.com/ayrtonborges" target="_blank" rel="noreferrer">
              <i class="fab fa-github" aria-hidden="true"></i>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ayrton-borges-620aa1168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
              LinkedIn
            </a>
            <a href="${rootPath}#contact">
              <i class="fa-solid fa-message" aria-hidden="true"></i>
              Contato
            </a>
          </div>
        </div>
        <p class="footnote">&copy; ${year} Ayrton Borges. Portfólio em constante evolução.</p>
      </div>
    `;
  }

  function toggleNav(open) {
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-menu-toggle]");
    if (!nav || !toggle) return;

    const shouldOpen = typeof open === "boolean" ? open : !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", shouldOpen);
    toggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  }

  function wireNavToggle() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => toggleNav());
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => toggleNav(false))
    );
  }

  function setActiveNav(activeId) {
    document
      .querySelectorAll("[data-nav-id]")
      .forEach((link) => link.classList.toggle("is-active", link.dataset.navId === activeId));
  }

  function applyActiveState(activeId) {
    if (!activeId) return;
    setActiveNav(activeId);
  }

  function smoothScrollTo(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const header = document.querySelector(".site-header");
    const offset = header ? header.offsetHeight + 12 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function wireSmoothScroll() {
    document.querySelectorAll("[data-nav-id]").forEach((link) => {
      link.addEventListener("click", (event) => {
        const url = new URL(link.href, window.location.href);
        const samePage = url.pathname === window.location.pathname;
        if (samePage && url.hash) {
          event.preventDefault();
          smoothScrollTo(url.hash);
          setActiveNav(link.dataset.navId);
        }
      });
    });
  }

  function wireScrollSpy() {
    const sections = Array.from(document.querySelectorAll("section[id]")).filter(Boolean);
    if (!sections.length) return;

    let ticking = false;
    const header = document.querySelector(".site-header");
    const headerOffset = header ? header.offsetHeight : 0;

    const updateActive = () => {
      const viewportMark = window.scrollY + headerOffset + window.innerHeight * 0.35;
      let currentId = sections[0].id;

      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (viewportMark >= top && viewportMark < bottom) {
          currentId = section.id;
          break;
        }
      }

      setActiveNav(currentId);
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    });

    updateActive();
  }

  function updateFavicon(rootPath) {
    const icon = document.querySelector('link[rel="icon"]');
    if (icon) {
      icon.href = `${rootPath}src/icon.png`;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const activeNav = document.body?.dataset?.activeNav || null;
    const rootPath = resolveRootPath();

    const headerTarget = document.querySelector("[data-component='navbar']") || document.querySelector("header");
    if (headerTarget) {
      headerTarget.innerHTML = buildNavbar(rootPath, activeNav);
    }

    const footerTarget = document.querySelector("[data-component='footer']") || document.querySelector("footer");
    if (footerTarget) {
      footerTarget.innerHTML = buildFooter(rootPath);
    }

    applyActiveState(activeNav);
    wireNavToggle();
    wireSmoothScroll();
    wireScrollSpy();
    updateFavicon(rootPath);
  });
})();
