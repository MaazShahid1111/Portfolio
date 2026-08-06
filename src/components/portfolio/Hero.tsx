import { motion } from "motion/react";
import { profile, stats } from "@/data/portfolio";
import { ImageFrame } from "./MediaFrame";

const lines = [
  "$ whoami",
  "maaz_shahid :: offensive security · founder · builder",
  "$ cat ./focus.txt",
  "web exploitation · detection engineering · security tooling",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full nm-raise-sm px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.location} · available for work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[0.95]"
          >
            Maaz
            <br />
            <span className="text-primary text-glow">Shahid</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {profile.role}. {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#startup"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--glow)" }}
            >
              See Pentest App
            </a>
            <a
              href="#contact"
              className="nm-raise-sm rounded-xl px-6 py-3 text-sm transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="nm-raise-sm rounded-2xl px-4 py-4">
                <div className="text-lg font-semibold text-primary">{s.value}</div>
                <div className="mt-1 text-[10px] leading-tight text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="float-slow nm-raise rounded-[2rem] p-4">
            <ImageFrame
              src={profile.photo}
              alt="Maaz Shahid"
              ratio="aspect-[4/5]"
              className="rounded-[1.4rem]"
            />
            <div className="mt-4 flex items-center justify-between px-1 text-[11px] text-muted-foreground">
              <span>{profile.university.split(" ")[0]} · {profile.degree} · {profile.year}</span>
              <span className="text-primary">status: online</span>
            </div>
          </div>

          <div className="nm-raise-sm mt-4 rounded-2xl p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
            {lines.map((l, i) => (
              <div key={i} className={l.startsWith("$") ? "text-primary" : ""}>
                {l}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}