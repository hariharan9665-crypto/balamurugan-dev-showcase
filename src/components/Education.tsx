import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic Journey" />
      </Reveal>

      <ol className="relative mt-12 ml-5 space-y-8 border-l border-white/10 pl-8 sm:ml-8">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 100}>
            <li className="relative">
              <span className="absolute top-6 -left-[3.25rem] grid size-12 place-items-center rounded-2xl border border-white/20 bg-[#16151c] text-[#ff007f] shadow-[0_10px_25px_rgba(233,30,99,0.3)]">
                <GraduationCap size={20} />
              </span>
              <div className="glass rounded-[2rem] p-7 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff007f]">
                <span className="inline-flex rounded-full border border-[#ff007f]/30 bg-[#ff007f]/10 px-3.5 py-1 font-mono text-xs font-semibold text-[#ff007f]">
                  {item.period}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-gray-400">{item.school}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-300 font-light">{item.detail}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
