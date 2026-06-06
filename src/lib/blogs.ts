import { supabase } from "./supabase";
import { Blog } from "@/types/blog";

export async function getBlogs() {
  const { data } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (data as Blog[]) || [];
}

export async function getBlog(
  slug: string
): Promise<Blog | null> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(error);
    return null;
  }

  return data as Blog | null;
}