"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Certificate } from "@/types/certificate";
import { toast } from "sonner";
import DeleteConfirmModal from "@/components/ui/DeleteConfirmModal";

export default function CertificatesPage() {
const [title, setTitle] = useState("");
const [issuer, setIssuer] = useState("");
const [image, setImage] = useState("");

const [loading, setLoading] = useState(false);
const [certificates, setCertificates] = useState<Certificate[]>([]);

async function loadCertificates() {
const { data } = await supabase
.from("certificates")
.select("*")
.order("created_at", {
ascending: false,
});

   
setCertificates(
  (data as Certificate[]) || []
);
   

}

const [loaded, setLoaded] = useState(false);

if (!loaded) {
setLoaded(true);
loadCertificates();
}

async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();

setLoading(true);

const { error } = await supabase
.from("certificates")
.insert({
title,
issuer,
image,
issue_date: new Date()
.toISOString()
.split("T")[0],
});

if (error) {
toast.error(error.message);
setLoading(false);
return;
}

setTitle("");
setIssuer("");
setImage("");

await loadCertificates();

toast.success(
"Certificate created successfully"
);

setLoading(false);
}

async function handleDelete(
id: string
) {
const { error } = await supabase
.from("certificates")
.delete()
.eq("id", id);

if (error) {
toast.error(error.message);
return;
}

await loadCertificates();

toast.success(
"Certificate deleted successfully"
);
}



return ( <div className="space-y-10">

   
  <div>
    <h1 className="mb-8 text-3xl font-bold text-white">
      Certificates
    </h1>

    <form
      onSubmit={handleSubmit}
      className="max-w-2xl space-y-4"
    >
      <input
        placeholder="Certificate Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <input
        placeholder="Issuer"
        value={issuer}
        onChange={(e) =>
          setIssuer(e.target.value)
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

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-[#D4A017] px-6 py-3 font-semibold text-black"
      >
        {loading
          ? "Saving..."
          : "Create Certificate"}
      </button>
    </form>
  </div>

  <div>
    <h2 className="mb-6 text-2xl font-bold text-white">
      Existing Certificates
    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="mb-4 rounded-lg"
              unoptimized
            />
          )}

          <h3 className="font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-[#D4A017]">
            {item.issuer}
          </p>

          <DeleteConfirmModal
            title="Delete Certificate"
            description="Are you sure you want to delete this certificate?"
            onConfirm={() => handleDelete(item.id)}
          />
        </div>
      ))}
    </div>

  </div>

</div>
   

);
}
