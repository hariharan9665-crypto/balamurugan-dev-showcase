import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
          description="Answers to common questions about my technical skills, availability, and project workflow."
        />
      </Reveal>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={faq.question} delay={index * 80}>
              <div
                className={`glass rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#ff007f] bg-white/5 shadow-[0_10px_30px_rgba(233,30,99,0.15)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-white">
                    <HelpCircle size={20} className="shrink-0 text-[#ff007f]" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#ff007f] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed text-gray-300 font-light border-t border-white/5 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
