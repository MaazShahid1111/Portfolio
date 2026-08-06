import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";

const STORAGE_KEY = "maaz-theme";

export function ThemeLantern() {
  const [light, setLight] = useState(false);
  const rope = useAnimationControls();
  const lamp = useAnimationControls();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
    rope.start({
      scaleY: [1, 1.35, 0.95, 1.08, 1],
      transition: { duration: 0.75, ease: "easeOut" },
    });
    lamp.start({
      y: [0, 16, -4, 6, 0],
      rotate: [0, 5, -4, 2, 0],
      transition: { duration: 0.8, ease: "easeOut" },
    });
  };

  return (
    <div className="pointer-events-none fixed right-1 top-0 z-[90] flex flex-col items-center sm:right-10">
      <motion.span
        animate={rope}
        style={{ transformOrigin: "top center" }}
        className="block h-16 w-px bg-gradient-to-b from-transparent via-border to-primary/70 sm:h-20"
      />
      <motion.button
        type="button"
        onClick={toggle}
        animate={lamp}
        whileHover={{ y: 5 }}
        whileTap={{ y: 14 }}
        aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
        title={light ? "Switch to dark theme" : "Switch to light theme"}
        className="lantern pointer-events-auto -mt-px flex h-12 w-10 flex-col items-center justify-center rounded-b-[1.2rem] rounded-t-md text-[13px]"
      >
        <span aria-hidden className="leading-none">
          {light ? "☀" : "☾"}
        </span>
      </motion.button>
      <motion.span
        animate={lamp}
        aria-hidden
        className="mt-1 select-none text-[9px] uppercase tracking-[0.25em] text-muted-foreground"
      >
        pull
      </motion.span>
    </div>
  );
}
