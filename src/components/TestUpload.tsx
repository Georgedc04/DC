"use client";

import { useState } from "react";
import { toast } from "sonner";
import { uploadFile } from "@/lib/storage";

export default function TestUpload() {
const [uploading, setUploading] =
useState(false);

async function handleUpload(
e: React.ChangeEvent<HTMLInputElement>
) {
const file = e.target.files?.[0];


if (!file) return;

setUploading(true);

const loadingToast =
  toast.loading(
    "Uploading file..."
  );

try {
  const url =
    await uploadFile(
      file,
      "certificates"
    );

  console.log(url);

  toast.success(
    "File uploaded successfully",
    {
      id: loadingToast,
    }
  );
} catch (error) {
  console.error(error);

  toast.error(
    "Upload failed",
    {
      id: loadingToast,
    }
  );
}

setUploading(false);


}

return ( <input
   type="file"
   onChange={handleUpload}
   disabled={uploading}
 />
);
}
