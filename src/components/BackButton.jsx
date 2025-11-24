// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ isDark, context = "inicio" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (context === "inicio") {
      // Tela de início → voltar para login
      navigate("/");
    } else {
      // Dermatologistas / Mercado → voltar para início
      navigate("/inicio");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`animate-fadeSlide flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium border transition
        ${
          isDark
            ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
        }`}
    >
      <span className="text-sm">←</span>
      Voltar
    </button>
  );
}
