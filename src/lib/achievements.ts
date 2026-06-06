import { supabase } from "./supabase";

export async function getAchievements() {
  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}