import { Link, Navigate, useParams } from "react-router-dom";
import { Artwork } from "./Artwork";
import { GithubIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { projects } from "../data/projects";

function SectionHead({ title }: { title: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">
      {title}
    </p>
  );
}

export function ProjectPage() {
  const { id } = useParams();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return <Navigate to="/" replace />;

  const project = projects[idx];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <header className="mx-auto flex max-w-content items-center justify-between px-6 py-7 md:px-12">
        <Link
          to="/"
          className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          ← All work
        </Link>
      </header>

      <div className="relative overflow-hidden pt-10 md:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 20%, rgba(180,55,90,0.09), transparent 42%)",
          }}
        />
        <div className="relative mx-auto grid max-w-content items-center gap-14 px-6 md:px-12 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <Reveal>
            <div>
              <SectionLabel>{`Project Deep Dive`}</SectionLabel>
              <h1 className="mt-6 max-w-[16ch] font-serif text-[clamp(42px,5vw,76px)] leading-[1.02] text-[var(--text-primary)]">
                {project.title}
              </h1>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {project.role}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} y={40}>
            <div className="relative aspect-[1.35/1] overflow-hidden rounded-card border border-[var(--border-light)] shadow-soft">
              <Artwork variant={project.art} />
            </div>
          </Reveal>
        </div>

        {project.image && (
          <Reveal delay={0.25}>
            <div className="relative mx-auto mt-16 max-w-content px-6 md:px-12">
              <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-14">
                <div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">
                    Production Evidence
                  </p>
                  <div className="overflow-hidden rounded-card border border-[var(--border-light)]">
                    <img
                      src={project.image}
                      alt={`${project.title} — production screenshot`}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">
                    The build
                  </p>
                  <p className="max-w-[52ch] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
                    {project.approach}
                  </p>
                  <dl className="mt-8 max-w-[460px]">
                    {project.stack.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-baseline justify-between gap-6 border-b border-[var(--border)] py-3 last:border-b-0"
                      >
                        <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                          {fact.label}
                        </dt>
                        <dd className="text-right text-[15px] text-[var(--text-primary)]">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {!project.image && (
          <section className="mt-20 grid gap-8 border-t border-[var(--border)] pt-14 md:grid-cols-[240px_1fr] md:gap-16">
            <Reveal>
              <SectionHead title="The build" />
            </Reveal>
            <div>
              <Reveal delay={0.08}>
                <p className="max-w-[62ch] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
                  {project.approach}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <dl className="mt-10 max-w-[560px]">
                  {project.stack.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-6 border-b border-[var(--border)] py-3 last:border-b-0"
                    >
                      <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        {fact.label}
                      </dt>
                      <dd className="text-right text-[15px] text-[var(--text-primary)]">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </section>
        )}

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-12 flex max-w-content flex-wrap items-center gap-2 px-6 md:px-12">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-dark px-4 py-1.5 text-[13px]">
                {tag}
              </span>
            ))}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 self-center font-mono text-[13px] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent)]"
              >
                <GithubIcon className="h-[17px] w-[17px] shrink-0" />
                GitHub
                <span
                  aria-hidden="true"
                  className="inline-block opacity-60 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            )}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-content px-6 pb-28 md:px-12">
        <section className="mt-24 grid gap-8 border-t border-[var(--border)] pt-14 md:grid-cols-[240px_1fr] md:gap-16">
          <Reveal>
            <SectionHead title="The problem" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[62ch] text-[19px] leading-[1.7] text-[var(--text-secondary)]">
              {project.problem}
            </p>
          </Reveal>
        </section>

        <Reveal>
          <section className="mt-24 grid gap-10 border-y border-[var(--border)] py-14 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-serif text-[clamp(40px,4vw,58px)] leading-none text-[var(--accent-secondary)]">
                  {m.value}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {m.label}
                </p>
              </div>
            ))}
          </section>
        </Reveal>

        <section className="mt-20 grid gap-8 md:grid-cols-[240px_1fr] md:gap-16">
          <Reveal>
            <SectionHead title="What it delivers" />
          </Reveal>
          <ul className="grid gap-x-16 lg:grid-cols-2">
            {project.features.map((feature, i) => (
              <li
                key={feature}
                className="group flex items-baseline gap-5 border-b border-[var(--border)] py-4 transition-colors duration-300 hover:border-[var(--border-light)]"
              >
                <span className="shrink-0 font-mono text-[11px] text-[var(--accent)]/60 transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px] leading-[1.55] text-[var(--text-secondary)]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
