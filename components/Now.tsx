const nowItems = [
  "Working on forecasting, predictive analytics, and ML optimization",
  "Building production-ready inference pipelines with Python & FastAPI",
  "Exploring distributed training, feature stores, and model monitoring",
  "Studying modern ML infrastructure and scalable AI systems",
];

export default function Now() {
  return (
    <section id="now" className="px-6 py-20 md:px-12">
      <div className="section-label">{"// now"}</div>
      <div className="mono space-y-4 text-base md:text-lg">
        {nowItems.map((item) => (
          <p key={item}>→ {item}</p>
        ))}
      </div>
    </section>
  );
}
