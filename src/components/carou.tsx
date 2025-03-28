"use client"

import { useEffect, useRef, useState } from "react"

interface InfiniteLogoCarouselProps {
  logos: {
    src: string
    alt: string
  }[]
  speed?: number
  pauseOnHover?: boolean
}

export function InfiniteLogoCarousel({ logos, speed = 30, pauseOnHover = true }: InfiniteLogoCarouselProps) {
  const [duplicatedLogos, setDuplicatedLogos] = useState<typeof logos>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)

  // Duplicate logos to create the infinite effect
  useEffect(() => {
    // We need enough logos to fill the container at least twice
    const duplicated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos]
    setDuplicatedLogos(duplicated)
  }, [logos])

  // Set up the animation
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return

    const scrollerContent = scrollerRef.current
    const containerWidth = containerRef.current.offsetWidth

    setContainerWidth(containerWidth)

    // Animation function
    let animationId: number
    let startTime: number
    let previousTimestamp: number
    let totalDistance = 0

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp
        previousTimestamp = timestamp
      }

      const elapsed = timestamp - previousTimestamp
      previousTimestamp = timestamp

      if (!isPaused) {
        // Calculate how much to move based on elapsed time and speed
        const distance = (elapsed * speed) / 1000
        totalDistance += distance

        // Reset position when we've scrolled the width of the first set of logos
        const logoSetWidth = scrollerContent.offsetWidth / 3
        if (totalDistance >= logoSetWidth) {
          totalDistance = 0
        }

        // Apply the transform
        scrollerContent.style.transform = `translateX(-${totalDistance}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused, speed])

  return (
    <div
      className="relative overflow-hidden w-full max-w-full"
      ref={containerRef}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={scrollerRef} className="flex items-center whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-8">
            <img
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="max-h-full max-w-[350px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

