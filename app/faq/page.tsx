"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      {
        question: "What is holistic healing?",
        answer:
          "Holistic healing is an approach to wellness that considers the whole person - body, mind, emotions, and spirit. It focuses on treating the root causes of health issues rather than just symptoms, using natural therapies and lifestyle modifications.",
      },
      {
        question: "Are your treatments safe?",
        answer:
          "Yes, all our therapies are natural, non-invasive, and have minimal to no side effects. Our practitioners are certified professionals with extensive training in their respective modalities.",
      },
    ],
  },
  {
    category: "Appointments & Consultations",
    faqs: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book an appointment through our online booking form on the Contact page, by calling us during business hours, or by sending us an email. We'll confirm your appointment within 24 hours.",
      },
      {
        question: "How long is a typical session?",
        answer:
          "Initial consultations typically last 60-90 minutes, while follow-up sessions are usually 45-60 minutes. The duration may vary depending on the type of service you've chosen.",
      },
    ],
  },
  {
    category: "Payment & Insurance",
    faqs: [
      {
        question: "What are your payment options?",
        answer:
          "We accept cash, credit/debit cards, and digital payment methods. Payment is due at the time of service unless other arrangements have been made in advance.",
      },
      {
        question: "Do you accept insurance?",
        answer:
          "We provide detailed receipts that you can submit to your insurance company for possible reimbursement. Coverage varies by provider and plan, so please check with your insurance company about holistic therapy benefits.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Navbar activeLink="faq" />

      {/* FAQ Hero */}
      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-white text-2xl">Find answers to common questions about our services</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-[2rem] text-[#4a5d3c] mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems[key]

                  return (
                    <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#e8f0dc] transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-[#2c2c2c] pr-4">{faq.question}</h3>
                        <ChevronDown
                          className={`text-[#7c9d5c] flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          size={24}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-16 text-center p-12 bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] rounded-lg text-white">
            <h2 className="text-white text-[2.5rem] mb-4">Still Have Questions?</h2>
            <p className="text-white text-xl mb-8">We're here to help! Contact us for more information</p>
            <Link href="/contact" className="btn btn-primary btn-large">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
