import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm uppercase tracking-widest text-[var(--accent)]"
      >
        {eyebrow}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-2 text-2xl font-semibold text-[var(--text-h)] md:text-3xl"
      >
        {title}
      </motion.p>
    </div>
  );
}
