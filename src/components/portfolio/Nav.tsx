import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  { id: "about", label: "about" },
  { id: "startup", label: "pentest app" },
  { id: "work", label: "work" },
  { id: "arsenal", label: "arsenal" },
  { id: "credentials", label: "credentials" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          className={`rounded-xl px-3 py-2 text-sm font-semibold tracking-tight transition-all ${
            scrolled ? "nm-raise-sm" : ""
          }`}
        >
          <span className="text-primary">~/</span>
          {profile.handle}
          <span className="caret text-primary">_</span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-2xl px-2 py-1.5 text-xs md:flex ${
            scrolled ? "nm-raise-sm" : ""
          }`}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`rounded-xl px-3 py-2 transition-colors ${
                active === l.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="nm-raise-sm rounded-xl px-4 py-2 text-xs text-primary transition-transform hover:-translate-y-0.5"
        >
          linkedin
        </a>
      </div>
    </header>
  );
}