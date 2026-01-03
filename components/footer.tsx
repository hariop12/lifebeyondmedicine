import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#4a5d3c] text-white mt-16">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#d4a574] text-xl mb-4 font-serif">Life Beyond Medicine</h3>
            <p className="text-white">
              Holistic healing for body, mind, and spirit through ancient wisdom and natural therapies.
            </p>
          </div>

          <div>
            <h3 className="text-[#d4a574] text-xl mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-[#d4a574] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#d4a574] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#d4a574] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-[#d4a574] transition-colors">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#d4a574] text-xl mb-4 font-serif">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/naturopath" className="text-white hover:text-[#d4a574] transition-colors">
                  Naturopathy
                </Link>
              </li>
              <li>
                <Link href="/yoga" className="text-white hover:text-[#d4a574] transition-colors">
                  Yoga Therapy
                </Link>
              </li>
              <li>
                <Link href="/nutritionist" className="text-white hover:text-[#d4a574] transition-colors">
                  Nutrition
                </Link>
              </li>
              <li>
                <Link href="/holistic" className="text-white hover:text-[#d4a574] transition-colors">
                  Holistic Healing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#d4a574] text-xl mb-4 font-serif">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-[#d4a574] transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#d4a574] transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#d4a574] transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#d4a574] transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p>&copy; 2025 Life Beyond Medicine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
