import Link from "next/link";

type BlogPostPreview = {
  id: string;
  title: string;
  created_at: string;
  slug: string;
};

export default function Blog({ posts }: { posts: BlogPostPreview[] }) {
  return (
    <section id="writing" className="px-6 py-20 md:px-12">
      <div className="section-label">{"// writing"}</div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block mono">
            <span>→ </span>
            <span className="inline-block min-w-[220px] md:min-w-[420px]">{post.title}</span>
            <span style={{ color: "var(--muted)" }}>
              {new Date(post.created_at).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </Link>
        ))}
      </div>
      <Link href="/blog" className="mono mt-8 inline-block text-sm">
        [ read all → ]
      </Link>
    </section>
  );
}
