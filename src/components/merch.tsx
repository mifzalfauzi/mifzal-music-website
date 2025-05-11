"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const merchItems = [
  {
    name: "Midnight Whispers Vinyl",
    price: "$25.00",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    name: "Band Logo T-Shirt",
    price: "$22.00",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    name: "Tour Poster",
    price: "$15.00",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    name: "Ina's Lounge Tote Bag",
    price: "$18.00",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    name: "Limited Edition Hoodie",
    price: "$45.00",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    name: "Crystal Memories CD",
    price: "$12.00",
    image: "/placeholder.svg?height=500&width=500",
  },
]

export default function Merch() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused) return

    const scrollContainer = scrollContainerRef.current
    let animationFrameId: number
    let lastTime = 0
    const speed = 0.3 // pixels per millisecond

    const scroll = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp
      const elapsed = timestamp - lastTime
      lastTime = timestamp

      if (scrollContainer) {
        scrollContainer.scrollLeft += speed * elapsed

        // Reset to beginning when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused])

  // Handle hover to pause auto-scroll
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Update active index for mobile indicator
  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const scrollLeft = scrollContainerRef.current.scrollLeft
    const itemWidth = scrollContainerRef.current.scrollWidth / merchItems.length
    const newIndex = Math.round(scrollLeft / itemWidth)

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < merchItems.length) {
      setActiveIndex(newIndex)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light mb-12 text-center tracking-wider">MERCH</h2>

      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 dark:bg-background/60 rounded-full p-2 shadow-md hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 dark:bg-background/60 rounded-full p-2 shadow-md hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Horizontal scrolling container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onScroll={handleScroll}
        >
          {merchItems.map((item) => (
            <div key={item.name} className="flex-none w-[250px] snap-start">
              <div className="group bg-card rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300 border border-border">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium truncate">{item.name}</h3>
                  <p className="text-muted-foreground mb-3">{item.price}</p>

                  <Button variant="outline" className="w-full">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile indicator dots */}
      <div className="flex justify-center space-x-2 mt-4 md:hidden">
        {merchItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-foreground" : "bg-muted-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  )
}
