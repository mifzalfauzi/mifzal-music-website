"use client"

import { Mail, Music, Instagram, ExternalLink, Youtube } from "lucide-react"
import Image from "next/image"

export default function EPK() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero/Header */}
      <section className="py-16 px-4 border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Artist Photo */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border">
              <Image
                src="/mifzal.jpg"
                alt="Mifzal - Artist Photo"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <p className="text-xl md:text-md text-muted-foreground font-light mb-4">Electronic Press Kit</p>
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">MIFZAL</h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
                Cinematic Progressive Composer
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://www.mifzal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-muted-foreground hover:text-white/80 transition-colors"
                >
                  <span>www.mifzal.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex gap-6 pt-6">

                <a
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  {/* <span>Instagram</span> */}
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
                  aria-label="Spotify"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  {/* <span>Spotify</span> */}
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="w-5 h-5" />
                  {/* <span>Instagram</span> */}
                </a>
                <a
                  href="https://bandcamp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
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
                  {/* <span>SoundCloud</span> */}
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Bio */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-light mb-8 tracking-wider">ARTIST OVERVIEW</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Mifzal is a 23 year old emerging composer from Malaysia, crafting cinematic progressive music that blends atmospheric textures with melodic guitar-driven and orchestral compositions. His work explores the intersection of ambient soundscapes and intricate progressive arrangements, creating immersive musical narratives.
          </p>
        </div>
      </section>

      {/* Longer Bio */}
      <section className="py-16 px-4  ">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-light mb-8 tracking-wider">MUSICAL VISION</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Drawing inspiration from the melodic sophistication of Plini, the technical innovation of David Maxim Micic, and the emotive storytelling of Ludovico Einaudi, Mifzal creates music that transcends traditional genre boundaries. His compositions seamlessly weave together progressive guitar techniques with cinematic orchestration, resulting in deeply atmospheric and emotionally resonant pieces.
            </p>
            <p>
              The cornerstone of his artistic vision is the "Sapphire" concept - a musical exploration of crystalline beauty and structural complexity. "Tales of Sapphire" represents this vision in its fullest form: a multi-movement suite that flows seamlessly from intimate guitar passages to sweeping orchestral arrangements, telling a complete narrative through instrumental composition alone.
            </p>
            <p>
              Through this conceptual framework, Mifzal aims to create music that serves as both technical showcase and emotional journey, inviting listeners into carefully crafted sonic worlds that reveal new details with each listen.
            </p>
          </div>
        </div>
      </section>

      {/* Music Embed */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-light mb-4 tracking-wider">FEATURED TRACK</h2>
          <div className="space-y-6">
            <div className="bg-background p-6 ">
              <h3 className="text-xl font-light mb-4">Sapphire (Demo)</h3>

              {/* SoundCloud Compact Embed */}
              <div className="w-full overflow-hidden">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2172997473%3Fsecret_token%3Ds-klZ9BNZrrKE&color=%232c2c28&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className=""
                ></iframe>
              </div>

              <p className="text-sm text-muted-foreground mt-4 italic">
               <span className="text-red bg-red">*</span>
                This track is in demo form and has not yet been professionally mixed or mastered.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Optional Playlist */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-light mb-4 tracking-wider">EXTENDED CONCEPT </h2>
          <div className="bg-background p-6 ">
            <h3 className="text-lg font-light mb-4">Tales of Sapphire - Complete Suite (Demo)</h3>
            <div className="w-full h-48 flex items-center justify-center text-muted-foreground">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2173802295%3Fsecret_token%3Ds-dfFZMgZHmlB&color=%230a0a0a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                className=""
              />

            </div>
            <p className="text-sm text-muted-foreground mt-4">
              A conceptual suite featuring extended compositions that showcase the full scope of the Sapphire narrative.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              <span className="text-muted-foreground">*</span> This track is in demo form and has not yet been professionally mixed or mastered.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-light mb-8 tracking-wider">CONTACT</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <a
                href="mailto:mifzalmusic@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                mifzalmusic@gmail.com
              </a>
            </div>


          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            For label consideration only. Please do not share this link.
          </p>
        </div>
      </footer>
    </div>
  )
}