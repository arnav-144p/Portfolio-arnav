update projects
set description = 'An end-to-end machine learning system for forecasting retail demand across multiple stores and products. Built to transform historical sales data into accurate demand predictions, helping support inventory planning and business decision-making.'
where title = 'Retail Demand Forecasting';

update projects
set
  description = 'An AI-powered communication coach that analyzes speech recordings and delivers actionable feedback on clarity, pacing, and vocal delivery. Combines signal processing and machine learning to help users improve their speaking skills over time.',
  github_url = 'https://github.com/ajayyysainii/sparrow'
where title = 'Sparrow: AI Voice Coaching Platform';
