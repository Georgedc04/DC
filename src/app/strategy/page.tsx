"use client";

import { Check, ShieldAlert, Target, Award, BrainCircuit, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Market Structure",
    icon: Activity,
    description:
      "The market constantly logs systematic trends. Master the mechanical tracking of Higher Highs, Higher Lows, Lower Highs, and Lower Lows to define directional bias with mathematical authority before taking any trade.",
  },
  {
    number: "02",
    title: "Liquidity Vectors",
    icon: Target,
    description:
      "Price naturally shifts toward massive concentrations of retail stop losses. Identifying buy-side and sell-side liquidity pools allows you to avoid traps and execute trades directly alongside institutional flow.",
  },
  {
    number: "03",
    title: "The Entry Model",
    icon: BrainCircuit,
    description:
      "Wait for strict structural confirmations. Never chase runaway candles. Force the price to return to your predefined point of interest (POI) and display a clear footprint of displacement before initiating execution.",
  },
  {
    number: "04",
    title: "Risk Engineering",
    icon: ShieldAlert,
    description:
      "Preservation of trading capital is your primary objective. Restrict allocations to a strict, non-negotiable fraction per trade setup. Treat trading as a game of probabilities and prioritize compound consistency over quick wins.",
  },
  {
    number: "05",
    title: "Psychological Discipline",
    icon: Award,
    description:
      "Mechanical execution models will always outperform emotional instinct. Elite performance relies on managing cognitive biases, remaining objective during loss streaks, and maintaining absolute operational patience.",
  },
];

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-[#0D50DE]/20 selection:text-[#0D50DE]">
      
      {/* GLOBAL BACKGROUND LAYER SYSTEM */}
      <div
        className="absolute inset-0 -z-40 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />
      <div
        className="absolute inset-0 -z-30 opacity-30 pointer-events-none select-none mask-[linear-gradient(to_bottom,white_40%,transparent)]"
        style={{
          backgroundImage: "url('/Chart.png')",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1400px",
        }}
      />
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-black/10 via-transparent to-black pointer-events-none" />

      {/* ================= SECTION 1: HERO ENTRANCE ================= */}
      <section className="relative mx-auto max-w-7xl px-6 pt-40 pb-20 md:pb-28">
        <div className="absolute top-1/4 right-0 h-100 w-100 rounded-full bg-[#0D50DE]/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0D50DE]/20 bg-[#0D50DE]/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#0D50DE]/90">
              DC FX Framework
            </span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl leading-[0.95] text-balance">
            The Algorithmic <br />
            <span className="mt-2 block bg-linear-to-r from-[#0D50DE] via-[#3FBDEE] to-[#0D50DE] bg-clip-text text-transparent pb-2">
              Trading Strategy
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-400 font-normal">
            A precise, institutional-grade execution framework built entirely around structural analysis, raw orderflow tracking, and disciplined risk distribution. 
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: CORE PRINCIPLES (BENTO GRID) ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Core Principles
          </h2>
          <div className="mt-3 h-px w-20 bg-linear-to-r from-transparent via-[#0D50DE]/40 to-transparent" />
        </div>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            { title: "Patience", index: "I" },
            { title: "Discipline", index: "II" },
            { title: "Consistency", index: "III" },
            { title: "Risk First", index: "IV" },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/20 p-6 backdrop-blur-md transition-all duration-500 hover:border-zinc-800 hover:bg-zinc-950/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 rounded-2xl border border-white/2 pointer-events-none" />
              <div className="text-[10px] font-bold tracking-widest text-zinc-600 mb-8 block font-mono">
                CODE // {item.index}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: ASYMMETRIC STICKY SPLIT PROCESS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 border-t border-zinc-900/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sticky Section Copy */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col items-start">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              The Protocol <br />
              <span className="bg-linear-to-r from-[#0D50DE] via-[#3FBDEE] to-[#0D50DE] bg-clip-text text-transparent">
                Step-by-Step
              </span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
              Every position you execute must clear this linear validation stack. Deviation breaks the model and voids edge statistics.
            </p>
          </div>

          {/* Right Column: High-Fidelity Step Cards */}
          <div className="lg:col-span-8 space-y-6">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative rounded-3xl border border-zinc-900 bg-zinc-950/30 p-8 md:p-10 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-zinc-800/80 hover:bg-zinc-950/60"
                >
                  <div className="absolute inset-0 rounded-3xl border border-white/2 pointer-events-none" />
                  
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between">
                    <div className="flex items-start gap-5">
                      {/* Icon Box */}
                      <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black/40 text-zinc-500 group-hover:text-[#0D50DE] group-hover:border-[#0D50DE]/30 transition-colors duration-500">
                        <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 group-hover:text-[#0D50DE]">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-400 font-normal max-w-2xl">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Numeric Step Badge */}
                    <div className="text-4xl font-black text-zinc-800 tracking-tighter group-hover:text-[#0D50DE]/10 transition-colors duration-500 sm:text-right select-none">
                      {step.number}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: SYSTEM OPERATING RULES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 border-t border-zinc-900/40">
        <div className="relative rounded-3xl border border-zinc-800/40 bg-zinc-950/10 p-8 md:p-14 backdrop-blur-md shadow-[0_24px_50px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="absolute inset-0 rounded-3xl border border-white/2 pointer-events-none" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#0D50DE]/3 blur-[90px] pointer-events-none" />

          <div className="mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Execution Laws
            </h2>
            <p className="mt-2 text-sm text-zinc-500 font-medium">
              System parameter boundaries that protect users from catastrophic market events.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Never risk capital allocations you cannot afford to mathematically absorb.",
              "Enforce strict higher-timeframe confirmation checks before pulling triggers.",
              "Prioritize high-probability setups over frequency of open positions.",
              "Shield your accumulated balances rigorously before chasing projected returns.",
            ].map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-zinc-900/80 bg-black/40 p-5 font-medium text-sm text-zinc-300 leading-relaxed"
              >
                <div className="shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0D50DE]/10 border border-[#0D50DE]/20">
                  <Check className="h-2.5 w-2.5 text-[#0D50DE]" strokeWidth={3} />
                </div>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PREMIUM CALL TO ACTION ================= */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="group relative rounded-3xl border border-zinc-800/50 bg-linear-to-b from-zinc-950/60 to-black/90 p-12 md:p-16 text-center shadow-[0_32px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md overflow-hidden">
          <div className="absolute inset-0 rounded-3xl border border-white/2 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0D50DE]/5 blur-[80px] pointer-events-none" />

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl text-balance">
            Master the Mechanics
          </h2>
          
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
            Profitable trading is not about forecasting the future. It is about cold, systematic execution of a proven probabilistic process.
          </p>

          {/* Premium Framer Button Action Group */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <div className="group/btn relative inline-flex">
              <div className="absolute -inset-1 rounded-full bg-[#0D50DE]/40 blur-md opacity-60 transition duration-500 group-hover/btn:opacity-100 group-hover/btn:blur-lg" />
              <button className="relative flex items-center justify-center rounded-full bg-linear-to-b from-[#3DC8FF to-[#070502] px-8 py-4 font-bold text-xs tracking-wider uppercase text-zinc-100 border border-[#0D50DE]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:border-[#0D50DE] cursor-pointer">
                <span className="bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  Access Framework Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}