"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MobileNav from "./mobile-nav"

const heroImages = [
  {
    src: "/img1.jpg",
    alt: "Hero Image 1"
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Hero Image 2"
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Hero Image 3"
  }
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        showNextImage()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isTransitioning])

  const showNextImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const showPrevImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsTransitioning(false), 800)
  }

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <MobileNav />

      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={showPrevImage}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300 opacity-60 hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={showNextImage}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300 opacity-60 hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white mt-[-5vh]">
        {/* <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">INA&apos;S LOUNGE</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">Ambient melodies for the modern soul</p> */}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return
              setIsTransitioning(true)
              setActiveIndex(index)
              setTimeout(() => setIsTransitioning(false), 800)
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-800 ease-in-out hover:scale-125 ${
              index === activeIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
