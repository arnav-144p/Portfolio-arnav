"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MessageCard({ message }: { message: any }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <article
      className="mb-4 border-l-2 p-4"
      style={{ borderColor: message.read ? "var(--border)" : "var(--accent2)", background: "var(--surface)" }}
    >
      <button className="w-full text-left" onClick={() => setOpen((v) => !v)}>
        <p className="mono">{message.name} - {message.email}</p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>{new Date(message.created_at).toDateString()}</p>
      </button>
      {open && <p className="mt-3 whitespace-pre-wrap">{message.message}</p>}
      <div className="mt-4 flex gap-3">
        <button
          className="mono border px-3 py-1 text-xs"
          onClick={async () => {
            await fetch(`/api/admin/messages/${message.id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ read: true }),
            });
            router.refresh();
          }}
        >
          mark as read
        </button>
        <button
          className="mono border px-3 py-1 text-xs"
          onClick={async () => {
            await fetch(`/api/admin/messages/${message.id}`, { method: "DELETE" });
            router.refresh();
          }}
        >
          delete
        </button>
      </div>
    </article>
  );
}
