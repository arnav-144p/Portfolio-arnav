import ProjectForm from "@/components/admin/ProjectForm";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient(true);
  const project = supabase
    ? (await supabase.from("projects").select("*").eq("id", params.id).single()).data
    : null;

  return (
    <div>
      <h1 className="mono mb-6 text-2xl">edit project</h1>
      <ProjectForm project={project} />
    </div>
  );
}
