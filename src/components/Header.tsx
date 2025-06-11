'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-black bg-opacity-80 sticky top-0 z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
        <h1 className="text-neonPink font-retro text-2xl tracking-widest drop-shadow-[0_0_6px_#ff00ff]">
          DJ Side Steppa
        </h1>
        </Link>
        <nav>
          <ul className="flex space-x-6 text-white font-retro text-sm md:text-base">
            <li>
              <Link
                href="/about"
                className="hover:text-neonPink transition-all duration-200 hover:drop-shadow-[0_0_5px_#ff00ff]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/book"
                className="hover:text-neonBlue transition-all duration-200 hover:drop-shadow-[0_0_5px_#00ffff]"
              >
                Book
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-neonYellow transition-all duration-200 hover:drop-shadow-[0_0_5px_#ffff00]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
