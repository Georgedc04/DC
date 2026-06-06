"use client";

import { useState } from "react";

interface DeleteConfirmModalProps {
title?: string;
description?: string;
onConfirm: () => void | Promise<void>;
}

export default function DeleteConfirmModal({
title = "Delete Item",
description = "Are you sure?",
onConfirm,
}: DeleteConfirmModalProps) {
const [open, setOpen] =
useState(false);

const [loading, setLoading] =
useState(false);

async function handleConfirm() {
setLoading(true);

await onConfirm();

setLoading(false);
setOpen(false);


}

return (
<>
<button
onClick={() => setOpen(true)}
className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
>
Delete </button>


  {open && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={() =>
              setOpen(false)
            }
            disabled={loading}
            className="rounded-lg border border-zinc-700 px-4 py-2 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            {loading
              ? "Deleting..."
              : "Delete"}
          </button>

        </div>

      </div>
    </div>
  )}
</>


);
}
