import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020617] text-slate-200 py-16 border-t border-slate-800">
      {/* CONTAINER CENTRAL */}
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* COLUNA 1 — LOGO, TEXTO E REDES */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src="/iconelogo.png" className="h-12" alt="FaceCare" />
            <span className="text-xl font-semibold text-white tracking-wide">
              FaceCare
            </span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Seu cuidado com a pele elevado ao próximo nível, biometria facial,
            alertas inteligentes e uma rotina guiada com tecnologia.
          </p>

          <div className="flex space-x-3 pt-2">
            <button className="px-3 py-1.5 text-xs rounded-full bg-slate-800 hover:bg-slate-700 transition">
              Instagram
            </button>
            <button className="px-3 py-1.5 text-xs rounded-full bg-slate-800 hover:bg-slate-700 transition">
              Twitter
            </button>
            <button className="px-3 py-1.5 text-xs rounded-full bg-slate-800 hover:bg-slate-700 transition">
              LinkedIn
            </button>
          </div>
        </div>

        {/* COLUNA 2 — NAVEGAÇÃO */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-white transition">Termos de uso</li>
            <li className="hover:text-white transition">
              Política de privacidade
            </li>
            <li className="hover:text-white transition">Licença</li>
            <li className="hover:text-white transition">Sobre nós</li>
          </ul>
        </div>

        {/* COLUNA 3 — NEWSLETTER */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
            Newsletter
          </h4>

          <p className="text-sm text-slate-400 leading-relaxed mb-4 pr-4">
            Receba dicas de skincare, alertas solares e novidades exclusivas da
            FaceCare.
          </p>

          <div className="flex w-full">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 rounded-l-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none text-white placeholder-slate-500 focus:border-[#5ba4d3]"
            />
            <button className="rounded-r-xl bg-[#5ba4d3] text-white px-5 text-sm hover:bg-[#4a8ab2] transition">
              Assinar
            </button>
          </div>
        </div>

        {/* COLUNA 4 — DOWNLOAD DO APP */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
            Baixe o aplicativo
          </h4>

          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            Tenha sua rotina de skincare completa na palma da mão.
          </p>

          <div className="flex flex-col gap-4 mt-3">
            <a href="#">
              <img
                src="/appstore.png"
                className="w-40 md:w-44 hover:opacity-90 transition"
                alt="App Store"
              />
            </a>
            <a href="#">
              <img
                src="/googleplay.png"
                className="w-40 md:w-44 hover:opacity-90 transition"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </div>

      {/* LINHA FINAL */}
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 mt-14 flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/80 pt-6 gap-4">
        <p className="text-xs text-slate-500">
          © 2025 FaceCare — Todos os direitos reservados.
        </p>

        <p className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Conexão segura & criptografia ativa.
        </p>
      </div>
    </footer>
  );
}
