insert into projects (
  title,
  description,
  tags,
  github_url,
  featured,
  order_index
)
values
(
  'Goal-Directed Active Vision System',
  'Built a goal-directed visual search agent using CLIP ViT-L/14 and Inverse Reinforcement Learning trained on the COCO-Search18 dataset. Outperformed passive baseline on target localization accuracy. Pipeline: frame sampling → CLIP feature extraction → IRL-based policy learning → fixation prediction evaluation.',
  array['PyTorch', 'CLIP ViT-L/14', 'OpenCV', 'IRL', 'COCO-Search18'],
  'https://github.com/arnav-144p',
  true,
  1
),
(
  'Retail Demand Forecasting',
  'An end-to-end machine learning system for forecasting retail demand across multiple stores and products. Built to transform historical sales data into accurate demand predictions, helping support inventory planning and business decision-making.',
  array['LightGBM', 'Time Series', 'Python', 'Scikit-learn', 'Pandas'],
  'https://github.com/arnav-144p/Retail-Demand-Forecast',
  true,
  2
),
(
  'Sparrow: AI Voice Coaching Platform',
  'An AI-powered communication coach that analyzes speech recordings and delivers actionable feedback on clarity, pacing, and vocal delivery. Combines signal processing and machine learning to help users improve their speaking skills over time.',
  array['Machine Learning', 'Signal Processing', 'librosa', 'Scikit-learn', 'Python'],
  'https://github.com/ajayyysainii/sparrow',
  true,
  3
)
on conflict do nothing;
