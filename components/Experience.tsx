export default function Experience() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="section-label">{"// experience"}</div>
      <article
        className="border-l-2 p-6 transition-colors duration-300 hover:border-[var(--accent2)]"
        style={{ borderColor: "var(--accent)", background: "var(--surface)" }}
      >
        <h3 className="mono text-2xl">AD Infocom Systems</h3>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          Software Engineer Intern (ML Systems) — July 2025 - August 2025
        </p>
        <ul className="mt-5 list-disc space-y-3 pl-5">
          <li>
            Designed data preprocessing and feature engineering pipelines using Python, reducing
            manual overhead by ~35% and cutting ML model training setup time by ~40%
          </li>
          <li>
            Developed 3+ FastAPI endpoints for real-time ML model inference and deployment;
            integrated predictions into client-facing REST APIs
          </li>
          <li>
            Engineered automated data pipelines to generate model-ready datasets from raw inputs,
            supporting cross-functional data science workflows
          </li>
        </ul>
      </article>
    </section>
  );
}
