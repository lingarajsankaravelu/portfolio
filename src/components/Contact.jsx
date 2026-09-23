import { motion } from "framer-motion";
import { profile } from "../data/resume";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-8 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-blob-1 absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[var(--accent)] opacity-[0.1] blur-3xl" />
          <div className="animate-blob-2 absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-[var(--accent-2)] opacity-[0.1] blur-3xl" />
        </div>

        <h2 className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Let's build something.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--text)]">
          Open to relocation — visa sponsorship may be required.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[var(--text-h)] px-5 py-2.5 font-medium text-[var(--bg)]"
          >
            {profile.email}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-[var(--border)] px-5 py-2.5 font-medium text-[var(--text-h)]"
          >
            {profile.phone}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] px-5 py-2.5 font-medium text-[var(--text-h)]"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] px-5 py-2.5 font-medium text-[var(--text-h)]"
          >
            LinkedIn
          </motion.a>
        </div>
      </Reveal>

      <p className="mt-10 text-center font-mono text-xs text-[var(--text)]">
        © {new Date().getFullYear()} {profile.name} · Built with React & Vite
      </p>
    </footer>
  );
}
