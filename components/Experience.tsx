export default function Experience() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="section-label">{"// experience"}</div>
      <article
        className="border-l-2 p-6 transition-colors duration-300 hover:border-[var(--accent2)]"
        style={{ borderColor: "var(--accent)", background: "var(--surface)" }}
      >
        <h3 className="mono text-2xl">Turning Data Into Deployable ML Systems</h3>
        <p className="mt-4 leading-7" style={{ color: "var(--muted)" }}>
          During my internship at AD Infocom Systems, I worked across the ML lifecycle—from preparing
          data and engineering features to deploying prediction services through APIs.
        </p>
        <p className="mt-5 mono text-sm">I helped build:</p>
        <ul className="mt-3 list-disc space-y-3 pl-5 leading-7" style={{ color: "var(--muted)" }}>
          <li>Data pipelines that automated dataset creation and preprocessing.</li>
          <li>FastAPI services for real-time model inference.</li>
          <li>
            Production-ready workflows that connected machine learning models with business
            applications.
          </li>
          <li>Scalable backend components supporting data science and engineering teams.</li>
        </ul>
      </article>
    </section>
  );
}
