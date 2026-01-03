"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navbar({ activeLink = "home" }: { activeLink?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [professionalOpen, setProfessionalOpen] = useState(false)
  const [socialOpen, setSocialOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-[#7c9d5c] shadow-lg">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          <div className="nav-brand">
            <Link href="/" className="text-2xl font-bold text-white font-serif">
              Life Beyond Medicine
            </Link>
          </div>

          <button className="lg:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-auto bg-[#7c9d5c] lg:bg-transparent gap-0 lg:gap-8 items-start lg:items-center py-4 lg:py-0 transition-all`}
          >
            <li>
              <Link
                href="/"
                className={`block px-4 py-2 text-white hover:text-[#d4a574] transition-colors ${
                  activeLink === "home" ? "text-[#d4a574]" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block px-4 py-2 text-white hover:text-[#d4a574] transition-colors ${
                  activeLink === "about" ? "text-[#d4a574]" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setProfessionalOpen(true)}
              onMouseLeave={() => setProfessionalOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#d4a574] transition-colors">
                Professional Services <ChevronDown size={16} />
              </button>
              <ul
                className={`${
                  professionalOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                } lg:absolute relative lg:top-full left-0 lg:bg-white bg-black/10 lg:min-w-[220px] lg:rounded-md lg:shadow-lg transition-all duration-300 py-2`}
              >
                <li>
                  <Link
                    href="/naturopath"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Naturopath
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yoga"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Yoga Therapist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nutritionist"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Nutritionist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sujok"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Sujok Smile Healer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/meditation"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Smile Meditation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/holistic"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Holistic Healer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/counselor"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    CPA Counselor
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setSocialOpen(true)}
              onMouseLeave={() => setSocialOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#d4a574] transition-colors">
                Social Services <ChevronDown size={16} />
              </button>
              <ul
                className={`${
                  socialOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                } lg:absolute relative lg:top-full left-0 lg:bg-white bg-black/10 lg:min-w-[220px] lg:rounded-md lg:shadow-lg transition-all duration-300 py-2`}
              >
                <li>
                  <Link
                    href="/social/sparsh"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Sparsh Ek Ehsaas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social/jito"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    JITO Diagnostic Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social/rajasthani"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Rajasthani Ekta Women Organization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social/sthanakwasi"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    Sthanakwasi Sadri Women Organization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social/sskg"
                    className="block px-6 py-3 text-white lg:text-gray-800 hover:bg-[#e8f0dc] lg:hover:text-[#7c9d5c] transition-colors"
                  >
                    SSKG
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block px-4 py-2 text-white hover:text-[#d4a574] transition-colors ${
                  activeLink === "contact" ? "text-[#d4a574]" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={`block px-4 py-2 text-white hover:text-[#d4a574] transition-colors ${
                  activeLink === "faq" ? "text-[#d4a574]" : ""
                }`}
              >
                FAQ's
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
