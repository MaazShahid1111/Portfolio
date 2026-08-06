import { Reveal, SectionHeading } from "./Reveal";

const timeline = [
  {
    phase: "Recon",
    body: "Subdomain enumeration, asset discovery, OSINT correlation and attack-surface mapping.",
    tools: ["amass", "subfinder", "custom scrapers"],
  },
  {
    phase: "Exploitation",
    body: "Manual web testing backed by automated fuzzing — auth bypass, IDOR, injection, logic flaws.",
    tools: ["burp suite", "ffuf", "metasploit"],
  },
  {
    phase: "Detection",
    body: "Turning attacker behaviour into SIEM rules, dashboards and triage-ready incidents.",
    tools: ["splunk", "wireshark", "sigma"],
  },
  {
    phase: "Reporting",
    body: "Reproducible write-ups with severity, impact and remediation a developer can act on.",
    tools: ["cvss", "markdown → pdf", "pentest app"],
  },
];

export function Arsenal() {
  return (
    <section id="arsenal" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="04" title="How I run an engagement" kicker="the arsenal" />

      <div className="relative">
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />
        <div className="space-y-5">
          {timeline.map((t, i) => (
            <Reveal key={t.phase} delay={i * 0.07}>
              <div className="flex gap-6">
                <div className="mt-6 hidden h-4 w-4 shrink-0 rounded-full nm-raise-sm ring-1 ring-primary/40 sm:block" />
                <div className="nm-raise flex-1 rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{t.phase}</h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.tools.map((tool) => (
                      <span key={tool} className="rounded-lg nm-inset px-2 py-1 text-[10px]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}