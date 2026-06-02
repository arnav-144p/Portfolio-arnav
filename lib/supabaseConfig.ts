/**
 * Supabase env helpers.
 * NEXT_PUBLIC_SUPABASE_ANON_KEY holds the publishable key (sb_publishable_...).
 * SUPABASE_SERVICE_ROLE_KEY holds the secret key (sb_secret_...) for server/admin routes.
 */

export function normalizeSupabaseUrl(raw?: string): string | null {
  if (!raw) return null;

  const trimmed = raw.trim().replace(/^["']|["']$/g, "");
  if (!trimmed || trimmed.includes("your_supabase")) return null;

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const url = new URL(trimmed);
      if (url.protocol !== "http:" && url.protocol !== "https:") return null;
      return url.origin;
    } catch {
      return null;
    }
  }

  // Allow project ref only (e.g. eenzximgzvhkskfxudvs)
  if (/^[a-z0-9-]+$/i.test(trimmed)) {
    return `https://${trimmed}.supabase.co`;
  }

  return null;
}

/** Publishable key for browser + public server reads (RLS). */
export function getPublishableKey(): string | null {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!key || key.includes("your_anon")) return null;
  return key;
}

/** Secret key for admin API routes only — never expose to the client. */
export function getServiceRoleKey(): string | null {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!key || key.includes("your_service")) return null;
  return key;
}

export function getSupabaseEnv(useServiceRole = false) {
  const url = normalizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const key = useServiceRole ? getServiceRoleKey() : getPublishableKey();
  if (!url || !key) return null;
  return { url, key };
}
