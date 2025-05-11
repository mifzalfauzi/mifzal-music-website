import Link from "next/link"
import { Music, Youtube, Instagram } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function SocialIcons() {
  return (
    <div className="fixed right-8 top-8 z-50 hidden md:flex items-center space-x-6">
      <Link
        href="https://open.spotify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-400 dark:hover:text-green-400 transition-colors"
        aria-label="Spotify"
      >
        <Music size={20} />
      </Link>
      <Link
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-400 dark:hover:text-red-400 transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </Link>
      <Link
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-400 dark:hover:text-pink-400 transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </Link>
      <Link
        href="https://bandcamp.com/"
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
