export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const displayTitle = title.endsWith(".") ? title : `${title}.`;

  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.25em] text-[#ff007f] uppercase font-semibold">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
        {displayTitle.slice(0, -1)}
        <span className="text-[#ff007f]">.</span>
      </h2>
      {description && <p className="mt-4 text-gray-300 text-base leading-relaxed">{description}</p>}
    </div>
  );
}
