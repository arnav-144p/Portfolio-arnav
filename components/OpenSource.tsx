const merged = [
  {
    repo: "pytorch/torchtitan",
    pr: "#3493",
    title: "Fix broken CI flavor for FSDP+TP+PP+compile combination",
    href: "https://github.com/pytorch/torchtitan/pull/3493",
  },
  {
    repo: "BerriAI/litellm",
    pr: "#29753",
    title:
      "Fixed typo in proxy SSO role mappings (generic_role_mappoings_default_role → generic_role_mappings_default_role) in ui_sso.py",
    href: "https://github.com/BerriAI/litellm/pull/29753",
  },
];

const openPrs = [
  {
    repo: "huggingface/transformers",
    pr: "#46353",
    title: "Added ValueError for unsupported continue_final_message in mistral-common tokenizer",
    href: "https://github.com/huggingface/transformers/pull/46353",
  },
  {
    repo: "stanfordnlp/dspy",
    pr: "#9884",
    title:
      "Fixed bug in Tool.format_as_litellm_function_call where args with default values were incorrectly included in the required array of JSON Schema",
    href: "https://github.com/stanfordnlp/dspy/pull/9884",
  },
];

function ContributionCard({
  repo,
  pr,
  title,
  href,
  status,
}: {
  repo: string;
  pr: string;
  title: string;
  href: string;
  status: "merged" | "open";
}) {
  return (
    <article
      className="border-l-2 p-6 transition-colors duration-300 hover:border-[var(--accent2)]"
      style={{ borderColor: "var(--accent)", background: "var(--surface)" }}
      data-reveal="slide"
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="mono text-xl">{repo}</h3>
        <span className="mono text-sm" style={{ color: "var(--muted)" }}>
          PR {pr}
        </span>
        <span
          className="mono text-xs"
          style={{ color: status === "merged" ? "var(--green)" : "var(--accent2)" }}
        >
          [ {status === "merged" ? "merged" : "open"} ]
        </span>
      </div>
      <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>
        {title}
      </p>
      <a href={href} target="_blank" rel="noreferrer" className="mono mt-5 inline-block text-sm">
        view pr ↗
      </a>
    </article>
  );
}

export default function OpenSource() {
  return (
    <section id="open-source" className="px-6 py-20 md:px-12">
      <div className="section-label">{"// open source"}</div>

      <p className="mono mb-6 text-sm" style={{ color: "var(--muted)" }}>
        merged
      </p>
      <div className="space-y-5">
        {merged.map((item) => (
          <ContributionCard key={item.href} {...item} status="merged" />
        ))}
      </div>

      <p className="mono mb-6 mt-12 text-sm" style={{ color: "var(--muted)" }}>
        open prs
      </p>
      <div className="space-y-5">
        {openPrs.map((item) => (
          <ContributionCard key={item.href} {...item} status="open" />
        ))}
      </div>
    </section>
  );
}
