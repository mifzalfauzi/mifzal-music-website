"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MobileNav from "./mobile-nav"

const heroImages = [
  { src: "/img1.jpg", alt: "Hero Image 1" }
//   { src: "/img2.jpg", alt: "Hero Image 2" },
//   { src: "/img3.jpg", alt: "Hero Image 3" },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const showNextImage = () => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length)
  }

  const showPrevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }

  // Swipe support for mobile
  useEffect(() => {
    let startX: number | null = null

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (startX === null) return
      const diff = startX - e.changedTouches[0].clientX
      if (diff > 50) showNextImage()
      else if (diff < -50) showPrevImage()
      startX = null
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart)
      container.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <MobileNav />

      {/* Carousel */}

      
      {/* Carousel images */}
{heroImages.map((image, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      index === activeIndex ? "opacity-100 z-0" : "opacity-0 z-0"
    }`}
  >
    <Image
      src={image.src}
      alt={image.alt}
      fill
      style={{
        objectFit: "contain",
        objectPosition: "center",
        transform: index === activeIndex ? "scale(1.05)" : "scale(1)",
        transition: "transform 20s linear",
      }}
      priority={index === 0}
    />
  </div>
))}

{/* Overlay gradient for cinematic feel */}
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10 pointer-events-none" />


      {/* Navigation arrows */}
      
      {/* Navigation arrows */}
{heroImages.length > 1 && (
  <>
    <button
      onClick={showPrevImage}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={showNextImage}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition"
    >
      <ChevronRight size={24} />
    </button>
  </>
)}

    </div>
  )
}
