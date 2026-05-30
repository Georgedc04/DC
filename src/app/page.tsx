import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/home/Services";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import TradingMilestones from "@/components/home/TradingMilestones";

export default function HomePage() {
  return (
    // Reverted background wrapper to #030303 to unify component canvas tones
    <main className="min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-[#D4A017]/20 selection:text-[#D4A017]">
      
      {/* 1. HERO MAIN ENTRANCE */}
      <Hero />

      {/* 2. SOCIAL PROOF LOGO TICKER */}
      {/* Positioned right under the hero, before the deep-dive copy sections */}
      <LogoMarquee />

      {/* 3. CORE MONETIZATION BLUEPRINT (SERVICES / COURSE PACKS) */}
      <Services />

      {/* 4. PRODUCT VALUE ANCHORING (FEATURES) */}
      <Features />

      {/* 5. CREDIBILITY ACCELERATOR (STATS) */}
      <Stats />

      <TradingMilestones />

    </main>
  );
}