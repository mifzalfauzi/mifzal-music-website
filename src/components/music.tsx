"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, ChevronLeft, ChevronRight, Music as MusicIcon, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const musicReleases = [
  {
    title: "Vita",
    type: "Single",
    year: "2023",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02590377c4b00634518a7cc5ff",
    spotifyUrl: "https://open.spotify.com/",
    appleMusicUrl: "https://music.apple.com/",
    bandcampUrl: "https://bandcamp.com/",
    youtubeUrl: "https://www.youtube.com/watch?v=1xo4cAMxixCp0ml4ZYeTEM",
    spotifyEmbedId: "1xo4cAMxixCp0ml4ZYeTEM", // Add your Spotify track/album ID here
    isReleased: true,
    tracks: [
      { title: "Vita", duration: "4:05" },
    ],
  },
  {
    title: "Intervallum",
    type: "Single",
    year: "2023",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a095dbc29c017745bcb14714  ",
    spotifyUrl: "https://open.spotify.com/",
    appleMusicUrl: "https://music.apple.com/",
    bandcampUrl: "https://bandcamp.com/",
    youtubeUrl: "https://www.youtube.com/watch?v=4TbPxJ5jUspuAN8sUZQSCs",
    spotifyEmbedId: "4TbPxJ5jUspuAN8sUZQSCs", // Add your Spotify track/album ID here
    isReleased: true,
    tracks: [
      { title: "Intervallum", duration: "4:05" },
    ],
  },
  
  {
    title: "Leocasia",
    type: "Multi-track Single",
    year: "2023",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0228f2b587dfb595dbb5830547",
    spotifyUrl: "https://open.spotify.com/",
    appleMusicUrl: "https://music.apple.com/",
    bandcampUrl: "https://bandcamp.com/",
    youtubeUrl: "https://www.youtube.com/watch?v=5Unfq5dxYK013BQzsCNoJQ",
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
    setTimeout(() => setIsTransitioning(false), 300) // Match transition duration
  }

  // Switch to previous release with transition state
  const showPrevRelease = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? musicReleases.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsTransitioning(false), 300) // Match transition duration
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
  const handleTouchStart = () => setIsPaused(true)
  const handleTouchEnd = () => setIsPaused(false)

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light mb-12 text-center tracking-wider">MUSIC</h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Navigation arrows */}
        {/* {activeIndex !== 0 && (
          <button
            onClick={showPrevRelease}
            className="absolute cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-background/80 dark:bg-background/60 rounded-full p-2 shadow-md"
            aria-label="Previous release"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {activeIndex !== musicReleases.length - 1 && (
          <button
            onClick={showNextRelease}
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 dark:bg-background/60 rounded-full p-2 shadow-md"
            aria-label="Next release"
          >
            <ChevronRight size={24} />
          </button>
        )} */}

        {/* Carousel with centered active card and smaller side cards */}
        <div
          className="flex justify-center items-center gap-4 md:gap-8 h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous card (smaller) - only show if not on first track */}
          {activeIndex !== 0 ? (
            <div
              key={`prev-card-${getPrevIndex()}`}
              className="hidden md:block w-1/3 cursor-pointer opacity-50 hover:opacity-70 transition-all duration-300 transform scale-90"
              onClick={showPrevRelease}
            >
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="aspect-square relative">
                  {musicReleases[getPrevIndex()].isReleased && musicReleases[getPrevIndex()].spotifyEmbedId ? (
                    <Image
                      src={musicReleases[getPrevIndex()].cover || "/placeholder.svg"}
                      alt={musicReleases[getPrevIndex()].title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src={musicReleases[getPrevIndex()].cover || "/placeholder.svg"}
                      alt={musicReleases[getPrevIndex()].title}
                      fill
                      className="object-cover"
                    />
                  )}
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
            className="w-full md:w-2/4 z-10 transition-all duration-300 transform"
          >
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
              <div className="relative h-0"
  style={{
    paddingBottom: musicReleases[activeIndex].type === "Single" ? "70%" : "75%",
  }}>
                {musicReleases[activeIndex].isReleased && musicReleases[activeIndex].spotifyEmbedId ? (
                  <iframe
                    style={{ borderRadius: "13px" }}
                    src={`https://open.spotify.com/embed/${
                      musicReleases[activeIndex].type !== "Single" ? "album" : "track"
                    }/${musicReleases[activeIndex].spotifyEmbedId}?utm_source=generator&theme=0`}
                    width="100%"
                    height={musicReleases[activeIndex].type === "Single" ? 352 : 370}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <Image
                      src={musicReleases[activeIndex].cover || "/placeholder.svg"}
                      alt={musicReleases[activeIndex].title}
                      fill
                      className="object-cover transition-opacity duration-300"
                    />

                    {/* Play overlay */}
                    {/* <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                      <Button
                        size="icon"
                        className="rounded-full w-14 h-14 bg-background/90 hover:bg-background text-foreground"
                      >
                        <Play size={24} />
                      </Button>
                    </div> */}
                  </>
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {/* <h3 className="font-medium text-lg">{musicReleases[activeIndex].title}</h3> */}
                    <p className="text-sm text-muted-foreground">
                      {musicReleases[activeIndex].type} • {musicReleases[activeIndex].year}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    {/* <p> Listen on</p> */}
                   
                    <a
                      href={musicReleases[activeIndex].youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors"
                      aria-label="Listen on Youtube"
                    >
                      <Youtube className="w-4 h-4" />


                    </a>
                    <a
                      href={musicReleases[activeIndex].appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
                      aria-label="Listen on Apple Music"
                    >
                      <MusicIcon className="w-4 h-4" />


                    </a>

                    <a
                      href={musicReleases[activeIndex].bandcampUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors"
                      aria-label="Listen on Bandcamp"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.5 21l7.5-18h-7.5l-7.5 18z" fill="currentColor" />
                      </svg>

                    </a>

                  </div>
                </div>

                {/* <div className="space-y-2 max-h-[150px] overflow-y-auto">
                  {musicReleases[activeIndex].tracks.map((track) => (
                    <div
                      key={track.title}
                      className="flex items-center p-2 hover:bg-muted transition-colors rounded-md"
                    >
                      <Button size="sm" variant="ghost" className="rounded-full w-7 h-7 p-0 mr-2">
                        <Play size={14} />
                        <span className="sr-only">Play {track.title}</span>
                      </Button>

                      <div className="flex-1 truncate">
                        <p className="text-sm font-medium truncate">{track.title}</p>
                      </div>

                      <div className="text-muted-foreground text-xs">{track.duration}</div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

          {/* Next card (smaller) - only show if not on last track */}
          {activeIndex !== musicReleases.length - 1 ? (
            <div
              key={`next-card-${getNextIndex()}`}
              className="hidden md:block w-1/3 cursor-pointer opacity-50 hover:opacity-70 transition-all duration-300 transform scale-90"
              onClick={showNextRelease}
            >
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="aspect-square relative">
                  {musicReleases[getNextIndex()].isReleased && musicReleases[getNextIndex()].spotifyEmbedId ? (
                    <Image
                      src={musicReleases[getNextIndex()].cover || "/placeholder.svg"}
                      alt={musicReleases[getNextIndex()].title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src={musicReleases[getNextIndex()].cover || "/placeholder.svg"}
                      alt={musicReleases[getNextIndex()].title}
                      fill
                      className="object-cover"
                    />
                  )}
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

      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {musicReleases.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setActiveIndex(index);
              setTimeout(() => setIsTransitioning(false), 300);
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-foreground" : "bg-muted-foreground/30"
              }`}
            aria-label={`Go to release ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}