import { motion } from "framer-motion";
import { certifications } from "../data/resume";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Stagger";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Certifications" title="Keeping up with the LLM stack" />

      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <StaggerItem key={cert.credentialId}>
            <motion.a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--accent)]">
                  {cert.issuer}
                </span>
                <span className="whitespace-nowrap font-mono text-xs text-[var(--text)]">
                  {cert.issued}
                  {cert.expires ? ` – ${cert.expires}` : ""}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-semibold leading-snug text-[var(--text-h)]">
                {cert.title}
              </h3>

              {cert.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--accent)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto flex items-center justify-between pt-4">
                <p className="font-mono text-[11px] text-[var(--text)] opacity-70">
                  ID · {cert.credentialId}
                </p>
                <span className="flex items-center gap-1 text-[11px] font-medium text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                  Show credential
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
