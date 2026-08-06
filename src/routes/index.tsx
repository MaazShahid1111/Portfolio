import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Startup } from "@/components/portfolio/Startup";
import { Work } from "@/components/portfolio/Work";
import { Arsenal } from "@/components/portfolio/Arsenal";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact } from "@/components/portfolio/Contact";
import { LightboxProvider } from "@/components/portfolio/Lightbox";
import { ThemeLantern } from "@/components/portfolio/ThemeLantern";

const title = "Maaz Shahid — Offensive Security Engineer & Founder of Pentest App";
const description =
  "Portfolio of Maaz Shahid: penetration tester, founder & CEO of Pentest App, Director of Cyber Security at Synteck Society, NEDUET. Security tooling, SOC labs and 22,000+ lines of bug hunting automation.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maaz Shahid",
          jobTitle: "Offensive Security Engineer, Founder & CEO of Pentest App",
          url: "https://www.linkedin.com/in/maaz-shahid-556193347",
          alumniOf: "NED University of Engineering & Technology",
          address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <LightboxProvider>
      <ThemeLantern />
      <main className="relative min-h-screen overflow-x-hidden bg-background">
        <Nav />
        <Hero />
        <About />
        <Startup />
        <Work />
        <Arsenal />
        <Credentials />
        <Contact />
      </main>
    </LightboxProvider>
  );
}

