"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 z-50 w-full px-4 md:px-6">
      <nav className="mx-auto max-w-7xl rounded-3xl border border-zinc-800/40 bg-[#09090b]/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] md:rounded-full">

        <div className="flex items-center justify-between px-6 py-3.5">

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center justify-center py-1"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-zinc-400 md:flex">

            <Link
              href="/"
              className="transition-colors duration-300 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition-colors duration-300 hover:text-white"
            >
              About
            </Link>

            <Link
              href="/journey"
              className="transition-colors duration-300 hover:text-white"
            >
              Journey
            </Link>

            <Link
              href="/strategy"
              className="transition-colors duration-300 hover:text-white"
            >
              Strategy
            </Link>

            <Link
              href="/results"
              className="transition-colors duration-300 hover:text-white"
            >
              Results
            </Link>

            <Link
              href="/contact"
              className="transition-colors duration-300 hover:text-white"
            >
              Contact
            </Link>

          </div>

          {/* CTA */}
          <div className="hidden items-center md:flex">
            <button className="cursor-pointer rounded-full border border-[#D4A017]/30 bg-linear-to-b from-[#1c160a] to-[#070502] px-6 py-2.5 text-xs font-bold tracking-wide text-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.03] hover:border-[#D4A017] active:scale-[0.98]">
              <span className="bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                View Trading Journey
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              <span
                className={`h-0.5 w-4 rounded-xs bg-zinc-300 transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-xs bg-zinc-300 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-xs bg-zinc-300 transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? "grid-rows-[1fr] border-t border-zinc-800/30 opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4 px-6 pb-6 pt-2 text-base font-semibold tracking-wide text-zinc-400">

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-900/60 py-2 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-900/60 py-2 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/journey"
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-900/60 py-2 hover:text-white"
              >
                Journey
              </Link>

              <Link
                href="/strategy"
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-900/60 py-2 hover:text-white"
              >
                Strategy
              </Link>

              <Link
                href="/results"
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-900/60 py-2 hover:text-white"
              >
                Results
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-900/60 py-2 hover:text-white"
              >
                Contact
              </Link>

              <button className="mt-2 w-full cursor-pointer rounded-full border border-[#D4A017]/40 bg-linear-to-b from-[#1c160a] to-[#070502] py-3.5 font-bold text-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  View Trading Journey
                </span>
              </button>

            </div>
          </div>
        </div>

      </nav>
    </div>
  );
}
