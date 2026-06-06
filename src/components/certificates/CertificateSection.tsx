import { getCertificates } from "@/lib/certificates";
import CertificateCards from "@/components/CertificateCards";
import { ShieldAlert, Award } from "lucide-react";

export default async function CertificateSection() {
  const rawData = await getCertificates();
  const certificates = Array.isArray(rawData) ? rawData : [];

  return (
    /* h-auto drops the empty screen void below your tight cards layout on phones */
    <section className="relative h-auto w-full overflow-hidden bg-black pt-12 pb-6 sm:py-20 lg:py-28 text-zinc-100">
      
      {/* Premium Chart Watermark Wrapper with Mix-Blends */}
      <div
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-5 md:opacity-10 mix-blend-screen transition-opacity duration-700"
        style={{
          backgroundImage: "url('/bluechart.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: "url('/texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      {/* Dynamic Immersive Lighting/Mesh Gradients - Standard v4 token sizes */}
      <div className="absolute right-[-10%] top-[-20%] h-100 w-100 sm:h-125 sm:w-125 rounded-full bg-blue-600/10 blur-[100px] sm:blur-[150px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute left-[-10%] bottom-[-20%] h-100 w-100 sm:h-125 sm:w-125 rounded-full bg-amber-500/5 blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header - Streamlined and compact for native mobile app scale */}
        <div className="mb-6 sm:mb-16 flex flex-col items-center text-center">
          
          {/* Native app styled mini badge pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-blue-400 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.08)]">
            <Award className="h-3 w-3 text-blue-400" />
            Qualifications
          </span>

          {/* Clean text-transparent gradient without property linter conflicts */}
          <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-black tracking-tight bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Professional Certifications
          </h2>

          <p className="mt-1.5 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400 font-normal px-2">
            Verified trading achievements, funded account validations, and institutional credentials.
          </p>
        </div>

        {/* Dynamic Empty State vs Grid Container Rendering */}
        {certificates.length === 0 ? (
          <div className="mx-auto max-w-xs sm:max-w-md rounded-2xl border border-zinc-900 bg-zinc-900/10 p-6 sm:p-10 text-center backdrop-blur-xl shadow-xl">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-500">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-300 tracking-wider uppercase">
              No Records Logged
            </h4>
            <p className="mt-1 text-[11px] text-zinc-500 font-mono">
              The credentials log is currently empty.
            </p>
          </div>
        ) : (
          <div className="w-full relative">
            <CertificateCards certificates={certificates} />
          </div>
        )}

      </div>
    </section>
  );
}