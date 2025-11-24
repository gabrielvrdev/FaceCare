import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./assets/pages/LoginPage";
import InicioPage from "./assets/pages/InicioPage";
import DermatPage from "./assets/pages/DermatPage";
import MercadPage from "./assets/pages/MercadPage";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/inicio" element={<InicioPage />} />
        <Route path="/dermatologistas" element={<DermatPage />} />
        <Route path="/mercadorias" element={<MercadPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
