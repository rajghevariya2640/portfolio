"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "/#featured", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/archive", label: "Archive" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 120);
    setScrolled(y > 20);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-110%" : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-[60] flex items-center justify-between border-b px-5 py-4 transition-[background-color,border-color,backdrop-filter] duration-300 sm:px-10",
          scrolled && !open
            ? "border-sand/15 bg-ink/80 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" className="text-lg font-bold tracking-tight">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="group relative text-sand hover:text-cream">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cream transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-cream px-5 py-2 font-semibold text-ink transition-colors hover:bg-sand"
          >
            Let&apos;s talk
          </a>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="relative z-[60] md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 4%)" }}
            animate={{ clipPath: "circle(150% at 95% 4%)" }}
            exit={{ clipPath: "circle(0% at 95% 4%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-center gap-6 bg-ink px-8 md:hidden"
          >
            {[...links, { href: `mailto:${profile.email}`, label: "Let's talk" }].map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.07 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl font-semibold"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
