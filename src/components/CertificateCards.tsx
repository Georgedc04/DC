"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Certificate } from "@/types/certificate";
import { ExternalLink, X, Award, CheckCircle2 } from "lucide-react";

interface Props {
  certificates: Certificate[];
}

export default function CertificateCards({ certificates }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const safeCertificates = Array.isArray(certificates) ? certificates : [];

  const openModal = (image: string) => {
    setSelectedImage(image);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setSelectedImage(null);
  };

  return (
    <>
      {/* 
        ASYNCHRONOUS WAVE GRID (Inspired by X.jpg)
        - Mobile: Super tight, dense 2-column layout to fit your real app look.
        - Desktop: Spaced 4-column column layouts with offset transforms (`md:nth-child(...)`).
      */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 items-start [content-visibility:auto]">
          {safeCertificates.map((item, index) => (
            <button
              key={item.id}
              onClick={() => item.image && openModal(item.image)}
              className={`
                group
                relative
                w-full
                flex
                flex-col
                overflow-hidden
                rounded-xl
                sm:rounded-2xl
                border
                border-zinc-800/80
                bg-linear-to-b
                from-zinc-900/90
                to-black
                text-left
                transition-all
                duration-500
                ease-out
                hover:border-blue-500/30
                hover:bg-zinc-900/85
                hover:shadow-[0_15px_35px_rgba(13,80,222,0.12)]
                
                /* Compact on Phone vs Proportional Scale on Desktop */
                h-56 sm:h-76 md:h-84 lg:h-90
                
                /* Asymmetric Offset Wave Rules matching the visual flow of X.jpg on larger displays */
                ${index % 4 === 1 ? "md:translate-y-4" : ""}
                ${index % 4 === 2 ? "md:-translate-y-2" : ""}
                ${index % 4 === 3 ? "md:translate-y-6" : ""}
              `}
            >
              {/* Card Hover Spotlight Overlay */}
              <div className="absolute inset-0 z-0 bg-[radial-gradient(400px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(13,80,222,0.03),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Certificate Image Preview Box */}
              {item.image && (
                <div className="relative z-10 h-20 sm:h-32 md:h-36 lg:h-40 w-full overflow-hidden border-b border-zinc-800/50 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>
              )}

              {/* Card Dynamic Body Sheet Layout */}
              <div className="relative z-10 p-2.5 sm:p-4 flex flex-col justify-between grow w-full">
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-0.5 sm:gap-1 rounded-full bg-emerald-500/10 px-1 sm:px-1.5 py-0.5 border border-emerald-500/20">
                      <CheckCircle2 className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-emerald-400" />
                      <span className="text-[7.5px] sm:text-[9px] font-bold tracking-wider text-emerald-400 uppercase">
                        Ver
                      </span>
                    </div>

                    <div className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-1 sm:px-1.5 py-0.5 text-[7.5px] sm:text-[9px] font-bold tracking-wider text-amber-400 uppercase">
                      <Award className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                      <span>Cred</span>
                    </div>
                  </div>

                  <h3 className="mt-1.5 line-clamp-2 text-[10px] sm:text-xs md:text-sm font-bold text-zinc-100 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-zinc-500 font-medium line-clamp-1">
                    {item.issuer}
                  </p>
                </div>

                {/* Card Footer Section Line */}
                <div className="mt-auto border-t border-zinc-800/60 pt-1.5 sm:pt-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-[7.5px] sm:text-[8.5px] uppercase tracking-widest font-bold text-zinc-500">
                      Issued
                    </p>
                    <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400 mt-0.5">
                      {item.issue_date}
                    </p>
                  </div>

                  <div className="flex items-center gap-0.5 rounded bg-zinc-900/80 border border-zinc-800 px-1 py-0.5 text-[9px] sm:text-[10px] font-medium text-zinc-400 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                    <span>Go</span>
                    <ExternalLink className="h-1.5 w-1.5 sm:h-2 sm:w-2" />
                  </div>
                </div>
              </div>

              {/* Edge Specular Outline Cover Overlay */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/5 pointer-events-none z-20" />
            </button>
          ))}
        </div>
      </div>

      {/* IMMERSIVE LIGHTWEIGHT DISMISS DIALOG CONTAINER */}
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
        <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-10 relative">
          <div className="absolute inset-0 z-0" onClick={closeModal} />

          {/* IMAGE CONTAINER CONTAINER HUB */}
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

            {/* DESKTOP INTEGRATED DISMISS TRIGGER BUTTON */}
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

          {/* NATIVE APP MOBILE STYLED DISMISS ACTION BAR BAR */}
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