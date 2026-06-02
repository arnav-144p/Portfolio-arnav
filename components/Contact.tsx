"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setState("success");
      form.reset();
      return;
    }
    setState("error");
  }

  return (
    <section id="contact" className="px-6 py-20 md:px-12">
      <div className="section-label">{"// contact"}</div>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="mono space-y-3 text-lg">
          <p>Let&apos;s talk.</p>
          <a href="https://x.com/https_arnav" target="_blank" rel="noreferrer" className="block">
            → x.com/https_arnav
          </a>
          <a
            href="https://github.com/arnav-144p"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            → github.com/arnav-144p
          </a>
          <a
            href="https://linkedin.com/in/arnavli04"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            → linkedin.com/in/arnavli04
          </a>
          <a href="mailto:arnavbhilwariya0408@gmail.com" className="block">
            → arnavbhilwariya0408@gmail.com
          </a>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            name="name"
            placeholder="Name"
            required
            className="w-full border bg-transparent p-3"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border bg-transparent p-3"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={6}
            className="w-full border bg-transparent p-3"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          />
          <button type="submit" className="mono border px-4 py-2 text-sm">
            [ send message ]
          </button>
          {state === "success" && (
            <p className="mono text-sm" style={{ color: "var(--green)" }}>
              {"// message sent"}
            </p>
          )}
          {state === "error" && (
            <p className="mono text-sm" style={{ color: "var(--accent2)" }}>
              {"// something went wrong. try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
