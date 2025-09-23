"use client"

import { Mail, Music, Instagram, ExternalLink, Youtube, Copy, Check, Download } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const upcomingReleases = [

  {
    title: "Tales of Sapphire",
    type: "Multi-track Single",
    expectedDate: "TBC",
    status: "In Production",
    description: "An instrumental progressive track blending cinematic textures, melodic guitar work, and neoclassical influences which exists together as a conceptual suite version that flows seamlessly from start to finish.",
    genre: "Progressive/Orchestral",
    duration: "~9:00",
    tracks: ["Pieces of The Vague Ceremony", "Sapphire", "Vita (Reimagined)"],
    individualDuration: ["0:00 - 1:47", "1:48 - 5:47", "5:48 - 8:32"]
  },

]

const statusColors = {
  "In Production": "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20",
  "Writing": "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
  "Conceptual": "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function EPK() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError(''); // Clear any previous validation errors
    setShowModal(true); // open confirmation modal
  };
  
  const confirmSubmit = async () => {
    setIsSubmitting(true);
    setValidationError('');
    try {
      const response = await fetch('http://localhost:8000/contact/epk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setShowModal(false);
        setIsSubmitting(false);
      } else if (response.status === 422) {
        // Validation error
        const errorData = await response.json();
        setValidationError(errorData.detail || 'Please check your input and try again.');
        setShowModal(false);
        setIsSubmitting(false);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('API error:', err);
      if (!validationError) {
        setError(true);
        setShowModal(false);
      }
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-light mb-6 tracking-wider text-green-500">MESSAGE SENT!</h2>
          <p className="text-muted-foreground">Thank you for reaching out. </p>
          <p className="text-muted-foreground mb-8">A copy will be sent to your email inbox by a few moments.</p>
          <button
            onClick={() => setSuccess(false)}
            className="cursor-pointer bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors border border-black"
          >
            Go Back to EPK
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-light mb-6 tracking-wider text-red-500">MESSAGE FAILED</h2>
          <p className="text-muted-foreground mb-8">Something went wrong. Please try again or contact me directly at mifzalmusic@gmail.com</p>
          <button
            onClick={() => setError(false)}
            className="cursor-pointer bg-white text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors border border-black"
          >
            Go Back to EPK
          </button>
        </div>
      </div>
    );
  }

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
              <p className="text-lg md:text-md text-muted-foreground font-light mb-4">Electronic Press Kit</p>
              <h1 className="text-3xl md:text-7xl font-light mb-6 tracking-wider">MIFZAL</h1>
              <p className="text-lg md:text-2xl text-muted-foreground font-light mb-4">
                Cinematic Progressive Composer
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://www.mifzal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-muted-foreground hover:text-white/80 transition-colors"
                >
                  <span>www.mifzal.co</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => window.print()}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-white/80 transition-colors cursor-pointer"
                  title="Download EPK as PDF"
                >
                  <span>Download EPK</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-center md:justify-start gap-6 pt-6">

                <a
                  href="https://instagram.com/mifzalv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  {/* <span>Instagram</span> */}
                </a>
                <a
                  href="https://open.spotify.com/artist/3HqfM3Xk0a0J6xZJvjQfkj?si=otfwPuotR9ie9llUoMyOxw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
                  aria-label="Spotify"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  {/* <span>Spotify</span> */}
                </a>
                <a
                  href="https://youtube.com/@mifzals"
                  className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors"
                  aria-label="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5" />
                  {/* <span>Instagram</span> */}
                </a>
                <a
                  href="https://mifzal.bandcamp.com/"
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
      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-8 tracking-wider">ARTIST OVERVIEW</h2>
          <p className="space-y-6 leading-relaxed text-muted-foreground text-sm md:text-base">
            Mifzal, 23, is an emerging composer from Malaysia, crafting cinematic progressive music that blends atmospheric textures with melodic guitar-driven and orchestral compositions. His work explores the intersection of ambient soundscapes and intricate progressive arrangements, creating immersive musical narratives.
          </p>
        </div>
      </section>

      {/* Longer Bio */}
      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-8 tracking-wider">MUSICAL VISION</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              Mifzal creates music that transcends traditional genre boundaries, by weaving melodic guitar techniques with cinematic orchestrations to craft atmospheric and emotionally resonant pieces.

            </p>
            <p>
              The pinnacle of his artistic vision is "Sapphire", a musical exploration of cinematic melodies, orchestral arrangements and atmospherical textures. "Tales of Sapphire" represents this vision in its fullest form: a multi-movement suite that flows seamlessly from intimate guitar passages to sweeping orchestral arrangements, telling a complete narrative through instrumental composition alone.
            </p>
            <p>
              Through this conceptual framework, Mifzal aims to create music that serves as both technical showcase and emotional journey, inviting listeners into carefully crafted sounds with each listen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-8 tracking-wider">FOR FANS OF</h2>
          <p className="space-y-6 leading-relaxed text-muted-foreground text-sm md:text-base">
            David Maxim Micic, Plini, Ludovico Einaudi, Ludwig Göransson, and Aaron Hibell.
          </p>
        </div>
      </section>



      {/* Music Embed */}
      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-4 tracking-wider">FEATURED TRACK</h2>
          <div className="space-y-6">
            <div className="bg-background p-6 ">
              <h3 className="text-base md:text-xl font-light mb-4">Sapphire (Demo)</h3>

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

              <p className="text-sm md:text-base text-muted-foreground mt-6">
                <strong>"Sapphire"</strong> is a cinematic, progressive guitar-driven track that blends atmospheric textures with melodic phrasing. The piece explores the emotional depth of natural imagery through intricate guitar layers, subtle percussion, and evolving harmonies.

              </p>

              <p className="text-sm md:text-base text-muted-foreground mt-4">
                This track is the centerpiece of a larger conceptual suite, <strong>"Tales of Sapphire"</strong>, with supporting movements that extend the narrative into a full journey.
              </p>

              <p className="text-sm md:text-base text-muted-foreground mt-4 italic">
                <span className="text-red-500 font-bold">* </span>
                This track is in demo form and has not yet been professionally mixed or mastered.
              </p>

            </div>
          </div>
        </div>
      </section>



      {/* Optional Playlist */}
      {/* Optional Playlist */}
      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-4 tracking-wider">EXTENDED CONCEPT</h2>
          <div className="bg-background p-6">
            <h3 className="text-base md:text-lg font-light mb-4">Tales of Sapphire - Complete Suite (Demo)</h3>
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
            <p className="text-sm md:text-base text-muted-foreground mt-4">
              This conceptual suite includes the main single <strong>"Sapphire"</strong> and supporting movements
              <strong> "Pieces of The Vague Ceremony"</strong> and <strong>"Vita"</strong>, which extend the narrative
              into a full immersive journey.
            </p>

            {upcomingReleases.map((release, index) => (
              <div key={index} className="space-y-4">
                {/* <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-light tracking-wide">{release.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                      <span>{release.type}</span>
                      <span>•</span>
                      <span>{release.genre}</span>
                      <span>•</span>
                      <span>{release.expectedDate}</span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[release.status as keyof typeof statusColors] || ""}`}
                  >
                    {release.status}
                  </span>
                </div> */}

                {/* <p className="text-muted-foreground text-sm leading-relaxed">
                  {release.description}
                </p> */}

                {release.tracks && (
                  <div className="space-y-2 mt-4">
                    {release.tracks.map((track, trackIndex) => (
                      <div key={trackIndex} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-sm text-muted-foreground">
                          {String(trackIndex + 1).padStart(2, '0')}. {track}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {release.individualDuration[trackIndex]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-sm text-muted-foreground mt-4 italic">
                  <span className="text-red-500 font-bold">* </span>
                  This track is in demo form and has not yet been professionally mixed or mastered.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-8 tracking-wider">RELEASED TRACKS</h2>
          <p className="leading-relaxed text-muted-foreground text-sm md:text-base">
  For previously released tracks and full discography, visit the Music section at{' '}
  <a
    href="https://mifzal.co"
    className="text-sm md:text-base text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
  >
    mifzal.co
    <ExternalLink className="w-4 h-4 inline-block" />
  </a>
  .
</p>


        </div>
      </section>

      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-8 tracking-wider">PRESS PHOTOS</h2>
          <p className="space-y-6 leading-relaxed text-muted-foreground text-sm md:text-base">
            Coming soon.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 px-4 ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-lg md:text-2xl font-light mb-8 tracking-wider">CONTACT</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm md:text-sm"> Click email to send or copy.</p>
            <div className="flex items-center gap-3 text-md">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
             
              <a
                href="mailto:mifzalmusic@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
              >
                mifzalmusic@gmail.com
              </a>
              <button
                onClick={() => copyToClipboard('mifzalmusic@gmail.com')}
                className={`transition-colors text-sm md:text-base cursor-pointer ${
                  copied 
                    ? 'text-green-500' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="my-8">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-border flex-1"></div>
                <span className="text-muted-foreground text-sm">OR</span>
                <div className="h-px bg-border flex-1"></div>
              </div>
            </div>

            <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-3xl mx-auto gap-4"
      >
        <p className="text-muted-foreground text-sm">Fill in the form directly.</p>
        {validationError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3">
            <p className="text-red-700 text-sm">{validationError}</p>
          </div>
        )}
        <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        required
        className="border rounded px-3 py-2"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        required
        className="border rounded px-3 py-2"
      />
      <textarea
        placeholder="Your Message (minimum 10 characters)"
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        required
        className="border rounded px-3 py-2"
        minLength={10}
      />
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer transition-colors border border-black"
        >
          Send
        </button>
        <p className="text-muted-foreground text-sm mx-auto">Secure contact form</p>
      </form>

          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-8 px-4 border-t border-border ml-2 mr-2 md:ml-0 md:mr-0">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            For label consideration only. Please do not share this link.
          </p>
        </div>
      </footer>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black text-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-light mb-4">Confirm Your Message</h3>
            <div className="space-y-3 text-sm text-left">
              <div>
                <p className="text-muted-foreground text-md">Name</p>
                <input
                  type="text"
                  value={formData.name}
                  readOnly
                  className="mt-1 p-2 bg-black rounded text-md w-full cursor-not-allowed"
                />
              </div>

              <div>
                <p className="text-muted-foreground text-md">Email</p>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="mt-1 p-2 bg-black rounded text-md w-full cursor-not-allowed"
                />
              </div>

              <div>
                <p className="text-muted-foreground text-md">Message</p>
                <textarea
                  value={formData.message}
                  readOnly
                  className="mt-1 p-2 bg-black rounded text-md w-full h-32 resize-none cursor-not-allowed overflow-y-auto"
                />
              </div>
            </div>
            <div className="flex gap-3">
             
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}