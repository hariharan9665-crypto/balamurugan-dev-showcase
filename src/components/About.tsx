import { GraduationCap, Building2, CalendarDays, Code2, User } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import photo from "@/assets/balamurugan.jpeg";

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

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div
              aria-hidden
              className="absolute -top-24 -right-16 size-64 rounded-full bg-gradient-to-br from-[#e91e63]/30 to-[#8b5cf6]/30 blur-3xl"
            />
            <img
              src={photo}
              alt="Portrait of Balamurugan"
              loading="lazy"
              width={600}
              height={750}
              className="relative aspect-4/5 w-full rounded-2xl object-cover object-top shadow-lg"
            />
            <p className="relative mt-5 font-mono text-xs text-[#ff007f] font-semibold">
              // {profile.year} · {profile.education}
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-gray-300 font-light">{profile.about}</p>
          </Reveal>

          <Reveal delay={180}>
            <ul className="glass grid gap-2 rounded-[2rem] p-4 sm:p-6 border border-white/10">
              {facts.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl p-3.5 transition-all duration-300 hover:bg-white/5 hover:border-l-4 hover:border-[#ff007f]"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-[#e91e63]/20 to-[#8b5cf6]/20 text-[#ff007f]">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      {label}
                    </span>
                    <span className="block text-base font-medium text-white">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
