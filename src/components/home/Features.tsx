"use client";


interface FeatureCardProps {
  title: string;
  description: string;
  metric: string;
  trend: string;
}

export default function Features() {
  const featuresData: FeatureCardProps[] = [
    {
      title: "Real-time Metrics",
      description: "Analyze market behavior instantly with ultra-low latency execution pipelines and data feeds.",
      metric: "0.4ms",
      trend: "Latency floor"
    },
    {
      title: "Risk Engineering",
      description: "Automated drawdown safeguards and smart sizing algorithms engineered to shelter capital.",
      metric: "Max 2%",
      trend: "Per-trade cap"
    },
    {
      title: "Predictive Modeler",
      description: "Leverage backtested historical vectors to calculate probability distribution matrices automatically.",
      metric: "84.2%",
      trend: "Backtest signal"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-32 bg-[#030303] text-zinc-100">
      
      {/* SECTION HEADER BLOCK */}
      <div className="mb-16 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0D50DE]/20 bg-[#0D50DE]/5 px-3 py-1">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#0D50DE]/90">
            System Capabilities
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
          Engineered for the elite <br />
          <span className="bg-linear-to-r from-[#0D50DE] via-[#3FBDEE] to-[#0D50DE] bg-clip-text text-transparent">
            disciplined trader.
          </span>
        </h2>
      </div>

      {/* 3-COLUMN PREMIUM BENTO GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="group relative rounded-3xl border border-zinc-800/40 bg-zinc-950/20 p-8 backdrop-blur-md transition-all duration-500 hover:border-zinc-700/60 hover:bg-zinc-950/50 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            {/* Soft inner bounding rim shine */}
            <div className="absolute inset-0 rounded-3xl border border-white/2 pointer-events-none group-hover:border-white/5 transition-colors duration-500" />
            
            {/* Micro Top Corner Glow Accent on Card Hover */}
            <div className="absolute top-0 right-12 h-px w-20 bg-linear-to-r from-transparent via-[#0D50DE]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex h-full flex-col justify-between gap-10">
              
              {/* TOP LAYOUT Block: Content text */}
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white mb-2 group-hover:text-[#0D50DE] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 font-normal">
                  {feature.description}
                </p>
              </div>

              {/* BOTTOM LAYOUT Block: Mini Visual Metric Widget */}
              <div className="rounded-2xl border border-zinc-900 bg-black/40 p-4 transition-all duration-500 group-hover:border-zinc-800/80">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                  {feature.trend}
                </div>
                <div className="text-2xl font-black text-zinc-200 tracking-tight group-hover:text-white transition-colors duration-300">
                  {feature.metric}
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}