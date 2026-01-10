import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Link, normalizeRoutePath, useLocation } from "./router";
import { scrollToHash } from "./utils/scroll";
import { Aleatorios } from "./pages/Aleatorios";
import { God } from "./pages/God";
import { Home } from "./pages/Home";
import { Pqfl } from "./pages/Pqfl";
import { Vitrine } from "./pages/Vitrine";

const NotFound = () => (
  <main className="container" style={{ padding: "80px 0" }}>
    <h1>Página não encontrada</h1>
    <p>Opa! Esse endereço não existe mais.</p>
    <Link className="pill" to="/">
      Voltar para a Home
    </Link>
  </main>
);

export const App = () => {
  const location = useLocation();
  const pathname = normalizeRoutePath(location.pathname);

  const isHome = pathname === "/";
  const isGod = pathname === "/paginas/aleatorios/projetos/God";

  const activeNav = useScrollSpy({
    enabled: isHome,
    defaultId: isHome ? "home" : "projects",
  });

  React.useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => scrollToHash(location.hash));
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  let content: React.ReactNode = <NotFound />;
  if (pathname === "/") content = <Home />;
  if (pathname === "/paginas/vitrine") content = <Vitrine />;
  if (pathname === "/paginas/pqfl") content = <Pqfl />;
  if (pathname === "/paginas/aleatorios") content = <Aleatorios />;
  if (pathname === "/paginas/aleatorios/projetos/God") content = <God />;

  return (
    <>
      {!isGod && <Navbar activeId={activeNav} />}
      {content}
      {!isGod && <Footer />}
    </>
  );
};
