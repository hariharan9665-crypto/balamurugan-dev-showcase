import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="Selected builds that show how I approach interfaces, data, and clean code."
        />
      </Reveal>

      <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[var(--shadow-elevate)]">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
