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
  "w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none transition-colors";

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
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project idea or want to connect? Feel free to reach out."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
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

            <div className="mt-4">
              <label htmlFor="subject" className="mb-2 block text-xs text-muted-foreground">
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

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a little about your idea..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <Send size={16} /> Send Message
            </button>

            {sent && (
              <p
                role="status"
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent"
              >
                <CheckCircle2 size={16} /> Your email app should now be open with the message ready.
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
                className="glass grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-border bg-secondary/70 text-primary">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
