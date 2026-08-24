import { Globe, MonitorSmartphone, Server, Palette } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Globe, Palette, Server, MonitorSmartphone];

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          description="From interface to API, I build the pieces that make a product work end to end."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={service.title} delay={i * 90}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-10 size-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/25"
                />
                <span className="relative grid size-11 place-items-center rounded-2xl border border-border bg-secondary/70 text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="relative mt-5 text-base font-semibold">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
