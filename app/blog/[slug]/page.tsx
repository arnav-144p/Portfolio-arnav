import Link from "next/link";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = getSupabaseServerClient();
  if (!supabase) notFound();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("published", true)
    .single();

  if (!post) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <Link href="/blog" className="mono text-sm">
        ← back to writing
      </Link>
      <h1 className="mono mt-8 text-4xl">{post.title}</h1>
      <div className="prose prose-invert mt-8 max-w-none">
        <Markdown
          components={{
            code(props) {
              return (
                <code
                  className="rounded px-1 py-0.5 mono"
                  style={{ background: "var(--surface)", color: "var(--accent)" }}
                >
                  {props.children}
                </code>
              );
            },
            pre(props) {
              return (
                <pre
                  className="overflow-auto rounded p-4 mono"
                  style={{ background: "var(--surface)", color: "var(--accent)" }}
                >
                  {props.children}
                </pre>
              );
            },
          }}
        >
          {post.content}
        </Markdown>
      </div>
    </main>
  );
}
