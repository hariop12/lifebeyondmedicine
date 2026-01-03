"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop",
    title: "Welcome to Life Beyond Medicine",
    description: "Discover Natural Healing & Holistic Wellness",
    buttonText: "Book Consultation",
    buttonLink: "/contact",
  },
  {
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&h=900&fit=crop",
    title: "Embrace Holistic Living",
    description: "Transform Your Life Through Ancient Wisdom",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop",
    title: "Heal Naturally",
    description: "Your Journey to Complete Wellness Starts Here",
    buttonText: "Explore Services",
    buttonLink: "/#services",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-600 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover brightness-60"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white max-w-[800px] w-[90%]">
              <h1 className="text-white text-5xl mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-white text-2xl mb-8 drop-shadow-md">{slide.description}</p>
              <Link href={slide.buttonLink} className="btn btn-primary">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 text-white p-4 rounded-full hover:bg-white/50 transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 text-white p-4 rounded-full hover:bg-white/50 transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
