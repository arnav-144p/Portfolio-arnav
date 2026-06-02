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
  'Time-series demand forecasting system predicting daily sales across 50+ stores and 3,000+ items. Trained LightGBM achieving MAE 1.38 and RMSE 2.01, outperforming baseline by 22%.',
  array['LightGBM', 'Time Series', 'Python', 'Scikit-learn', 'Pandas'],
  'https://github.com/arnav-144p/Retail-Demand-Forecast',
  true,
  1
),
(
  'Sparrow: AI Voice Coaching Platform',
  'AI-driven voice analysis system extracting acoustic features (pitch, clarity, pacing) via signal processing. Delivers real-time structured coaching feedback with session-level improvement tracking.',
  array['Machine Learning', 'Signal Processing', 'librosa', 'Scikit-learn', 'Python'],
  'https://github.com/arnav-144p',
  true,
  2
)
on conflict do nothing;
