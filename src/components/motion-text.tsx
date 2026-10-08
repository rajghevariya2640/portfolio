"use client";

import { useRef } from "react";
import { useLoaded } from "@/components/loader";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/** Words slide up out of a mask, staggered. */
export function MaskWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const loaded = useLoaded();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={loaded ? { y: 0 } : { y: "110%" }}
            transition={{ duration: 0.8, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Word({ w, progress, range }: { w: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {w}
    </motion.span>
  );
}

/** Paragraph whose words light up as it scrolls through the viewport. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} w={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}

/** Fade + rise when scrolled into view. */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
