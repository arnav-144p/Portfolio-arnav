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
      "An end-to-end machine learning system for forecasting retail demand across multiple stores and products. Built to transform historical sales data into accurate demand predictions, helping support inventory planning and business decision-making.",
    tags: ["LightGBM", "Time Series", "Python", "Scikit-learn", "Pandas"],
    github_url: "https://github.com/arnav-144p/Retail-Demand-Forecast",
    featured: true,
    order_index: 1,
  },
  {
    title: "Sparrow: AI Voice Coaching Platform",
    description:
      "An AI-powered communication coach that analyzes speech recordings and delivers actionable feedback on clarity, pacing, and vocal delivery. Combines signal processing and machine learning to help users improve their speaking skills over time.",
    tags: ["Machine Learning", "Signal Processing", "librosa", "Scikit-learn", "Python"],
    github_url: "https://github.com/ajayyysainii/sparrow",
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
