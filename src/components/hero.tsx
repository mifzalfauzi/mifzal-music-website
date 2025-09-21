import Image from "next/image"
import MobileNav from "./mobile-nav"

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <MobileNav />

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Mifzal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white mt-[-5vh]">
        {/* <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">INA&apos;S LOUNGE</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">Ambient melodies for the modern soul</p> */}
      </div>
    </div>
  )
}
