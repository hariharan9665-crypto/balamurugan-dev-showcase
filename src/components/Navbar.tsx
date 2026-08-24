import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top-Left Corner Fluid Blob Badge (Exact RS style curve from reference) */}
      <div className="absolute top-0 left-0 z-50">
        <a
          href="#home"
          className="group relative flex h-24 w-36 sm:h-28 sm:w-44 items-center justify-center rounded-br-[100%] bg-gradient-to-br from-[#e91e63] via-[#ab47bc] to-[#6a1b9a] pr-4 pb-3 shadow-[0_12px_35px_rgba(233,30,99,0.45)] transition-transform duration-300 hover:scale-105"
        >
          <span className="font-display text-3xl sm:text-4xl font-black tracking-wider text-white drop-shadow-md">
            BM
          </span>
        </a>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          scrolled ? "glass py-4 border-b border-white/10" : "py-6 bg-transparent"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-6"
        >
          {/* Desktop Nav Links matching reference styling with About Me highlighted in hot pink */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, index) => {
              const isHighlight = index === 0;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-sans text-sm font-semibold tracking-wide transition-colors ${
                      isHighlight
                        ? "text-[#ff007f] hover:text-white"
                        : "text-gray-200 hover:text-[#ff007f]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-secondary/80 text-foreground md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="glass mx-5 mt-3 rounded-2xl p-4 md:hidden border border-white/10">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-200 hover:bg-[#e91e63]/20 hover:text-[#ff007f] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
