const skills = {
  "ML / AI": [
    "Python",
    "Scikit-learn",
    "LightGBM",
    "TensorFlow",
    "Keras",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
  ],
  Concepts: [
    "Machine Learning",
    "Feature Engineering",
    "Time Series Forecasting",
    "Model Deployment",
    "Signal Processing",
    "Data Pipeline Design",
  ],
  Backend: ["FastAPI", "Flask", "Django", "Node.js", "REST API Design"],
  Languages: ["Python", "C++", "JavaScript", "Java", "SQL"],
  Tools: ["Git", "GitHub", "AWS EC2", "Google Colab", "Linux"],
};

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-12">
      <div className="section-label">{"// about"}</div>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 text-lg leading-8" style={{ color: "var(--text)" }}>
          I&apos;m a B.Tech IT student at NIT Jalandhar obsessed with building end-to-end ML
          pipelines. I&apos;ve interned as an ML Systems Engineer, shipped real forecasting models,
          and built AI voice coaching tools. I like making machines learn things more than I like
          sleeping.
          <p className="mt-6 mono text-sm" style={{ color: "var(--muted)" }}>
            NIT Jalandhar — B.Tech Information Technology (2023-Present)
          </p>
        </div>
        <div className="md:col-span-2 space-y-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="mono mb-2 text-sm" style={{ color: "var(--muted)" }}>
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="mono text-xs">
                    [ {skill} ]
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="mono pt-4 text-xs" style={{ color: "var(--muted)" }}>
            <p>✦ Deloitte Australia — Technology Job Simulation, 2025</p>
            <p>✦ AlgoUniversity — Graph Theory Camp, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
