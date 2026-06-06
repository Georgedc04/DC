"use client";

import { toast } from "sonner";

export default function BlogActions() {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const sharePost = async () => {
    try {
      const url = window.location.href;

      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url,
        });
        toast.success("Post shared successfully");
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
      }
    } catch {
      // Don't trigger error toast if user cancels the native share menu drawer
      toast.error("Failed to share post");
    }
  };

  return (
    <div className="flex w-full items-center justify-between gap-3 flex-row">
      
      {/* ACTION TRIGGERS */}
      <div className="flex items-center gap-2">
        {/* COPY BUTTON */}
        <button
          onClick={copyLink}
          className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-[#0D50DE] hover:bg-[#0D50DE]/10 hover:text-white active:scale-[0.97]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 text-[#0D50DE]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376A8.965 8.965 0 0 0 12 12.75c-.197 0-.392.002-.586.007M15.75 17.25c.184-.047.373-.072.568-.072h3.375c.621 0 1.125.504 1.125 1.125v9.75a1.125 1.125 0 0 1-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V19.5a1.125 1.125 0 0 1 1.125-1.125h3.375c.195 0 .384.025.568.072m0 0a8.965 8.965 0 0 0 4.125-4.125M15.75 17.25v-3.375c0-.621.504-1.125 1.125-1.125h3.375M11.25 7.5h.008v.008h-.008V7.5Z" />
          </svg>
          <span>Copy Link</span>
        </button>

        {/* SHARE BUTTON */}
        <button
          onClick={sharePost}
          className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-[#0D50DE] hover:bg-[#0D50DE]/10 hover:text-white active:scale-[0.97]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 text-[#0D50DE]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          <span>Share</span>
        </button>
      </div>

      {/* METRIC BADGE (Replaced "Important" text to look like a premium trading indicator) */}
      <div className="flex items-center gap-1.5 rounded-full border border-[#0D50DE]/20 bg-[#0D50DE]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-400 select-none">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
        </span>
        Trading Review
      </div>

    </div>
  );
}