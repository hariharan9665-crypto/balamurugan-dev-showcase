import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Feedback"
          title="What People Say"
          description="Recommendations and feedback from faculty, peers, and collaborators."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} delay={i * 100}>
            <article className="glass group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.2rem] p-8 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#ff007f] hover:shadow-[0_20px_40px_rgba(233,30,99,0.2)]">
              <div>
                <div className="flex items-center justify-between text-[#ff007f]">
                  <Quote size={28} className="opacity-80" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={16} className="fill-[#ff007f] text-[#ff007f]" />
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-gray-200 font-light italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#e91e63] to-[#7b1fa2] font-display text-base font-bold text-white shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-gray-400 font-medium">{item.role}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
