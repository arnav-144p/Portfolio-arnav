import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "@/lib/supabaseConfig";

export type { Project } from "@/lib/projects";

export const getSupabaseServerClient = (useServiceRole = false): SupabaseClient | null => {
  const env = getSupabaseEnv(useServiceRole);
  if (!env) return null;

  return createClient(env.url, env.key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
};

