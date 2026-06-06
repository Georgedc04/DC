"use client";

interface StatItemProps {
  number: string;
  label: string;
  description: string;
}

export default function Stats() {
  const statsData: StatItemProps[] = [
    {
      number: "$42M+",
      label: "Total Student Funding",
      description: "Aggregate capital secured by our graduates through institutional prop firm evaluations."
    },
    {
      number: "74.8%",
      label: "Average Win-Rate Scale",
      description: "Verified performance improvement tracked across community logs post-graduation."
    },
    {
      number: "140+",
      label: "Countries Represented",
      description: "A worldwide network of disciplined, professional orderflow and algorithmic traders."
    },
    {
      number: "24/7",
      label: "Live Market Alpha",
      description: "Continuous real-time trade breakdown sessions inside our private ecosystem."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-32 bg-[#030303] text-zinc-100">
      
      {/* BACKGROUND CORNER GLOW FOR THE SECTION */}
      <div className="absolute right-[-5%] bottom-1/4 h-96 w-96 rounded-full bg-[#0D50DE]/5 blur-[120px] pointer-events-none" />

      {/* DOCK-STYLE METRIC CARD GRID */}
      <div className="relative rounded-3xl border border-zinc-800/40 bg-zinc-950/20 p-8 md:p-12 backdrop-blur-md shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Subtle top edge vector reflection line */}
        <div className="absolute inset-0 rounded-3xl border border-white/2 pointer-events-none" />
        
        {/* Subtle bottom gold sheen line */}
        <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-[#0D50DE]/30 to-transparent" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-zinc-900/60">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-start ${
                index === 0 ? "" : "pt-10 sm:pt-0 lg:pl-8"
              } ${index === 1 ? "sm:pl-8 lg:pl-8" : ""} ${index === 3 ? "sm:pl-8 lg:pl-8" : ""}`}
            >
              
              {/* LARGE METRIC NUMBER (Gleaming Gold Gradient) */}
              <div className="text-4xl md:text-5xl font-black tracking-tight bg-linear-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:from-[#0D50DE] group-hover:to-[#3FBDEE] transition-all duration-300">
                <span className="bg-linear-to-r from-[#0D50DE] via-[#3FBDEE] to-[#0D50DE] bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>

              {/* STAT LABEL */}
              <div className="mt-2 text-sm font-bold text-zinc-200 tracking-wide">
                {stat.label}
              </div>

              {/* STAT SUBTEXT DESCRIPTION */}
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 font-normal max-w-60">
                {stat.description}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}