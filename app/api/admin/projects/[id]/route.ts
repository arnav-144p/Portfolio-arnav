import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const payload = await request.json();
  const supabase = getSupabaseServerClient(true);
  if (!supabase) return NextResponse.json({ error: "Supabase is not configured" }, { status: 500 });
  const { data, error } = await supabase
    .from("projects")
    .update(payload)
    .eq("id", params.id)
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient(true);
  if (!supabase) return NextResponse.json({ error: "Supabase is not configured" }, { status: 500 });
  const { error } = await supabase.from("projects").delete().eq("id", params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
