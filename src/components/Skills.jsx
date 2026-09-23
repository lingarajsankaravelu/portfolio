import { motion } from "framer-motion";
import { competencies } from "../data/resume";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { StaggerGroup, StaggerItem } from "./Stagger";

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Core Competencies" title="What I build with" />

      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {competencies.map((group) => (
          <StaggerItem key={group.group}>
            <SpotlightCard
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_1px_0_var(--border)] transition-colors hover:border-[var(--accent)]"
            >
              <h3 className="text-sm font-semibold text-[var(--text-h)]">{group.group}</h3>
              <div className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-medium uppercase tracking-wide text-[var(--text)]">
                      {item.label}
                    </p>
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                      className="mt-2 flex flex-wrap gap-1.5"
                    >
                      {item.skills.map((s) => (
                        <motion.span
                          key={s}
                          variants={pillVariants}
                          whileHover={{ scale: 1.08 }}
                          className="rounded-md bg-[var(--accent-soft)] px-2 py-1 text-xs font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
