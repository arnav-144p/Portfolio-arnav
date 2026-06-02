import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function DashboardHome() {
  const supabase = getSupabaseServerClient(true);
  if (!supabase) {
    return null;
  }

  const [{ count: projects }, { count: totalPosts }, { count: publishedPosts }, { count: unread }] =
    await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("blog_posts").select("*", { count: "exact", head: true }),
      supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("published", true),
      supabase.from("messages").select("*", { count: "exact", head: true }).eq("read", false),
    ]);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <article className="border p-5">
        <p className="mono text-sm">Total projects</p>
        <p className="mono mt-3 text-3xl">{projects ?? 0}</p>
      </article>
      <article className="border p-5">
        <p className="mono text-sm">Blog posts (published / total)</p>
        <p className="mono mt-3 text-3xl">{publishedPosts ?? 0} / {totalPosts ?? 0}</p>
      </article>
      <article className="border p-5">
        <p className="mono text-sm">Unread messages</p>
        <p className="mono mt-3 text-3xl" style={{ color: (unread ?? 0) > 0 ? "var(--accent2)" : "var(--text)" }}>
          {unread ?? 0}
        </p>
      </article>
    </div>
  );
}
