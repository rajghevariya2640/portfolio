"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile, projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { useLoaded } from "@/components/loader";
import { MaskWords } from "@/components/motion-text";

export function Hero() {
  const loaded = useLoaded();
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-10">
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-1/4 size-[36rem] rounded-full bg-sand blur-[160px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sand"
        >
          <MapPin className="size-4" /> {profile.location}
        </motion.p>

        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-[7rem]">
          <MaskWords text="Hey, I'm Raj." delay={0.3} />
          <br />
          <MaskWords text="I design websites and UI that perform," delay={0.6} className="text-sand" />
          <br />
          <MaskWords text="adapt, and scale." delay={1.1} className="text-sand" />
        </h1>

        <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
            className="max-w-md"
          >
            <p className="text-lg text-sand">{profile.role}</p>
            <p className="mt-3 text-sand/70">{profile.pitch}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic>
                <Button asChild>
                  <a href="#featured">
                    View Projects <ArrowDown className="size-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild variant="outline">
                  <a href="#contact">Contact Me</a>
                </Button>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.7 }}
            className="flex gap-10 text-xs uppercase tracking-widest text-sand"
          >
            <div>
              <p className="font-display text-5xl font-semibold normal-case tracking-tight text-cream">3.5+</p>
              Years of experience
            </div>
            <div>
              <p className="font-display text-5xl font-semibold normal-case tracking-tight text-cream">{projects.length}</p>
              Featured projects
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Ticker() {
  const row = Array.from({ length: 10 });
  return (
    <div className="overflow-hidden border-y border-sand/20 py-6">
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-4xl font-semibold uppercase tracking-tight text-sand/80 sm:text-6xl">
        {row.map((_, i) => (
          <span key={i} className="mr-10 flex items-center gap-10">
            Details make the difference <span className="text-cream">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
