import { supabase } from "./supabase";
import { Certificate } from "@/types/certificate";

export async function getCertificates(): Promise<Certificate[]> {
  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data as Certificate[];
}