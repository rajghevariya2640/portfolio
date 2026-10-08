"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { FadeIn } from "@/components/motion-text";

type Project = (typeof projects)[number];

/** Long full-page screenshot that scrolls from top to bottom while the box is hovered. */
function ScrollPreview({ project }: { project: Project }) {
  const page = project.fullPage!;
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="flex flex-col overflow-hidden rounded-2xl border border-sand/20 bg-ink"
    >
      <div className="flex items-center gap-2 border-b border-sand/20 px-4 py-3">
        <span className="size-2.5 rounded-full bg-sand/40" />
        <span className="size-2.5 rounded-full bg-sand/40" />
        <span className="size-2.5 rounded-full bg-sand/40" />
        <span className="ml-3 truncate rounded-full bg-sand/10 px-3 py-0.5 font-mono text-[11px] text-sand">
          {project.url.replace("https://", "")}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        {/* top 0→100% of the box while y 0→-100% of the image = image bottom lands on box bottom */}
        <motion.div
          variants={{
            rest: { top: "0%", y: "0%", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
            // longer pages scroll for longer (~7s for a 1920×6800 shot)
            hover: { top: "100%", y: "-100%", transition: { duration: page.height / 1000, ease: "easeInOut" } },
          }}
          className="absolute inset-x-0"
        >
          <Image
            src={page.src}
            alt={`${project.name} full page preview`}
            width={page.width}
            height={page.height}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Card({ project, i, n, progress }: { project: Project; i: number; n: number; progress: MotionValue<number> }) {
  const target = 1 - (n - 1 - i) * 0.05;
  const scale = useTransform(progress, [i / n, 1], [1, target]);

  return (
    <div className="sticky" style={{ top: 96 + i * 18 }}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ scale }}
        className="group grid origin-top gap-8 overflow-hidden rounded-[2rem] border border-sand/20 bg-[#1a1812] p-6 sm:p-10 md:min-h-[28rem] md:grid-cols-2"
      >
        <div className="flex flex-col justify-between gap-10">
          <div>
            <span className="font-display text-7xl font-semibold text-sand/30 sm:text-8xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-full border border-sand/30 px-3.5 py-1 text-xs text-sand">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink">
            Visit site
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>

        {project.fullPage ? (
          <ScrollPreview project={project} />
        ) : project.image ? (
          <motion.div
            whileHover={{ rotate: -1.5, y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-sand/20 bg-ink"
          >
            <Image
              src={project.image}
              alt={`${project.name} website preview`}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        ) : (
                <motion.div
          whileHover={{ rotate: -1.5, y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="flex flex-col overflow-hidden rounded-2xl border border-sand/20 bg-ink"
        >
          <div className="flex items-center gap-2 border-b border-sand/20 px-4 py-3">
            <span className="size-2.5 rounded-full bg-sand/40" />
            <span className="size-2.5 rounded-full bg-sand/40" />
            <span className="size-2.5 rounded-full bg-sand/40" />
            <span className="ml-3 truncate rounded-full bg-sand/10 px-3 py-0.5 font-mono text-[11px] text-sand">
              {project.url.replace("https://", "")}
            </span>
          </div>
          <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-sand/25 via-ink to-ink">
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, delay: i }}
              className="absolute size-56 rounded-full bg-cream blur-[90px]"
            />
            <span className="relative font-display text-8xl font-semibold text-cream sm:text-9xl">
              {project.name[0]}
            </span>
          </div>
        </motion.div>
        )}
      </motion.a>
    </div>
  );
}

export function Featured() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="featured" className="px-5 py-16 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-10 sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sand">Selected work</p>
          <h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">Featured projects</h2>
        </FadeIn>
        <div ref={ref} className="space-y-8 pb-4 sm:space-y-10 sm:pb-24">
          {projects.map((p, i) => (
            <Card key={p.name} project={p} i={i} n={projects.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
