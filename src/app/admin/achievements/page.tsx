"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Achievement } from "@/types/achievement";
import Image from "next/image";
import { toast } from "sonner";
import DeleteConfirmModal from "@/components/ui/DeleteConfirmModal";

export default function AchievementsPage() {
const [title, setTitle] = useState("");
const [firm, setFirm] = useState("");
const [accountSize, setAccountSize] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");

const [loading, setLoading] = useState(false);
const [achievements, setAchievements] = useState<Achievement[]>([]);

async function loadAchievements() {
const { data, error } = await supabase
.from("achievements")
.select("*")
.order("created_at", {
ascending: false,
});

   
if (error) {
  console.error(error);
  return;
}

setAchievements(
  (data as Achievement[]) || []
);
   

}

useEffect(() => {
const fetchAchievements = async () => {
await loadAchievements();
};

fetchAchievements();
}, []);

async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();

setLoading(true);

const { error } = await supabase
.from("achievements")
.insert({
title,
firm,
account_size: accountSize,
description,
image,
date: new Date()
.toISOString()
.split("T")[0],
});

if (error) {
toast.error(error.message);
setLoading(false);
return;
}

setTitle("");
setFirm("");
setAccountSize("");
setDescription("");
setImage("");

await loadAchievements();

toast.success(
"Achievement created successfully"
);

setLoading(false);
}

async function handleDelete(
id: string
) {
const { error } = await supabase
.from("achievements")
.delete()
.eq("id", id);

if (error) {
toast.error(error.message);
return;
}

await loadAchievements();

toast.success(
"Achievement deleted successfully"
);
}

return ( <div className="space-y-10">

   
  <div>
    <h1 className="mb-8 text-3xl font-bold text-white">
      Achievements
    </h1>

    <form
      onSubmit={handleSubmit}
      className="max-w-2xl space-y-4"
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
        placeholder="Firm"
        value={firm}
        onChange={(e) =>
          setFirm(e.target.value)
        }
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <input
        placeholder="Account Size"
        value={accountSize}
        onChange={(e) =>
          setAccountSize(
            e.target.value
          )
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
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        className="h-32 w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-[#D4A017] px-6 py-3 font-semibold text-black"
      >
        {loading
          ? "Saving..."
          : "Create Achievement"}
      </button>
    </form>
  </div>

  <div>
    <h2 className="mb-6 text-2xl font-bold text-white">
      Existing Achievements
    </h2>

    <div className="space-y-4">
      {achievements.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="flex items-start justify-between">

            <div>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-[#D4A017]">
                {item.firm}
              </p>

              <p className="mt-2 text-zinc-400">
                {item.account_size}
              </p>

              <p className="mt-2 text-zinc-500">
                {item.description}
              </p>

              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={192}
                  height={128}
                  className="mt-4 rounded-lg border border-zinc-800 object-cover"
                  unoptimized
                />
              )}
            </div>

            <DeleteConfirmModal
              title="Delete Achievement"
              description="Are you sure you want to delete this achievement?"
              onConfirm={() => handleDelete(item.id)}
            />
              Delete
            

          </div>
        </div>
      ))}
    </div>

  </div>

</div>
   

);
}
