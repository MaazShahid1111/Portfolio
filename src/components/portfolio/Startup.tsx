import { startup } from "@/data/portfolio";
import { VideoFrame } from "./MediaFrame";
import { Reveal, SectionHeading } from "./Reveal";

export function Startup() {
  return (
    <section id="startup" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <SectionHeading index="02" title="Pentest App" kicker="the startup" />

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            I'm the Founder & CEO of {startup.name} — a platform that compresses an entire
            penetration testing workflow into something a small team can actually run.
          </p>
          <ul className="space-y-3">
            {startup.points.map((p) => (
              <li key={p} className="nm-raise-sm flex gap-3 rounded-xl p-4 text-xs">
                <span className="text-primary">▸</span>
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <div className="nm-inset rounded-xl p-4 font-mono text-[11px] text-muted-foreground">
            <span className="text-primary">role</span> :: founder & ceo
            <br />
            <span className="text-primary">stage</span> :: building in public
          </div>
          <a
            href={startup.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--glow)" }}
          >
            See it in action — pentestapp.tech
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </Reveal>


        <Reveal delay={0.1}>
          <div className="nm-raise rounded-[1.7rem] p-4">
            <VideoFrame src={startup.video} label="pentestapp_startup.mp4" />
            <p className="mt-3 px-1 text-[11px] text-muted-foreground">
              Product walkthrough — Pentest App
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}