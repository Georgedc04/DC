"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const milestones = [
  {
    stage: "Stage 1",
    title: "The Beginner",
    image: "/milestones/1.png",
    description:
      "Learning market structure, candlesticks, risk management, and basic trading psychology. The goal is survival and understanding the market.",
  },
  {
    stage: "Stage 2",
    title: "The Developing Trader",
    image: "/milestones/2.png",
    description:
      "Building consistency, following a trading plan, journaling trades, and eliminating emotional decisions.",
  },
  {
    stage: "Stage 3",
    title: "The Consistent Trader",
    image: "/milestones/3.png",
    description:
      "Profitable over time, disciplined with risk, and focused on execution rather than chasing profits.",
  },
  {
    stage: "Stage 4",
    title: "The Funded Trader",
    image: "/milestones/4.png",
    description:
      "Managing larger capital, passing evaluations, and treating trading as a professional business.",
  },
  {
    stage: "Stage 5",
    title: "The Millionaire Mindset",
    image: "/milestones/5.png",
    description:
      "Building wealth, protecting capital, creating multiple income streams, and achieving financial freedom.",
  },
];

export default function TradingMilestones() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Sets the activation horizon line at 45% down the viewport screen
      const triggerPoint = window.innerHeight * 0.45;
      let currentActive = -1;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        
        if (rect.top <= triggerPoint) {
          currentActive = index;
        }
      });

      setActiveIndex(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative z-0 mx-auto max-w-7xl px-6 py-20 md:py-32 bg-[#030303] text-zinc-100 overflow-hidden">
      
      {/* ================= PREMIUM BACKGROUND TEXTURES & ATMOSPHERE ================= */}
      {/* 1. Film Grain Noise Overlay */}
      <div
        className="absolute inset-0 -z-40 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* 2. Chart Vector Watermark with Gradient Fade Mask */}
      <div
        className="absolute inset-0 -z-30 opacity-[0.03] pointer-events-none select-none mask-[linear-gradient(to_bottom,white_50%,transparent)]"
        style={{
          backgroundImage: "url('/Chart.png')",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1400px",
        }}
      />

      {/* 3. Immersive Boundary Vignette */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-black/20 via-transparent to-black pointer-events-none" />

      {/* 4. Giant "Confidence" Typography Text Watermark */}
      <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[13vw] font-black tracking-widest text-zinc-950 uppercase opacity-35 whitespace-nowrap">
        Confidence
      </div>

      {/* 5. Ambient Gold Section Glow */}
      <div className="absolute left-[-10%] top-1/3 h-125 w-125 rounded-full bg-[#D4A017]/5 blur-[130px] pointer-events-none" />


      {/* ================= MAIN FOREGROUND CONTENT BLOCK ================= */}
      {/* SECTION HEADER BLOCK */}
      <div className="relative z-10 mb-24 flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/20 bg-[#D4A017]/5 px-4 py-1.5 backdrop-blur-md">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#D4A017]/90">
            Trading Journey
          </span>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-balance leading-none">
          The 5 Stages of a <br />
          <span className="bg-linear-to-r from-[#D4A017] via-[#f3cb65] to-[#D4A017] bg-clip-text text-transparent">
            Successful Trader
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 font-normal">
          Every professional asset manager follows a path. Master the systematic mechanics of each step before scaling into the next tier.
        </p>
      </div>

      {/* TIMELINE PROGRESSION LIST */}
      <div className="relative z-10 mx-auto max-w-5xl space-y-24 md:space-y-32">
        
        {/* Central timeline connector line wire */}
        <div className="absolute left-1/2 top-4 bottom-4 hidden w-px bg-zinc-900 md:block -translate-x-1/2 pointer-events-none z-0" />

        {milestones.map((item, index) => {
          const isEven = index % 2 === 0;
          const isActive = index <= activeIndex;

          return (
            <div
              key={item.stage}
              ref={(el) => { rowRefs.current[index] = el; }}
              className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-0"
            >
              
              {/* VISUAL IMAGE CONTAINER CHUNK */}
              <div className={`flex justify-center md:col-span-5 ${isEven ? "md:order-1 md:justify-end md:pr-12" : "md:order-3 md:justify-start md:pl-12"}`}>
                <div className={`group relative rounded-2xl border p-5 backdrop-blur-xs transition-all duration-700 ${
                  isActive 
                    ? "border-[#D4A017]/30 bg-zinc-900/15 shadow-[0_16px_36px_rgba(212,160,23,0.05)] scale-[1.01]" 
                    : "border-zinc-800/40 bg-zinc-900/10 opacity-40 shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
                }`}>
                  
                  {/* Subtle glass container edge reflection */}
                  <div className="absolute inset-0 rounded-2xl border border-white/2 pointer-events-none" />
                  
                  {/* Active/Hover micro radial back-flare */}
                  <div className={`absolute inset-0 rounded-2xl bg-[#D4A017]/3 blur-xl transition-opacity duration-500 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`} />

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={240}
                    style={{ width: "100%", height: "auto" }}
                    className="relative object-contain brightness-[0.9] contrast-[1.05] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                                    </div>
              </div>

              {/* TIMELINE NODE INDICATOR DOTS */}
              <div className="hidden md:flex md:col-span-2 md:order-2 items-center justify-center pointer-events-none z-20">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full border bg-[#030303] shadow-md ring-4 ring-[#030303] transition-all duration-500 ${
                  isActive ? "border-[#D4A017] scale-110" : "border-zinc-800"
                }`}>
                  <div className={`h-2 w-2 rounded-full transition-all duration-500 ${
                    isActive 
                      ? "bg-[#D4A017] shadow-[0_0_15px_#D4A017,0_0_5px_#D4A017]" 
                      : "bg-zinc-800 shadow-none"
                  }`} />
                </div>
              </div>

              {/* TEXT SUMMARY BLOCK */}
              <div className={`flex flex-col items-start text-left md:col-span-5 transition-all duration-700 ${
                isEven ? "md:order-3 md:pl-12" : "md:order-1 md:items-end md:text-right md:pr-12"
              } ${isActive ? "opacity-100 translate-x-0" : "opacity-30"}`}>
                
                {/* Stage Badge Capsule */}
                <div className={`mb-4 inline-block rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase transition-colors duration-500 ${
                  isActive ? "border-[#D4A017]/30 bg-[#D4A017]/5 text-[#D4A017]" : "border-zinc-800 bg-zinc-900/40 text-zinc-500"
                }`}>
                  {item.stage}
                </div>

                <h3 className="mb-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400 font-normal">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}