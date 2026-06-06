export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-white">
        George DC Admin Dashboard
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Achievements
          </h2>

          <p className="mt-2 text-3xl font-bold text-white">
            --
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Certificates
          </h2>

          <p className="mt-2 text-3xl font-bold text-white">
            --
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Payouts
          </h2>

          <p className="mt-2 text-3xl font-bold text-white">
            --
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Blogs
          </h2>

          <p className="mt-2 text-3xl font-bold text-white">
            --
          </p>
        </div>

      </div>
    </div>
  );
}