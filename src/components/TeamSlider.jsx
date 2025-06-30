'use client'

import { useRef, useEffect, useState } from 'react'

export default function TeamSlider() {
  const sliderRef = useRef(null)
  const [currentPosition, setCurrentPosition] = useState(0)
  const [cardWidth, setCardWidth] = useState(320)
  const [visibleCards, setVisibleCards] = useState(1)
  const [maxPosition, setMaxPosition] = useState(0)

  const updateMetrics = () => {
    const width = window.innerWidth
    const cardW = width >= 1024 ? 360 : width >= 768 ? 340 : 320
    const visible = width >= 1024 ? 3 : width >= 768 ? 2 : 1
    const totalCards = sliderRef.current?.children.length || 0
    const max = -(totalCards - visible) * cardW

    setCardWidth(cardW)
    setVisibleCards(visible)
    setMaxPosition(max)
  }

  const updatePosition = (newPosition) => {
    const boundedPosition = Math.max(Math.min(newPosition, 0), maxPosition)
    setCurrentPosition(boundedPosition)
  }

  const handlePrev = () => {
    if (currentPosition < 0) {
      updatePosition(currentPosition + cardWidth)
    }
  }

  const handleNext = () => {
    if (currentPosition > maxPosition) {
      updatePosition(currentPosition - cardWidth)
    }
  }

  useEffect(() => {
    updateMetrics()
    window.addEventListener('resize', updateMetrics)
    return () => window.removeEventListener('resize', updateMetrics)
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentPosition}px)`
    }
  }, [currentPosition])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-4 transition-transform duration-300 ease-in-out" ref={sliderRef}>
        {/* Replace these with your actual card components */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[340px] lg:min-w-[360px] bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <p className="text-center">Card {i + 1}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full z-10"
        disabled={currentPosition >= 0}
      >
        ◀
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full z-10"
        disabled={currentPosition <= maxPosition}
      >
        ▶
      </button>
    </div>
  )
}

