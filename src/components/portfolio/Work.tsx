import { projects } from "@/data/portfolio";
import { VideoFrame } from "./MediaFrame";
import { Reveal, SectionHeading } from "./Reveal";

export function Work() {
  const featured = projects[0]!;
  const rest = projects.slice(1);

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="03" title="Selected work" kicker="projects & demos" />

      <Reveal>
        <article className="nm-raise relative overflow-hidden rounded-[1.7rem] p-8">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="relative">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary">flagship</span>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{featured.name}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {featured.blurb}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <span key={s} className="rounded-lg nm-inset px-2.5 py-1 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 nm-inset rounded-xl p-4 font-mono text-[11px] text-muted-foreground">
              <span className="text-primary">$</span> wc -l bug_hunter_machine/
              <br />
              <span className="text-foreground">22,000+</span> lines · recon → fuzz → correlate →
              report
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <article className="nm-raise h-full rounded-[1.5rem] p-5 transition-transform duration-500 hover:-translate-y-1.5">
              <VideoFrame src={p.video ?? null} label={p.name} />
              <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-lg nm-inset px-2 py-1 text-[10px]">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}