import Image from "next/image"

const bandMembers = [
  {
    name: "Faiqah Sorfina",
    instrument: "Vocals & Keys",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mifzal Aqil",
    instrument: "Guitar",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mifzal Faiq",
    instrument: "Drums",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Fauzi",
    instrument: "Bass",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function BandMembers() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light mb-12 text-center tracking-wider">THE BAND</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bandMembers.map((member) => (
          <div key={member.name} className="group">
            <div className="aspect-square relative overflow-hidden mb-4 shadow-md border border-border rounded-md">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-medium text-white">{member.name}</h3>
                <p className="text-white/80 text-sm">{member.instrument}</p>
              </div>
            </div>

            <h3 className="font-medium">{member.name}</h3>
            <p className="text-muted-foreground">{member.instrument}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
