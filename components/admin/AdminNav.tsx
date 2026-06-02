"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNav() {
  const router = useRouter();
  return (
    <aside className="mono min-h-screen w-64 border-r p-6" style={{ borderColor: "var(--border)" }}>
      <p className="mb-5">{"// dashboard"}</p>
      <nav className="space-y-3">
        <Link className="block" href="/admin/dashboard/projects">→ projects</Link>
        <Link className="block" href="/admin/dashboard/blog">→ blog posts</Link>
        <Link className="block" href="/admin/dashboard/messages">→ messages</Link>
        <button
          className="block"
          onClick={async () => {
            await fetch("/api/admin/logout", { method: "POST" });
            router.push("/admin");
          }}
        >
          → logout
        </button>
      </nav>
    </aside>
  );
}
