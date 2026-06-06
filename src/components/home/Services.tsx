"use client";

import { Check } from "lucide-react";

interface ProgramProps {
  title: string;
  badge: string;
  description: string;
  features: string[];
  price: string;
  isPopular?: boolean;
}

export default function Services() {
  const programs: ProgramProps[] = [
    {
      title: "Foundation Accelerator",
      badge: "Self-Paced Training",
      description: "Master market structure, order blocks, and essential risk parameters to build a flawless technical foundation.",
      price: "$299",
      features: [
        "40+ High-Definition Video Lectures",
        "Lifetime Portal Access & Updates",
        "Prop Firm Challenge Frameworks",
        "Weekly Strategy Review Logs"
      ]
    },
    {
      title: "Elite Orderflow Mastery",
      badge: "Most Popular Blueprint",
      description: "Our signature flagship live mentoring cohort. Transition into tape reading, liquidity pools, and algorithmic execution.",
      price: "$599",
      isPopular: true,
      features: [
        "Everything in Foundation Tier",
        "8 Weeks of Live Screen-Share Labs",
        "Private Discord Alpha Channels",
        "Our Custom TradingView Indicator Suite"
      ]
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-32 bg-[#030303] text-zinc-100">
      
      {/* SECTION HEADER CHUNK */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0D50DE]/20 bg-[#0D50DE]/5 px-3 py-1">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#0D50DE]/90">
            Educational Programs
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight text-balance">
          Systematic blueprints to trade <br />
          <span className="bg-linear-to-r from-[#0D50DE] via-[#3FBDEE] to-[#0D50DE] bg-clip-text text-transparent">
            with absolute authority.
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-base text-zinc-400 font-normal">
          Skip years of catastrophic trial and error. Learn the exact mechanical algorithms utilized by funded institutional accounts.
        </p>
      </div>

      {/* CURRICULUM BUNDLE COMPARISON GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`group relative rounded-3xl border flex flex-col justify-between p-8 md:p-10 backdrop-blur-md transition-all duration-500 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] ${
              program.isPopular 
                ? "border-[#0D50DE]/40 bg-zinc-950/40" 
                : "border-zinc-800/40 bg-zinc-950/10 hover:border-zinc-700/60"
            }`}
          >
            {/* Top Outer Edge Glow for the highlighted tier card */}
            {program.isPopular && (
              <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#0D50DE]/60 to-transparent" />
            )}

            {/* Inner bounding capsule rim reflection line */}
            <div className="absolute inset-0 rounded-3xl border border-white/2 pointer-events-none" />

            {/* TOP CARD DETAILS CONTENT */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                  program.isPopular 
                    ? "bg-[#0D50DE]/10 text-[#0D50DE] border border-[#0D50DE]/20" 
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                }`}>
                  {program.badge}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white tracking-tight">{program.price}</span>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">USD</span>
                </div>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white mb-3">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 font-normal mb-8">
                {program.description}
              </p>

              {/* PERKS / SYLLABUS LIST ROW */}
              <ul className="space-y-4 border-t border-zinc-900/80 pt-6 mb-10">
                {program.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
                    <div className="shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0D50DE]/10 border border-[#0D50DE]/20">
                      <Check className="h-2.5 w-2.5 text-[#0D50DE]" strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PREMIUM BUY/ENROLL BUTTON SYSTEM (Framer-Inspired Glow) */}
            <div className="w-full">
              <div className="group/btn relative inline-flex w-full">
                <div className={`absolute -inset-0.5 rounded-full blur-md opacity-40 transition duration-500 group-hover/btn:opacity-90 ${
                  program.isPopular ? "bg-[#0D50DE]/50 blur-lg" : "bg-zinc-700/30"
                }`} />
                <button className={`relative w-full flex items-center justify-center rounded-full py-4 font-semibold tracking-wide border transition-all duration-300 group-hover/btn:scale-[1.01] active:scale-[0.99] text-sm ${
                  program.isPopular
                    ? "bg-linear-to-b from-[#3DC8FF to-[#070502] text-zinc-100 border-[#0D50DE]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover/btn:border-[#0D50DE]"
                    : "bg-zinc-900/50 text-zinc-300 border-zinc-800 group-hover/btn:border-zinc-600 group-hover/btn:text-white"
                }`}>
                  <span className={program.isPopular ? "bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent" : ""}>
                    Secure Your Seat
                  </span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}