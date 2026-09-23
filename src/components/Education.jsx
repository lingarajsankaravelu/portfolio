import { education, languages } from "../data/resume";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--accent)]">Education</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-[var(--text-h)]">{education.degree}</h3>
            <span className="font-mono text-xs text-[var(--text)]">{education.period}</span>
          </div>
          <p className="mt-1 text-sm text-[var(--text)]">{education.school}</p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-wrap gap-2">
          {languages.map((l) => (
            <span
              key={l.name}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text)]"
            >
              <strong className="text-[var(--text-h)]">{l.name}</strong> · {l.level}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
