import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import { HashRouter } from "react-router";
import { BudgetProvider } from "./contexts/BudgetContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <BudgetProvider>
        <App />
      </BudgetProvider>
    </HashRouter>
  </StrictMode>
);
