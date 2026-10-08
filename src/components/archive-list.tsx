"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience, projects } from "@/lib/data";
import { MaskWords } from "@/components/motion-text";

export function ArchiveList() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="font-display text-6xl font-semibold tracking-tight sm:text-8xl">
        <MaskWords text="Archive" />
      </h1>
      <p className="mt-4 max-w-md text-sand">Every project I&apos;ve shipped and every role I&apos;ve held, in one place.</p>

      <h2 className="mb-6 mt-14 text-xs sm:mt-20 uppercase tracking-[0.3em] text-sand">Projects</h2>
      <ul onMouseLeave={() => setHovered(null)}>
        {projects.map((p, i) => (
          <motion.li
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.07 }}
            className="relative"
            onMouseEnter={() => setHovered(p.name)}
          >
            {hovered === p.name && (
              <motion.span
                layoutId="archive-hover"
                className="absolute inset-0 -mx-4 rounded-2xl bg-cream/[0.06]"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-t border-sand/20 py-7 md:grid-cols-[4rem_1fr_1fr_auto]"
            >
              <span className="font-mono text-sm text-sand">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-2xl font-semibold sm:text-4xl">{p.name}</span>
              <span className="hidden text-sm text-sand md:block">{p.tags.join(" · ")}</span>
              <ArrowUpRight className="size-6 text-sand" />
            </a>
          </motion.li>
        ))}
        <li className="border-t border-sand/20" />
      </ul>

      <h2 className="mb-6 mt-24 text-xs uppercase tracking-[0.3em] text-sand">Roles</h2>
      <ul>
        {experience.map((j) => (
          <li key={j.company} className="grid gap-2 border-t border-sand/20 py-7 md:grid-cols-[14rem_1fr_1fr]">
            <span className="font-mono text-sm text-sand">{j.period}</span>
            <span className="font-display text-2xl font-semibold sm:text-3xl">{j.company}</span>
            <span className="text-sand">{j.title}</span>
          </li>
        ))}
        <li className="border-t border-sand/20" />
      </ul>
    </div>
  );
}
