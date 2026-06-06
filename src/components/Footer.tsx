"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-0 w-full overflow-hidden bg-[#030303] px-4 pb-12 pt-6 text-zinc-400 md:px-6">
      
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-[-10%] -z-10 h-80 w-80 rounded-full bg-[#0D50DE]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl rounded-3xl border border-zinc-800/40 bg-[#09090b]/20 p-8 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] md:p-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* BRAND */}
          <div className="flex flex-col items-start lg:col-span-5">
            <Link
              href="/"
              className="mb-4 inline-block transition-transform duration-300 hover:scale-[1.02]"
            >
              <Logo />
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              Sharing Smart Money Concepts, trading psychology,
              risk management, and the lessons learned through
              the journey from beginner to professional trader.
            </p>

            <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 p-1.5 transition-colors duration-300 focus-within:border-[#0D50DE]/40">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-1.5 text-xs text-white placeholder-zinc-600 outline-none"
              />

              <button className="cursor-pointer rounded-full border border-[#0D50DE]/30 bg-linear-to-b from-[#3DC8FF to-[#070502] px-5 py-2 text-[11px] font-bold tracking-wide text-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:border-[#0D50DE]">
                Subscribe
              </button>
            </div>
          </div>

          {/* TRADING */}
          <div className="flex flex-col gap-3.5 lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D50DE]">
              Trading
            </h4>

            <Link href="/journey" className="text-sm font-medium hover:text-white">
              My Journey
            </Link>

            <Link href="/milestones" className="text-sm font-medium hover:text-white">
              Trading Milestones
            </Link>

            <Link href="/strategy" className="text-sm font-medium hover:text-white">
              Strategy
            </Link>

            <Link href="/insights" className="text-sm font-medium hover:text-white">
              Market Insights
            </Link>
          </div>

          {/* ABOUT */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D50DE]">
              About
            </h4>

            <Link href="/about" className="text-sm font-medium hover:text-white">
              About Me
            </Link>

            <Link href="/mentorship" className="text-sm font-medium hover:text-white">
              Mentorship
            </Link>

            <Link href="/testimonials" className="text-sm font-medium hover:text-white">
              Testimonials
            </Link>

            <Link href="/contact" className="text-sm font-medium hover:text-white">
              Contact
            </Link>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D50DE]">
              Legal
            </h4>

            <Link href="/privacy" className="text-sm font-medium hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="text-sm font-medium hover:text-white">
              Terms of Use
            </Link>

            <Link href="/risk-disclosure" className="text-sm font-medium hover:text-white">
              Risk Disclosure
            </Link>

            <Link href="/disclaimer" className="text-sm font-medium hover:text-white">
              Disclaimer
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/30 pt-6 text-xs font-medium text-zinc-600 sm:flex-row">

          <div>
            © {new Date().getFullYear()} DC FX. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-400">
              YouTube
            </Link>

            <Link href="#" className="hover:text-zinc-400">
              Instagram
            </Link>

            <Link href="#" className="hover:text-zinc-400">
              TradingView
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
