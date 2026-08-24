import { GraduationCap, Building2, CalendarDays, Code2, User } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import photo from "@/assets/balamurugan.jpg";

const facts = [
  { icon: User, label: "Name", value: profile.name },
  { icon: GraduationCap, label: "Education", value: profile.education },
  { icon: CalendarDays, label: "Year", value: profile.year },
  { icon: Building2, label: "College", value: profile.college },
  { icon: Code2, label: "Role", value: profile.role },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <SectionHeading eyebrow="About" title="About Me" />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div
              aria-hidden
              className="absolute -top-24 -right-16 size-56 rounded-full bg-primary/20 blur-3xl"
            />
            <img
              src={photo}
              alt="Portrait of Balamurugan"
              loading="lazy"
              width={600}
              height={750}
              className="relative aspect-4/5 w-full rounded-2xl object-cover"
            />
            <p className="relative mt-5 font-mono text-xs text-muted-foreground">
              // {profile.year} · {profile.education}
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-muted-foreground">{profile.about}</p>
          </Reveal>

          <Reveal delay={180}>
            <ul className="glass grid gap-1 rounded-3xl p-4 sm:p-6">
              {facts.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary/60"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/70 text-primary">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="block text-sm font-medium text-foreground">{value}</span>
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
