import { AnimatePresence, motion } from "motion/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LightboxItem = { src: string; alt: string; caption?: string };

const LightboxContext = createContext<(item: LightboxItem) => void>(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<LightboxItem | null>(null);

  const open = useCallback((next: LightboxItem) => setItem(next), []);
  const close = useCallback(() => setItem(null), []);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, close]);

  const value = useMemo(() => open, [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {item ? (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={item.alt}
          >
            <div className="absolute inset-0 bg-background/85 backdrop-blur-xl" />

            <motion.div
              className="relative flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
              initial={{ scale: 0.82, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-[76vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                {item.caption ? <span className="text-foreground">{item.caption}</span> : null}
                <span>press esc or click outside to close</span>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={close}
              aria-label="Close image"
              className="nm-raise-sm absolute right-5 top-5 rounded-xl px-4 py-2 text-xs text-primary"
            >
              esc ✕
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
