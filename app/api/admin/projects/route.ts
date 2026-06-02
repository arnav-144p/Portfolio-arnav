import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function GET() {
  const supabase = getSupabaseServerClient(true);
  if (!supabase) return NextResponse.json({ error: "Supabase is not configured" }, { status: 500 });
  const { data, error } = await supabase.from("projects").select("*").order("order_index");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const supabase = getSupabaseServerClient(true);
  if (!supabase) return NextResponse.json({ error: "Supabase is not configured" }, { status: 500 });
  const { data, error } = await supabase.from("projects").insert(payload).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
