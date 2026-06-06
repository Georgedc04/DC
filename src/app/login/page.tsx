"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-zinc-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      
      {/* 1. BACKGROUND DESIGN SYSTEM COMPONENTS */}
      {/* Texture Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      {/* Subtle Radial Floor Glows */}
      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0D50DE]/5 blur-[140px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] h-100 w-100 rounded-full bg-[#0D50DE]/5 blur-[100px] pointer-events-none" />

      {/* 2. MAIN SPLIT-SCREEN GLASS CONTAINER */}
      <div className="relative z-10 w-full max-w-5xl rounded-3xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* Subtle rim reflection line inside container */}
        <div className="absolute inset-0 rounded-3xl border border-white/3 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* ================= LEFT SIDE: FORM ================= */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-6 xl:col-span-5 bg-linear-to-b from-zinc-900/20 to-black/40">
            
            {/* Top Branding Header */}
            <div className="mb-8">
              <Link href="/" className="inline-block text-2xl font-black tracking-wider text-[#0D50DE]">
                DC
              </Link>
            </div>

            {/* Core Credentials Card */}
            <div className="w-full">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0D50DE]/20 bg-[#0D50DE]/5 px-3 py-1">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#0D50DE]/90">
                  Trading • Analytics • Growth
                </span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                Sign In to Trade
              </h2>
              <p className="text-sm text-zinc-400 mb-8 font-normal">
                Enter your credentials to access your dashboard and trade with confidence.
              </p>

              {/* Input Interactive Fields */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-full border border-zinc-800 bg-zinc-950/60 px-5 py-3.5 text-sm text-white placeholder-zinc-600 outline-hidden transition-all duration-300 focus:border-[#0D50DE]/50 focus:bg-zinc-950 focus:shadow-[0_0_15px_rgba(212,160,23,0.06)]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Password
                    </label>
                    <Link href="#" className="text-xs font-medium text-[#0D50DE]/80 transition-colors hover:text-[#0D50DE]">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-full border border-zinc-800 bg-zinc-950/60 px-5 py-3.5 text-sm text-white placeholder-zinc-600 outline-hidden transition-all duration-300 focus:border-[#0D50DE]/50 focus:bg-zinc-950 focus:shadow-[0_0_15px_rgba(212,160,23,0.06)]"
                      required
                    />
                  </div>
                </div>

                {/* Framer-Inspired High-Fidelity Glow Button */}
                <div className="group relative inline-flex w-full pt-4">
                  <div className="absolute -inset-0.5 rounded-full bg-[#0D50DE]/40 blur-md opacity-60 transition duration-500 group-hover:opacity-90 group-hover:blur-lg" />
                  <button type="submit" className="relative w-full flex items-center justify-center rounded-full bg-linear-to-b from-[#3DC8FF to-[#070502] py-4 font-semibold text-zinc-100 tracking-wide border border-[#0D50DE]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_12px_24px_-4px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-[1.01] hover:border-[#0D50DE] active:scale-[0.99]">
                    <span className="bg-linear-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                      Access Account
                    </span>
                    <div className="absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#0D50DE]/60 to-transparent" />
                  </button>
                </div>
              </form>
            </div>

            {/* Footer Form Navigation */}
            <div className="mt-8 text-center text-xs text-zinc-500">
              Don&apos;t have an account?{" "}
              <Link href="#" className="font-semibold text-[#0D50DE] hover:underline">
                Sign Up
              </Link>
            </div>

          </div>

          {/* ================= RIGHT SIDE: PLATFORM PREVIEW ================= */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 relative items-center justify-center p-12 bg-linear-to-br from-zinc-900/10 via-black/40 to-zinc-950 border-l border-zinc-900/60 overflow-hidden">
            
            {/* Ambient Backlight for the Chart showcase */}
            <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0D50DE]/10 blur-[90px] pointer-events-none" />

            <div className="relative w-full max-w-md rounded-2xl border border-zinc-800/40 bg-zinc-900/10 p-3 backdrop-blur-xs shadow-[0_24px_50px_rgba(0,0,0,0.6)]">
              {/* Inner subtle panel edge line */}
              <div className="absolute inset-0 rounded-2xl border border-white/2 pointer-events-none" />
              
              <Image
                src="/chartsticker.png"
                alt="Trading Data Chart Analytics Display"
                width={800}
                height={560}
                priority
                className="w-full h-auto rounded-xl object-cover brightness-[0.9] contrast-[1.05]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}