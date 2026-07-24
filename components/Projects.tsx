import type { Project } from "@/lib/projects";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-6 py-20 md:px-12">
      <div className="section-label">{"// projects"}</div>
      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.id ?? project.title}
            className="border-l-2 p-6 transition-colors duration-300 hover:border-[var(--accent2)]"
            style={{ borderColor: "var(--accent)", background: "var(--surface)" }}
            data-reveal="slide"
          >
            <h3 className="mono text-2xl">{project.title}</h3>
            <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="mono text-xs">
                  [ {tag} ]
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mono text-sm"
                >
                  live ↗
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mono text-sm"
                >
                  github ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
