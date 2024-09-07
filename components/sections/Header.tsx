import { BookOpen } from "lucide-react"
import Link from "next/link"

const Header = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center bg-white bg-opacity-80 backdrop-blur-sm">
    <Link className="flex items-center justify-center" href="#">
      <BookOpen className="h-6 w-6 mr-2 text-indigo-600" />
      <span className="font-bold text-2xl text-indigo-600 magic-font">StoryCraft</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#features">
        Features
      </Link>
      <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#how-it-works">
        How It Works
      </Link>
      <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#book-now">
        Book Now
      </Link>
    </nav>
  </header>
)

export default Header