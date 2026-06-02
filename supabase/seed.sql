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
  'Retail Demand Forecasting',
  'An end-to-end machine learning system for forecasting retail demand across multiple stores and products. Built to transform historical sales data into accurate demand predictions, helping support inventory planning and business decision-making.',
  array['LightGBM', 'Time Series', 'Python', 'Scikit-learn', 'Pandas'],
  'https://github.com/arnav-144p/Retail-Demand-Forecast',
  true,
  1
),
(
  'Sparrow: AI Voice Coaching Platform',
  'An AI-powered communication coach that analyzes speech recordings and delivers actionable feedback on clarity, pacing, and vocal delivery. Combines signal processing and machine learning to help users improve their speaking skills over time.',
  array['Machine Learning', 'Signal Processing', 'librosa', 'Scikit-learn', 'Python'],
  'https://github.com/ajayyysainii/sparrow',
  true,
  2
)
on conflict do nothing;
