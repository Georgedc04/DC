"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Achievement } from "@/types/achievement";
import { X, ArrowUpRight, ShieldCheck } from "lucide-react";

interface Props {
  achievements: Achievement[];
}

export default function AchievementCards({ achievements }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const safeAchievements = Array.isArray(achievements) ? achievements : [];

  // Tripled to ensure flawless, continuous loops across ultra-wide monitors
  const loopCards = [...safeAchievements, ...safeAchievements, ...safeAchievements];

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setSelectedImage(null);
  };

  return (
    <>
      {/* MARQUEE CONTAINER WITH SIDE FADES */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Horizontal edge gradient blurs */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-linear-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-linear-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

        {/* TRACK INFINITE LOOP */}
        <div className="flex gap-3 sm:gap-6 w-max animate-marquee-track hover:[animation-play-state:paused]">
          {loopCards.map((item: Achievement, index: number) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => item.image && openModal(item.image)}
              className="
                group 
                relative 
                flex 
                flex-col 
                justify-between
                overflow-hidden 
                bg-zinc-900/40
                border 
                border-zinc-800/80 
                rounded-xl
                sm:rounded-2xl
                transition-all 
                duration-300 
                cursor-pointer
                shrink-0
                hover:border-blue-500/30
                hover:bg-zinc-900/80
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]
                
                /* Super Compact Sizing - Matches the App UI feel */
                w-36 h-52.5
                sm:w-52 sm:h-64
                md:w-60 md:h-72
              "
            >
              {/* CARD TOP BODY */}
              <div className="p-3.5 sm:p-5 flex flex-col justify-between h-full relative z-10">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-black text-xl sm:text-2xl tracking-tight text-white font-sans">
                      {item.account_size}
                    </div>
                    <div className="flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20 text-[8px] font-bold tracking-wider text-emerald-400 uppercase">
                      <ShieldCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span className="hidden xs:inline">Verified</span>
                    </div>
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                    Allocation
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-bold text-zinc-200 text-[11px] sm:text-sm group-hover:text-blue-400 transition-colors duration-200 truncate">
                    {item.title}
                  </h3>
                  <p className="text-[9px] sm:text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mt-0.5">
                    {item.firm}
                  </p>
                </div>
              </div>

              {/* CARD BOTTOM BAR */}
              <div className="bg-zinc-900/90 border-t border-zinc-800/60 flex items-center justify-between h-10 sm:h-12 px-3.5 sm:px-5 relative z-10">
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-400 text-[10px] sm:text-xs">
                    {new Date(item.date).toLocaleDateString("en-US", { 
                      month: "short", 
                      year: "2-digit" 
                    })}
                  </span>
                </div>

                <div className="inline-flex items-center gap-0.5 text-[10px] sm:text-[11px] font-bold text-zinc-400 group-hover:text-blue-400 transition-colors duration-200">
                  <span>Proof</span>
                  <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DYNAMIC COMPACT MODAL CONTAINER */}
      <dialog
        ref={dialogRef}
        onClick={closeModal}
        onClose={closeModal}
        className="
          fixed 
          inset-0 
          z-50 
          m-auto 
          w-full 
          h-full
          max-w-4xl
          max-h-full
          sm:h-auto
          bg-transparent
          p-0
          border-0
          focus:outline-hidden
          
          open:animate-in 
          open:fade-in 
          open:zoom-in-95 
          open:duration-200 

          backdrop:bg-black/85
          backdrop:backdrop-blur-xl
        "
      >
        {/* Flex Canvas Sheet Wrapper */}
        <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-10 relative">
          
          {/* Background click dismiss layer */}
          <div className="absolute inset-0 z-0" onClick={closeModal} />

          {/* IMAGE CONTAINER FRAME */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="
              group
              relative 
              z-10 
              w-full 
              h-[55vh]
              sm:h-auto 
              sm:aspect-video 
              overflow-visible 
              rounded-2xl 
              border 
              border-zinc-800 
              bg-zinc-950
              p-2
              shadow-[0_24px_70px_rgba(0,0,0,0.8)]
            "
          >
            {selectedImage && (
              <Image 
                src={selectedImage} 
                alt="Verified Certificate Proof" 
                fill 
                className="object-contain p-1 sm:p-3 rounded-xl" 
                priority 
                unoptimized 
              />
            )}

            {/* DESKTOP CLOSE BUTTON */}
            <button 
              onClick={closeModal}
              className="
                hidden sm:flex 
                absolute 
                -top-3 
                -right-3 
                h-8 
                w-8 
                rounded-full 
                bg-zinc-900 
                border 
                border-zinc-800 
                text-zinc-400 
                items-center 
                justify-center 
                transition-all 
                duration-150 
                hover:text-white 
                hover:border-zinc-700 
                hover:scale-105 
                active:scale-95 
                z-30 
                shadow-xl
              "
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* MOBILE CLOSE BUTTON */}
          <div className="relative z-20 w-full max-w-xs mt-6 sm:hidden">
            <button 
              onClick={closeModal}
              className="
                w-full
                flex 
                items-center 
                justify-center 
                gap-2 
                rounded-xl 
                border 
                border-zinc-800 
                bg-zinc-900/90 
                text-zinc-200 
                py-3 
                text-xs 
                font-semibold 
                tracking-wide 
                backdrop-blur-md 
                active:scale-95 
                transition-all 
                shadow-2xl
              "
            >
              <X className="h-3.5 w-3.5 text-blue-500" />
              Close Preview
            </button>
          </div>

        </div>
      </dialog>
    </>
  );
}