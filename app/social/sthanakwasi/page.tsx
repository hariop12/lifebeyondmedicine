import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Sthanakwasi Sadri Women Organisation - Life Beyond Medicine",
  description: "Women's social service organization",
}

export default function SthanakwasiPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">Sthanakwasi Sadri Women Organisation</h1>
          <p className="text-white text-2xl">Community Service & Women's Welfare</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-[2.5rem] text-[#4a5d3c] mb-6">About Sthanakwasi Sadri Women Organisation</h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-6">
              Sthanakwasi Sadri Women Organisation, under the chairpersonship of Sjt. Surekha S. Punamiya, focuses on
              women's welfare, social service, and community development.
            </p>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Our organization is committed to creating positive change through dedicated service and community
              engagement.
            </p>

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
