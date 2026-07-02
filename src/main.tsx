// Global styles
import "./styles/global.css";
import "./utils/font";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { GlobalSEO } from "./components/layout/GlobalSEO";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <GlobalSEO />
      <App />
    </HelmetProvider>
  </StrictMode>
);
