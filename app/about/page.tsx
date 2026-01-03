import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import {
  Heading as Seedling,
  HandHeart,
  BookOpen,
  Users,
  GraduationCap,
  Ban as Yang,
  Heart,
  Brain,
  Smile,
  Bird,
} from "lucide-react"

export const metadata = {
  title: "About Us - Life Beyond Medicine",
  description: "Learn about our mission, vision, and holistic approach to wellness",
}

export default function AboutPage() {
  return (
    <>
      <Navbar activeLink="about" />

      {/* About Hero */}
      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">About Life Beyond Medicine</h1>
          <p className="text-white text-2xl">Embracing Ancient Wisdom for Modern Wellness</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container">
          {/* Mission */}
          <div className="max-w-[900px] mx-auto mb-16 text-center">
            <h2 className="text-[2.5rem] mb-8">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              Life Beyond Medicine is dedicated to helping individuals discover the path to complete wellness through
              holistic healing practices. We believe that true health encompasses not just the absence of disease, but a
              state of complete physical, mental, and spiritual well-being.
            </p>
            <p className="text-lg leading-relaxed">
              Our approach integrates ancient wisdom with modern understanding, offering a comprehensive range of
              natural healing modalities that address the root causes of imbalance rather than merely treating symptoms.
            </p>
          </div>

          {/* Practitioner Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 p-12 bg-[#e8f0dc] rounded-lg">
            <div className="relative h-[500px]">
              <Image
                src="/images/screenshot-202026-01-03-20164839.png"
                alt="Sjt. Surekha S. Punamiya"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-[2.5rem] text-[#003366] mb-6">Sjt. Surekha S. Punamiya</h2>
              <p className="text-lg text-[#003366] mb-4 font-semibold">
                M. Pharm | N.D | DNYS | ADYS | Diploma in Jain Philosophy
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <span className="font-bold text-[#003366]">Profession:</span>
                  <span className="ml-2 text-[#666666]">Naturopath, Yoga Therapist, Nutritionist, CPA Counselor</span>
                </div>
                <div>
                  <span className="font-bold text-[#003366]">Specialization:</span>
                  <span className="ml-2 text-[#666666]">Sujok Smile Healer & Smile Meditation</span>
                </div>
                <div>
                  <span className="font-bold text-[#003366]">Role:</span>
                  <span className="ml-2 text-[#666666]">Chairperson – JITO Goregaon Ladies Wing</span>
                </div>
                <div>
                  <span className="font-bold text-[#003366]">Project:</span>
                  <span className="ml-2 text-[#666666]">Sparsh Ek Ehsaas (District 314)</span>
                </div>
                <div>
                  <span className="font-bold text-[#003366]">Email:</span>
                  <a href="mailto:punamiyasurekha@gmail.com" className="ml-2 text-[#7c9d5c] hover:text-[#4a5d3c]">
                    punamiyasurekha@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-bold text-[#003366]">Contact:</span>
                  <a href="tel:9869422027" className="ml-2 text-[#7c9d5c] hover:text-[#4a5d3c]">
                    9869422027
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#003366] mb-4">Social Work & Contributions</h3>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Volunteer – CHILDLINE India Foundation (CSA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Past President – Inner Wheel Club of Borivali (2010–11)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Volunteer – Toybank (Facilitator for Toy Library)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Proprietor – Smile Alternative Healing Centre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Volunteer – Arpan NGO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Workshop Facilitator – Anti-Smoking & Anti-Tobacco (CPA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Chairperson – Sthanakwasi Sadri Women Organisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span>Chairperson – SEWA IQ, Rajasthani Ekta Women Organisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c9d5c] mt-1">•</span>
                    <span className="font-bold">ISA Authorised</span>
                    <span> Sujok Smile Therapist & Teacher</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 p-12 bg-[#e8f0dc] rounded-lg">
            <div>
              <h2 className="text-[2.5rem] mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed mb-6">
                We envision a world where holistic wellness is accessible to all, where individuals are empowered to
                take charge of their health through natural means, and where the healing wisdom of ancient traditions is
                valued alongside modern medical advances.
              </p>
              <p className="text-lg leading-relaxed">
                Through education, compassionate care, and personalized healing protocols, we strive to create a
                community of individuals who live in harmony with nature and experience optimal vitality in all aspects
                of life.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
                alt="Holistic wellness"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-[2.5rem] text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Seedling size={48} />,
                  title: "Natural Healing",
                  description:
                    "We believe in the inherent healing power of nature and use natural remedies, herbs, and therapies to support the body's innate ability to heal itself.",
                },
                {
                  icon: <HandHeart size={48} />,
                  title: "Compassionate Care",
                  description:
                    "Every individual is unique, and we provide personalized, compassionate care that honors each person's journey to wellness.",
                },
                {
                  icon: <BookOpen size={48} />,
                  title: "Ancient Wisdom",
                  description:
                    "We draw upon thousands of years of healing traditions from Ayurveda, Yoga, Traditional Chinese Medicine, and other time-tested practices.",
                },
                {
                  icon: <Users size={48} />,
                  title: "Community",
                  description:
                    "We foster a supportive community where individuals can learn, grow, and heal together on their wellness journeys.",
                },
                {
                  icon: <GraduationCap size={48} />,
                  title: "Education",
                  description:
                    "We empower individuals through education, teaching them to understand their bodies and make informed choices about their health.",
                },
                {
                  icon: <Yang size={48} />,
                  title: "Balance",
                  description:
                    "We promote balance and harmony in all aspects of life - physical, mental, emotional, and spiritual.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-1 transition-all"
                >
                  <div className="text-[#c17c4b] mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-[#4a5d3c] mb-4">{value.title}</h3>
                  <p className="text-[#666666]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Holistic Approach */}
          <div className="mb-16 p-12 bg-[#f5f1e8] rounded-lg">
            <h2 className="text-[2.5rem] text-center mb-6">Our Holistic Approach</h2>
            <p className="text-center text-lg max-w-[800px] mx-auto mb-12">
              At Life Beyond Medicine, we understand that health is multifaceted. Our integrated approach addresses all
              dimensions of wellness:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Heart size={32} />,
                  title: "Physical Wellness",
                  description:
                    "Through naturopathy, nutrition, yoga therapy, and bodywork, we support optimal physical health and vitality.",
                },
                {
                  icon: <Brain size={32} />,
                  title: "Mental Clarity",
                  description:
                    "Meditation, counseling, and mindfulness practices help clear mental fog and enhance cognitive function.",
                },
                {
                  icon: <Smile size={32} />,
                  title: "Emotional Balance",
                  description:
                    "Our therapies address emotional well-being, helping you process emotions and find inner peace.",
                },
                {
                  icon: <Bird size={32} />,
                  title: "Spiritual Growth",
                  description:
                    "We support your spiritual journey through practices that connect you with your higher self and life purpose.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border-l-4 border-[#7c9d5c]">
                  <h3 className="flex items-center gap-2 text-[#4a5d3c] mb-4">
                    <span className="text-[#c17c4b]">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-[#666666]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] rounded-lg text-white">
            <h2 className="text-white text-[2.5rem] mb-4">Begin Your Wellness Journey Today</h2>
            <p className="text-white text-xl mb-8">Experience the transformative power of holistic healing</p>
            <Link href="/contact" className="btn btn-primary btn-large">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
