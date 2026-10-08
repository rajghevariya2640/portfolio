"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { FadeIn } from "@/components/motion-text";

export function Footer() {
  return (
    <footer id="contact" className="px-5 pb-8 pt-16 sm:px-10 sm:pt-32">
      <FadeIn className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sand">Have a project in mind?</p>
        <h2 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">
          Let&apos;s work <br />
          <span className="text-sand">together.</span>
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-12 inline-flex items-center gap-3 border-b border-sand/40 pb-2 text-xl hover:border-cream sm:text-3xl"
        >
          {profile.email}
          <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button asChild>
              <a href={profile.cv} download>
                <Download className="size-4" /> Download CV
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild variant="outline">
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </Button>
          </Magnetic>
          <span className="text-sm text-sand">{profile.languages.join(" · ")}</span>
        </div>
      </FadeIn>

      <div className="mx-auto mt-20 grid max-w-7xl sm:mt-32 gap-10 border-t border-sand/20 pt-10 text-sm grid-cols-2 sm:grid-cols-3">
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-sand/70">Navigate</p>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["Projects", "/#featured"],
              ["About", "/#about"],
              ["Archive", "/archive"],
            ].map(([l, h]) => (
              <li key={l}>
                <Link href={h} className="hover:text-sand">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-sand/70">Live sites</p>
          <ul className="space-y-2">
            {projects.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-sand">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-sand/70">Based in</p>
          <p>{profile.location}</p>
        </div>
      </div>
      <motion.p className="mx-auto mt-12 max-w-7xl text-xs text-sand/60">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </motion.p>
    </footer>
  );
}
