import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Rajasthani Ekta Women Organization - Life Beyond Medicine",
  description: "Women empowerment and community service",
}

export default function RajasthaniPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">Rajasthani Ekta Women Organization</h1>
          <p className="text-white text-2xl">Empowering Women, Strengthening Communities</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-[2.5rem] text-[#4a5d3c] mb-6">About Rajasthani Ekta Women Organization</h2>
            <p className="text-lg text-[#666666] leading-relaxed mb-6">
              Rajasthani Ekta Women Organization, led by Chairperson Sjt. Surekha S. Punamiya, is dedicated to women's
              empowerment, education, and community development.
            </p>
            <p className="text-lg text-[#666666] leading-relaxed mb-8">
              Through various initiatives and programs, we work towards creating opportunities for women to grow, learn,
              and contribute meaningfully to society.
            </p>

            <div className="text-center">
              <Link href="/contact" className="btn btn-primary btn-large">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
