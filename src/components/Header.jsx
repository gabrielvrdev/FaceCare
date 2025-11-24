import React from "react";

const NAV_ITEMS = ["Visão Geral", "Planos"];

function Header({ activeTab = "Visão Geral", isDark }) {
  // Cores dinâmicas
  const wrapperClasses = isDark
    ? "border-slate-800 bg-slate-900/90"
    : "border-slate-200 bg-white/95";

  const logoText = isDark ? "text-slate-100" : "text-slate-800";

  const searchInputClasses = isDark
    ? "border-slate-700 bg-slate-800 text-slate-100 placeholder-slate-400 focus:border-[#5ba4d3] focus:ring-[#5ba4d3]/30"
    : "border-slate-200 bg-slate-50/70 text-slate-700 focus:border-[#5ba4d3] focus:ring-[#5ba4d3]/30";

  const actionTextClasses = isDark
    ? "text-slate-300 hover:text-white"
    : "text-slate-500 hover:text-slate-800";

  const avatarClasses = isDark
    ? "border-slate-700 bg-slate-800 text-slate-100"
    : "border-slate-200 bg-slate-100 text-slate-600";

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${wrapperClasses}`}
    >
      <div className="mx-auto max-w-[1600px] px-10">
        {/* LINHA 1 ▸ Logo, Busca, Ações */}
        <div className="flex h-[90px] items-center justify-between gap-8">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/iconelogo.png" alt="FaceCare" className="h-10 w-auto" />
            <span
              className={`hidden text-lg font-semibold sm:inline ${logoText}`}
            >
              FaceCare
            </span>
          </div>

          {/* BARRA DE PESQUISA */}
          <div className="hidden flex-1 justify-center sm:flex">
            <div className="relative w-full max-w-2xl">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-400">
                🔍
              </span>

              <input
                type="text"
                placeholder="Pesquisar consultas, profissionais ou recomendações..."
                className={`w-full rounded-full border px-12 py-3 text-sm outline-none transition-all duration-300 ${searchInputClasses}`}
              />
            </div>
          </div>

          {/* AÇÕES */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden sm:inline-flex rounded-full border px-4 py-1.5 text-[12px] font-medium transition shadow-sm
                ${
                  isDark
                    ? "border-[#f1899f]/60 bg-[#f1899f]/15 text-[#fec5c2] hover:bg-[#f1899f]/25"
                    : "border-[#f1899f]/40 bg-[#f1899f]/10 text-[#f1899f] hover:bg-[#f1899f]/20"
                }
              `}
            >
              Versão Pro
            </button>

            <button
              className={`hidden sm:inline-flex text-sm ${actionTextClasses}`}
            >
              Atualizar
            </button>

            <button
              className={`hidden sm:inline-flex text-sm ${actionTextClasses}`}
            >
              Suporte
            </button>

            {/* AVATAR */}
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-sm font-semibold transition hover:scale-105 ${avatarClasses}`}
            >
              EU
            </button>
          </div>
        </div>

        {/* LINHA 2 ▸ Navegação */}
        <div className="flex h-[56px] items-end">
          <nav className="flex items-end gap-10 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = item === activeTab;

              return (
                <button
                  key={item}
                  className={`relative pb-3 transition-colors ${
                    isActive
                      ? isDark
                        ? "text-white"
                        : "text-slate-900"
                      : isDark
                      ? "text-slate-400 hover:text-slate-100"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {item}

                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#5ba4d3]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
