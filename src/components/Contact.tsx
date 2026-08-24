import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { socials } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const cards = [
  { icon: Mail, label: "Email", value: socials.email, href: `mailto:${socials.email}` },
  { icon: Github, label: "GitHub", value: "github.com/username", href: socials.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/username", href: socials.linkedin },
];

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-gray-500 focus:border-[#ff007f] focus:ring-2 focus:ring-[#ff007f]/40 focus:outline-none transition-all";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") ?? ""));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Hire Me"
          title="Let's Work Together"
          description="Have a project idea, internship opportunity, or want to connect? Send me a message!"
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="glass rounded-[2.5rem] p-7 sm:p-9 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                placeholder="What is this about?"
                className={fieldClass}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a little about your project or idea..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#e91e63] via-[#ff007f] to-[#d81b60] px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_25px_-5px_rgba(233,30,99,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_-5px_rgba(255,0,127,0.7)]"
            >
              <Send size={18} /> Send Message
            </button>

            {sent && (
              <p
                role="status"
                className="mt-5 inline-flex items-center gap-2 text-sm text-[#ff007f]"
              >
                <CheckCircle2 size={18} /> Your email app should now be open with the message ready.
              </p>
            )}
          </form>
        </Reveal>

        <div className="space-y-4">
          {cards.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 90}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="glass grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-[2rem] p-6 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff007f] hover:shadow-[0_10px_30px_rgba(233,30,99,0.2)]"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#e91e63]/20 via-[#ab47bc]/20 to-[#673ab7]/20 text-[#ff007f]">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    {label}
                  </span>
                  <span className="block truncate text-base font-medium text-white">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
