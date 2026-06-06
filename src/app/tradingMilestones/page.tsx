import InteractiveTimeline from "@/components/tradingMilestones/InteractiveTimeline";
import { Award } from "lucide-react";

const milestones = [
  {
    stage: "Stage 1",
    title: "The Beginner",
    image: "/milestones/m1.png",
    description: "Learning market structure, candlesticks, risk management, and basic trading psychology. The goal is survival and understanding the market.",
  },
  {
    stage: "Stage 2",
    title: "The Developing Trader",
    image: "/milestones/m2.png",
    description: "Building consistency, following a trading plan, journaling trades, and eliminating emotional decisions.",
  },
  {
    stage: "Stage 3",
    title: "The Consistent Trader",
    image: "/milestones/m3.png",
    description: "Profitable over time, disciplined with risk, and focused on execution rather than chasing profits.",
  },
  {
    stage: "Stage 4",
    title: "The Funded Trader",
    image: "/milestones/m4.png",
    description: "Managing larger capital, passing evaluations, and treating trading as a professional business.",
  },
  {
    stage: "Stage 5",
    title: "The Millionaire Mindset",
    image: "/milestones/m5.png",
    description: "Building wealth, protecting capital, creating multiple income streams, and achieving financial freedom.",
  },
];

export default function TradingMilestones() {
  return (
    <section className="relative h-auto w-full overflow-hidden bg-[#030303] text-zinc-100 pt-10 pb-16 sm:py-24 lg:py-32">
      
      {/* GLOBAL BACKGROUND TEXTURE MATTE */}
      <div
        className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />
      
      {/* AMBIENT BRAND GLOWS */}
      <div className="absolute left-[-10%] top-1/3 h-100 w-100 rounded-full bg-[#0D50DE]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-6 sm:mb-16 md:mb-20 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 text-[8px] sm:text-xs font-bold uppercase tracking-wider text-blue-400 backdrop-blur-md">
            <Award className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-500" />
            Trading Journey
          </span>

          <h2 className="mt-2 text-xl sm:text-4xl md:text-5xl font-black tracking-tight bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            The 5 Stages of Success
          </h2>

          {/* Upgraded from zinc-400 to zinc-200 to maximize paragraph readability across screens */}
          <p className="mt-1 max-w-md sm:max-w-xl text-[11px] sm:text-sm md:text-base leading-relaxed text-zinc-200 font-normal px-2">
            Every professional asset manager follows a path. Master the systematic mechanics of each step before scaling into the next tier.
          </p>
        </div>

        {/* INTERACTIVE TIMELINE LOGIC ENGINE */}
        <InteractiveTimeline items={milestones} />

      </div>
    </section>
  );
}