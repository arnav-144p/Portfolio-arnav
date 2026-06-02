import MessageCard from "@/components/admin/MessageCard";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function MessagesPage() {
  const supabase = getSupabaseServerClient(true);
  const messages = supabase
    ? (await supabase.from("messages").select("*").order("created_at", { ascending: false })).data
    : [];

  return (
    <div>
      <h1 className="mono mb-6 text-2xl">messages</h1>
      {(messages ?? []).map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
}
