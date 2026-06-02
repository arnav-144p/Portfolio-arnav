"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const password = String(new FormData(event.currentTarget).get("password") || "");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin/dashboard");
      return;
    }
    setError("// invalid password");
  }

  return (
    <main className="mx-auto max-w-lg px-6 py-20">
      <p className="mono mb-6">{"// admin access"}</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="password"
          type="password"
          required
          placeholder="[ password         ]"
          className="mono w-full border bg-transparent p-3"
        />
        <button className="mono border px-4 py-2">[ enter → ]</button>
      </form>
      {error && <p className="mono mt-4 text-sm">{error}</p>}
    </main>
  );
}
