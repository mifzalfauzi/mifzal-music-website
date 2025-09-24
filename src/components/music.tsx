"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, ChevronLeft, ChevronRight, Music as MusicIcon, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

const musicReleases = [

  {
    title: "Intervallum",
    type: "Single",
    year: "2023",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a095dbc29c017745bcb14714  ",
    spotifyUrl: "https://open.spotify.com/",
    appleMusicUrl: "https://music.apple.com/",
    bandcampUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=dNUUFbxIXVE",
    spotifyEmbedId: "4TbPxJ5jUspuAN8sUZQSCs", // Add your Spotify track/album ID here
    isReleased: true,
    tracks: [
      { title: "Intervallum", duration: "4:05" },
    ],
  },

  {
    title: "Vita",
    type: "Single",
    year: "2023",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02590377c4b00634518a7cc5ff",
    spotifyUrl: "https://open.spotify.com/",
    appleMusicUrl: "https://music.apple.com/",
    bandcampUrl: "https://mifzal.bandcamp.com/track/vita",
    youtubeUrl: "https://www.youtube.com/watch?v=1SUi9FLGxQM",
    spotifyEmbedId: "1xo4cAMxixCp0ml4ZYeTEM", // Add your Spotify track/album ID here
    isReleased: true,
    tracks: [
      { title: "Vita", duration: "4:05" },
    ],
  },

  {
    title: "Leocasia",
    type: "Multi-track Single",
    year: "2023",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0228f2b587dfb595dbb5830547",
    spotifyUrl: "https://open.spotify.com/",
    appleMusicUrl: "https://music.apple.com/",
    bandcampUrl: "https://mifzal.bandcamp.com/album/leocasia",
    youtubeUrl: "https://youtu.be/U47t_OKp5Z4?si=f8lTk7aha0GMTGbN",
    spotifyEmbedId: "2rVkgIahZhBbeEPsqQLkwr", // Add your Spotify track/album ID here
    isReleased: true,
    tracks: [
      { title: "Leocasia", duration: "4:05" },
    ],
  }
  // Adding a third release helps test the consistency of transitions
  // {
  //   title: "Upcoming",
  //   type: "EP",
  //   year: "2025",
  //   cover: "/placeholder.svg?height=500&width=500",
  //   spotifyUrl: "https://open.spotify.com/",
  //   appleMusicUrl: "https://music.apple.com/",
  //   bandcampUrl: "https://bandcamp.com/",
  //   tracks: [
  //     { title: "Track 1", duration: "3:45" },
  //     { title: "Track 2", duration: "4:22" }
  //   ],
  // },
]

