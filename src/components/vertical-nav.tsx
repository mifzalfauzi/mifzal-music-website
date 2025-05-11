import Link from "next/link"

export default function VerticalNav() {
  return (
    <nav className="fixed top-8 left-8 z-50 hidden md:block">
      <ul className="flex flex-col space-y-6 text-sm font-light">
        <li className="transform transition-all duration-300 hover:translate-x-4 hover:scale-110">
          <Link href="#home" className="text-white hover:text-white/80 transition-colors tracking-widest text-lg md:text-sm">
            INA&apos;S LOUNGE
          </Link>
        </li>
        {/* <li>
          <Link href="#merch" className="text-white hover:text-white/80 transition-colors tracking-widest">
            MERCH
          </Link>
        </li> */}
        <li className="transform transition-all duration-300 hover:translate-x-4 hover:scale-110">
          <Link href="#shows" className="text-white hover:text-white/80 transition-colors tracking-widest">
            SHOWS
          </Link>
        </li>
        <li className="transform transition-all duration-300 hover:translate-x-4 hover:scale-110">
          <Link href="#music" className="text-white hover:text-white/80 transition-colors tracking-widest">
            MUSIC
          </Link>
        </li>
        <li className="transform transition-all duration-300 hover:translate-x-4 hover:scale-110">
          <Link href="#band" className="text-white hover:text-white/80 transition-colors tracking-widest">
            MEMBERS
          </Link>
        </li>
        <li className="transform transition-all duration-300 hover:translate-x-4 hover:scale-110">
          <Link href="#newsletter" className="text-white hover:text-white/80 transition-colors tracking-widest">
            NEWSLETTER
          </Link>
        </li>
      </ul>
    </nav>
  )
}
