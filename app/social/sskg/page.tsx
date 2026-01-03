import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "SSKG - Life Beyond Medicine",
  description: "SSKG social service initiative",
}

export default function SSKGPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">SSKG</h1>
          <p className="text-white text-2xl">Social Service & Community Outreach</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-[2.5rem] text-[#4a5d3c] mb-6">About SSKG</h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              SSKG is dedicated to social service and community outreach, working towards creating positive impact
              through various welfare initiatives and programs.
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