export default function Music() {
  // Calculate initial index based on track count
  const getInitialIndex = () => {
    const totalTracks = musicReleases.length
    if (totalTracks % 2 === 1) {
      // Odd number: middle position
      return Math.floor(totalTracks / 2)
    } else {
      // Even number: lower of the two middle positions
      return Math.floor(totalTracks / 2) - 1
    }
  }

  const [activeIndex, setActiveIndex] = useState(getInitialIndex())
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Get indexes of cards to the left and right of the active card
  const getPrevIndex = () => {
    return activeIndex === 0 ? musicReleases.length - 1 : activeIndex - 1
  }

  const getNextIndex = () => {
    return (activeIndex + 1) % musicReleases.length
  }

  // Switch to next release with transition state
  const showNextRelease = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setActiveIndex((prevIndex) => (prevIndex + 1) % musicReleases.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  // Switch to previous release with transition state
  const showPrevRelease = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? musicReleases.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsTransitioning(false), 800)
  }

  // Automatic cycling through releases every 1.5 seconds
  // useEffect(() => {
  //   let intervalId: string | number | NodeJS.Timeout | undefined;

  //   if (!isPaused && !isTransitioning) {
  //     intervalId = setInterval(() => {
  //       showNextRelease();
  //     }, 3000);
  //   }

  //   return () => {
  //     if (intervalId) clearInterval(intervalId);
  //   };
  // }, [isPaused, isTransitioning, activeIndex]);

  // Pause automatic cycling on hover or touch
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    setTouchEnd(0) // Reset touch end
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsPaused(false)
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      showNextRelease()
    }
    if (isRightSwipe) {
      showPrevRelease()
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-lg md:text-3xl font-light mb-12 text-center tracking-wider">MUSIC</h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Navigation arrows for mobile/tablet */}
        {/* {activeIndex !== 0 && (
          <button
            onClick={showPrevRelease}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg md:hidden"
            aria-label="Previous release"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {activeIndex !== musicReleases.length - 1 && (
          <button
            onClick={showNextRelease}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg md:hidden"
            aria-label="Next release"
          >
            <ChevronRight size={20} />
          </button>
        )} */}

        {/* Carousel with simple scale animations */}
        <div
          className="flex justify-center items-center gap-4 md:gap-8 h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous card (smaller) - only show if not on first track */}
          {activeIndex !== 0 ? (
            <div
              key={`prev-card-${getPrevIndex()}`}
              className="hidden md:block w-1/3 cursor-pointer opacity-50 hover:opacity-70 transition-all duration-800 ease-in-out transform scale-90 hover:scale-95"
              onClick={showPrevRelease}
            >
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="aspect-square relative">
                  <Image
                    src={musicReleases[getPrevIndex()].cover || "/placeholder.svg"}
                    alt={musicReleases[getPrevIndex()].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm truncate">{musicReleases[getPrevIndex()].title}</h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {musicReleases[getPrevIndex()].type} • {musicReleases[getPrevIndex()].year}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:block w-1/3"></div>
          )}

          {/* Active card (larger) */}
          <div
            key={`main-card-${activeIndex}`}
            className="w-full md:w-2/4 z-10 transition-all duration-800 ease-in-out transform scale-100"
          >
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
              <div  className={clsx(
      "relative",
      musicReleases[activeIndex].type === "Single"
             ? "aspect-[5/4] sm:aspect-[7/4] md:aspect-[5/4] lg:aspect-[5/4] xl:aspect-[5/3] 2xl:aspect-[5/4]"
      : "aspect-[5/4] sm:aspect-[7/4] md:aspect-[5/4] lg:aspect-[5/4] xl:aspect-[5/3] 2xl:aspect-[5/4]"
    )}
              >
                {musicReleases[activeIndex].isReleased && musicReleases[activeIndex].spotifyEmbedId ? (
                  <iframe
                    style={{ borderRadius: "13px" }}
                    src={`https://open.spotify.com/embed/${musicReleases[activeIndex].type !== "Single" ? "album" : "track"
                      }/${musicReleases[activeIndex].spotifyEmbedId}?utm_source=generator&theme=0`}
                    width="100%"
                    height={musicReleases[activeIndex].type === "Single" ? 352 : 370}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={musicReleases[activeIndex].cover || "/placeholder.svg"}
                    alt={musicReleases[activeIndex].title}
                    fill
                    className="object-cover transition-opacity duration-300"
                  />
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {musicReleases[activeIndex].type} • {musicReleases[activeIndex].year}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    {musicReleases[activeIndex].youtubeUrl != "" && (
                      <a
                        href={musicReleases[activeIndex].youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors"
                        aria-label="Listen on Youtube"
                      >
                        <Youtube className="w-4 h-4" />
                      </a>)}
                    {/* <a
                      href={musicReleases[activeIndex].appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
                      aria-label="Listen on Apple Music"
                    >
                      <MusicIcon className="w-4 h-4" />
                    </a> */}
                    {musicReleases[activeIndex].bandcampUrl != "" && (
                      <a
                        href={musicReleases[activeIndex].bandcampUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors"
                        aria-label="Listen on Bandcamp"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 21l7.5-18h-7.5l-7.5 18z" fill="currentColor" />
                        </svg>
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next card (smaller) - only show if not on last track */}
          {activeIndex !== musicReleases.length - 1 ? (
            <div
              key={`next-card-${getNextIndex()}`}
              className="hidden md:block w-1/3 cursor-pointer opacity-50 hover:opacity-70 transition-all duration-800 ease-in-out transform scale-90 hover:scale-95"
              onClick={showNextRelease}
            >
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="aspect-square relative">
                  <Image
                    src={musicReleases[getNextIndex()].cover || "/placeholder.svg"}
                    alt={musicReleases[getNextIndex()].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm truncate">{musicReleases[getNextIndex()].title}</h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {musicReleases[getNextIndex()].type} • {musicReleases[getNextIndex()].year}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:block w-1/3"></div>
          )}

        </div>
      </div>

      {/* Indicator dots with chevron navigation for mobile */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        {/* Left chevron - only show on mobile */}
        <button
          onClick={showPrevRelease}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Previous release"
          disabled={isTransitioning}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {musicReleases.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setActiveIndex(index);
                setTimeout(() => setIsTransitioning(false), 800);
              }}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-800 ease-in-out hover:scale-125 ${index === activeIndex ? "bg-foreground scale-110" : "bg-muted-foreground/30"
                }`}
              aria-label={`Go to release ${index + 1}`}
            />
          ))}
        </div>

        {/* Right chevron - only show on mobile */}
        <button
          onClick={showNextRelease}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Next release"
          disabled={isTransitioning}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}