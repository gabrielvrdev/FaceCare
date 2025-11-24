// src/pages/DermatPage.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import CardsDermat from "../../components/CardsDermat";

export default function DermatPage() {
  // mesmo esquema da InicioPage
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
        isDark ? "bg-[#020617] text-slate-100" : "bg-[#f9fafb] text-[#1f2933]"
      }`}
    >
      {/* Header recebe o tema pra mudar fundo/texto junto */}
      <Header isDark={isDark} activeTab="Rede Parceira" />

      {/* Conteúdo da página */}
      <main className="py-10">
        <CardsDermat isDark={isDark} setIsDark={setIsDark} />
      </main>
    </div>
  );
}
