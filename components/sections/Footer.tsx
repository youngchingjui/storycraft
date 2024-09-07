import Link from "next/link";

const Footer = () => (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white bg-opacity-80 backdrop-blur-sm">
      <p className="text-xs text-gray-600">© 2024 StoryCraft. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:text-indigo-600 transition-colors" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:text-indigo-600 transition-colors" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  )

export default Footer;