"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { profile } from "@/lib/data";

const LoadedContext = createContext(false);

/** True once the intro loader has finished; use it to hold page animations until then. */
export const useLoaded = () => useContext(LoadedContext);

const DURATION = 2.4;

function Counter({ onDone }: { onDone: () => void }) {
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => Math.round(v).toString());
  const barScale = useTransform(value, [0, 100], [0, 1]);

  useEffect(() => {
    const controls = animate(value, 100, {
      duration: DURATION,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setTimeout(onDone, 350),
    });
    return () => controls.stop();
  }, [value, onDone]);

  return (
    <>
      <div className="flex items-end leading-none gap-[1vw]">
        <motion.span className="font-display text-[34vw] font-semibold leading-none tabular-nums tracking-tighter sm:text-[15vw]">
          {text}
        </motion.span>
        <span className="font-display text-[8vw] font-semibold text-sand sm:text-[5vw] leading-none mb-[2vw]">%</span>
      </div>
      <div className="absolute inset-x-5 bottom-8 h-px bg-sand/20 sm:inset-x-10">
        <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-cream" />
      </div>
    </>
  );
}

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    if (loaded) el.style.overflow = "";
    else el.style.overflow = "hidden";
    return () => {
      el.style.overflow = "";
    };
  }, [loaded]);

  return (
    <LoadedContext.Provider value={loaded}>
      {children}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            role="status"
            aria-label="Loading"
            exit={{ y: "-100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-5 top-8 text-xs uppercase tracking-[0.3em] text-sand sm:left-10"
            >
              {profile.name}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="absolute right-5 top-8 text-xs uppercase tracking-[0.3em] text-sand sm:right-10"
            >
              Loading
            </motion.p>
            <Counter onDone={() => setLoaded(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </LoadedContext.Provider>
  );
}
