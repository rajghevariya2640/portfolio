"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [big, setBig] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setBig(!!(e.target as HTMLElement).closest("a, button"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 [@media(hover:hover)_and_(pointer:fine)]:block"
    >
      <motion.div
        animate={{ width: big ? 64 : 14, height: big ? 64 : 14 }}
        className="rounded-full bg-cream mix-blend-difference"
      />
    </motion.div>
  );
}
