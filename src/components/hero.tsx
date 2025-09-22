"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MobileNav from "./mobile-nav"

const heroImages = [
  { src: "/img4.jpg", alt: "Hero Image 4" },
  { src: "/img3.jpg", alt: "Hero Image 3" },
  { src: "/img1.jpg", alt: "Hero Image 1" },



]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const showNextImage = () => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length)
  }

  const showPrevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <MobileNav />

      {/* Full background images in a row */}
      <div className="flex w-full h-full">
  {heroImages.map((image, index) => (
    <div key={index} className="relative w-1/3 h-full">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover  object-top sm:object-center" 
        style={{
          objectPosition: index === 0 ? "50% 0%" : "50% 50%",
        }}
        priority={index === 0}
      />
    </div>
  ))}
</div>



      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10 pointer-events-none" />

      {/* Navigation arrows */}
      {heroImages.length > 3 && (
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
