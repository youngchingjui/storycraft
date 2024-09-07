const MagicalBook = () => (
  <div className="relative w-full h-64 md:h-96 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="sparkleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      
      {/* Book */}
      <g className="book" transform="translate(50 50)">
        <path d="M-20,-15 L20,-15 A5,5 0 0,1 20,-10 L20,15 A5,5 0 0,1 15,20 L-15,20 A5,5 0 0,1 -20,15 Z" fill="#4F46E5" />
        <path d="M-18,-13 L18,-13 L18,13 L-18,13 Z" fill="#818CF8" />
        <path d="M-16,-11 L16,-11 L16,11 L-16,11 Z" fill="#C7D2FE" />
      </g>
      
      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <circle key={i} className={`sparkle sparkle-${i + 1}`} r="1" fill="url(#sparkleGradient)">
          <animateMotion
            dur={`${2 + Math.random() * 3}s`}
            repeatCount="indefinite"
            path={`M${Math.random() * 100} ${Math.random() * 100} q ${-50 + Math.random() * 100} ${-50 + Math.random() * 100} ${-50 + Math.random() * 100} ${-50 + Math.random() * 100}`}
          />
        </circle>
      ))}
    </svg>
  </div>
)

export default MagicalBook