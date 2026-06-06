import DOMPurify from "isomorphic-dompurify";

interface Props {
  content: string;
}

export default function BlogContent({ content }: Props) {
  // Advanced sanitation configuration ensuring standard anchor elements allow target links safely
  const clean = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      "p", "h1", "h2", "h3", "h4", "h5", "h6", 
      "span", "strong", "em", "ul", "ol", "li", 
      "a", "img", "blockquote", "code", "pre", 
      "table", "thead", "tbody", "tr", "th", "td", "br"
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "target", "rel", "class"],
  });

  return (
    /* 
      The overflow-x-auto wrapper is critical for mobile apps. If a trading table 
      or chart data code block is injected, it will scroll safely horizontally inside 
      the app content pane instead of completely pushing and breaking the layout.
    */
    <div className="w-full overflow-x-auto">
      <div
        className="prose prose-zinc prose-invert max-w-none 
          text-sm sm:text-base leading-relaxed text-zinc-300
          
          {/* Headings optimization */}
          prose-headings:text-white prose-headings:font-extrabold prose-headings:tracking-tight
          prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:mb-4
          prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
          
          {/* Brand-aligned text links */}
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline transition-colors
          
          {/* Bold text */}
          prose-strong:text-white prose-strong:font-semibold
          
          {/* Clean lists spacing */}
          prose-ul:my-4 prose-ol:my-4 prose-li:my-1
          
          {/* Micro Code Snippets for strategy rules / metrics */}
          prose-code:text-blue-400 prose-code:bg-zinc-900/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono
          prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-900 prose-pre:rounded-xl prose-pre:p-4
          
          {/* High-end blockquotes for trading axioms or rules */}
          prose-blockquote:border-l-2 prose-blockquote:border-[#0D50DE] prose-blockquote:bg-[#0D50DE]/5 prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:rounded-r-lg prose-blockquote:text-zinc-200 prose-blockquote:italic
          
          {/* Trading metric tables scroll safety rules */}
          prose-table:text-xs sm:prose-table:text-sm prose-th:text-white prose-th:font-semibold prose-th:pb-2 prose-td:py-2.5 prose-td:border-b prose-td:border-zinc-900"
        dangerouslySetInnerHTML={{
          __html: clean,
        }}
      />
    </div>
  );
}