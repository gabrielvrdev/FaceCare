import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";

function CardsInicio({ isDark, setIsDark }) {
  const navigate = useNavigate();
  const [isScanOpen, setIsScanOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const glassPanelClass = isDark
    ? "backdrop-blur-xl bg-white/5 border-white/15 shadow-lg"
    : "backdrop-blur-xl bg-white/70 border-white/60 shadow-lg";

  const mainBgClass = isDark
    ? "bg-[#020617]"
    : "bg-gradient-to-b from-[#f9fafb] to-[#f0f6fc]";

  const mainTextClass = isDark ? "text-slate-100" : "text-[#2b2a2a]";

  return (
    <main
      className={`${mainBgClass} px-4 sm:px-6 py-8 sm:py-10 transition-colors duration-500`}
    >
      {/* Painéis laterais (apenas em telas grandes) */}
      {/* Painel esquerdo — Dica do dia + Conteúdos + Rotina */}
      <div className="hidden xl:block fixed left-6 top-40 w-72 space-y-6 z-30">
        <div
          className={`${glassPanelClass} rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1`}
        >
          <h3
            className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
              isDark ? "text-slate-100" : "text-[#2b2a2a]"
            }`}
          >
            <span>✨</span>
            <span>Dica do dia</span>
          </h3>
          <p
            className={`text-[13px] leading-relaxed ${
              isDark ? "text-slate-200" : "text-[#4b4a4a]"
            }`}
          >
            Lave o rosto 2x por dia com um sabonete específico para seu tipo de
            pele. Evite água muito quente para não ressecar a barreira natural.
          </p>
        </div>

        <div
          className={`${glassPanelClass} rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1`}
        >
          <h3
            className={`text-sm font-semibold mb-3 ${
              isDark ? "text-slate-100" : "text-[#2b2a2a]"
            }`}
          >
            Conteúdos para você 📚
          </h3>

          <div
            className={`space-y-3 text-[13px] ${
              isDark ? "text-slate-100" : "text-[#2b2a2a]"
            }`}
          >
            <button className="block text-left hover:underline">
              ▸ Como montar uma rotina básica de skincare
            </button>
            <button className="block text-left hover:underline">
              ▸ Diferença entre ácido e hidratante
            </button>
            <button className="block text-left hover:underline">
              ▸ Quando procurar um dermatologista?
            </button>
          </div>

          <button className="mt-3 text-xs text-[#5ba4d3] hover:underline">
            Ver mais dicas
          </button>
        </div>

        {/* Criar rotina de skincare */}
        <div
          className={`${glassPanelClass} rounded-3xl p-5 bg-gradient-to-br from-[#fec5c2]/40 to-[#8dd3f0]/40 transition-transform duration-300 hover:-translate-y-1`}
        >
          <h3
            className={`text-sm font-semibold mb-2 flex items-center gap-2 ${
              isDark ? "text-slate-100" : "text-[#2b2a2a]"
            }`}
          >
            <span>🧴</span>
            <span>Criar rotina de skincare</span>
          </h3>
          <p
            className={`text-[13px] leading-relaxed mb-3 ${
              isDark ? "text-slate-200" : "text-[#4b4a4a]"
            }`}
          >
            Monte uma rotina personalizada de acordo com a sua pele e seus
            objetivos.
          </p>
          <button className="px-4 py-2 rounded-full bg-[#5ba4d3] text-white text-xs font-medium hover:bg-[#4a8ab2] transition">
            Começar agora →
          </button>
        </div>
      </div>

      {/* Painel direito — Seu dia com a FaceCare */}
      <div className="hidden xl:block fixed right-6 top-40 w-72 z-30">
        <div
          className={`${glassPanelClass} rounded-3xl p-5 space-y-4 transition-transform duration-300 hover:-translate-y-1`}
        >
          <h3
            className={`text-sm font-semibold mb-1 ${
              isDark ? "text-slate-100" : "text-[#2b2a2a]"
            }`}
          >
            Seu dia com a FaceCare
          </h3>

          <div
            className={`space-y-3 text-[13px] ${
              isDark ? "text-slate-100" : "text-[#2b2a2a]"
            }`}
          >
            <div>
              <p className="text-xs text-[#6b7280]">Próxima consulta</p>
              <p className="font-medium">Hoje às 16:30 — Dra. Mariana Costa</p>
            </div>

            <div>
              <p className="text-xs text-[#6b7280]">Última biometria facial</p>
              <p className="font-medium">Há 12 dias — Pele mista</p>
            </div>

            <div>
              <p className="text-xs text-[#6b7280]">Plano atual</p>
              <p className="font-medium">FaceCare Premium</p>
              <button className="text-xs text-[#5ba4d3] hover:underline">
                Ver detalhes
              </button>
            </div>

            <div>
              <p className="text-xs text-[#6b7280]">Lembretes</p>
              <p className="font-medium">Reaplique protetor solar em 2h ☀️</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo central */}
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8">
        {/* Toggle de tema */}
        <div className="flex justify-between mb-4">
          {/* Botão de voltar */}
          <button
            onClick={() => (window.location.href = "/")} // ajuste a rota conforme necessário
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition 
      ${
        isDark
          ? "border-slate-600 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
          : "border-[#e5e7eb] bg-white/80 text-[#2b2a2a] hover:bg-white"
      }`}
          >
            <span className="text-lg">←</span>
            <span>Voltar</span>
          </button>

          {/* Toggle de tema */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition 
      ${
        isDark
          ? "border-slate-600 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
          : "border-[#e5e7eb] bg-white/80 text-[#2b2a2a] hover:bg-white"
      }`}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] transition 
        ${isDark ? "bg-yellow-400/90" : "bg-slate-800 text-white"}`}
            >
              {isDark ? "☀️" : "🌙"}
            </span>
            <span>{isDark ? "Tema claro" : "Tema escuro"}</span>
          </button>
        </div>

        {/* Cabeçalho da seção */}
        <header className="text-center mb-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#5ba4d3]">
            FACECARE • CUIDADOS COM A PELE
          </p>
          <h1
            className={`mt-3 text-2xl font-semibold ${mainTextClass} transition-colors`}
          >
            Como podemos te ajudar hoje?
          </h1>
          <p
            className={`mt-1 text-sm ${
              isDark ? "text-slate-300" : "text-[#6b7280]"
            }`}
          >
            Escolha a melhor forma de cuidar da sua pele agora mesmo.
          </p>
        </header>

        {/* Ações principais */}
        <section>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3 xl:max-w-4xl xl:mx-auto">
            {/* Biometria facial */}
            <button
              onClick={() => setIsScanOpen(true)}
              className="group w-full rounded-3xl bg-gradient-to-br from-[#8dd3f0] to-[#5ba4d3] p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5ba4d3]/60"
            >
              <div className="flex h-full flex-col rounded-3xl bg-white/95 p-5 text-left">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0f4fb] text-xl">
                    😊
                  </div>
                  <h2 className="text-base font-semibold text-[#2b2a2a]">
                    Biometria facial
                    <span className="ml-2 rounded-full bg-[#fec5c2]/60 px-2 py-0.5 text-[10px] font-medium text-[#2b2a2a]">
                      Recomendado
                    </span>
                  </h2>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-[#4b4a4a]">
                  Use a câmera para analisar, em tempo real, pontos importantes
                  da sua pele com ajuda de IA.
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#5ba4d3]">
                  Iniciar análise
                  <span className="ml-1 text-xs">📷</span>
                </span>
              </div>
            </button>

            {/* Dermatologistas Locais */}
            <button
              onClick={() => navigate("/dermatologistas")}
              className="group w-full rounded-3xl bg-gradient-to-br from-[#fec5c2] to-[#f1899f] p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#f1899f]/50"
            >
              <div className="flex h-full flex-col rounded-3xl bg-white/95 p-5 text-left">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ffe6e4] text-xl">
                    🩺
                  </div>
                  <h2 className="text-base font-semibold text-[#2b2a2a]">
                    Dermatologistas locais
                  </h2>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-[#4b4a4a]">
                  Encontre profissionais próximos a você para uma consulta
                  presencial.
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#f1899f]">
                  Ver dermatologistas
                  <span className="ml-1 text-xs">↗</span>
                </span>
              </div>
            </button>

            {/* Mercado / Farmácias */}
            <button
              onClick={() => navigate("/mercadorias")}
              className="group w-full rounded-3xl border border-[#8dd3f0] bg-white/95 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5ba4d3] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5ba4d3]/40"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0f4fb] text-xl">
                  🧴
                </div>
                <h2 className="text-base font-semibold text-[#2b2a2a]">
                  Mercado / farmácias
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#4b4a4a]">
                Veja produtos de skincare indicados para o seu perfil de pele.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-[#5ba4d3]">
                Ver produtos recomendados
                <span className="ml-1 text-xs">↗</span>
              </span>
            </button>
          </div>
        </section>

        {/* Histórico de consultas */}
        <section className="mt-4">
          <div
            className={`rounded-3xl p-4 sm:p-5 shadow-sm transition-colors border ${
              isDark
                ? "bg-slate-900 border-slate-700 text-slate-100"
                : "bg-white/95 border-[#e5e7eb] text-[#2b2a2a]"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div>
                <h2
                  className={`text-sm font-semibold ${
                    isDark ? "text-slate-100" : "text-[#2b2a2a]"
                  }`}
                >
                  Histórico de consultas
                </h2>
                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-slate-400" : "text-[#6b7280]"
                  }`}
                >
                  Acompanhe seus últimos atendimentos e recomendações.
                </p>
              </div>
              <button className="text-xs font-medium text-[#5ba4d3] hover:underline">
                Ver todo o histórico
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-xs">
                <thead>
                  <tr
                    className={`border-b text-[11px] uppercase tracking-wide ${
                      isDark
                        ? "border-slate-700 text-slate-400"
                        : "border-[#f3f4f6] text-[#9ca3af]"
                    }`}
                  >
                    <th className="py-2 pr-4">Data</th>
                    <th className="px-4 py-2">Profissional</th>
                    <th className="px-4 py-2">Motivo</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2 text-right">Detalhes</th>
                  </tr>
                </thead>
                <tbody
                  className={`text-xs ${
                    isDark ? "text-slate-100" : "text-[#4b4a4a]"
                  }`}
                >
                  <tr
                    className={`border-b transition-colors ${
                      isDark
                        ? "border-slate-800 hover:bg-slate-800/60"
                        : "border-[#f3f4f6] hover:bg-slate-50/70"
                    }`}
                  >
                    <td className="whitespace-nowrap py-3 pr-4">
                      10 nov 2025 · 14:00
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      Dra. Mariana Costa
                    </td>
                    <td className="px-4 py-3">Avaliação de manchas na pele</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[#e4f6ec] px-3 py-1 text-[11px] font-medium text-[#2b8a4e]">
                        Concluída
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-[11px] font-medium text-[#5ba4d3] hover:underline">
                        Ver resumo
                      </button>
                    </td>
                  </tr>

                  <tr
                    className={`border-b transition-colors ${
                      isDark
                        ? "border-slate-800 hover:bg-slate-800/60"
                        : "border-[#f3f4f6] hover:bg-slate-50/70"
                    }`}
                  >
                    <td className="whitespace-nowrap py-3 pr-4">
                      02 nov 2025 · 09:30
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      Dr. Lucas Andrade
                    </td>
                    <td className="px-4 py-3">
                      Acompanhamento de tratamento de acne
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[#e4f6ec] px-3 py-1 text-[11px] font-medium text-[#2b8a4e]">
                        Concluída
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-[11px] font-medium text-[#5ba4d3] hover:underline">
                        Ver resumo
                      </button>
                    </td>
                  </tr>

                  <tr
                    className={`transition-colors ${
                      isDark ? "hover:bg-slate-800/60" : "hover:bg-slate-50/70"
                    }`}
                  >
                    <td className="whitespace-nowrap py-3 pr-4">
                      22 out 2025 · 16:15
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      Teleatendimento FaceCare
                    </td>
                    <td className="px-4 py-3">
                      Orientação sobre produto para pele sensível
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[#e0f4fb] px-3 py-1 text-[11px] font-medium text-[#5ba4d3]">
                        Online
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-[11px] font-medium text-[#5ba4d3] hover:underline">
                        Ver resumo
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Modal de Biometria Facial */}
      {isScanOpen && (
        <FacialScanModal
          onClose={() => setIsScanOpen(false)}
          onOpenChat={() => {
            setIsScanOpen(false);
            setIsChatOpen(true);
          }}
          isDark={isDark}
        />
      )}

      {/* Chat flutuante */}
      <ChatWidget
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
        isDark={isDark}
      />
    </main>
  );
}

/* -------------------------------------------------
   Modal da biometria facial — IA Avançada (Opção A)
------------------------------------------------- */

function FacialScanModal({ onClose, onOpenChat, isDark }) {
  const [step, setStep] = useState("intro");
  const [scanData, setScanData] = useState(null);
  const [loadingModels, setLoadingModels] = useState(true);

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Carrega modelos da IA
  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");
        await faceapi.nets.ageGenderNet.loadFromUri("/models");
        setLoadingModels(false);
      } catch (error) {
        console.error("Erro ao carregar modelos da IA:", error);
      }
    };

    loadModels();
  }, []);

  // Liga/desliga câmera
  useEffect(() => {
    if (step !== "scanning") return;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Erro ao acessar câmera:", err);
        alert("Não foi possível acessar sua câmera. Verifique as permissões.");
      });

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [step]);

  // Detecção com IA (modo profissional, sem overlay técnico)
  useEffect(() => {
    if (step !== "scanning") return;
    if (loadingModels) return;

    let intervalId;
    let autoFinishId;

    const startDetection = () => {
      intervalId = setInterval(async () => {
        if (!videoRef.current) return;

        try {
          const detections = await faceapi
            .detectSingleFace(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender();

          if (!detections) return;

          const topExpression = Object.entries(detections.expressions).sort(
            (a, b) => b[1] - a[1]
          )[0][0];

          const aiAnalysis = {
            idade: Math.round(detections.age),
            genero: detections.gender,
            humor: topExpression,
            oleosidade: Math.floor(Math.random() * 40) + 30,
            manchas: Math.floor(Math.random() * 35),
            sensibilidade: Math.floor(Math.random() * 40) + 20,
            textura: Math.floor(Math.random() * 40) + 30,
          };

          setScanData(aiAnalysis);
        } catch (error) {
          console.error("Erro na detecção com IA:", error);
        }
      }, 700);

      // Depois de alguns segundos, vai para o resultado
      autoFinishId = setTimeout(() => {
        setStep("result");
      }, 4500);
    };

    startDetection();

    return () => {
      clearInterval(intervalId);
      clearTimeout(autoFinishId);
    };
  }, [step, loadingModels]);

  const cardBg = isDark
    ? "bg-slate-900 text-slate-100"
    : "bg-white text-[#2b2a2a]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/60 px-4">
      <div
        className={`w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl transition-colors ${cardBg}`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#8dd3f0] to-[#5ba4d3] px-5 py-3">
          <h2 className="text-sm font-semibold text-white">
            Biometria facial – Análise avançada com IA
          </h2>
          <button
            onClick={onClose}
            className="text-xs text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Corpo */}
        <div className="px-5 py-5 text-sm space-y-5">
          {step === "intro" && (
            <div className="space-y-4">
              <p>
                Posicione o rosto no centro da tela. Usaremos sua câmera e IA
                para analisar pontos importantes da sua pele.
              </p>

              <div className="flex items-center justify-center rounded-2xl bg-[#f9fafb]/60 dark:bg-slate-800/60 py-10">
                <div className="relative h-40 w-40 rounded-3xl bg-gradient-to-br from-[#8dd3f0]/40 to-[#fec5c2]/50 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full border border-dashed border-[#5ba4d3]/70 flex items-center justify-center">
                    <span className="text-3xl">🤳</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#6b7280] dark:text-slate-400">
                As imagens são processadas apenas localmente no seu navegador
                para fins de simulação. Nada é enviado para servidores.
              </p>

              <button
                onClick={() => setStep("scanning")}
                className="mt-2 w-full rounded-xl bg-[#5ba4d3] px-4 py-3 text-xs sm:text-sm font-medium text-white hover:bg-[#4a8ab2] transition"
              >
                Iniciar escaneamento com IA
              </button>
            </div>
          )}

          {step === "scanning" && (
            <div className="space-y-4">
              {loadingModels ? (
                <div className="space-y-3 text-center">
                  <p>Carregando inteligência artificial…</p>
                  <div className="mx-auto h-2 w-40 overflow-hidden rounded-full bg-[#e5e7eb] dark:bg-slate-700">
                    <div className="h-full w-full animate-pulse bg-[#5ba4d3]" />
                  </div>
                </div>
              ) : (
                <>
                  <p>Mantenha-se estável por alguns segundos…</p>

                  <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-3xl bg-black/90">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="h-full w-full object-cover opacity-90"
                    />
                    {/* Moldura premium */}
                    <div className="pointer-events-none absolute inset-4 rounded-3xl border border-white/40" />
                    <div className="pointer-events-none absolute inset-x-10 top-10 h-24 rounded-full border border-[#8dd3f0]/70" />
                  </div>

                  <div className="mt-3 flex flex-col items-center gap-2">
                    <div className="h-2 w-40 overflow-hidden rounded-full bg-[#e5e7eb] dark:bg-slate-700">
                      <div className="h-full w-full animate-pulse bg-[#5ba4d3]" />
                    </div>
                    <p className="text-xs text-[#6b7280] dark:text-slate-400">
                      A IA está mapeando textura, oleosidade e sinais da pele.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {step === "result" && scanData && (
            <div className="space-y-4">
              <p className="font-medium">Análise inicial da sua pele</p>

              <div
                className={`rounded-2xl p-3 ${
                  isDark ? "bg-slate-800" : "bg-[#f9fafb]"
                }`}
              >
                <p className="text-sm">
                  <span className="font-semibold">Idade estimada:</span>{" "}
                  {scanData.idade} anos
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Perfil:</span>{" "}
                  {scanData.genero === "male"
                    ? "pele masculina"
                    : "pele feminina"}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Expressão dominante:</span>{" "}
                  {scanData.humor}
                </p>
              </div>

              <h4 className="text-sm font-semibold">Mapa da pele</h4>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl p-3 bg-[#e0f4fb] text-[#2b2a2a]">
                  Oleosidade:{" "}
                  <span className="font-semibold">{scanData.oleosidade}%</span>
                  <p className="mt-1 text-[11px]">
                    Tendência a brilho na zona T. Controle com limpeza suave.
                  </p>
                </div>
                <div className="rounded-xl p-3 bg-[#ffe6e4] text-[#2b2a2a]">
                  Manchas:{" "}
                  <span className="font-semibold">{scanData.manchas}%</span>
                  <p className="mt-1 text-[11px]">
                    Atenção a manchas recentes e escurecimentos pontuais.
                  </p>
                </div>
                <div className="rounded-xl p-3 bg-[#fef3c7] text-[#2b2a2a]">
                  Sensibilidade:{" "}
                  <span className="font-semibold">
                    {scanData.sensibilidade}%
                  </span>
                  <p className="mt-1 text-[11px]">
                    Evite ativos muito agressivos sem orientação.
                  </p>
                </div>
                <div className="rounded-xl p-3 bg-[#dcfce7] text-[#2b2a2a]">
                  Textura:{" "}
                  <span className="font-semibold">{scanData.textura}%</span>
                  <p className="mt-1 text-[11px]">
                    Textura equilibrada, com pontos para refinar em limpeza e
                    hidratação.
                  </p>
                </div>
              </div>

              <div
                className={`rounded-xl p-3 text-xs ${
                  isDark ? "bg-slate-800" : "bg-[#f9fafb]"
                }`}
              >
                <p className="mb-1 font-medium">Sugestões da FaceCare:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    Inclua uma{" "}
                    <span className="font-semibold">limpeza de pele</span>{" "}
                    profissional a cada 30–45 dias.
                  </li>
                  <li>
                    Use{" "}
                    <span className="font-semibold">
                      hidratante leve e protetor solar diário
                    </span>{" "}
                    para prevenção de manchas e envelhecimento precoce.
                  </li>
                  <li>
                    Agende uma avaliação com{" "}
                    <span className="font-semibold">
                      dermatologista parceiro
                    </span>{" "}
                    para um plano personalizado.
                  </li>
                </ul>
                <p className="mt-2 text-[11px] text-[#6b7280] dark:text-slate-400">
                  Esta análise é uma simulação baseada em padrões gerais. Para
                  diagnóstico definitivo, procure um profissional.
                </p>
              </div>

              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <button
                  onClick={onOpenChat}
                  className="rounded-lg bg-[#5ba4d3] px-3 py-2 text-xs font-medium text-white hover:bg-[#4a8ab2]"
                >
                  Conversar com especialista
                </button>
                <button className="rounded-lg border border-[#fec5c2] px-3 py-2 text-xs font-medium hover:bg-[#fff5f4]">
                  Ver dermatologistas locais
                </button>
                <button className="rounded-lg border border-[#8dd3f0] px-3 py-2 text-xs font-medium hover:bg-[#f0f9ff]">
                  Ver mercado / farmácias
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé */}
        <div
          className={`flex items-center justify-between border-t px-5 py-3 ${
            isDark
              ? "border-slate-800 bg-slate-900/80"
              : "border-[#f3f4f6] bg-white/80"
          }`}
        >
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#6b7280] hover:text-[#2b2a2a] dark:hover:text-white"
          >
            Cancelar
          </button>

          {step === "scanning" && (
            <button
              onClick={() => setStep("result")}
              className="rounded-lg bg-[#2b2a2a] px-4 py-2 text-xs font-medium text-white hover:bg-black"
            >
              Ver resultado
            </button>
          )}

          {step === "result" && (
            <button
              onClick={onOpenChat}
              className="rounded-lg bg-[#5ba4d3] px-4 py-2 text-xs font-medium text-white hover:bg-[#4a8ab2]"
            >
              Tirar dúvidas no chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------
   Chat flutuante
------------------------------------------------- */

function ChatWidget({ isOpen, setIsOpen, isDark }) {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isOpen ? (
        <div
          className={`w-80 overflow-hidden rounded-3xl border shadow-xl ${
            isDark
              ? "border-slate-700 bg-slate-900 text-slate-100"
              : "border-[#e5e7eb] bg-white text-[#2b2a2a]"
          }`}
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-[#8dd3f0] to-[#5ba4d3] px-4 py-3">
            <div>
              <p className="text-xs font-semibold text-white">
                Atendimento por chat
              </p>
              <p className="text-[11px] text-white/80">
                Tempo médio de resposta: &lt; 2 min
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div
            className={`flex h-56 flex-col justify-between px-4 py-3 ${
              isDark ? "bg-slate-900" : "bg-[#f9fafb]"
            }`}
          >
            {/* Mensagens exemplo */}
            <div className="space-y-2 overflow-y-auto pr-1 text-[11px]">
              <div className="flex flex-col items-start">
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 shadow-sm ${
                    isDark ? "bg-slate-800" : "bg-white"
                  }`}
                >
                  <p className="font-medium">Olá! 👋</p>
                  <p className="mt-1">
                    Sou o assistente FaceCare. Posso te ajudar a entender melhor
                    os resultados da sua biometria facial ou indicar o melhor
                    cuidado para a sua pele.
                  </p>
                </div>
                <span
                  className={`mt-1 text-[10px] ${
                    isDark ? "text-slate-500" : "text-[#9ca3af]"
                  }`}
                >
                  Agora mesmo
                </span>
              </div>
            </div>

            {/* Input */}
            <div
              className={`mt-3 flex items-center gap-2 border-t pt-2 ${
                isDark ? "border-slate-700" : "border-[#e5e7eb]"
              }`}
            >
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className={`h-8 flex-1 rounded-full border px-3 text-[11px] outline-none transition ${
                  isDark
                    ? "border-slate-700 bg-slate-900 text-slate-100 focus:border-[#5ba4d3]"
                    : "border-[#e5e7eb] bg-white text-[#2b2a2a] focus:border-[#5ba4d3]"
                }`}
              />
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5ba4d3] text-[13px] font-medium text-white hover:bg-[#4a8ab2]">
                ➤
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5ba4d3] text-xl text-white shadow-lg hover:bg-[#4a8ab2] transition-transform duration-300 hover:-translate-y-0.5"
        >
          💬
        </button>
      )}
    </div>
  );
}

export default CardsInicio;
