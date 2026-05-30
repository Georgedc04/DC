"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 z-50 w-full px-4 md:px-6">
      {/* MAIN NAV CONTAINER */}
      <nav className="mx-auto max-w-7xl rounded-3xl md:rounded-full border border-zinc-800/40 bg-[#09090b]/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,2)] transition-all duration-300">
        <div className="flex items-center justify-between px-6 py-3.5 md:py-4">
          
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-1.5">
            <h1 className="text-2xl font-black tracking-wider text-[#D4A017] transition-all duration-300 group-hover:opacity-90">
              DC
            </h1>
          </Link>

          {/* DESKTOP NAV LINKS (Hidden on phone) */}
          <div className="hidden items-center gap-8 text-sm font-medium tracking-wide text-zinc-400 md:flex">
            <Link href="/" className="transition-colors duration-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="transition-colors duration-300 hover:text-white">
              About
            </Link>
            <Link href="/services" className="transition-colors duration-300 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="transition-colors duration-300 hover:text-white">
              Contact
            </Link>
          </div>

          {/* DESKTOP ACTION BUTTON (Hidden on phone) */}
          <div className="hidden items-center md:flex">
            <button className="relative flex items-center justify-center rounded-full bg-linear-to-b from-[#1c160a] to-[#070502] px-5 py-2 text-xs font-semibold tracking-wide text-zinc-100 border border-[#D4A017]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.03] hover:border-[#D4A017] active:scale-[0.98]">
              <span className="bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                Launch App
              </span>
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON (Visible only on phone) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 w-4 bg-zinc-300 rounded-xs transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-4 bg-zinc-300 rounded-xs transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-4 bg-zinc-300 rounded-xs transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>

        {/* MOBILE MENU DROPDOWN (Visible only on phone when open) */}
        <div className={`grid transition-all duration-300 ease-in-out md:hidden ${isOpen ? "grid-rows-[1fr] opacity-100 border-t border-zinc-800/30" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4 px-6 pt-2 pb-6 text-base font-medium tracking-wide text-zinc-400">
              <Link href="/" onClick={() => setIsOpen(false)} className="py-2 transition-colors hover:text-white border-b border-zinc-900">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 transition-colors hover:text-white border-b border-zinc-900">
                About
              </Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="py-2 transition-colors hover:text-white border-b border-zinc-900">
                Services
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="py-2 transition-colors hover:text-white border-b border-zinc-900">
                Contact
              </Link>
              
              {/* Premium Button inside mobile dropdown */}
              <button className="relative mt-2 flex w-full items-center justify-center rounded-full bg-linear-to-b from-[#1c160a] to-[#070502] py-3.5 font-semibold text-zinc-100 border border-[#D4A017]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                <span className="bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  Launch App
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}