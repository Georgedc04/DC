"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MilestoneItem {
  stage: string;
  title: string;
  image: string;
  description: string;
}

interface Props {
  items: MilestoneItem[];
}

export default function InteractiveTimeline({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navScrollRef = useRef<HTMLDivElement>(null);

  // Smooth Arrow Button Actions for Phone Viewports
  const handleMobileNav = (direction: "prev" | "next") => {
    let nextIndex = direction === "next" ? activeIndex + 1 : activeIndex - 1;
    
    // Bounds check wrap-around
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    
    setActiveIndex(nextIndex);

    // Auto center-scroll the active track element button on phone displays
    if (navScrollRef.current) {
      const children = navScrollRef.current.children;
      const targetEl = children[nextIndex] as HTMLElement;
      if (targetEl) {
        navScrollRef.current.scrollTo({
          left: targetEl.offsetLeft - navScrollRef.current.offsetWidth / 2 + targetEl.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto relative">
      
      {/* 1. HORIZONTAL NAVIGATION BAR WITH EMBEDDED PHONE TAP ARROWS */}
      <div className="relative w-full mb-4 group/nav">
        
        {/* MOBILE CLICK ARROWS - Only shows on mobile viewports */}
        <button
          onClick={() => handleMobileNav("prev")}
          className="md:hidden absolute left-1 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-lg bg-zinc-950/90 border border-zinc-800 text-zinc-200 flex items-center justify-center backdrop-blur-md active:scale-90 transition-all shadow-lg"
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4 text-blue-400" />
        </button>

        <button
          onClick={() => handleMobileNav("next")}
          className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-lg bg-zinc-950/90 border border-zinc-800 text-zinc-200 flex items-center justify-center backdrop-blur-md active:scale-90 transition-all shadow-lg"
          aria-label="Next step"
        >
          <ChevronRight className="h-4 w-4 text-blue-400" />
        </button>

        {/* Smooth Edge Fade Layers for Mobile Scroll Track */}
        <div className="absolute top-0 bottom-0 left-0 w-10 bg-linear-to-r from-[#030303] via-[#030303]/40 to-transparent z-20 pointer-events-none md:hidden" />
        <div className="absolute top-0 bottom-0 right-0 w-10 bg-linear-to-l from-[#030303] via-[#030303]/40 to-transparent z-20 pointer-events-none md:hidden" />

        {/* Scroll Row Slider Track */}
        <div 
          ref={navScrollRef}
          className="flex md:items-stretch gap-2 overflow-x-auto md:overflow-x-visible pb-2 scrollbar-none snap-x pl-10 pr-10 md:px-4 justify-start md:justify-between w-full scroll-smooth"
        >
          {items.map((item, idx) => (
            <div 
              key={`wrapper-${item.stage}`} 
              className="flex items-center gap-2 shrink-0 md:shrink md:flex-1 snap-center"
            >
              <button
                onClick={() => setActiveIndex(idx)}
                className={`
                  w-36 sm:w-40 md:w-full p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-14.5 sm:min-h-16
                  ${idx === activeIndex 
                    ? "border-blue-500/50 bg-linear-to-b from-zinc-900 to-zinc-950 shadow-[0_4px_25px_rgba(13,80,222,0.18)]" 
                    : "border-zinc-800/60 bg-zinc-950/30 opacity-40 hover:opacity-100"}
                `}
              >
                <div className={`text-[8px] md:text-[9px] font-extrabold tracking-wider uppercase transition-colors ${idx === activeIndex ? "text-blue-400" : "text-zinc-400"}`}>
                  {item.stage}
                </div>
                <div className={`text-[11px] md:text-xs font-bold leading-tight transition-colors mt-0.5 tracking-tight text-wrap ${idx === activeIndex ? "text-white" : "text-zinc-200"}`}>
                  {item.title}
                </div>
              </button>

              {/* Connector Chevrons - auto-hide cleanly on desktop row spans */}
              {idx < items.length - 1 && (
                <ChevronRight className={`hidden md:block h-3.5 w-3.5 shrink-0 opacity-40 ${idx < activeIndex ? "text-emerald-500/50" : idx === activeIndex ? "text-blue-500/50" : "text-zinc-800"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. LIVE ACTIVE CONTENT PANEL */}
      <div className="w-full rounded-2xl border border-zinc-800/50 bg-zinc-950/40 p-5 sm:p-6 md:p-8 relative overflow-hidden backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        
        {/* Subtle Ambient Internal Back-Glow */}
        <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        
        {/* Changed layout from flex-row to flex-col on mobile to let the graphic fill up the screen room */}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 md:gap-8 relative z-10">
          
          {/* Responsive Thumbnail Frame - Boosted sizing footprint entirely on phone displays */}
          <div className="relative shrink-0 bg-zinc-900/30 rounded-xl border border-zinc-800/80 p-2 flex items-center justify-center overflow-hidden
            w-full h-44 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40
          ">
            <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 via-transparent to-transparent pointer-events-none" />
            <Image
              key={`unified-img-${activeIndex}`}
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              fill
              className="object-contain p-1 transition-transform duration-500 scale-100 animate-in fade-in zoom-in-95"
              unoptimized
            />
          </div>
          
          {/* Text Content Block */}
          <div className="grow min-w-0 w-full text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <span className="text-[7.5px] sm:text-[8.5px] font-black px-1.5 py-0.5 rounded-md border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-wider shrink-0">
                Active Tier
              </span>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white tracking-tight truncate">
                {items[activeIndex].title}
              </h3>
            </div>
            
            <p className="mt-2 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-zinc-300 font-normal">
              {items[activeIndex].description}
            </p>
          </div>

        </div>

        {/* Fine Inner Boundary Ambient Accent Line Ring */}
        <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20" />
      </div>

    </div>
  );
}