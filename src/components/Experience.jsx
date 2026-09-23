import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data/resume";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Stagger";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading index="01" eyebrow="Experience" title="10+ years across startups and scale" />

      <div ref={containerRef} className="relative mt-14 pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-[var(--accent)] to-[var(--accent-2)]"
        />

        <div className="space-y-16">
          {experience.map((job) => (
            <StaggerGroup key={job.company} className="relative" viewportMargin="-60px">
              <StaggerItem>
                <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent-soft)]" />

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
              </StaggerItem>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((b, idx) => {
                  const [label, ...rest] = b.split(": ");
                  const hasLabel = rest.length > 0;
                  return (
                    <StaggerItem
                      key={idx}
                      as="li"
                      className="flex gap-3 text-sm leading-relaxed text-[var(--text)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>
                        {hasLabel && <strong className="text-[var(--text-h)]">{label}: </strong>}
                        {hasLabel ? rest.join(": ") : b}
                      </span>
                    </StaggerItem>
                  );
                })}
              </ul>
            </StaggerGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
