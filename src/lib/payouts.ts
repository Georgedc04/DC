import { supabase } from "./supabase";
import { Payout } from "@/types/payout";

export async function getPayouts(): Promise<Payout[]> {
  const { data, error } = await supabase
    .from("payouts")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data as Payout[];
}