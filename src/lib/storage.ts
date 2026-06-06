import { supabase } from "./supabase";

export async function uploadFile(
  file: File,
  folder: string
) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("uploads")
    .upload(
      `${folder}/${fileName}`,
      file
    );

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("uploads")
    .getPublicUrl(
      `${folder}/${fileName}`
    );

  return publicUrl;
}