import { Layout, Server, Database, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Layout, Server, Database, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-64 max-w-3xl rounded-full bg-glow/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A growing toolkit built through coursework, self-study, and hands-on projects."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.title} delay={i * 90}>
                <article className="glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[var(--shadow-elevate)]">
                  <span className="grid size-11 place-items-center rounded-2xl border border-border bg-secondary/70 text-primary transition-colors group-hover:text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
