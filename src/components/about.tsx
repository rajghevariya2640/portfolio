"use client";

import { motion } from "framer-motion";
import { education, experience, profile, skills } from "@/lib/data";
import { FadeIn, ScrollText } from "@/components/motion-text";

export function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-sand">About</p>
        </FadeIn>
        <ScrollText
          text={profile.bio}
          className="max-w-5xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl"
        />

        {/* Experience */}
        <div className="mt-16 sm:mt-28">
          <FadeIn>
            <h3 className="mb-10 font-display text-3xl font-semibold sm:text-4xl">Experience</h3>
          </FadeIn>
          {experience.map((job) => (
            <FadeIn key={job.company}>
              <motion.div
                whileHover={{ paddingLeft: 16 }}
                className="grid gap-4 border-t border-sand/20 py-8 md:grid-cols-[14rem_1fr_2fr]"
              >
                <p className="font-mono text-sm text-sand">{job.period}</p>
                <div>
                  <p className="text-xl font-semibold">{job.company}</p>
                  <p className="text-sand">{job.title}</p>
                </div>
                <ul className="space-y-2 text-sand/90">
                  {job.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
          <FadeIn>
            <motion.div
              whileHover={{ paddingLeft: 16 }}
              className="grid gap-4 border-y border-sand/20 py-8 md:grid-cols-[14rem_1fr_2fr]"
            >
              <p className="font-mono text-sm text-sand">{education.period}</p>
              <div>
                <p className="text-xl font-semibold">{education.school}</p>
                <p className="text-sand">Education</p>
              </div>
              <p className="text-sand/90">
                {education.degree} — GPA {education.gpa}
              </p>
            </motion.div>
          </FadeIn>
        </div>

        {/* Tools */}
        <div className="mt-16 sm:mt-28">
          <FadeIn>
            <h3 className="mb-10 font-display text-3xl font-semibold sm:text-4xl">Tools &amp; skills</h3>
          </FadeIn>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {skills.map((s) => (
              <FadeIn key={s.group}>
                <p className="mb-4 text-xs uppercase tracking-widest text-sand/70">{s.group}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08, backgroundColor: "#EAE0C8", color: "#11100D" }}
                      transition={{ duration: 0.2 }}
                      className="rounded-full border border-sand/30 px-4 py-2 text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
