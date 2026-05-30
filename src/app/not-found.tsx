import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-40">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="my-4">Page Not Found</p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded"
      >
        Back Home
      </Link>
    </div>
  );
}