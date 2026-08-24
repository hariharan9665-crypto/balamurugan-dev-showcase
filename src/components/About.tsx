import { GraduationCap, Building2, CalendarDays, Code2, User } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const facts = [
  { icon: User, label: "Name", value: profile.name },
  { icon: GraduationCap, label: "Education", value: profile.education },
  { icon: CalendarDays, label: "Year", value: profile.year },
  { icon: Building2, label: "College", value: profile.college },
  { icon: Code2, label: "Role", value: profile.role },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="About" title="About Me" />
      </Reveal>

      <div className="mt-10 space-y-8">
        <Reveal delay={100}>
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div
              aria-hidden
              className="absolute -top-24 -right-16 size-72 rounded-full bg-gradient-to-br from-[#e91e63]/25 to-[#8b5cf6]/25 blur-3xl"
            />
            <p className="relative text-lg sm:text-xl leading-relaxed text-gray-200 font-light">
              {profile.about}
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass group flex items-center gap-4 rounded-[1.8rem] p-5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff007f] hover:shadow-[0_10px_30px_rgba(233,30,99,0.2)]"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#e91e63]/20 via-[#ab47bc]/20 to-[#673ab7]/20 text-[#ff007f]">
                  <Icon size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    {label}
                  </span>
                  <span className="block truncate text-base font-bold text-white">{value}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
