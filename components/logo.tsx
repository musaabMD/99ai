interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showIndicator?: boolean
}

export function Logo({ size = 'md', showIndicator = true }: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-8 h-8',
      svg: 'w-5 h-5',
      indicator: 'w-2.5 h-2.5'
    },
    md: {
      icon: 'w-10 h-10',
      svg: 'w-6 h-6',
      indicator: 'w-3 h-3'
    },
    lg: {
      icon: 'w-12 h-12',
      svg: 'w-7 h-7',
      indicator: 'w-3.5 h-3.5'
    }
  }

  const classes = sizeClasses[size]

  return (
    <div className="relative">
      <div className={`${classes.icon} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${classes.svg} text-white`}
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showIndicator && (
        <div className={`absolute -top-1 -right-1 ${classes.indicator} bg-green-400 rounded-full border-2 border-white`}></div>
      )}
    </div>
  )
} 