import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "@/lib/supabaseConfig";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github_url: string | null;
  image_url: string | null;
  featured: boolean;
  order_index: number;
  created_at: string;
};

const seedProjects = [
  {
    title: "Retail Demand Forecasting",
    description:
      "Time-series demand forecasting system predicting daily sales across 50+ stores and 3,000+ items. Trained LightGBM achieving MAE 1.38 and RMSE 2.01, outperforming baseline by 22%.",
    tags: ["LightGBM", "Time Series", "Python", "Scikit-learn", "Pandas"],
    github_url: "https://github.com/arnav-144p/Retail-Demand-Forecast",
    featured: true,
    order_index: 1,
  },
  {
    title: "Sparrow: AI Voice Coaching Platform",
    description:
      "AI-driven voice analysis system extracting acoustic features (pitch, clarity, pacing) via signal processing. Delivers real-time structured coaching feedback with session-level improvement tracking.",
    tags: ["Machine Learning", "Signal Processing", "librosa", "Scikit-learn", "Python"],
    github_url: "https://github.com/arnav-144p",
    featured: true,
    order_index: 2,
  },
];

export const getSupabaseServerClient = (useServiceRole = false): SupabaseClient | null => {
  const env = getSupabaseEnv(useServiceRole);
  if (!env) return null;

  return createClient(env.url, env.key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
};

export async function getProjectsWithSeed() {
  const supabase = getSupabaseServerClient(true);
  if (!supabase) return seedProjects as Project[];

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    return seedProjects as Project[];
  }

  if (!data || data.length === 0) {
    await supabase.from("projects").insert(seedProjects);
    return seedProjects as Project[];
  }

  return data as Project[];
}
