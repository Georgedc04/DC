import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">
          George DC
        </h2>
      </div>

      <nav className="space-y-2 px-4">

        <Link
          href="/admin/dashboard"
          className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-900"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/achievements"
          className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-900"
        >
          Achievements
        </Link>

        <Link
          href="/admin/certificates"
          className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-900"
        >
          Certificates
        </Link>

        <Link
          href="/admin/payouts"
          className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-900"
        >
          Payouts
        </Link>

        <Link
          href="/admin/blogs"
          className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-900"
        >
          Blogs
        </Link>

      </nav>
    </aside>
  );
}