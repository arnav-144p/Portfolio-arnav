import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function AdminBlogPage() {
  const supabase = getSupabaseServerClient(true);
  const posts = supabase
    ? (await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })).data
    : [];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="mono text-2xl">blog posts</h1>
        <Link href="/admin/dashboard/blog/new" className="mono border px-4 py-2 text-sm">[ + new post ]</Link>
      </div>
      <div className="space-y-4">
        {(posts ?? []).map((post) => (
          <article key={post.id} className="border p-4">
            <p className="mono">{post.title}</p>
            <p className="mono text-xs" style={{ color: "var(--muted)" }}>
              {post.slug} | {post.published ? "published" : "draft"} | {new Date(post.created_at).toDateString()}
            </p>
            <div className="mt-3 flex gap-3">
              <Link href={`/admin/dashboard/blog/${post.id}`} className="mono text-sm">Edit</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
