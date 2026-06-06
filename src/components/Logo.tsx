export default function Logo() {
  return (
    <div className="inline-flex items-end justify-center select-none cursor-pointer group">
      <h1 className="text-4xl font-black tracking-[-0.14em] leading-none antialiased flex items-end">

        {/* D */}
        <span className="relative z-20 inline-block bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-[1.03]">
          D
        </span>

        {/* C */}
        <span
          className="relative z-10 inline-block bg-linear-to-b from-[#0D50DE] via-[#03B7FF] to-[#0D50DE] bg-clip-text text-transparent transition-all duration-500 group-hover:translate-x-[0.02em]"
          style={{
            maskImage:
              "radial-gradient(circle at -15% 50%, transparent 42%, white 43%)",
            WebkitMaskImage:
              "radial-gradient(circle at -15% 50%, transparent 42%, white 43%)",
          }}
        >
          C
        </span>

        {/* FX Signature */}
        <span
          className="
            ml-1
            mb-1
            rotate-[-8deg]
            text-lg
            font-light
            italic
            text-white
            opacity-90
          "
          style={{
            fontFamily: "cursive",
          }}
        >
          fx
        </span>

      </h1>
    </div>
  );
}