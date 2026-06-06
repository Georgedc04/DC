import Image from "next/image";
import { ShieldCheck, Target, Terminal, BookOpen, Trophy, FileCheck2, Activity } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative h-auto w-full overflow-hidden bg-[#030303] text-zinc-100 pt-16 pb-24 sm:py-28 lg:py-36">
      
      {/* ================= ATMOSPHERIC BACKDROP UTILITIES ================= */}
      <div
        className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />
      {/* Soft Ambient Brand Radial Glows */}
      <div className="absolute right-[-10%] top-[-5%] h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-1/4 h-125 w-125 rounded-full bg-blue-700/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO TITLE HEADER SECTION ================= */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-blue-400 backdrop-blur-md">
            <Terminal className="h-3 w-3 text-blue-500" />
            George DC • Trader
          </span>
          
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-none">
            George DC <br />
            <span className="text-xl sm:text-3xl lg:text-4xl block mt-2 font-extrabold text-zinc-400">
              Professional Trader
            </span>
          </h1>
          
          <p className="mt-4 text-[13px] sm:text-sm md:text-base leading-relaxed text-zinc-200 font-normal max-w-2xl">
            Building consistency through disciplined trading, continuous learning, and structured risk solutions.
          </p>
        </div>

        {/* ================= IMAGE & STRATEGY ASYMMETRIC GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch mb-16 sm:mb-28">
          
          {/* Professional Image Frame Wrapper */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[440px] rounded-2xl border border-zinc-800/60 bg-zinc-900/20 overflow-hidden group shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
            
            <Image
              src="/about-professional.jpg" 
              alt="George DC - DC Trades"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102 filter brightness-[0.8] contrast-[1.05]"
              priority
              unoptimized
            />
            
            {/* Overlay App Widget Inside Image */}
            <div className="absolute bottom-4 left-4 right-4 z-20 backdrop-blur-md bg-zinc-950/70 border border-zinc-800/80 p-4 rounded-xl">
              <div className="text-[9px] uppercase font-black tracking-widest text-blue-400">DC Trades</div>
              <div className="text-sm font-black text-white mt-0.5">Trading Journey</div>
              <div className="text-[11px] text-zinc-300 mt-1 leading-relaxed font-normal">Funded account achievements, payout records, certifications, and trading milestones tracked through a structured and disciplined trading process.</div>
            </div>
          </div>

          {/* Core Value Runway Cards Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* About Me Description Section */}
            <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800/50 bg-zinc-950/20 backdrop-blur-md relative overflow-hidden">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight mb-2">About Me</h2>
              <p className="text-[12px] sm:text-xs md:text-sm leading-relaxed text-zinc-200 font-normal">
                I am George DC, a trader focused entirely on disciplined risk management, system mechanics, and long-term market consistency.
              </p>
              <p className="mt-3 text-[12px] sm:text-xs md:text-sm leading-relaxed text-zinc-200 font-normal">
                My journey centers around navigating financial markets through mathematical problem-solving. Through DC Trades, I document my funded account achievements, payout records, certifications, and trading milestones while continuously refining my execution process.
              </p>
              <p className="mt-3 text-[12px] sm:text-xs md:text-sm leading-relaxed text-zinc-200 font-normal">
                My goal is to cultivate the professional mindset, risk discipline, and hard skills required for long-term edge sustainability while maintaining complete transparency.
              </p>
              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
              
              {/* Feature Box 1 */}
              <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md relative overflow-hidden group">
                <div className="h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-blue-400 mb-3 group-hover:border-blue-500/30 transition-colors">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Risk Management</h3>
                <p className="mt-1.5 text-[11.5px] sm:text-xs leading-relaxed text-zinc-300 font-normal">
                  Capital preservation comes first. Every position follows strict mathematical parameters designed to limit drawdown and preserve trading longevity.
                </p>
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
              </div>

              {/* Feature Box 2 */}
              <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md relative overflow-hidden group">
                <div className="h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-blue-400 mb-3 group-hover:border-blue-500/30 transition-colors">
                  <Target className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Continuous Improvement</h3>
                <p className="mt-1.5 text-[11.5px] sm:text-xs leading-relaxed text-zinc-300 font-normal">
                  Every data metric is reviewed and filtered to eliminate edge degradation, optimize fill selection, and elevate behavioral execution quality.
                </p>
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
              </div>

              {/* Feature Box 3 */}
              <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md relative overflow-hidden group">
                <div className="h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-blue-400 mb-3 group-hover:border-blue-500/30 transition-colors">
                  <BookOpen className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Trading Journal</h3>
                <p className="mt-1.5 text-[11.5px] sm:text-xs leading-relaxed text-zinc-300 font-normal">
                  Maintaining a hyper-detailed audit journal isolates system weaknesses, monitors expectancy distributions, and highlights structural advantages.
                </p>
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
              </div>

              {/* Feature Box 4 */}
              <div className="p-5 sm:p-6 rounded-2xl border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md relative overflow-hidden group">
                <div className="h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-blue-400 mb-3 group-hover:border-blue-500/30 transition-colors">
                  <Terminal className="h-4 w-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Technical Framework</h3>
                <p className="mt-1.5 text-[11.5px] sm:text-xs leading-relaxed text-zinc-300 font-normal">
                  Approaching volatile asset markets systematically by deploying clean logic, quantitative metrics, and objective data arrays.
                </p>
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
              </div>

            </div>

          </div>
        </div>

        {/* ================= CORE PHILOSOPHY QUOTE BANNER ================= */}
        <div className="p-6 sm:p-8 mb-16 sm:mb-28 rounded-2xl border border-zinc-800/50 bg-linear-to-r from-zinc-950 via-zinc-900/30 to-zinc-950 relative overflow-hidden text-center max-w-4xl mx-auto">
          <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Core Philosophy</h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-200 font-medium italic max-w-2xl mx-auto">
            &ldquo;Success in trading is built through discipline, patience, and consistency. My focus is not on chasing quick profits but on developing a repeatable process that delivers long-term results.&rdquo;
          </p>
          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
        </div>

        {/* ================= METRIC HIGHLIGHT STRIP ================= */}
        <div className="rounded-2xl border border-zinc-800/60 bg-linear-to-b from-zinc-900/40 to-zinc-950/40 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-md relative">
          
          <div className="flex flex-col items-center justify-center">
            <Trophy className="h-5 w-5 text-blue-400 mb-1" />
            <div className="text-lg sm:text-2xl font-black text-white tracking-tight">Multiple</div>
            <div className="text-[9px] uppercase font-bold text-zinc-400 tracking-widest mt-0.5">Funded Accounts</div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <FileCheck2 className="h-5 w-5 text-emerald-400 mb-1" />
            <div className="text-lg sm:text-2xl font-black text-white tracking-tight">Verified</div>
            <div className="text-[9px] uppercase font-bold text-zinc-400 tracking-widest mt-0.5">Certificates</div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <BookOpen className="h-5 w-5 text-blue-400 mb-1" />
            <div className="text-lg sm:text-2xl font-black text-white tracking-tight">Active</div>
            <div className="text-[9px] uppercase font-bold text-zinc-400 tracking-widest mt-0.5">Trading Journal</div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Activity className="h-5 w-5 text-zinc-300 mb-1" />
            <div className="text-lg sm:text-2xl font-black text-white tracking-tight">Ongoing</div>
            <div className="text-[9px] uppercase font-bold text-zinc-400 tracking-widest mt-0.5">Learning</div>
          </div>

          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
        </div>

        {/* ================= SECONDARY SUB-METRIC STRIP ================= */}
        <div className="mt-4 max-w-md mx-auto rounded-xl border border-zinc-900 bg-zinc-950/30 p-4 flex items-center justify-center text-center">
          <div className="px-4">
            <span className="text-[11px] sm:text-xs font-bold text-blue-400">Risk-Based Approach</span>
            <div className="text-[9px] font-medium text-zinc-500 uppercase tracking-wider mt-0.5">Execution Protocol</div>
          </div>
        </div>

      </div>
    </main>
  );
}