// src/components/CardsMercad.jsx
import React from "react";
import BackButton from "./BackButton";

export default function CardsMercad({ isDark, setIsDark }) {
  const containerBg = isDark ? "bg-[#020617]" : "bg-[#f9fafb]";
  const cardBg = isDark
    ? "bg-[#020617] border-slate-700"
    : "bg-white border-slate-200";
  const textSoft = isDark ? "text-slate-300" : "text-slate-500";

  return (
    <section
      className={`mx-auto max-w-[1180px] px-6 transition-colors duration-300 ${containerBg}`}
    >
      {/* Cabeçalho + toggle de tema */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5ba4d3]">
            Rede parceira
          </p>
          <h1 className="mt-1 text-2xl font-semibold">Mercado & Farmácias</h1>
          <p className={`mt-1 text-sm ${textSoft} max-w-xl`}>
            Encontre farmácias e marketplaces confiáveis para comprar os
            produtos recomendados pela FaceCare, com opções de entrega rápida e
            retirada em loja.
          </p>
        </div>

        {/* Toggle de tema (mesmo conceito das outras telas) */}
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
      <div className={`rounded-2xl border ${cardBg} shadow-sm mb-8`}>
        <div className="p-4 border-b border-slate-700/20 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <label className="sr-only">Buscar produtos ou farmácias</label>
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
                placeholder="Ex: sabonete facial, sérum de vitamina C, Farmácia do Povo..."
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] mt-2 lg:mt-0">
            <button className="px-3 py-1.5 rounded-full border border-slate-500/30 text-xs text-slate-300 bg-slate-800/40 hover:bg-slate-700/60 transition">
              🚚 Entrega hoje
            </button>
            <button className="px-3 py-1.5 rounded-full border border-slate-500/30 text-xs text-slate-300 bg-slate-800/40 hover:bg-slate-700/60 transition">
              🧴 Dermocosméticos
            </button>
            <button className="px-3 py-1.5 rounded-full border border-slate-500/30 text-xs text-slate-300 bg-slate-800/40 hover:bg-slate-700/60 transition">
              💰 Menor preço
            </button>
          </div>
        </div>
      </div>

      {/* GRID DE CARDS (6) */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* CARD 1 */}
        <article className={`rounded-2xl border ${cardBg} p-5 shadow-sm`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold">Farmácia Bem Cuidar</h3>
              <p className={`text-[11px] ${textSoft}`}>Rede de farmácias</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Av. Central, 450 • 📍 1,2 km
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-400">
                ⭐ 4.8 <span className={textSoft}>(210)</span>
              </p>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-400">
                Entrega hoje
              </span>
            </div>
          </div>

          {/* Produto destaque */}
          <div className="mt-4 flex gap-3">
            <img
              src="1.png"
              alt="Gel de limpeza facial"
              className="h-16 w-16 rounded-xl object-cover border border-slate-700/20 bg-slate-900/40"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold">
                Gel de Limpeza Facial Suave
              </p>
              <p className={`text-[11px] ${textSoft}`}>
                Para peles oleosas e acneicas • Oil-free • 120 ml
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-400">R$ 49,90</span>
                <span className={textSoft}>até 3x sem juros</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Indicado para rotina da noite
            </span>
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Compatível com recomendação FaceCare
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver disponibilidade
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Abrir no mapa
            </button>
          </div>
        </article>

        {/* CARD 2 */}
        <article className={`rounded-2xl border ${cardBg} p-5 shadow-sm`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold">DermoFarma</h3>
              <p className={`text-[11px] ${textSoft}`}>
                Farmácia especializada
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Rua das Flores, 98 • 📍 2,0 km
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-400">
                ⭐ 4.9 <span className={textSoft}>(154)</span>
              </p>
              <span className="inline-flex rounded-full bg-indigo-500/10 px-2 py-1 text-indigo-300">
                Dermocosméticos
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <img
              src="02.png"
              alt="Sérum Vitamina C"
              className="h-16 w-16 rounded-xl object-cover border border-slate-700/20 bg-slate-900/40"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold">Sérum Vitamina C 10%</p>
              <p className={`text-[11px] ${textSoft}`}>
                Antioxidante • Ilumina e uniformiza o tom da pele • 30 ml
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-400">
                  R$ 129,90
                </span>
                <span className={textSoft}>cashback 5%</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Uso diurno (com protetor)
            </span>
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Linha recomendada para manchas
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Comprar agora
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver mais produtos
            </button>
          </div>
        </article>

        {/* CARD 3 */}
        <article className={`rounded-2xl border ${cardBg} p-5 shadow-sm`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold">Farma Popular</h3>
              <p className={`text-[11px] ${textSoft}`}>Farmácia de bairro</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Av. Beira Mar, 312 • 📍 800 m
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-400">
                ⭐ 4.5 <span className={textSoft}>(89)</span>
              </p>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-400">
                Retira em 1h
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <img
              src="/3.png"
              alt="Hidratante facial"
              className="h-16 w-16 rounded-xl object-cover border border-slate-700/20 bg-slate-900/40"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold">Hidratante Facial Leve</p>
              <p className={`text-[11px] ${textSoft}`}>
                Para peles normais a secas • Com ácido hialurônico • 50 g
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-400">R$ 59,90</span>
                <span className={textSoft}>combo 2 por R$ 99,90</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Indicado para uso diário
            </span>
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Sem fragrância
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Reservar na loja
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver detalhes
            </button>
          </div>
        </article>

        {/* CARD 4 */}
        <article className={`rounded-2xl border ${cardBg} p-5 shadow-sm`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold">SkinCare Market</h3>
              <p className={`text-[11px] ${textSoft}`}>Marketplace parceiro</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Entrega em todo o Brasil
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-400">
                ⭐ 4.6 <span className={textSoft}>(320)</span>
              </p>
              <span className="inline-flex rounded-full bg-indigo-500/10 px-2 py-1 text-indigo-300">
                Frete grátis acima de R$ 199
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <img
              src="/4.png"
              alt="Kit de rotina básica"
              className="h-16 w-16 rounded-xl object-cover border border-slate-700/20 bg-slate-900/40"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold">Kit Rotina Essencial</p>
              <p className={`text-[11px] ${textSoft}`}>
                Gel de limpeza + hidratante + protetor solar FPS 50
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-400">
                  R$ 189,90
                </span>
                <span className={textSoft}>economia de 15% no combo</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Indicado para quem está começando
            </span>
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Aprovado por dermatologistas parceiros
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver oferta
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver avaliações
            </button>
          </div>
        </article>

        {/* CARD 5 */}
        <article className={`rounded-2xl border ${cardBg} p-5 shadow-sm`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold">Farmácia Vida Leve</h3>
              <p className={`text-[11px] ${textSoft}`}>24 horas</p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Av. Independência, 980 • 📍 3,5 km
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-400">
                ⭐ 4.3 <span className={textSoft}>(67)</span>
              </p>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-400">
                Entrega noturna
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <img
              src="/5.png"
              alt="Água micelar"
              className="h-16 w-16 rounded-xl object-cover border border-slate-700/20 bg-slate-900/40"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold">Água Micelar 5 em 1</p>
              <p className={`text-[11px] ${textSoft}`}>
                Limpa, demaquila e controla oleosidade • 200 ml
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-400">R$ 39,90</span>
                <span className={textSoft}>leve 3, pague 2</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Seguro para área dos olhos
            </span>
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Indicado para primeira etapa da rotina
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Adicionar à sacola
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver condições de frete
            </button>
          </div>
        </article>

        {/* CARD 6 */}
        <article className={`rounded-2xl border ${cardBg} p-5 shadow-sm`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold">ClinDermo Store</h3>
              <p className={`text-[11px] ${textSoft}`}>
                Loja da clínica parceira
              </p>
              <p className={`mt-1 text-[11px] ${textSoft}`}>
                Retirada na clínica • 📍 4,2 km
              </p>
            </div>

            <div className="text-right text-[11px] space-y-1">
              <p className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-400">
                ⭐ 4.9 <span className={textSoft}>(52)</span>
              </p>
              <span className="inline-flex rounded-full bg-indigo-500/10 px-2 py-1 text-indigo-300">
                Produtos prescritos
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <img
              src="/6.png"
              alt="Protetor solar FPS 50"
              className="h-16 w-16 rounded-xl object-cover border border-slate-700/20 bg-slate-900/40"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold">Protetor Solar FPS 50</p>
              <p className={`text-[11px] ${textSoft}`}>
                Toque seco • Não comedogênico • Resistente à água
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-400">R$ 79,90</span>
                <span className={textSoft}>
                  desconto com receita da FaceCare
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Passo essencial da rotina
            </span>
            <span className="rounded-full bg-slate-500/10 px-2 py-1 text-slate-300">
              Ideal para uso diário
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-[#5b5bff] px-4 py-2 text-white hover:bg-[#4f46e5] transition">
              Ver horários para retirada
            </button>
            <button
              className={`rounded-full px-4 py-2 border text-xs ${
                isDark
                  ? "border-slate-600 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              } transition`}
            >
              Ver orientações de uso
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
