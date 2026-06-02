import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function BlogPage() {
  const supabase = getSupabaseServerClient();
  const posts = supabase
    ? (
        await supabase
          .from("blog_posts")
          .select("id,title,slug,excerpt,created_at")
          .eq("published", true)
          .order("created_at", { ascending: false })
      ).data
    : [];

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <div className="section-label">{"// writing"}</div>
      <div className="space-y-7">
        {(posts ?? []).map((post) => (
          <article key={post.id}>
            <Link href={`/blog/${post.slug}`} className="mono text-2xl">
              {post.title}
            </Link>
            <p className="mt-2" style={{ color: "var(--muted)" }}>
              {post.excerpt}
            </p>
            <p className="mono mt-2 text-xs" style={{ color: "var(--muted)" }}>
              {new Date(post.created_at).toDateString()}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
