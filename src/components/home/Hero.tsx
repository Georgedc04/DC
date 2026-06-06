import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Activity } from "lucide-react";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-24 pb-16 overflow-hidden bg-[#030303] text-zinc-100 flex items-center justify-center">
      
      {/* BACKGROUND TEXTURE MATTE */}
      <div
        className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* CHART WATERMARK WITH NATIVE MASK FADES */}
      <div
        className="absolute inset-0 z-0 opacity-5 md:opacity-10 pointer-events-none select-none"
        style={{
          backgroundImage: "url('/bluechart.png')",
          backgroundPosition: "center 35%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1400px",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 80%)",
          maskImage: "linear-gradient(to bottom, black 20%, transparent 80%)",
        }}
      />

      {/* IMMERSIVE LIGHTING/MESH GLOWS */}
      <div className="absolute right-[-10%] top-1/4 h-125 w-125 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none animate-pulse duration-[10s]" />
      <div className="absolute left-[-5%] bottom-1/4 h-100 w-100 rounded-full bg-zinc-800/10 blur-[110px] pointer-events-none" />

      {/* VIEWPORT LAYOUT SHEET */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:gap-8 lg:grid-cols-12">

          {/* LEFT SIDE (Main Text & Actions Layout) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 xl:col-span-6">
            
            {/* MICRO BADGE PILL ACCENT */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md mb-6">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
              <span>Verified Portfolio Log</span>
            </div>

            {/* HEADING ACCENT FRAME */}
            <h1 className="text-balance text-4xl sm:text-6xl font-black tracking-tighter text-white xl:text-7xl leading-[1.05] md:leading-[0.95]">
              George DC
              <span
                className={`${dancing.className} mt-1 md:mt-2 block bg-linear-to-r from-blue-500 via-sky-400 to-blue-600 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent pb-1`}
              >
                Forex Trader
              </span>
            </h1>

            {/* INTRO DESCRIPTION PROSE */}
           <p className="mt-6 max-w-md md:max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-zinc-200 font-normal">
              Showcasing my trading journey, experience, and market perspective.
            </p>
                {/* BUTTON INTERACTIVE LAYOUT STRATEGY */}
            <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">

              {/* PRIMARY ACTION TRIGGER */}
              <div className="group relative w-full sm:w-auto inline-flex">
  {/* Soft, clean background ambient glow on hover */}
  <div className="absolute -inset-1 rounded-full bg-blue-500/10 blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none" />

  <Link
    href="/book-call"
    className="
      relative 
      flex 
      items-center 
      justify-center 
      gap-2 
      w-full 
      sm:w-auto 
      rounded-full 
      bg-transparent
      
      /* Fine Thin Blue Border Line */
      border 
      border-blue-500/70 
      
      px-7 
      py-3.5 
      text-xs 
      sm:text-sm 
      font-bold 
      text-zinc-200
      tracking-wide 
      whitespace-nowrap 
      
      /* Interactive State Transitions */
      transition-all 
      duration-200 
      ease-out
      
      hover:scale-[1.01] 
      hover:text-white
      hover:border-blue-400 
      hover:bg-blue-500/5
      active:scale-[0.99]
    "
  >
    <span className="relative z-10">Book Consultation</span>
    
    <ArrowUpRight className="h-4 w-4 text-blue-400 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </Link>
</div>
              {/* SECONDARY ACTION LINK */}
              <Link
                href="/achievements"
                className="group flex flex-1 sm:flex-initial items-center justify-center w-full sm:w-auto rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 tracking-wide transition-all duration-300 hover:border-zinc-700 hover:text-white hover:bg-zinc-900/80 shadow-md whitespace-nowrap"
              >
                View Achievements
              </Link>
            </div>

            {/* CORE AUDIT STATS BENCHMARK GRID */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full border-t border-zinc-900/60 pt-8 lg:pt-10">
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">$100K+</p>
                <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-zinc-300 uppercase tracking-wider whitespace-nowrap">Funded Capital</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">5+</p>
                <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-zinc-300 uppercase tracking-wider whitespace-nowrap">Verified Payouts</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">50+</p>
                <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-zinc-300 uppercase tracking-wider whitespace-nowrap">Trade Reviews</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-2xl font-extrabold text-blue-400 tracking-tight flex items-center gap-1">
                  <span>1:3</span>
                  <TrendingUp className="h-3.5 w-3.5 opacity-80" />
                </p>
                <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-zinc-300 uppercase tracking-wider whitespace-nowrap">Average RR</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (Visual Presentation Card Showcase) */}
          <div className="relative flex w-full items-center justify-center lg:col-span-5 xl:col-span-6 lg:justify-end mt-4 lg:mt-0">
            
            {/* AMBIENT BACKGROUND ELEMENT RING */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[90px] pointer-events-none" />

            {/* PREVIEW CONTAINER CANVAS SHEET */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl border border-zinc-800/80 bg-linear-to-b from-zinc-900/20 to-zinc-950/80 p-2.5 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.85)] transition-all duration-700 hover:scale-[1.01] hover:border-zinc-700/60 group">
              
              {/* Inner Floating Interface Details */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-lg bg-zinc-950/80 border border-zinc-800/80 px-2.5 py-1 backdrop-blur-sm shadow-md opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Activity className="h-3 w-3 text-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400">Live Feed</span>
              </div>

              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-10" />
              
              <Image
                src="/bluechart.png"
                alt="George DC Trading Dashboard"
                width={1000}
                height={700}
                priority
                className="w-full h-auto rounded-xl object-cover brightness-[0.9] contrast-[1.05] grayscale-20 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}