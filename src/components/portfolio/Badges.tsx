import { motion } from "motion/react";
import { badges } from "@/data/portfolio";
import { useLightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

export function Badges() {
  const open = useLightbox();

  return (
    <Reveal className="mb-16">
      <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary">
        <span>badges</span>
        <span className="h-px flex-1 bg-primary/25" />
        <span className="text-muted-foreground">tap to enlarge</span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {badges.map((b, i) => (
          <motion.button
            key={b.title}
            type="button"
            onClick={() => open({ src: b.img, alt: b.title, caption: `${b.title} · ${b.issuer}` })}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 14,
              delay: i * 0.07,
            }}
            whileHover={{ scale: 1.12, rotate: i % 2 ? 3 : -3 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex flex-col items-center gap-2"
          >
            <span
              className="bubble flex h-24 w-24 items-center justify-center overflow-hidden rounded-full p-3 text-[9px] text-muted-foreground sm:h-28 sm:w-28"
              style={{ animationDelay: `${i * 0.45}s` }}
            >
              <img
                src={b.img}
                alt={b.title}
                loading="lazy"
                className="h-full w-full object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
              />
            </span>
            <span className="max-w-[7.5rem] text-center text-[10px] leading-tight text-muted-foreground transition-colors group-hover:text-primary">
              {b.issuer}
            </span>
          </motion.button>
        ))}
      </div>
    </Reveal>
  );
}
