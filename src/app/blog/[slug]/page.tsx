import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/blogs";
import BlogContent from "@/components/blogs/BlogContent";
import BlogActions from "@/components/blogs/BlogActions";

// Safe explicit type declaration to avoid any implicit linter compilation breaks
interface TradingPost {
  id: string | number;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: string;
  created_at: string | number | Date;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const blog = (await getBlog(slug)) as TradingPost | null;

  if (!blog) {
    notFound();
  }

  // Format date to a cleaner readable layout
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="relative min-h-screen bg-[#030303] text-zinc-100 pb-24 pt-20 md:pt-28 overflow-hidden">
      
      {/* BACKGROUND TEXTURE MATTE */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      {/* COOL CHROMATIC RADIAL GLOWS */}
      <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-96 w-full max-w-4xl rounded-full bg-[#0D50DE]/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-20%] top-1/2 h-100 w-100 rounded-full bg-zinc-800/10 blur-[100px] pointer-events-none" />

      {/* CORE WRAPPER */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">

        {/* BREADCRUMB / METADATA BACKLINK PANEL */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold tracking-wide mb-4 text-zinc-500">
          <span className="text-[#0D50DE] uppercase tracking-wider">Market Breakdown</span>
          <span className="h-1 w-1 rounded-full bg-zinc-800" />
          <time dateTime={new Date(blog.created_at).toISOString()}>{formattedDate}</time>
        </div>

        {/* ARTICLE TITLE */}
        <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
          {blog.title}
        </h1>

        {/* SHARED SOCIAL ACTIONS & INTERACTION PANEL */}
        <div className="border-y border-zinc-900 bg-zinc-900/10 backdrop-blur-xs py-3.5 my-6 px-1 flex items-center justify-between">
          <BlogActions />
        </div>

        {/* INTRO EXCERPT BANNER */}
        {blog.excerpt && (
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed border-l-2 border-[#0D50DE] pl-4 sm:pl-5 my-8">
            {blog.excerpt}
          </p>
        )}

        {/* COVER CHART showcase */}
        {blog.image && (
          <div className="my-10 overflow-hidden rounded-xl md:rounded-2xl border border-zinc-900 bg-zinc-950/40 p-1.5 backdrop-blur-md shadow-[0_24px_50px_-15px_rgba(0,0,0,0.9)] group">
            <div className="relative overflow-hidden rounded-lg md:rounded-xl aspect-video w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={700}
                priority
                className="h-auto w-full object-cover brightness-[0.95] contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.01]"
                unoptimized
              />
            </div>
          </div>
        )}

        {/* THE MAIN WRITTEN BODY CONTENT BLOCK */}
        <div className="prose prose-zinc prose-invert max-w-none prose-sm sm:prose-base md:prose-lg 
          prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-xl sm:prose-h2:text-2xl sm:prose-h2:mt-10 prose-h2:mb-4
          prose-p:leading-relaxed prose-p:text-zinc-300
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-blue-400 prose-code:bg-zinc-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-ol:list-decimal prose-ul:list-disc
          focus:outline-hidden"
        >
          <BlogContent content={blog.content || ""} />
        </div>

      </div>
    </article>
  );
}