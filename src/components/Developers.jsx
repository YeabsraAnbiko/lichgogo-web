'use client'

import Team from '@/components/Team';
import { devTeams } from '@/lib/contents/devTeam';
import { useRef, useEffect, useState } from 'react'

const TeamSlider = () => {
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
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Development Team</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The talented individuals behind our success, working together to create exceptional educational experiences.
                    </p>
                </div>
                <div className="flex gap-4 transition-transform duration-300 ease-in-out" ref={sliderRef}>
                    {/*people*/}
                    {devTeams.map((member, index) => (
                        <Team key={index} {...member} />
                    ))}
                </div>
                <div className="relative px-4 md:px-6 lg:px-8">
                    <div className="flex justify-center mt-8 gap-4">
                        <button onClick={handlePrev} disabled={currentPosition >= 0} className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300" id="prevBtn">

                            <i className="ri-arrow-left-s-line text-2xl text-gray-600"></i>
                        </button>
                        <button onClick={handleNext} disabled={currentPosition <= maxPosition} className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300" id="nextBtn">
                            <i className="ri-arrow-right-s-line text-2xl text-gray-600"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSlider;
