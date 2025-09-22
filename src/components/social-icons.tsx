import Link from "next/link"
import { Music, Youtube, Instagram } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function SocialIcons() {
  return (
    <div className="fixed right-8 top-8 z-50 hidden md:flex items-center space-x-6">
      <Link
        href="https://open.spotify.com/artist/3HqfM3Xk0a0J6xZJvjQfkj?si=otfwPuotR9ie9llUoMyOxw"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-400 dark:hover:text-green-400 transition-colors"
        aria-label="Spotify"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </Link>
      <Link
        href="https://youtube.com/@mifzals"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-400 dark:hover:text-red-400 transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </Link>
      <Link
        href="https://instagram.com/mifzalv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-400 dark:hover:text-pink-400 transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </Link>
      <Link
        href="https://mifzal.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
        aria-label="Bandcamp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8.5 21l7.5-18h-7.5l-7.5 18z" />
        </svg>
      </Link>
      <ThemeToggle />
    </div>
  )
}
