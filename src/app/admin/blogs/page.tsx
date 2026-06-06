"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Blog } from "@/types/blog";
import { toast } from "sonner";
import DeleteConfirmModal from "@/components/ui/DeleteConfirmModal";

export default function BlogsPage() {
const [title, setTitle] = useState("");
const [slug, setSlug] = useState("");
const [excerpt, setExcerpt] = useState("");
const [content, setContent] = useState("");
const [image, setImage] = useState("");

const [loading, setLoading] = useState(false);
const [blogs, setBlogs] = useState<Blog[]>([]);

async function loadBlogs() {
const { data } = await supabase
.from("blogs")
.select("*")
.order("created_at", {
ascending: false,
});

   
setBlogs((data as Blog[]) || []);
   

}

useEffect(() => {
const fetchBlogs = async () => {
await loadBlogs();
};

   
fetchBlogs();
   

}, []);

async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();

   
setLoading(true);

const generatedSlug =
slug ||
title
.toLowerCase()
.replaceAll(" ", "-");

const { error } = await supabase
.from("blogs")
.insert({
title,
slug: generatedSlug,
excerpt,
content,
image,
});

if (error) {
toast.error(error.message);
setLoading(false);
return;
}

setTitle("");
setSlug("");
setExcerpt("");
setContent("");
setImage("");

await loadBlogs();

toast.success(
"Blog published successfully"
);

setLoading(false);

}

async function handleDelete(
id: string
) {
const { error } = await supabase
.from("blogs")
.delete()
.eq("id", id);

if (error) {
toast.error(error.message);
return;
}

await loadBlogs();

toast.success(
"Blog deleted successfully"
);
}

return ( <div className="space-y-10">

   
  <div>
    <h1 className="mb-8 text-3xl font-bold text-white">
      Blogs
    </h1>

    <form
      onSubmit={handleSubmit}
      className="max-w-3xl space-y-4"
    >
      <input
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <input
        placeholder="Slug (optional)"
        value={slug}
        onChange={(e) =>
          setSlug(e.target.value)
        }
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) =>
          setImage(e.target.value)
        }
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <textarea
        placeholder="Excerpt"
        value={excerpt}
        onChange={(e) =>
          setExcerpt(e.target.value)
        }
        className="h-24 w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) =>
            setContent(e.target.value)
        }
        className="h-64 w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
        />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-[#D4A017] px-6 py-3 font-semibold text-black"
      >
        {loading
          ? "Publishing..."
          : "Publish Blog"}
      </button>
    </form>
  </div>

  <div>
    <h2 className="mb-6 text-2xl font-bold text-white">
      Existing Blogs
    </h2>

    <div className="space-y-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="flex items-start justify-between">

            <div>
              <h3 className="font-semibold text-white">
                {blog.title}
              </h3>

              <p className="mt-2 text-zinc-400">
                {blog.slug}
              </p>

              <p className="mt-2 text-zinc-500">
                {blog.excerpt}
              </p>
            </div>

            <DeleteConfirmModal
              title="Delete Blog"
              description="Are you sure you want to delete this blog?"
              onConfirm={() => handleDelete(blog.id)}
            />
          </div>
        </div>
      ))}
    </div>

  </div>

</div>
   

);
}
