import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function SpotlightCard({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const mx = useMotionValue("50%");
  const my = useMotionValue("50%");

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set(`${((e.clientX - rect.left) / rect.width) * 100}%`);
    my.set(`${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      style={{ "--mx": mx, "--my": my }}
      className={`spotlight-card ${className}`}
      {...rest}
    >
      <div className="spotlight-glow" aria-hidden />
      {children}
    </MotionTag>
  );
}
