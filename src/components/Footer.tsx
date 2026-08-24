import { Github, Linkedin, Mail } from "lucide-react";
import { socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">Balamurugan</p>
          <p className="mt-1 text-sm text-muted-foreground">
            3rd Year B.Tech IT Student | Web Developer
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid size-11 place-items-center rounded-2xl border border-border bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid size-11 place-items-center rounded-2xl border border-border bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="grid size-11 place-items-center rounded-2xl border border-border bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground">
          © 2026 Balamurugan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
