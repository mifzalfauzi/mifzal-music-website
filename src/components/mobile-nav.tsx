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
        <Link href="#home" className="text-xl font-medium text-white">
          Ina&apos;s Lounge
        </Link>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button onClick={toggleMenu} className="p-2 text-white" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="p-4 pb-6 bg-background border-b border-border shadow-md">
          <nav className="mb-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#home"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="#merch"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  MERCH
                </Link>
              </li>
              <li>
                <Link
                  href="#shows"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  SHOWS
                </Link>
              </li>
              <li>
                <Link
                  href="#music"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  MUSIC
                </Link>
              </li>
              <li>
                <Link
                  href="#band"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  MEMBERS
                </Link>
              </li>
              <li>
                <Link
                  href="#newsletter"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                  onClick={toggleMenu}
                >
                  NEWSLETTER
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-6">
            <Link
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-green-500 transition-colors"
              aria-label="Spotify"
            >
              <Music size={20} />
            </Link>
            <Link
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-blue-500 transition-colors"
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
          </div>
        </div>
      )}
    </div>
  )
}
