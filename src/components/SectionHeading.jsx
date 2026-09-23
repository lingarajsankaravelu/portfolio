import { motion } from "framer-motion";

export default function SectionHeading({ index, eyebrow, title }) {
  return (
    <div className="relative">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute -top-10 -left-2 select-none font-mono text-[7rem] font-bold leading-none text-[var(--text-h)] opacity-[0.04] sm:text-[9rem]"
      >
        {index}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative font-mono text-sm uppercase tracking-widest text-[var(--accent)]"
      >
        {eyebrow}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="relative mt-2 text-2xl font-semibold text-[var(--text-h)] md:text-3xl"
      >
        {title}
      </motion.p>
    </div>
  );
}
