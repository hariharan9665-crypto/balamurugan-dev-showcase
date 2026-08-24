import { Award, Trophy, Star } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Award, Trophy, Star];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Certifications"
          description="Recognitions and milestones achieved during my academic and web development journey."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={item.title} delay={i * 90}>
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff007f] hover:shadow-[0_15px_35px_rgba(233,30,99,0.25)]">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#e91e63]/20 via-[#ab47bc]/20 to-[#673ab7]/20 text-[#ff007f]">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs font-semibold text-gray-300">
                    {item.year}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wider text-[#ff007f] uppercase">
                  {item.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-300 font-light">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
