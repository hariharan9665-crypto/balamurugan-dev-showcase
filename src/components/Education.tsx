import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic Journey" />
      </Reveal>

      <ol className="relative mt-12 ml-5 space-y-8 border-l border-border pl-8 sm:ml-8">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 100}>
            <li className="relative">
              <span className="absolute top-6 -left-[3.25rem] grid size-11 place-items-center rounded-2xl border border-border bg-card text-primary shadow-[var(--shadow-elevate)]">
                <GraduationCap size={18} />
              </span>
              <div className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <span className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-accent">
                  {item.period}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
