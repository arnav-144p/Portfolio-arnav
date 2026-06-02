"use client";

export default function Hero() {
  const roleWords = "AI/ML Engineer".split(" ");
  const taglineWords = "building things that learn".split(" ");

  return (
    <section className="relative flex min-h-screen items-center px-6 md:px-12">
      <div className="dot-grid-bg absolute inset-0 pointer-events-none" />
      <div className="relative z-10">
        <h1 className="mono text-4xl md:text-6xl">
          <span style={{ color: "var(--accent)" }}>&lt;/</span> Arnav Bhilwariya{" "}
          <span style={{ color: "var(--accent2)" }}>/&gt;</span>
        </h1>
        <div className="mono mt-2 text-3xl cursor-blink">|</div>
        <p className="mono mt-6 text-xl">
          {roleWords.map((word, index) => (
            <span key={word + index} className="hero-word" style={{ animationDelay: `${index * 100}ms` }}>
              {word}&nbsp;
            </span>
          ))}
        </p>
        <p className="mt-2 text-lg" style={{ color: "var(--muted)" }}>
          {taglineWords.map((word, index) => (
            <span
              key={word + index}
              className="hero-word"
              style={{ animationDelay: `${(index + roleWords.length) * 100}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
        <div className="mt-10 flex gap-5">
          <a
            href="#projects"
            className="mono border px-4 py-2 text-sm lowercase transition-colors"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            [ view projects ]
          </a>
          <a
            href="https://github.com/arnav-144p"
            target="_blank"
            rel="noreferrer"
            className="mono px-1 py-2 text-sm lowercase"
            style={{ color: "var(--muted)" }}
          >
            [ github ↗ ]
          </a>
        </div>
      </div>
    </section>
  );
}
