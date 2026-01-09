import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./shared.css";
import "./styles.css";
import "./paginas/vitrine/styles.css";
import "./paginas/pqfl/styles.css";
import "./paginas/aleatorios/styles.css";
import "./paginas/aleatorios/projetos/God/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
