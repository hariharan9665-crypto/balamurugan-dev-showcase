import { ArrowRight, Sparkles, CheckCircle, Code2, GraduationCap, Briefcase } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import heroPhoto from "@/assets/hero section balamurugan.png";
import { Reveal } from "./Reveal";

const statIcons = [GraduationCap, Briefcase, CheckCircle, Code2];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 min-h-[92vh] flex flex-col justify-center">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -bottom-16 -left-16 size-48 sm:size-64 rounded-full bg-[#6a1b9a]/35 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute top-20 -right-20 size-56 sm:size-80 rounded-full bg-[#e91e63]/20 blur-3xl"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 w-full">
        {/* Main Grid: Responsive stacked on mobile / 2-columns on LG */}
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          
          {/* Left Column: Typography, Info Badge & CTAs (Order 2 on mobile, Order 1 on desktop) */}
          <div className="animate-rise relative z-10 text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-300 backdrop-blur-md mb-6">
              <Sparkles size={14} className="text-[#ff007f]" />
              Open for Internships & Web Projects
            </span>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-light tracking-[0.2em] text-gray-300 uppercase">
              I AM A PROFESSIONAL
            </h2>

            <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#ff007f] drop-shadow-[0_4px_25px_rgba(255,0,127,0.4)]">
              WEB DEVELOPER
            </h1>

            <p className="mt-5 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 font-light">
              {profile.intro} Specializing in building modern, responsive, and high-performance web applications.
            </p>

            {/* Action Buttons: Responsive for touch and desktop */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e91e63] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_10px_28px_rgba(233,30,99,0.55)] transition-all duration-300 hover:scale-105 hover:bg-[#d81b60] hover:shadow-[0_15px_35px_rgba(233,30,99,0.75)]"
              >
                Hire Me
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-all hover:border-[#ff007f] hover:bg-white/10 hover:text-white"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right Column: Photo Cutout & Fluid Blob (Order 1 on mobile, Order 2 on desktop) */}
          <div className="animate-rise relative flex justify-center lg:justify-end order-1 lg:order-2" style={{ animationDelay: "180ms" }}>
            <div className="relative flex items-center justify-center w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] h-[340px] sm:h-[460px] lg:h-[540px]">
              
              {/* Dual-Lobe Fluid Organic SVG Background (Resizes smoothly on mobile) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  viewBox="0 0 600 600"
                  className="w-[115%] h-[115%] animate-morph-blob filter drop-shadow-[0_20px_50px_rgba(106,27,154,0.5)]"
                >
                  <defs>
                    <linearGradient id="heroRefGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#d81b60" />
                      <stop offset="45%" stopColor="#c2185b" />
                      <stop offset="70%" stopColor="#8e24aa" />
                      <stop offset="100%" stopColor="#6a1b9a" />
                    </linearGradient>
                  </defs>

                  <path
                    fill="url(#heroRefGrad)"
                    d="M450,320Q420,440,310,470Q200,500,120,410Q40,320,80,200Q120,80,240,70Q360,60,430,150Q500,240,450,320Z"
                  />
                </svg>
              </div>

              {/* Floating Solid Accent Spheres (Scaled & Positioned for Mobile Safety) */}
              <div
                aria-hidden
                className="animate-float absolute top-8 left-2 sm:top-12 sm:left-4 z-20 size-11 sm:size-16 rounded-full bg-[#d81b60] shadow-[0_8px_25px_rgba(216,27,96,0.6)]"
              />
              <div
                aria-hidden
                className="animate-float absolute bottom-8 right-2 sm:bottom-10 sm:right-4 z-20 size-7 sm:size-9 rounded-full bg-[#8e24aa] shadow-[0_6px_20px_rgba(142,36,170,0.6)]"
                style={{ animationDelay: "2s" }}
              />

              {/* Balamurugan Cutout Subject (Mobile-responsive height & bottom gradient mask) */}
              <div className="relative z-10 flex justify-center items-end h-full w-full overflow-hidden rounded-b-[3.5rem]">
                <img
                  src={heroPhoto}
                  alt="Balamurugan - Web Developer"
                  width={500}
                  height={650}
                  className="h-[310px] sm:h-[420px] lg:h-[490px] w-auto max-w-full object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)] transition-transform duration-700 hover:scale-[1.03]"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highlights / Stats Bar under Hero */}
        <Reveal delay={300}>
          <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md">
            {stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-3.5 p-3 rounded-xl transition-colors hover:bg-white/5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-[#e91e63]/20 via-[#ab47bc]/20 to-[#673ab7]/20 text-[#ff007f]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <span className="block text-base sm:text-xl font-bold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-medium text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
