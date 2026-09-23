import { motion } from "framer-motion";
import { education, languages } from "../data/resume";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Stagger";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading index="04" eyebrow="Education" title="Where it started" />

      <StaggerGroup>
        <StaggerItem>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-[var(--text-h)]">{education.degree}</h3>
              <span className="font-mono text-xs text-[var(--text)]">{education.period}</span>
            </div>
            <p className="mt-1 text-sm text-[var(--text)]">{education.school}</p>
          </motion.div>
        </StaggerItem>

        <StaggerItem className="mt-6 flex flex-wrap gap-2">
          {languages.map((l) => (
            <span
              key={l.name}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              <strong className="text-[var(--text-h)]">{l.name}</strong> · {l.level}
            </span>
          ))}
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
