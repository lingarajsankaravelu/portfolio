import { motion } from "framer-motion";
import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-20 pt-16 md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-[var(--accent)]"
      >
        {profile.location} · {profile.relocation}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text-h)] sm:text-5xl md:text-6xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-3 text-lg text-[var(--text)] md:text-xl"
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text)]"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-[var(--text-h)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-105"
        >
          Get in touch
        </a>
        <a
          href="#experience"
          className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View experience
        </a>
      </motion.div>
    </section>
  );
}
