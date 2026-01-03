import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import type { ReactNode } from "react"

interface ServiceBenefit {
  icon: ReactNode
  title: string
  description: string
}

interface ServiceTreatment {
  icon: ReactNode
  title: string
  description: string
}

interface ServiceLayoutProps {
  title: string
  subtitle: string
  introImage: string
  introTitle: string
  introDescription: string[]
  benefits: ServiceBenefit[]
  treatments: ServiceTreatment[]
  conditions: string[]
  ctaTitle: string
  ctaDescription: string
}

export function ServiceLayout({
  title,
  subtitle,
  introImage,
  introTitle,
  introDescription,
  benefits,
  treatments,
  conditions,
  ctaTitle,
  ctaDescription,
}: ServiceLayoutProps) {
  return (
    <>
      <Navbar />

      {/* Service Hero */}
      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">{title}</h1>
          <p className="text-white text-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16">
        <div className="container">
          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px]">
              <Image
                src={introImage || "/placeholder.svg"}
                alt={introTitle}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-[2.5rem] mb-6">{introTitle}</h2>
              {introDescription.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
              <Link href="/contact" className="btn btn-primary">
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 p-12 bg-[#e8f0dc] rounded-lg">
            <h2 className="text-[2.5rem] text-center mb-12">Benefits of {title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-1 transition-all"
                >
                  <div className="text-[#c17c4b] text-5xl mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-[#4a5d3c] mb-4">{benefit.title}</h3>
                  <p className="text-[#666666]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Treatments Section */}
          <div className="mb-16">
            <h2 className="text-[2.5rem] text-center mb-12">Our {title} Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-[#f5f1e8] p-8 rounded-lg border-l-4 border-[#7c9d5c] hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="text-[#7c9d5c] text-4xl mb-4">{treatment.icon}</div>
                  <h3 className="text-[#4a5d3c] mb-4">{treatment.title}</h3>
                  <p className="text-[#666666]">{treatment.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions Section */}
          <div className="mb-16 p-12 bg-white rounded-lg shadow-md">
            <h2 className="text-[2.5rem] text-center mb-12">Conditions We Treat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-[#e8f0dc] rounded-lg">
                  <CheckCircle className="text-[#7c9d5c] flex-shrink-0" size={20} />
                  <span className="text-[#2c2c2c] text-lg">{condition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-12 bg-gradient-to-br from-[#c17c4b] to-[#6b4423] rounded-lg text-white">
            <h2 className="text-white text-[2.5rem] mb-4">{ctaTitle}</h2>
            <p className="text-white text-xl mb-8">{ctaDescription}</p>
            <Link href="/contact" className="btn btn-primary btn-large">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
