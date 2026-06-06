import Image from "next/image";
import { getPayouts } from "@/lib/payouts";
import { Payout } from "@/types/payout";
import { CircleDollarSign, Wallet, Calendar, ShieldCheck } from "lucide-react";

export default async function PayoutSection() {
  const rawData = await getPayouts();
  const payouts = Array.isArray(rawData) ? rawData : [];

  return (
    <section className="relative h-auto w-full overflow-hidden bg-[#030303] text-zinc-100 pt-10 pb-4 sm:py-20 lg:py-28">
      
      {/* GLOBAL BACKGROUND TEXTURE MATTE */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* AMBIENT BRAND GLOWS */}
      <div className="absolute right-[-10%] top-[-5%] h-100 w-100 sm:h-125 sm:w-125 rounded-full bg-blue-600/10 blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-1/4 h-100 w-100 sm:h-125 sm:w-125 rounded-full bg-blue-700/5 blur-[120px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER BLOCK - High-density native app feel */}
        <div className="mb-6 sm:mb-16 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 text-[8px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-400 backdrop-blur-md">
            <CircleDollarSign className="h-2.5 w-2.5 text-blue-500" />
            Payouts
          </span>
          
          <h2 className="mt-2 text-xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Verified Payouts
          </h2>
          
          <p className="mt-1 max-w-md text-[11px] sm:text-sm md:text-base text-zinc-400 font-normal leading-relaxed px-2">
            A real-time ledger of funded trading payouts and audited profit distributions.
          </p>
        </div>

        {/* CONDITIONAL EMPTY STATE OR NATIVE CARD GRID */}
        {payouts.length === 0 ? (
          <div className="rounded-xl border border-zinc-900 bg-zinc-900/10 p-5 text-center max-w-xs mx-auto shadow-xl backdrop-blur-md">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-500">
              <Wallet className="h-3.5 w-3.5" />
            </div>
            <h4 className="text-[11px] font-bold text-zinc-300 tracking-wider uppercase">No Payouts Found</h4>
            <p className="mt-0.5 text-[10px] text-zinc-500 font-mono">No statement payouts added yet.</p>
          </div>
        ) : (
          /* Handled layouts via compact grid frameworks across all screen resolutions */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {payouts.map((payout: Payout) => (
              <div
                key={payout.id}
                className="
                  group 
                  relative 
                  flex 
                  flex-col 
                  overflow-hidden 
                  bg-zinc-900/40 
                  border 
                  border-zinc-800/80 
                  rounded-xl
                  transition-all 
                  duration-300 
                  hover:border-blue-500/30
                  hover:bg-zinc-900/85
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]
                "
              >
                {/* Proof Image Wrapper - Highly compressed on mobile */}
                {payout.image && (
                  <div className="relative h-24 sm:h-40 w-full overflow-hidden border-b border-zinc-800/60">
                    <Image
                      src={payout.image}
                      alt={payout.firm}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
                  </div>
                )}

                {/* Content Layout Sheet */}
                <div className="p-3 sm:p-5 flex flex-col justify-between grow">
                  <div>
                    <div className="flex items-center justify-between gap-1.5">
                      <h3 className="text-[11px] sm:text-base font-bold text-zinc-200 truncate group-hover:text-blue-400 transition-colors">
                        {payout.firm}
                      </h3>
                      
                      <div className="flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1 py-0.5 border border-emerald-500/20 text-[7.5px] sm:text-[9px] font-bold tracking-wider text-emerald-400 uppercase shrink-0">
                        <ShieldCheck className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                        <span className="hidden xs:inline">Audited</span>
                      </div>
                    </div>

                    <p className="mt-1 text-sm sm:text-xl font-black tracking-tight text-white bg-linear-to-r from-blue-400 via-sky-300 to-white bg-clip-text">
                      {payout.amount}
                    </p>

                    {payout.description && (
                      <p className="mt-1 text-[10px] sm:text-xs text-zinc-400 font-normal leading-normal line-clamp-1 sm:line-clamp-2">
                        {payout.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Layout Strip */}
                  <div className="mt-3 border-t border-zinc-800/60 pt-2 flex items-center gap-1 text-zinc-500">
                    <Calendar className="h-2.5 w-2.5 text-zinc-600" />
                    <span className="text-[9px] sm:text-xs font-semibold tracking-wide">
                      {new Date(payout.payout_date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "2-digit",
                      })}
                    </span>
                  </div>
                </div>

                {/* Fine Outer Boundary Accent Line */}
                <div className="absolute inset-0 rounded-xl border border-white/5 pointer-events-none z-20" />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}