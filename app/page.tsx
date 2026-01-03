import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Heart, ALargeSmall as BalanceScale, Sprout } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navbar activeLink="home" />

      <HeroCarousel />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[2.5rem] mb-8">Life Beyond Medicine</h2>
            <p className="text-lg leading-relaxed mb-6">
              In our modern world, we often seek quick fixes for our ailments. But true healing goes beyond conventional
              medicine. Life Beyond Medicine is about embracing a holistic approach to wellness - nurturing your body,
              mind, and spirit through ancient wisdom and natural healing practices.
            </p>
            <p className="text-lg leading-relaxed">
              Through Ayurveda, Yoga, Naturopathy, and various holistic therapies, we invite you to discover a path to
              complete wellness that addresses the root causes, not just the symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-16 bg-[#e8f0dc]" id="services">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-[3rem] text-[#7c9d5c] mb-4 flex justify-center">
                <Leaf size={48} />
              </div>
              <h3 className="text-[#4a5d3c] mb-4">Natural Healing</h3>
              <p className="text-[#666666]">
                Harness the power of nature's remedies. From herbs to whole foods, we believe in using natural elements
                to restore balance and vitality to your body.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-[3rem] text-[#7c9d5c] mb-4 flex justify-center">
                <Sprout size={48} />
              </div>
              <h3 className="text-[#4a5d3c] mb-4">Mind-Body Connection</h3>
              <p className="text-[#666666]">
                True wellness comes from harmony between mind and body. Through meditation, yoga, and mindfulness
                practices, we help you achieve inner peace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-[3rem] text-[#7c9d5c] mb-4 flex justify-center">
                <Heart size={48} />
              </div>
              <h3 className="text-[#4a5d3c] mb-4">Holistic Approach</h3>
              <p className="text-[#666666]">
                We don't just treat symptoms - we address the whole person. Our integrated approach considers your
                physical, emotional, and spiritual well-being.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-[3rem] text-[#7c9d5c] mb-4 flex justify-center">
                <BalanceScale size={48} />
              </div>
              <h3 className="text-[#4a5d3c] mb-4">Balance & Harmony</h3>
              <p className="text-[#666666]">
                Health is about balance. We help you find equilibrium in all aspects of life through personalized
                therapies and lifestyle guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title">Professional Services</h2>
          <p className="section-subtitle">Explore our range of holistic healing therapies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
                title: "Naturopath",
                description: "Natural healing through the power of nature's remedies and lifestyle modifications.",
                link: "/naturopath",
              },
              {
                image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop",
                title: "Yoga Therapist",
                description: "Therapeutic yoga practices tailored to your individual health needs and goals.",
                link: "/yoga",
              },
              {
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
                title: "Nutritionist",
                description: "Personalized nutrition plans based on Ayurvedic principles and modern science.",
                link: "/nutritionist",
              },
              {
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
                title: "Sujok Smile Healer",
                description: "Ancient Korean hand therapy for pain relief and healing with a smile.",
                link: "/sujok",
              },
              {
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
                title: "Smile Meditation",
                description: "Transform your life through the power of inner smile and mindful meditation.",
                link: "/meditation",
              },
              {
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=300&fit=crop",
                title: "Holistic Healer",
                description: "Comprehensive healing addressing body, mind, and spirit as an integrated whole.",
                link: "/holistic",
              },
              {
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
                title: "CPA Counselor",
                description: "Compassionate counseling for mental wellness and emotional healing.",
                link: "/counselor",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#f5f1e8] rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="relative h-[200px]">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#4a5d3c] mb-4">{service.title}</h3>
                  <p className="text-[#666666] mb-6">{service.description}</p>
                  <Link href={service.link} className="btn btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] text-center text-white">
        <div className="container">
          <h2 className="text-white text-[2.5rem] mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-white text-xl mb-8">Take the first step towards holistic wellness and natural healing</p>
          <Link href="/contact" className="btn btn-primary btn-large">
            Book Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
