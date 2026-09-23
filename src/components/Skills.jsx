import { competencies } from "../data/resume";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-[var(--accent)]">Core Competencies</h2>
        <p className="mt-2 text-2xl font-semibold text-[var(--text-h)] md:text-3xl">What I build with</p>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {competencies.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="text-sm font-semibold text-[var(--text-h)]">{group.group}</h3>
              <div className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-medium uppercase tracking-wide text-[var(--text)]">
                      {item.label}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-[var(--accent-soft)] px-2 py-1 text-xs font-medium text-[var(--accent)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
