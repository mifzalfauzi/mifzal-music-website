import { Button } from "@/components/ui/button"

const upcomingShows = [
  {
    date: "MAY 15, 2025",
    venue: "TBC",
    location: "TBC",
    ticketUrl: "#",
  },
  {
    date: "MAY 22, 2025",
    venue: "TBC",
    location: "TBC",
    ticketUrl: "#",
  },
  {
    date: "JUNE 5, 2025",
    venue: "TBC",
    location: "TBC",
    ticketUrl: "#",
  },
  {
    date: "JUNE 18, 2025",
    venue: "TBC",
    location: "TBC",
    ticketUrl: "#",
  },
]

export default function Shows() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light mb-12 text-center tracking-wider">SHOWS</h2>

      <div className="max-w-3xl mx-auto">
        {upcomingShows.map((show, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border"
          >
            <div className="mb-4 md:mb-0">
              <p className="text-sm font-medium tracking-wider">{show.date}</p>
              <h3 className="text-xl font-medium mt-1">{show.venue}</h3>
              <p className="text-muted-foreground">{show.location}</p>
            </div>

            {/* <Button asChild variant="outline" className="self-start">
              <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                TICKETS
              </a>
            </Button> */}
          </div>
        ))}
      </div>
    </div>
  )
}
