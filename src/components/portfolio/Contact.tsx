import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="pointer-events-none absolute inset-x-10 bottom-0 -z-10 h-72 rounded-full bg-primary/10 blur-[130px]" />
      <SectionHeading index="06" title="Let's build something secure" kicker="contact" />

      <Reveal>
        <div className="nm-raise rounded-[1.8rem] p-8 sm:p-12">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Open to security engineering roles, freelance pentests, collaborations on tooling, and
            speaking at university events. The fastest way to reach me is LinkedIn or email.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="nm-raise-sm rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">linkedin</div>
              <div className="mt-2 truncate text-xs text-muted-foreground">maaz-shahid</div>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="nm-raise-sm rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">email</div>
              <div className="mt-2 truncate text-xs text-muted-foreground">{profile.email}</div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="nm-raise-sm rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">github</div>
              <div className="mt-2 truncate text-xs text-muted-foreground">maazshahid1111</div>
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-[11px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Maaz Shahid · Karachi, PK</span>
        <span className="font-mono text-primary">exit 0</span>
      </footer>
    </section>
  );
}