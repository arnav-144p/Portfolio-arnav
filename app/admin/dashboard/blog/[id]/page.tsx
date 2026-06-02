import BlogEditor from "@/components/admin/BlogEditor";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient(true);
  const post = supabase
    ? (await supabase.from("blog_posts").select("*").eq("id", params.id).single()).data
    : null;

  return (
    <div>
      <h1 className="mono mb-6 text-2xl">edit post</h1>
      <BlogEditor post={post} />
    </div>
  );
}
