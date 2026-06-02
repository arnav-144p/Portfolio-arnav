"use client";

import { useRouter } from "next/navigation";

export default function BlogEditor({ post }: { post?: any }) {
  const router = useRouter();
  return (
    <form
      className="space-y-3"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const title = String(form.get("title") || "");
        const payload = {
          title,
          slug:
            String(form.get("slug") || "")
              .trim()
              .toLowerCase() || title.toLowerCase().replace(/\s+/g, "-"),
          excerpt: String(form.get("excerpt") || ""),
          content: String(form.get("content") || ""),
          published: form.get("published") === "on",
          updated_at: new Date().toISOString(),
        };

        const url = post ? `/api/admin/blog/${post.id}` : "/api/admin/blog";
        const method = post ? "PUT" : "POST";
        await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        router.push("/admin/dashboard/blog");
        router.refresh();
      }}
    >
      <input name="title" defaultValue={post?.title ?? ""} required placeholder="title" className="w-full border bg-transparent p-3" />
      <input name="slug" defaultValue={post?.slug ?? ""} placeholder="slug" className="w-full border bg-transparent p-3" />
      <textarea name="excerpt" defaultValue={post?.excerpt ?? ""} required rows={3} placeholder="excerpt" className="w-full border bg-transparent p-3" />
      <textarea name="content" defaultValue={post?.content ?? ""} required rows={16} placeholder="markdown content" className="mono w-full border bg-transparent p-3" />
      <label className="mono block text-sm"><input name="published" type="checkbox" defaultChecked={post?.published ?? false} /> published</label>
      <button className="mono border px-4 py-2 text-sm">[ save ]</button>
    </form>
  );
}
