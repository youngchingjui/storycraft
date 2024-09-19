'use client'

import { useRef } from 'react'
import Image from 'next/image'

export function AnimatedBook() {
  const containerRef = useRef<HTMLDivElement>(null)

  const coverImage = "/images/cover.png"
  const leftPageImage = "/images/left_page.png"
  const rightPageImage = "/images/right_page.png"

  return (
      <div ref={containerRef} className="w-full max-w-4xl">
        <div className="sticky top-1/4 w-full aspect-[2/1] perspective-1000">
          <div
            className="w-1/2 h-full origin-right [transform-style:preserve-3d] absolute right-1/2"
            style={{ transform: 'rotateY(-180deg)' }}
          >
            <div className="absolute inset-0 backface-hidden">
              <div className="w-full h-full bg-blue-500 rounded-l-lg shadow-xl flex items-center justify-center overflow-hidden">
                <Image src={coverImage} alt="Book Cover" width={500} height={500} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
              <div className="w-full h-full bg-white rounded-r-lg shadow-xl" />
            </div>
          </div>
          <div
            className="w-full h-full absolute inset-0 flex"
            style={{ transform: 'scale(1)', opacity: 1 }}
          >
            <div className="w-1/2 h-full bg-white rounded-l-lg shadow-xl overflow-hidden">
              <Image src={leftPageImage} alt="Left Page" width={500} height={500} className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full bg-white rounded-r-lg shadow-xl overflow-hidden">
              <Image src={rightPageImage} alt="Right Page" width={500} height={500} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
  )
}