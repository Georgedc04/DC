import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-zinc-100 flex items-center justify-center">
      
      {/* 1. BACKGROUND TEXTURES & EFFECTS */}
      {/* Subtle Noise/Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-80 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      {/* Large Chart Watermark with cleaner fade */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none mask-image-[linear-gradient(to_bottom,white_white,transparent)]"
        style={{
          backgroundImage: "url('/chartsticker.png')",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1300px",
        }}
      />

      {/* Vignette Layer */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent via-black/40 to-black pointer-events-none" />

      {/* Premium Ambient Background Glows */}
      <div className="absolute right-[-10%] top-1/4 h-125 w-125 rounded-full bg-[#D4A017]/10 blur-[130px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute left-[-5%] bottom-1/4 h-100 w-100 rounded-full bg-zinc-800/20 blur-[120px] pointer-events-none" />

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:py-32 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">

          {/* LEFT COLUMN (Copywriting & CTAs) */}
          <div className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-6">
            
            

            {/* Typography with Balanced Line Heights */}
            <h1 className="text-balance text-5xl font-extrabold tracking-tight text-white md:text-7xl xl:text-8xl leading-[0.95]">
                Trade With

                <span
                  className={`${dancing.className} mt-3 block bg-linear-to-r from-[#D4A017] via-[#f3cb65] to-[#D4A017] bg-clip-text text-transparent pb-2`}
                >
                  Confidence
                </span>
              </h1>

            {/* Body Copy - Max-width optimized for readability */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-200 font-normal">
              Advanced trading analytics, real-time performance tracking, 
              and smart automated decision-making built for modern, disciplined traders.
            </p>

            {/* Interactive Futuristic Button Group */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              
              {/* Primary Glowing Glass Pill (Inspired by Framer University (@learnframer) on X.jpg) */}
              <div className="group relative inline-flex">
                <div className="absolute -inset-1 rounded-full bg-[#D4A017]/40 blur-md opacity-70 transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
                <Link href="/login" 
                    className="relative flex items-center justify-center rounded-full bg-linear-to-b from-[#1c160a] to-[#070502] px-8 py-4 font-semibold text-zinc-100 tracking-wide border border-[#D4A017]/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_12px_24px_-4px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-[1.03] hover:border-[#D4A017] active:scale-[0.98]">
                  <span className="bg-linear-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                    Get Started Free
                  </span>
                  <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-[#D4A017]/60 to-transparent" />
                </Link>
              </div>

              {/* Secondary Sleek Border-Fill Pill */}
              <button className="group relative flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/30 backdrop-blur-md px-8 py-4 font-medium text-zinc-300 tracking-wide transition-all duration-300 hover:border-zinc-600 hover:text-white hover:bg-zinc-900/60 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                Learn More
              </button>

            </div>

          </div>

          {/* RIGHT COLUMN (The Visual Centerpiece) */}
          <div className="relative flex w-full items-center justify-center lg:col-span-5 xl:col-span-6 lg:justify-end">
            
            {/* Background Radial Flare for the UI Graphic */}
            <div className="absolute left-1/2 top-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/10 blur-[100px] pointer-events-none" />

            {/* Simulated Glass/Metallic Floating Frame for your image */}
            <div className="relative w-full max-w-135 xl:max-w-150 rounded-2xl border border-zinc-800/50 bg-linear-to-b from-zinc-900/30 to-black/50 p-3 backdrop-blur-sm shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-[1.01]">
              
              {/* Inner subtle rim shimmer */}
              <div className="absolute inset-0 rounded-2xl border border-white/3 pointer-events-none" />
              
              <Image
                src="/Charthero.png"
                alt="Trading Platform Dashboard Analytics"
                width={1200}
                height={840}
                priority
                className="w-full h-auto rounded-xl object-cover brightness-[0.95] contrast-[1.05]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}