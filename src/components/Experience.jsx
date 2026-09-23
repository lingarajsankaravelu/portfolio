import { experience } from "../data/resume";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--accent)]">Experience</h2>
        <p className="mt-2 text-2xl font-semibold text-[var(--text-h)] md:text-3xl">
          10+ years across startups and scale
        </p>
      </Reveal>

      <div className="relative mt-12 space-y-12 border-l border-[var(--border)] pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent-soft)]" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-[var(--text-h)]">
                {job.company}
                {job.tag && (
                  <span className="ml-2 rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                    {job.tag}
                  </span>
                )}
              </h3>
              <span className="font-mono text-xs text-[var(--text)]">{job.period}</span>
            </div>

            <p className="mt-1 text-sm italic text-[var(--text)]">{job.role}</p>

            <ul className="mt-4 space-y-2">
              {job.bullets.map((b, idx) => {
                const [label, ...rest] = b.split(": ");
                const hasLabel = rest.length > 0;
                return (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[var(--text)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--border)]" />
                    <span>
                      {hasLabel && <strong className="text-[var(--text-h)]">{label}: </strong>}
                      {hasLabel ? rest.join(": ") : b}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
