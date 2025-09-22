
"use client"

import { Calendar, Clock, Music } from "lucide-react"

const upcomingReleases = [
  {
    title: "Sapphire",
    type: "Single",
    expectedDate: "TBC",
    status: "In Production",
    description: "A cinematic, progressive guitar-driven track that blends atmospheric textures with melodic phrasing.",
    genre: "Ambient Rock",
    duration: "~4:10",
  },
  {
    title: "Tales of Sapphire",
    type: "Multi-track Single",
    expectedDate: "TBC",
    status: "In Production",
    description: "An instrumental progressive track blending cinematic textures, melodic guitar work, and neoclassical influences which exists together as a conceptual suite version that flows seamlessly from start to finish.",
    genre: "Progressive/Orchestral",
    duration: "~9:00",
    tracks: ["Sapphire", "Pieces of The Vague Ceremony", "Vita (Reimagined)"]
  },
 
]

const statusColors = {
  "In Production": "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20",
  "Writing": "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
  "Conceptual": "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
}

export default function UpcomingMusic() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light mb-12 text-center tracking-wider">UPCOMING RELEASES</h2>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {upcomingReleases.map((release, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
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
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              {release.description}
            </p>
            
            {release.tracks && (
              <div className="space-y-2">
                {release.tracks.map((track, trackIndex) => (
                  <div key={trackIndex} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="text-sm text-muted-foreground">
                      {String(trackIndex + 1).padStart(2, '0')}. {track}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            {index < upcomingReleases.length - 1 && (
              <div className="pt-6 border-b border-border"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-muted-foreground text-sm">
          Release dates are subject to change.
        </p>
      </div>
    </div>
  )
}