// src/components/CardsDermat.jsx
import React from "react";
import BackButton from "./BackButton";

export default function CardsDermat({ isDark, setIsDark }) {
  const containerBg = isDark ? "bg-[#020617]" : "bg-[#f9fafb]";
  const sectionBg = isDark ? "bg-[#020617]" : "bg-white";
  const cardBg = isDark
    ? "bg-[#020617] border-slate-700"
    : "bg-white border-slate-200";
  const textSoft = isDark ? "text-slate-300" : "text-slate-500";

  return (
    <section
      className={`mx-auto max-w-[1180px] px-6 transition-colors duration-300 ${containerBg}`}
    >
      {/* Cabeçalho da seção + toggle de tema */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5ba4d3]">
            Rede parceira
          </p>
          <h1 className="mt-1 text-2xl font-semibold">
            Dermatologistas locais
          </h1>
          <p className={`mt-1 text-sm ${textSoft} max-w-xl`}>
            Encontre especialistas próximos a você para complementar as
            recomendações da FaceCare com acompanhamento presencial.
          </p>
        </div>

        {/* Toggle de tema igual conceito da tela inicial */}
        {/* Ações (voltar + tema) */}
        <div className="flex justify-between mb-6 gap-5">
          {/* BOTÃO DE VOLTAR */}
          <BackButton isDark={isDark} context="subpage" />

          {/* BOTÃO DE TEMA */}
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition
      ${
        isDark
          ? "border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
      }`}
          >
            <div
              className={`h-4 w-7 rounded-full flex items-center px-[2px] transition
        ${isDark ? "bg-slate-700 justify-end" : "bg-slate-200 justify-start"}`}
            >
              <span className="h-3 w-3 rounded-full bg-white shadow" />
            </div>
            {isDark ? "Modo escuro" : "Modo claro"}
          </button>
        </div>
      </div>

      {/* Barra de busca + filtros */}
      <div
        className={`rounded-2xl border ${cardBg} shadow-sm transition-colors duration-300 mb-8`}
      >
        <div className="p-4 border-b border-slate-700/20 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <label className="sr-only">Buscar por nome ou especialidade</label>
            <div
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm border ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-100"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <span className="text-slate-400">🔎</span>
              <input
                className={`flex-1 bg-transparent outline-none text-xs sm:text-sm ${
                  isDark
                    ? "placeholder:text-slate-500"
                    : "placeholder:text-slate-400"
                }`}
                placeholder="Ex: acne, melasma, infantil..."
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] mt-2 lg:mt-0">
            {/* Avaliação */}
            <button
              className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition
      ${
        isDark
          ? "bg-slate-700/70 text-slate-200 hover:bg-slate-600/70"
          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
      }`}
            >
              ⭐ <span>Avaliação &gt; 4.5</span>
            </button>

            {/* Convênio */}
            <button
              className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition
      ${
        isDark
          ? "bg-slate-700/70 text-slate-200 hover:bg-slate-600/70"
          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
      }`}
            >
              🏥 <span>Atende convênio</span>
            </button>

            {/* Distância */}
            <button
              className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition
      ${
        isDark
          ? "bg-slate-700/70 text-slate-200 hover:bg-slate-600/70"
          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
      }`}
            >
              📍 <span>Até 5 km</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cards de dermatologistas */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* CARD 1 */}
        <article
          className={`rounded-2xl border ${cardBg} p-5 shadow-sm transition-colors duration-300`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Dra. Maria</h3>
              <p className={`text-[11px] ${textSoft}`}>
                Dermatologia Clínica e Estética
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Foco em <strong>acne, melasma, manchas</strong>
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Av. Beira Mar, 1234
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-[11px] text-amber-400">
                ⭐ 4.9 <span className={textSoft}>(128)</span>
              </p>
              <p className={textSoft}>📍 1,2 km</p>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-400">
                Atende convênio
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver horários disponíveis
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver perfil completo
            </button>
          </div>
        </article>

        {/* CARD 2 */}
        <article
          className={`rounded-2xl border ${cardBg} p-5 shadow-sm transition-colors duration-300`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Dr. Arthur</h3>
              <p className={`text-[11px] ${textSoft}`}>Dermatologia Geral</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Foco em <strong>psoríase, dermatite, queda de cabelo</strong>
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Rua das Flores, 230
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-[11px] text-amber-400">
                ⭐ 4.7 <span className={textSoft}>(96)</span>
              </p>
              <p className={textSoft}>📍 2,5 km</p>
              <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-[11px] text-slate-300">
                Particular
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver horários disponíveis
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver perfil completo
            </button>
          </div>
        </article>

        {/* CARD 3 */}
        <article
          className={`rounded-2xl border ${cardBg} p-5 shadow-sm transition-colors duration-300`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Dr. Rael</h3>
              <p className={`text-[11px] ${textSoft}`}>Dermatopediatria</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Foco em <strong>dermatite, alergias, limpeza de pele</strong>
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>Av. Barroso, 859</p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-[11px] text-amber-400">
                ⭐ 4.8 <span className={textSoft}>(73)</span>
              </p>
              <p className={textSoft}>📍 3,1 km</p>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-400">
                Atende convênio
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver horários disponíveis
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver perfil completo
            </button>
          </div>
        </article>

        {/* CARD 4 */}
        <article
          className={`rounded-2xl border ${cardBg} p-5 shadow-sm transition-colors duration-300`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Dra. Laís</h3>
              <p className={`text-[11px] ${textSoft}`}>Dermatopediatria</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Foco em <strong>pele idosa, acne, eczema</strong>
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Av. José Alves, 638
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-[11px] text-amber-400">
                ⭐ 4.8 <span className={textSoft}>(73)</span>
              </p>
              <p className={textSoft}>📍 3,3 km</p>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-400">
                Atende convênio
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver horários disponíveis
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver perfil completo
            </button>
          </div>
        </article>

        {/* CARD 5 */}
        <article
          className={`rounded-2xl border ${cardBg} p-5 shadow-sm transition-colors duration-300`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Dra. Luísa</h3>
              <p className={`text-[11px] ${textSoft}`}>Dermatopediatria</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Foco em <strong>pele rugosa, alergias, acne</strong>
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>Av. Central, 845</p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-[11px] text-amber-400">
                ⭐ 4.8 <span className={textSoft}>(73)</span>
              </p>
              <p className={textSoft}>📍 3,8 km</p>
              <span className="inline-flex rounded-full bg-slate-500/10 px-2 py-1 text-[11px] text-slate-300">
                Particular
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver horários disponíveis
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver perfil completo
            </button>
          </div>
        </article>

        {/* CARD 6 */}
        <article
          className={`rounded-2xl border ${cardBg} p-5 shadow-sm transition-colors duration-300`}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">Dra. Sophi</h3>
              <p className={`text-[11px] ${textSoft}`}>Dermatopediatria</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Foco em{" "}
                <strong>
                  pele infantil, alergias, eczema, manchas, psoríase
                </strong>
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Av. gv esperança, 0922
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-[11px] text-amber-400">
                ⭐ 4.8 <span className={textSoft}>(73)</span>
              </p>
              <p className={textSoft}>📍 4,1 km</p>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-400">
                Atende convênio
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver horários disponíveis
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver perfil completo
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
