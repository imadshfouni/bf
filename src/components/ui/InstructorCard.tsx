type InstructorCardProps = {
  name: string
  role: string
  image?: string
  featured?: boolean
  compact?: boolean
}

export function InstructorCard({
  name,
  role,
  image,
  featured = false,
  compact = false,
}: InstructorCardProps) {
  const aspect = featured
    ? 'aspect-[4/5] sm:aspect-[5/6]'
    : compact
      ? 'aspect-[4/5]'
      : 'aspect-[4/5]'

  return (
    <article
      className={`group h-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c1428] transition-all duration-300 hover:border-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/10 ${
        compact ? 'rounded-xl' : 'rounded-2xl'
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-b from-slate-700/20 to-[#0a1020] ${aspect}`}
      >
        {image ? (
          <img
            src={image}
            alt={`${name}, ${role} instructor at brAInify`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#141c32] to-[#0c1428]">
            <span
              className={`flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600/50 to-cyan-500/30 font-bold text-white/90 ${
                compact ? 'h-14 w-14 text-xl' : featured ? 'h-24 w-24 text-4xl' : 'h-20 w-20 text-3xl'
              }`}
            >
              {name.charAt(0)}
            </span>
            {!compact && (
              <p className="mt-3 text-xs text-slate-500">Photo coming soon</p>
            )}
          </div>
        )}
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c1428] via-[#0c1428]/85 to-transparent ${
            compact ? 'h-16' : 'h-28'
          }`}
        />
      </div>

      <div
        className={`text-center ${
          compact ? 'px-2 pb-3 pt-2' : featured ? 'px-5 pb-6 pt-4' : 'px-4 pb-5 pt-3'
        }`}
      >
        <h3
          className={`font-bold text-white ${
            compact ? 'text-sm' : featured ? 'text-xl sm:text-2xl' : 'text-lg'
          }`}
        >
          {name}
        </h3>
        <p
          className={`mt-0.5 text-cyan-400/90 ${
            compact ? 'text-[10px] leading-tight' : featured ? 'text-base' : 'text-sm'
          }`}
        >
          {role}
        </p>
      </div>
    </article>
  )
}
