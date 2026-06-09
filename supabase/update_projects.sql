insert into projects (title, description, tags, github_url, featured, order_index)
values (
  'Goal-Directed Active Vision System',
  'Built a goal-directed visual search agent using CLIP ViT-L/14 and Inverse Reinforcement Learning trained on the COCO-Search18 dataset. Outperformed passive baseline on target localization accuracy. Pipeline: frame sampling → CLIP feature extraction → IRL-based policy learning → fixation prediction evaluation.',
  array['PyTorch', 'CLIP ViT-L/14', 'OpenCV', 'IRL', 'COCO-Search18'],
  'https://github.com/arnav-144p',
  true,
  1
)
on conflict do nothing;

update projects
set order_index = 2
where title = 'Retail Demand Forecasting';

update projects
set
  description = 'An end-to-end machine learning system for forecasting retail demand across multiple stores and products. Built to transform historical sales data into accurate demand predictions, helping support inventory planning and business decision-making.',
  order_index = 2
where title = 'Retail Demand Forecasting';

update projects
set
  description = 'An AI-powered communication coach that analyzes speech recordings and delivers actionable feedback on clarity, pacing, and vocal delivery. Combines signal processing and machine learning to help users improve their speaking skills over time.',
  github_url = 'https://github.com/ajayyysainii/sparrow',
  order_index = 3
where title = 'Sparrow: AI Voice Coaching Platform';
