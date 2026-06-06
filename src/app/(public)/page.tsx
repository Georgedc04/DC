import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import TradingMilestones from "@/app/tradingMilestones/page";
import AchievementSection from "@/components/AchievementSection";
import CertificateSection from "@/components/certificates/CertificateSection";
import PayoutSection from "@/components/payouts/PayoutSection";


export default function HomePage() {
  return (
    // Reverted background wrapper to #030303 to unify component canvas tones
    <main className="min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-[#0D50DE]/20 selection:text-[#0D50DE]">
      
      {/* 1. HERO MAIN ENTRANCE */}
      <Hero />
     <AchievementSection/>
    
    <CertificateSection />

    <PayoutSection />

    </main>
  );
}