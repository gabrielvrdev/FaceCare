// src/pages/InicioPage.jsx

import React, { useState, useEffect } from "react";
import CardsInicio from "../../components/CardsInicio";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";

export default function InicioPage() {
  // Estado central do tema
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("facecare-theme");
    return saved === "dark";
  });

  useEffect(() => {
    localStorage.setItem("facecare-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className={`animate-fadeSlide min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#020617] text-slate-100" : "bg-[#f9fafb] text-[#2b2a2a]"
      }`}
    >
      {/* Header agora recebe o tema */}
      <Header isDark={isDark} activeTab="Visão Geral" />

      {/* CardsInicio controla o toggle e também usa o tema */}
      <CardsInicio isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}
