import { profile, roles, skills } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="01" title="Who is behind the terminal" kicker="about" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            I'm Maaz — a third-year BSc Computer Science student at {profile.university}, founder of{" "}
            <span className="text-foreground">Pentest App</span>, and the Director of the Cyber
            Security Module at <span className="text-foreground">Synteck Society</span>.
          </p>
          <p>
            My work sits between two worlds: the offensive side, where I hunt bugs, chain recon and
            write tooling like the 22,000+ line{" "}
            <span className="text-primary">Bug Hunter Machine</span>; and the defensive side, where
            I build SOC labs, detection rules and incident response workflows.
          </p>
          <p>
            I also care a lot about how software feels — spatial interfaces, neumorphic depth and
            motion that has a reason to exist. Security tools do not have to look like they were
            built in 2003.
          </p>

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="nm-raise-sm rounded-2xl p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{s.group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-lg nm-inset px-2.5 py-1 text-[11px] text-foreground/80"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="space-y-4">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <article className="nm-raise rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">{r.title}</h3>
                    <p className="mt-1 text-xs text-primary">{r.org}</p>
                  </div>
                  <span className="whitespace-nowrap text-[10px] text-muted-foreground">
                    {r.period}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{r.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-lg nm-inset px-2 py-1 text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}