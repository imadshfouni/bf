import { LOGO_SRC } from '@/config/site'

type LogoProps = {
  showWordmark?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { img: 'h-8 w-8', text: 'text-lg' },
  md: { img: 'h-9 w-9', text: 'text-xl' },
  lg: { img: 'h-11 w-11', text: 'text-2xl' },
}

export function Logo({
  showWordmark = true,
  size = 'md',
  className = '',
}: LogoProps) {
  const s = sizes[size]

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={LOGO_SRC}
        alt="brAInify"
        className={`${s.img} rounded-xl object-cover shadow-lg shadow-blue-500/10`}
        width={44}
        height={44}
      />
      {showWordmark && (
        <span className={`${s.text} font-bold tracking-tight text-white`}>
          br<span className="text-cyan-400">AI</span>nify
        </span>
      )}
    </span>
  )
}
