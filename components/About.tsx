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
          I&apos;m an AI/ML enthusiast focused on building intelligent systems, data-driven
          applications, and scalable software. I enjoy turning ideas into products, experimenting
          with machine learning models, and exploring how AI can solve real-world problems.
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
