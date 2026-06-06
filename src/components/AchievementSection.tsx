import { getAchievements } from "@/lib/achievements";
import AchievementCards from "@/components/AchievementCards";
import { Award } from "lucide-react";

export default async function AchievementSection() {
  const rawData = await getAchievements();
  
  // Safe validation fallback array layer
  const achievements = Array.isArray(rawData) ? rawData : [];

  return (
    <section className="relative h-auto w-full overflow-hidden bg-[#030303] text-zinc-100 pt-12 pb-6 sm:py-20 lg:py-28">
      
      {/* GLOBAL BACKGROUND TEXTURE MATTE */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* AMBIENT BRAND GLOWS - Swapped to Canonical v4 Utilities */}
      <div className="absolute right-[-10%] top-[-5%] h-100 w-100 sm:h-125 sm:w-125 rounded-full bg-blue-600/10 blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-1/4 h-100 w-100 sm:h-125 sm:w-125 rounded-full bg-blue-700/5 blur-[120px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER BLOCK - Shrunk and high-density for mobile app feel */}
        <div className="mb-6 sm:mb-16 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/5 border border-blue-500/20 px-2.5 py-1 rounded-full backdrop-blur-md">
            <Award className="h-3 w-3 text-blue-500" />
            Milestones
          </span>
          
          {/* Removed conflicting text-white utilities to allow the text gradient clip to shine */}
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Trading Achievements
          </h2>
          
          <p className="mt-1.5 max-w-xl text-xs sm:text-sm md:text-base text-zinc-400 font-normal leading-relaxed px-2">
            Verified performance markers and funded capital allocation logs organized into a premium dashboard view.
          </p>
        </div>

        {/* CONDITIONAL EMPTY STATE OR CONTAINER GRID - Fixed syntax crash */}
        {achievements.length === 0 ? (
          <div className="rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 sm:p-10 text-center max-w-xs sm:max-w-sm mx-auto shadow-xl backdrop-blur-md">
            <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-500">
              <Award className="h-4 w-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-300 tracking-wider uppercase">No Milestones Logged</h4>
            <p className="mt-0.5 text-[11px] text-zinc-500 font-mono">Verified milestone records are currently empty.</p>
          </div>
        ) : (
          <AchievementCards achievements={achievements} />
        )}
      </div>
    </section>
  );
}