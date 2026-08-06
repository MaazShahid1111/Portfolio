import { certs, roles } from "@/data/portfolio";
import { ImageFrame } from "./MediaFrame";
import { Badges } from "./Badges";
import { Reveal, SectionHeading } from "./Reveal";

export function Credentials() {
  const internship = roles.find((r) => r.proofs);

  return (
    <section id="credentials" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        index="05"
        title="Certifications & internships"
        kicker="receipts, not claims"
      />

      <Badges />

      {internship?.proofs ? (
        <Reveal className="mb-10">
          <div className="nm-raise rounded-[1.6rem] p-6">
            <h3 className="text-sm font-semibold">
              {internship.title} — <span className="text-primary">{internship.org}</span>
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {internship.proofs.map((p) => (
                <ImageFrame
                  key={p}
                  src={p}
                  alt={`${internship.org} document`}
                  ratio="aspect-[3/4]"
                />
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary">
        <span>certificates</span>
        <span className="h-px flex-1 bg-primary/25" />
        <span className="text-muted-foreground">click to zoom</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.06}>
            <article className="nm-raise-sm h-full rounded-2xl p-4 transition-transform duration-500 hover:-translate-y-1">
              <ImageFrame
                src={c.img}
                alt={c.title}
                caption={`${c.title} · ${c.issuer}`}
                ratio="aspect-[4/3]"
                fit="contain"
              />
              <h3 className="mt-4 text-sm font-medium">{c.title}</h3>
              <p className="mt-1 text-[11px] text-primary">{c.issuer}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
