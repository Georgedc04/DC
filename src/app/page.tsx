import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="bg-[#050505] text-white">
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-32">
        {/* Services */}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        {/* Features */}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        {/* Stats */}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-32">
        {/* CTA */}
      </section>
    </main>
  );
}