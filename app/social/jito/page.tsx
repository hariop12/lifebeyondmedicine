import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "JITO Diagnostic Center - Life Beyond Medicine",
  description: "JITO community diagnostic services",
}

export default function JITOPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">JITO Diagnostic Center</h1>
          <p className="text-white text-2xl">Community Health & Diagnostic Services</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-[2.5rem] text-[#4a5d3c] mb-6">About JITO Diagnostic Center</h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              The JITO Diagnostic Center provides essential health screening and diagnostic services to the community,
              making healthcare more accessible and affordable for all.
            </p>

            <div className="text-center">
              <Link href="/contact" className="btn btn-primary btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
