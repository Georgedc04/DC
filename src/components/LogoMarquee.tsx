"use client";


export default function LogoMarquee() {
  // Mock company data - Replace text with your vector custom <svg> or <Image /> components as needed
  const companies = [
    "AlphaVantage",
    "QuantConnect",
    "TradingView",
    "ApexClearing",
    "Binance",
    "Coinbase",
    "Kraken",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#030303] px-4 py-8 md:px-6">
      
      {/* Dock-style Glass Wrapper Container */}
      <div className="mx-auto max-w-7xl rounded-full border border-zinc-800/30 bg-[#09090b]/10 backdrop-blur-xs py-5 px-6 md:px-10 shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,2)]">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          
          {/* Label / CTA Section */}
          <div className="shrink-0 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Backed by institutional
              <span className="ml-1 text-[#D4A017] opacity-90">liquidity providers</span>
            </p>
          </div>

          {/* INFINITE SCROLLING TICKER CONTAINER */}
          <div className="relative w-full overflow-hidden mask-image-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            
            {/* The Animating Track (Duplicated to maintain seamless continuous flow) */}
            <div className="flex w-max gap-16 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
              
              {/* First loop track instance */}
              {companies.map((company, index) => (
                <div
                  key={`track-1-${index}`}
                  className="text-base font-bold tracking-tight text-zinc-500/70 transition-colors duration-300 hover:text-zinc-300 cursor-default select-none flex items-center justify-center"
                >
                  {company}
                </div>
              ))}

              {/* Second duplicated track instance for infinite stitching layout loop */}
              {companies.map((company, index) => (
                <div
                  key={`track-2-${index}`}
                  className="text-base font-bold tracking-tight text-zinc-500/70 transition-colors duration-300 hover:text-zinc-300 cursor-default select-none flex items-center justify-center"
                >
                  {company}
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* Tailwind v4 CSS Injection block for the fluid custom loop translation animation matrix keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}