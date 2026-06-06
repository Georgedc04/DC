import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { getBlogs } from "@/lib/blogs";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

// A safe, local interface type extending what your 'Blog' type has
interface ExtendedBlog {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  readingTime?: string;
}

export default async function BlogPage() {
  // Cast the returned array safely to include potential optional metadata
  const blogs = (await getBlogs()) as ExtendedBlog[];
  
  // Separate the first post as a Featured Hero Article, rest as standard list
  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-zinc-100 pb-20">
      
      {/* BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      {/* AMBIENT BLUE BLUR GLOWS */}
      <div className="absolute left-[-20%] top-[-10%] h-96 w-96 rounded-full bg-[#0D50DE]/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-[-10%] top-1/3 h-125 w-125 rounded-full bg-[#0D50DE]/5 blur-[130px] pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-12 md:mb-16">
          <h1 className="text-balance text-4xl sm:text-5xl font-extrabold tracking-tight text-white md:text-6xl leading-[1.1]">
            Market Insights
            <span
              className={`${dancing.className} mt-2 block bg-linear-to-r from-[#0D50DE] via-[rgb(63,189,238)] to-[#0D50DE] bg-clip-text text-2xl sm:text-3xl md:text-4xl text-transparent pb-1`}
            >
              by George DC
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-400 font-normal">
            Deep dives into live chart setups, strict risk-management frameworks, and psychology reviews keeping you aligned with consistency.
          </p>
        </div>

        {/* 1. FEATURED ARTICLE BANNER */}
        {featuredBlog && (
          <div className="mb-14 group">
            <Link href={`/blog/${featuredBlog.slug}`} className="block relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/10 backdrop-blur-xs p-4 sm:p-6 transition-all duration-300 hover:border-[#0D50DE]/40 hover:bg-zinc-900/30 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Visual Placeholder Graphic / Cover Image */}
                <div className="lg:col-span-7 relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800/60">
                  <div className="absolute inset-0 bg-linear-to-br from-[#0D50DE]/10 via-transparent to-black/80 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: "url('/bluechart.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <span className="absolute top-3 left-3 z-20 rounded-md bg-[#0D50DE] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    Latest Review
                  </span>
                </div>

                {/* Meta details */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full py-1">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                      <span>{featuredBlog.date || "June 2026"}</span>
                      <span className="h-1 w-1 rounded-full bg-zinc-700" />
                      <span>{featuredBlog.readingTime || "5 min read"}</span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                      {featuredBlog.title}
                    </h2>
                    
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                      {featuredBlog.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center text-xs font-semibold text-[#0D50DE] gap-1 group-hover:translate-x-1 transition-transform duration-200">
                    Read Breakdown <span>→</span>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        )}

        {/* 2. REMAINING BLOGS - APP CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group relative flex flex-col justify-between rounded-xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-xs p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D50DE]/30 hover:bg-zinc-900/40 hover:shadow-[0_16px_36px_-12px_rgba(13,80,222,0.15)]"
            >
              <div>
                {/* Meta Details Inline */}
                <div className="flex items-center gap-2.5 text-[11px] text-zinc-500 mb-3">
                  <span>{blog.date || "June 2026"}</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-800" />
                  <span>{blog.readingTime || "4 min read"}</span>
                </div>

                {/* Post Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Post Excerpt */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Action Trigger Link */}
              <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                <span className="text-[11px] uppercase tracking-wider text-zinc-600 group-hover:text-[#0D50DE] font-semibold transition-colors">#ForexStrategy</span>
                <div className="flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE BLOCK */}
        {blogs.length === 0 && (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/5">
            <p className="text-sm text-zinc-500">No trading journals or reviews uploaded yet. Check back shortly!</p>
          </div>
        )}

      </div>
    </section>
  );
}