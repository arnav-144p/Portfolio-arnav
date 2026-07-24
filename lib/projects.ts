export type Project = {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  github_url?: string | null;
  live_url?: string | null;
  image_url?: string | null;
  featured?: boolean;
  order_index?: number;
  created_at?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "CastDraw",
    description:
      "Solo-built a Windows desktop app that overlays air-drawn hand gestures onto live video calls through a custom virtual camera. Four-thread pipeline (webcam capture, hand tracking, compositor, camera push) with crossbeam::channel::bounded(1) for stale-frame dropping. Diagnosed a video lag issue down to per-frame Tauri invoke IPC overhead and re-architected it around the Channel API with a Condvar-based wake mechanism. Built the virtual camera driver in C++ using Microsoft's VCamSample reference via MFCreateVirtualCamera, and fixed stroke-rendering artifacts by splitting the render path (One Euro filter, Bezier smoothing, canvas) from the analysis path (One Euro filter, decimation, approxPolyDP).",
    tags: ["Tauri", "Next.js", "TypeScript", "C++", "Windows COM API", "Computer Vision"],
    live_url: "https://castdraw.pages.dev/",
    featured: true,
    order_index: 1,
  },
  {
    id: "2",
    title: "Goal-Directed Active Vision System",
    description:
      "Built a goal-directed visual search agent using CLIP ViT-L/14 and Inverse Reinforcement Learning trained on the COCO-Search18 dataset. Outperformed passive baseline on target localization accuracy. Pipeline: frame sampling → CLIP feature extraction → IRL-based policy learning → fixation prediction evaluation.",
    tags: ["PyTorch", "CLIP ViT-L/14", "OpenCV", "IRL", "COCO-Search18"],
    github_url: "https://github.com/arnav-144p",
    featured: true,
    order_index: 2,
  },
  {
    id: "3",
    title: "Retail Demand Forecasting",
    description:
      "An end-to-end machine learning system for forecasting retail demand across multiple stores and products. Built to transform historical sales data into accurate demand predictions, helping support inventory planning and business decision-making.",
    tags: ["LightGBM", "Time Series", "Python", "Scikit-learn", "Pandas"],
    github_url: "https://github.com/arnav-144p/Retail-Demand-Forecast",
    featured: true,
    order_index: 3,
  },
  {
    id: "4",
    title: "Sparrow: AI Voice Coaching Platform",
    description:
      "An AI-powered communication coach that analyzes speech recordings and delivers actionable feedback on clarity, pacing, and vocal delivery. Combines signal processing and machine learning to help users improve their speaking skills over time.",
    tags: ["Machine Learning", "Signal Processing", "librosa", "Scikit-learn", "Python"],
    github_url: "https://github.com/ajayyysainii/sparrow",
    featured: true,
    order_index: 4,
  },
];
