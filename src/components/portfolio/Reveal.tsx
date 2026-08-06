import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-baseline gap-3 text-xs uppercase tracking-[0.35em] text-primary">
        <span>{index}</span>
        <span className="h-px w-16 bg-primary/40" />
        {kicker ? <span className="text-muted-foreground">{kicker}</span> : null}
      </div>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
    </Reveal>
  );
}