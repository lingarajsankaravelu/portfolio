import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "../data/resume";

const nameWords = profile.name.split(" ");

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const glowX = useSpring(mx, { stiffness: 60, damping: 20 });
  const glowY = useSpring(my, { stiffness: 60, damping: 20 });
  const glowLeft = useTransform(glowX, (v) => `${v * 100}%`);
  const glowTop = useTransform(glowY, (v) => `${v * 100}%`);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative mx-auto max-w-4xl overflow-hidden px-6 pb-24 pt-20 md:pt-28"
    >
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob-1 absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)] opacity-20 blur-3xl" />
        <div className="animate-blob-2 absolute -right-24 top-10 h-80 w-80 rounded-full bg-[var(--accent-2)] opacity-[0.14] blur-3xl" />
      </div>

      {/* cursor-follow glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full opacity-[0.12] blur-3xl"
        style={{
          left: glowLeft,
          top: glowTop,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, var(--accent), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-3 py-1 font-mono text-xs text-[var(--text)]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {profile.location} · {profile.relocation}
      </motion.div>

      <h1
        className="mt-6 flex flex-wrap gap-x-4 text-5xl font-semibold tracking-tight text-[var(--text-h)] sm:text-6xl md:text-7xl"
        style={{ perspective: 800 }}
      >
        {nameWords.map((word, i) => (
          <motion.span
            key={word + i}
            custom={i}
            initial="hidden"
            animate="show"
            variants={wordVariants}
            className="inline-block bg-gradient-to-br from-[var(--text-h)] to-[var(--text-h)] bg-clip-text"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-lg font-medium text-transparent md:text-xl"
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text)]"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href={`mailto:${profile.email}`}
          className="group relative overflow-hidden rounded-full bg-[var(--text-h)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-105"
        >
          Get in touch
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
