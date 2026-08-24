import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

const codeLines = [
  { text: "const developer = {", cls: "text-muted-foreground" },
  { text: '  name: "Balamurugan",', cls: "text-foreground" },
  { text: '  role: "Web Developer",', cls: "text-primary" },
  { text: '  degree: "B.Tech IT",', cls: "text-foreground" },
  { text: '  year: "3rd Year",', cls: "text-foreground" },
  { text: '  stack: ["React", "Node", "MongoDB"],', cls: "text-accent" },
  { text: "  available: true,", cls: "text-foreground" },
  { text: "};", cls: "text-muted-foreground" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-32 -left-24 size-[26rem] rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-20 top-24 size-[22rem] rounded-full bg-glow/20 blur-[120px]"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
            <Sparkles size={14} className="text-primary" />
            Open to internships & freelance work
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Hi, I'm <span className="gradient-text">Balamurugan</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-accent sm:text-base">
            3rd Year B.Tech IT Student &amp; Web Developer
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevate)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-rise relative" style={{ animationDelay: "180ms" }}>
          <div className="glass overflow-hidden rounded-3xl">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-chart-4/70" />
              <span className="size-3 rounded-full bg-chart-2/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7">
              {codeLines.map((line) => (
                <div key={line.text} className={line.cls}>
                  {line.text}
                </div>
              ))}
            </pre>
          </div>

          <div className="glass animate-float absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 text-xs sm:-left-8">
            <p className="font-semibold text-foreground">MERN + MySQL</p>
            <p className="text-muted-foreground">Full-stack ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}
