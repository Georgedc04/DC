"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Home, User, Compass, BookOpen, Milestone } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Strategy", href: "/strategy", icon: Compass },
    { label: "Blog", href: "/blog", icon: BookOpen },
  ];

  return (
    <>
      {/* ==========================================
          1. DESKTOP HEADER NAVIGATION BAR (Hidden on Mobile)
         ========================================== */}
      <div className="fixed top-4 left-0 z-50 w-full px-6 hidden md:block">
        <nav className="mx-auto max-w-7xl rounded-full border border-zinc-800/50 bg-[#09090b]/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-3">
            
            {/* Logo Link Anchor */}
            <Link href="/" className="flex shrink-0 items-center justify-center py-1 transition-transform active:scale-95">
              <Logo />
            </Link>

            {/* Strict 4-Link Dynamic Route Layer */}
            <div className="flex items-center gap-1 text-sm font-semibold tracking-wide text-zinc-400">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive ? "text-white bg-white/5" : "hover:text-zinc-200 hover:bg-white/2"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Clean Thin Blue Border Call-To-Action (Side Placement) */}
            <div className="flex items-center">
              <Link
                href="/tradingMilestones"
                className="
                  group 
                  relative 
                  flex 
                  items-center 
                  justify-center 
                  gap-2 
                  rounded-full 
                  bg-transparent
                  border 
                  border-blue-500/40 
                  px-5 
                  py-2 
                  text-xs 
                  font-bold 
                  text-zinc-200
                  tracking-wide 
                  whitespace-nowrap 
                  transition-all 
                  duration-200 
                  ease-out
                  hover:scale-[1.01] 
                  hover:text-white
                  hover:border-blue-400 
                  hover:bg-blue-500/5
                  active:scale-[0.99]
                "
              >
                <span>View Trading Journey</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-blue-400 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>
        </nav>
      </div>

      {/* ==========================================
          2. FIXED NATIVE MOBILE APP BOTTOM BAR (Locked on Screen)
         ========================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full px-4 pb-4 md:hidden pointer-events-none">
        <div className="mx-auto max-w-md w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl shadow-[0_-10px_35px_rgba(0,0,0,0.8)] pointer-events-auto overflow-hidden">
          
          {/* 5-Column Navigation Grid */}
          <div className="grid grid-cols-5 items-center justify-items-center h-16 pt-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex flex-col items-center justify-center w-full h-full relative"
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <span className="absolute top-0 h-0.5 w-6 rounded-full bg-blue-500 shadow-[0_0_10px_#0D50DE]" />
                  )}
                  <Icon className={`h-5 w-5 ${isActive ? "text-blue-400" : "text-zinc-500"}`} />
                  <span className={`text-[10px] font-medium tracking-tight mt-1 ${isActive ? "text-zinc-200" : "text-zinc-500"}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}

            {/* Trading Journey Hub Tab */}
            <Link
              href="/tradingMilestones"
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              <div className="relative p-1.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                
                {/* Live Sticker Pulse */}
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-zinc-950"></span>
                </span>

                <Milestone className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold tracking-tight mt-1 text-blue-400">
                Journey
              </span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}