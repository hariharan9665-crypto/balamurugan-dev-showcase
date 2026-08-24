import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import heroPhoto from "@/assets/hero section balamurugan.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-48 min-h-[92vh] flex items-center">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-[#6a1b9a]/40 blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Column: Reference Layout Typography & Button */}
        <div className="animate-rise relative z-10">
          <h2 className="text-2xl font-light tracking-[0.2em] text-gray-300 uppercase sm:text-3xl lg:text-4xl">
            I AM A PROFESSIONAL
          </h2>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#ff007f] sm:text-6xl lg:text-6xl drop-shadow-[0_4px_25px_rgba(255,0,127,0.4)]">
            WEB DEVELOPER
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-300 font-light sm:text-lg">
            {profile.intro} Specializing in building modern, responsive, and high-performance web applications.
          </p>

          {/* Action Button: Hot Pink Pill Button "Hire Me" */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#e91e63] px-9 py-3 text-base font-semibold text-white shadow-[0_10px_28px_rgba(233,30,99,0.55)] transition-all duration-300 hover:scale-105 hover:bg-[#d81b60] hover:shadow-[0_15px_35px_rgba(233,30,99,0.75)]"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Column: Exact Reference Double-Lobe Fluid Organic Blob Art & Photo Cutout */}
        <div className="animate-rise relative flex justify-center lg:justify-end" style={{ animationDelay: "180ms" }}>
          <div className="relative flex items-center justify-center w-full max-w-[480px] h-[480px] sm:h-[540px]">
            
            {/* Dual-Lobe Fluid Organic SVG Background (Matching reference screenshot shape & colors) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 600 600"
                className="w-[118%] h-[118%] animate-morph-blob filter drop-shadow-[0_20px_50px_rgba(106,27,154,0.5)]"
              >
                <defs>
                  <linearGradient id="refBlobGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d81b60" />
                    <stop offset="45%" stopColor="#c2185b" />
                    <stop offset="70%" stopColor="#8e24aa" />
                    <stop offset="100%" stopColor="#6a1b9a" />
                  </linearGradient>
                </defs>

                {/* Main Double Lobe Organic Fluid Blob */}
                <path
                  fill="url(#refBlobGrad)"
                  d="M450,320Q420,440,310,470Q200,500,120,410Q40,320,80,200Q120,80,240,70Q360,60,430,150Q500,240,450,320Z"
                />
              </svg>
            </div>

            {/* Top-Left Floating Solid Magenta Sphere (Exact reference placement) */}
            <div
              aria-hidden
              className="animate-float absolute top-12 left-4 sm:left-2 z-20 size-14 sm:size-16 rounded-full bg-[#d81b60] shadow-[0_8px_25px_rgba(216,27,96,0.6)]"
            />
            
            {/* Bottom-Right Floating Solid Purple Sphere (Exact reference placement) */}
            <div
              aria-hidden
              className="animate-float absolute bottom-10 right-4 sm:right-2 z-20 size-8 sm:size-9 rounded-full bg-[#8e24aa] shadow-[0_6px_20px_rgba(142,36,170,0.6)]"
              style={{ animationDelay: "2s" }}
            />

            {/* Balamurugan Cutout Photo Overlay matching reference cropped bottom */}
            <div className="relative z-10 flex justify-center items-end h-full w-full overflow-hidden rounded-b-[4rem]">
              <img
                src={heroPhoto}
                alt="Balamurugan - Web Developer"
                width={500}
                height={650}
                className="h-[430px] sm:h-[490px] w-auto max-w-full object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)] transition-transform duration-700 hover:scale-[1.03]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
