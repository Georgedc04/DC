"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Payout } from "@/types/payout";
import { toast } from "sonner";
import DeleteConfirmModal from "@/components/ui/DeleteConfirmModal";

export default function PayoutsPage() {
const [firm, setFirm] = useState("");
const [amount, setAmount] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");

const [loading, setLoading] = useState(false);
const [payouts, setPayouts] = useState<Payout[]>([]);

async function fetchPayouts() {
const { data } = await supabase
.from("payouts")
.select("*")
.order("created_at", {
ascending: false,
});

   
setPayouts((data as Payout[]) || []);
   

}

useEffect(() => {
  const fetchData = async () => {
    await fetchPayouts();
  };

  fetchData();
}, []);
async function handleSubmit(
e: React.FormEvent
) {
e.preventDefault();

   
setLoading(true);

const { error } = await supabase
.from("payouts")
.insert({
firm,
amount,
description,
image,
payout_date: new Date()
.toISOString()
.split("T")[0],
});

if (error) {
toast.error(error.message);
setLoading(false);
return;
}

setFirm("");
setAmount("");
setDescription("");
setImage("");

await fetchPayouts();

toast.success(
"Payout created successfully"
);

setLoading(false);

}

async function handleDelete(
id: string
) {
const { error } = await supabase
.from("payouts")
.delete()
.eq("id", id);

if (error) {
toast.error(error.message);
return;
}

await fetchPayouts();

toast.success(
"Payout deleted successfully"
);
}


return ( <div className="space-y-10">

   
  <div>
    <h1 className="mb-8 text-3xl font-bold text-white">
      Payouts
    </h1>

    <form
      onSubmit={handleSubmit}
      className="max-w-2xl space-y-4"
    >
      <input
        placeholder="Firm"
        value={firm}
        onChange={(e) =>
          setFirm(e.target.value)
        }
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-white"
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
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
          : "Create Payout"}
      </button>
    </form>
  </div>

  <div>
    <h2 className="mb-6 text-2xl font-bold text-white">
      Existing Payouts
    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {payouts.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.firm}
              width={400}
              height={250}
              className="mb-4 rounded-lg"
              unoptimized
            />
          )}

          <h3 className="font-bold text-white">
            {item.firm}
          </h3>

          <p className="mt-1 text-[#D4A017]">
            {item.amount}
          </p>

          <p className="mt-3 text-zinc-400">
            {item.description}
          </p>

          <DeleteConfirmModal
            title="Delete Payout"
            description="Are you sure you want to delete this payout?"
            onConfirm={() => handleDelete(item.id)}
          />
        </div>
      ))}

    </div>
  </div>

</div>
   

);
}
