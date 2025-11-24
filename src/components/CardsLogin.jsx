import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  // estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // validação simples: todos preenchidos
  const formValido =
    nome.trim() !== "" && email.trim() !== "" && senha.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValido) return;

    // aqui depois você pode colocar lógica de login real
    navigate("/inicio");
  };

  return (
    <main className="min-h-screen flex bg-[#020617] text-slate-100">
      {/* Lado esquerdo – Branding / Hero */}
      <section className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#111827] to-[#4c1d95]">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 rounded-full bg-[#8dd3f0]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-[#fec5c2]/25 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center px-16 2xl:px-24 space-y-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#8dd3f0] via-[#5ba4d3] to-[#f973c2] flex items-center justify-center text-2xl font-bold text-white shadow-2xl shadow-[#0f172a]/60">
              F
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">FaceCare</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Avaliação facial inteligente
              </p>
            </div>
          </div>

          {/* Título */}
          <div className="space-y-5 max-w-xl">
            <h1 className="text-4xl 2xl:text-5xl font-semibold leading-tight">
              Avaliação facial que{" "}
              <span className="bg-gradient-to-r from-[#8dd3f0] via-[#5ba4d3] to-[#fec5c2] bg-clip-text text-transparent">
                enxerga o essencial
              </span>
              .
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              Use biometria facial, inteligência artificial e acompanhamento
              profissional para construir uma rotina de skincare personalizada,
              sem complicação.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex -space-x-2">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80"
                  alt="Usuário"
                  className="h-8 w-8 rounded-full border border-[#020617]"
                />
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80"
                  alt="Usuário"
                  className="h-8 w-8 rounded-full border border-[#020617]"
                />
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80"
                  alt="Usuário"
                  className="h-8 w-8 rounded-full border border-[#020617]"
                />
              </div>
              <p>
                Mais de{" "}
                <span className="font-semibold text-slate-50">
                  5.000 pessoas
                </span>{" "}
                já cuidando da pele com a FaceCare.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 max-w-md text-[11px]">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-3 py-3">
              <p className="text-xs font-semibold text-slate-100">
                IA em tempo real
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Análise instantânea de textura, manchas e oleosidade.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-3 py-3">
              <p className="text-xs font-semibold text-slate-100">
                Rotina personalizada
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Sugestões adaptadas ao seu tipo de pele e estilo de vida.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-3 py-3">
              <p className="text-xs font-semibold text-slate-100">
                Acompanhamento
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Histórico de avaliações e suporte com especialistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lado direito – Card de Login */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="w-full max-w-md px-6 py-10 sm:px-10">
          {/* Versão mobile do logo */}
          <div className="mb-8 flex items-center justify-center gap-2 lg:hidden">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#8dd3f0] via-[#5ba4d3] to-[#f973c2] flex items-center justify-center text-xl font-bold text-white">
              F
            </div>
            <span className="text-lg font-semibold text-slate-900">
              FaceCare
            </span>
          </div>

          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#5ba4d3]">
              BEM-VINDO(A)
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Entre na sua conta
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Acompanhe suas avaliações faciais, rotina e recomendações em um só
              lugar.
            </p>
          </div>

          {/* Social login */}
          <div className="space-y-3 mb-6">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:border-[#5b8dff] hover:text-[#374151] hover:shadow-md transition">
              <img
                className="h-4 w-4"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              Entrar com Google
            </button>
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              <span>ou continue com e-mail</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </div>

          {/* Formulário */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-600"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Como podemos te chamar?"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#5ba4d3] focus:outline-none focus:ring-2 focus:ring-[#5ba4d3]/30"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-600"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#5ba4d3] focus:outline-none focus:ring-2 focus:ring-[#5ba4d3]/30"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <label
                  htmlFor="password"
                  className="font-medium text-slate-600"
                >
                  Senha
                </label>
                <button
                  type="button"
                  className="text-[11px] font-medium text-[#5b8dff] hover:text-[#3b82f6]"
                >
                  Esqueci minha senha
                </button>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[#5ba4d3] focus:outline-none focus:ring-2 focus:ring-[#5ba4d3]/30"
              />
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-slate-300 text-[#5ba4d3] focus:ring-[#5ba4d3]"
                />
                <span>Lembrar de mim neste dispositivo</span>
              </label>
              <span className="text-[11px] text-slate-400">
                Acesso de teste por 30 dias
              </span>
            </div>

            <button
              type="submit"
              disabled={!formValido}
              className={`mt-2 w-full rounded-xl px-4 py-2.5 text-sm font-medium shadow-lg transition
                ${
                  formValido
                    ? "bg-[#5b5bff] text-white shadow-[#5b5bff]/40 hover:bg-[#4f46e5]"
                    : "bg-slate-300 text-slate-500 cursor-not-allowed opacity-70 shadow-none"
                }
              `}
            >
              Entrar
            </button>
          </form>

          {/* Rodapé */}
          <div className="mt-5 text-center text-[11px] text-slate-500 space-y-1">
            <p>
              Não tem uma conta?{" "}
              <button
                type="button"
                className="font-semibold text-[#5b5bff] hover:text-[#4f46e5]"
              >
                Criar conta gratuita
              </button>
            </p>
            <p className="text-[10px] text-slate-400">
              Ao continuar, você concorda com nossos{" "}
              <button
                type="button"
                className="underline underline-offset-2 hover:text-slate-600"
              >
                Termos de Uso
              </button>{" "}
              e{" "}
              <button
                type="button"
                className="underline underline-offset-2 hover:text-slate-600"
              >
                Política de Privacidade
              </button>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
