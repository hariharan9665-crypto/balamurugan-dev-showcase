import { Globe, MonitorSmartphone, Server, Palette } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Globe, Palette, Server, MonitorSmartphone];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Services"
          description="From frontend interface design to backend APIs, I build clean, modern, end-to-end digital experiences."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={service.title} delay={i * 90}>
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff007f] hover:shadow-[0_15px_35px_rgba(233,30,99,0.25)]">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-10 size-36 rounded-full bg-gradient-to-br from-[#e91e63]/0 to-[#8b5cf6]/0 blur-2xl transition-all duration-500 group-hover:from-[#e91e63]/30 group-hover:to-[#8b5cf6]/30"
                />
                <span className="relative grid size-12 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#e91e63]/20 via-[#ab47bc]/20 to-[#673ab7]/20 text-[#ff007f] group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </span>
                <h3 className="relative mt-6 text-lg font-bold text-white">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-gray-300 font-light">
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
