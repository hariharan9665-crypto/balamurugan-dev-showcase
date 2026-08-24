import { Github, Linkedin, Mail } from "lucide-react";
import { socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0c10]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-16 items-center justify-center rounded-br-2xl rounded-tl-2xl rounded-tr-lg rounded-bl-lg bg-gradient-to-r from-[#e91e63] to-[#7b1fa2] font-display text-base font-black text-white">
              BM
            </div>
            <p className="font-display text-xl font-bold tracking-tight text-white">Balamurugan</p>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            3rd Year B.Tech IT Student | Web Developer
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-1 hover:border-[#ff007f] hover:text-[#ff007f]"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-1 hover:border-[#ff007f] hover:text-[#ff007f]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-1 hover:border-[#ff007f] hover:text-[#ff007f]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Balamurugan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
