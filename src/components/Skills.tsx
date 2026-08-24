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
        className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-64 max-w-3xl rounded-full bg-[#8b5cf6]/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I Work With"
            description="A modern web development toolkit built through coursework, self-study, and practical hands-on projects."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.title} delay={i * 90}>
                <article className="glass group h-full rounded-[2rem] p-7 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff007f] hover:shadow-[0_15px_35px_rgba(233,30,99,0.25)]">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#e91e63]/20 via-[#ab47bc]/20 to-[#673ab7]/20 text-[#ff007f] transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-white">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-gray-300 transition-colors group-hover:border-[#ff007f] group-hover:text-white"
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
