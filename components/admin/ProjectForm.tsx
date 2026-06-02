"use client";

import { useRouter } from "next/navigation";

type Props = { project?: any };

export default function ProjectForm({ project }: Props) {
  const router = useRouter();
  return (
    <form
      className="space-y-3"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = {
          title: String(form.get("title") || ""),
          description: String(form.get("description") || ""),
          tags: String(form.get("tags") || "").split(",").map((v) => v.trim()).filter(Boolean),
          github_url: String(form.get("github_url") || ""),
          image_url: String(form.get("image_url") || ""),
          featured: form.get("featured") === "on",
          order_index: Number(form.get("order_index") || 0),
        };
        const url = project ? `/api/admin/projects/${project.id}` : "/api/admin/projects";
        const method = project ? "PUT" : "POST";
        await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        router.push("/admin/dashboard/projects");
        router.refresh();
      }}
    >
      <input name="title" defaultValue={project?.title ?? ""} placeholder="title" required className="w-full border bg-transparent p-3" />
      <textarea name="description" defaultValue={project?.description ?? ""} placeholder="description" required rows={5} className="w-full border bg-transparent p-3" />
      <input name="tags" defaultValue={project?.tags?.join(", ") ?? ""} placeholder="tags comma separated" required className="w-full border bg-transparent p-3" />
      <input name="github_url" defaultValue={project?.github_url ?? ""} placeholder="github_url" className="w-full border bg-transparent p-3" />
      <input name="image_url" defaultValue={project?.image_url ?? ""} placeholder="image_url" className="w-full border bg-transparent p-3" />
      <input name="order_index" type="number" defaultValue={project?.order_index ?? 0} placeholder="order_index" className="w-full border bg-transparent p-3" />
      <label className="mono block text-sm"><input name="featured" type="checkbox" defaultChecked={project?.featured ?? false} /> featured</label>
      <button className="mono border px-4 py-2 text-sm" type="submit">[ save ]</button>
    </form>
  );
}
