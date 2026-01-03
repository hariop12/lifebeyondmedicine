import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Sparsh Ek Ehsaas - Life Beyond Medicine",
  description: "District 314 social service project",
}

export default function SparshPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">Sparsh Ek Ehsaas</h1>
          <p className="text-white text-2xl">District 314 Community Service Project</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-[2.5rem] text-[#4a5d3c] mb-6">About Sparsh Ek Ehsaas</h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-6">
              Sparsh Ek Ehsaas is a community service initiative under District 314, dedicated to making a positive
              impact in the lives of those in need through compassionate outreach and support services.
            </p>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Led by Sjt. Surekha S. Punamiya as Chairperson of JITO Goregaon Ladies Wing, this project embodies the
              spirit of giving and community service through various initiatives focused on health, education, and
              social welfare.
            </p>

            <div className="bg-[#e8f0dc] p-8 rounded-lg mb-8">
              <h3 className="text-xl text-[#4a5d3c] font-semibold mb-4">Our Mission</h3>
              <p className="text-[#666666]">
                To touch lives and create meaningful connections through compassionate service, bringing hope and
                healing to our community.
              </p>
            </div>

            <div className="text-center">
              <Link href="/contact" className="btn btn-primary btn-large">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
