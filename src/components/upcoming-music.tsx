
"use client"

import { Calendar, Clock, Music } from "lucide-react"

const upcomingReleases = [
  {
    title: "Ethereal Nocturne",
    type: "Single",
    expectedDate: "Q1 2025",
    status: "In Production",
    description: "A haunting piano composition exploring the liminal space between dreams and reality.",
    genre: "Neo-Classical",
    duration: "~5:30",
  },
  {
    title: "Temporal Fragments",
    type: "EP",
    expectedDate: "Spring 2025",
    status: "Writing",
    description: "A collection of experimental pieces capturing fleeting moments in time.",
    genre: "Ambient/Classical",
    duration: "~18:00",
    tracks: ["Fragment I", "Fragment II", "Fragment III", "Fragment IV"]
  },
  {
    title: "Metamorphosis Suite",
    type: "Album",
    expectedDate: "Late 2025",
    status: "Conceptual",
    description: "An ambitious full-length work exploring themes of transformation and growth.",
    genre: "Contemporary Classical",
    duration: "~45:00",
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
      
      <div className="max-w-4xl mx-auto space-y-6">
        {upcomingReleases.map((release, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300 hover:border-foreground/20"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <Music className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 className="text-xl font-medium mb-1">{release.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-medium">{release.type}</span>
                      <span>•</span>
                      <span>{release.genre}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {release.description}
                </p>
                
                {/* {release.tracks && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2 text-muted-foreground">Track List:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {release.tracks.map((track, trackIndex) => (
                        <span key={trackIndex} className="text-sm text-muted-foreground">
                          {trackIndex + 1}. {track}
                        </span>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
              
              <div className="flex flex-col items-end gap-3 min-w-[200px]">
                <span 
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[release.status as keyof typeof statusColors] || ""}`}
                >
                  {release.status}
                </span>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{release.expectedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{release.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-muted-foreground text-sm">
          Release dates are subject to change. Follow for updates on new releases.
        </p>
      </div>
    </div>
  )
}