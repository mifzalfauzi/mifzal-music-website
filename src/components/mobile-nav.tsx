"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Music, Youtube, Instagram } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex justify-between items-center p-4">
        <Link href="#home" className="text-xl font-light text-white">
          MIFZAL
        </Link>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button onClick={toggleMenu} className="p-2 text-white" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              <li>
                <Link
                  href="#home"
                  className="block text-2xl font-light text-foreground hover:text-muted-foreground transition-colors tracking-wider"
                  onClick={toggleMenu}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block text-2xl font-light text-foreground hover:text-muted-foreground transition-colors tracking-wider"
                  onClick={toggleMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="#music"
                  className="block text-2xl font-light text-foreground hover:text-muted-foreground transition-colors tracking-wider"
                  onClick={toggleMenu}
                >
                  MUSIC
                </Link>
              </li>
              <li>
                <Link
                  href="#upcoming-music"
                  className="block text-2xl font-light text-foreground hover:text-muted-foreground transition-colors tracking-wider"
                  onClick={toggleMenu}
                >
                  UPCOMING
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block text-2xl font-light text-foreground hover:text-muted-foreground transition-colors tracking-wider"
                  onClick={toggleMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-8 mt-12">
            <Link
              href="https://open.spotify.com/artist/3HqfM3Xk0a0J6xZJvjQfkj?si=otfwPuotR9ie9llUoMyOxw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-green-500 transition-colors"
              aria-label="Spotify"
            >
              <Music size={24} />
            </Link>
            <Link
              href="https://youtube.com/@mifzals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </Link>
            <Link
              href="https://instagram.com/mifzalv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://mifzal.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-blue-500 transition-colors"
              aria-label="Bandcamp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
          </div>
        </div>
      )}
    </div>
  )
}
