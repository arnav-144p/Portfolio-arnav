import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function AdminProjectsPage() {
  const supabase = getSupabaseServerClient(true);
  const projects = supabase
    ? (await supabase.from("projects").select("*").order("order_index")).data
    : [];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="mono text-2xl">projects</h1>
        <Link href="/admin/dashboard/projects/new" className="mono border px-4 py-2 text-sm">[ + add project ]</Link>
      </div>
      <div className="space-y-4">
        {(projects ?? []).map((project) => (
          <article key={project.id} className="border p-4">
            <p className="mono">{project.title}</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>{project.tags.join(", ")}</p>
            <p className="mono text-xs">featured: {String(project.featured)} | order: {project.order_index}</p>
            <div className="mt-3 flex gap-3">
              <Link href={`/admin/dashboard/projects/${project.id}`} className="mono text-sm">Edit</Link>
              <form action={`/api/admin/projects/${project.id}`} method="post">
                <button formMethod="delete" className="mono text-sm">Delete</button>
              </form>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
