import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "@/lib/supabaseConfig";

let browserClient: SupabaseClient | null = null;

/** Browser client using the publishable key (NEXT_PUBLIC_SUPABASE_ANON_KEY). */
export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (browserClient) return browserClient;
  const env = getSupabaseEnv(false);
  if (!env) return null;
  browserClient = createClient(env.url, env.key);
  return browserClient;
}
