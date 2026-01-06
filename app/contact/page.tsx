"use client";

import type React from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    consultationType: "in-person",
    message: "",
    firstVisit: false,
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <Navbar activeLink="contact" />

      {/* Contact Hero */}
      <section className="bg-gradient-to-br from-[#7c9d5c] to-[#4a5d3c] py-20 text-center text-white">
        <div className="container">
          <h1 className="text-white text-5xl mb-4">Book Your Consultation</h1>
          <p className="text-white text-2xl">
            Begin your journey to holistic wellness today
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-[2rem] mb-4">Schedule an Appointment</h2>
              <p className="text-[#666666] mb-8">
                Fill out the form below and we'll get back to you within 24
                hours to confirm your consultation.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-[#2c2c2c] mb-2 font-semibold"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-[#2c2c2c] mb-2 font-semibold"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#2c2c2c] mb-2 font-semibold"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[#2c2c2c] mb-2 font-semibold"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-[#2c2c2c] mb-2 font-semibold"
                    >
                      Select Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                    >
                      <option value="">Choose a service...</option>
                      <option value="naturopath">Naturopathy</option>
                      <option value="yoga">Yoga Therapy</option>
                      <option value="nutritionist">Holistic Nutrition</option>
                      <option value="sujok">Sujok Smile Healing</option>
                      <option value="meditation">Smile Meditation</option>
                      <option value="holistic">Holistic Healing</option>
                      <option value="counselor">CPA Counseling</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-[#2c2c2c] mb-2 font-semibold"
                      >
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="time"
                        className="block text-[#2c2c2c] mb-2 font-semibold"
                      >
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                      >
                        <option value="">Select time...</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#2c2c2c] mb-2 font-semibold">
                      Consultation Type *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="consultationType"
                          value="in-person"
                          checked={formData.consultationType === "in-person"}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#7c9d5c]"
                        />
                        <span>In-Person</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="consultationType"
                          value="online"
                          checked={formData.consultationType === "online"}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#7c9d5c]"
                        />
                        <span>Online (Video Call)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#2c2c2c] mb-2 font-semibold"
                    >
                      Tell us about your health concerns *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your current health challenges and what you hope to achieve through our services..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c9d5c]"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="firstVisit"
                        checked={formData.firstVisit}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-[#7c9d5c]"
                      />
                      <span>This is my first visit</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="terms"
                        required
                        checked={formData.terms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-[#7c9d5c]"
                      />
                      <span>
                        I agree to the terms and conditions and privacy policy *
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Book Consultation
                  </button>
                </form>
              ) : (
                <div className="bg-[#e8f0dc] p-8 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#7c9d5c] rounded-full flex items-center justify-center">
                      <Check className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-[#4a5d3c] text-2xl mb-4">
                    Booking Submitted Successfully!
                  </h3>
                  <p className="text-[#666666]">
                    Thank you for choosing Life Beyond Medicine. We'll contact
                    you within 24 hours to confirm your appointment.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-[#4a5d3c] text-xl mb-6 font-semibold">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin
                      className="text-[#7c9d5c] flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="text-[#2c2c2c] font-semibold mb-1">
                        Visit Us
                      </h4>
                      <p className="text-[#666666]">
                        2/2 Ramji Residency Dream House Camp
                        <br />
                        Chandawarkar Road Borivali(west)
                        <br />
                        Mumbai , Maharastra - 400092
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-[#7c9d5c] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-[#2c2c2c] font-semibold mb-1">
                        Call Us
                      </h4>
                      <p className="text-[#666666]">
                        +91 9869422027
                        <br />
                        Mon-Fri: 9AM - 6PM
                        <br />
                        Sat: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-[#7c9d5c] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-[#2c2c2c] font-semibold mb-1">
                        Email Us
                      </h4>
                      <p className="text-[#666666]">
                        punamiyasurekha@gmail.com
                        <br />
                        support@lifebeyondmedicine.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-[#4a5d3c] text-xl mb-4 font-semibold">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Certified and experienced practitioners",
                    "Personalized treatment plans",
                    "Holistic approach to wellness",
                    "Natural, safe therapies",
                    "Comfortable, healing environment",
                    "Flexible appointment scheduling",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check
                        className="text-[#7c9d5c] flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-[#666666]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-[#4a5d3c] text-xl mb-4 font-semibold">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Initial Consultation",
                      desc: "Comprehensive health assessment and discussion of your concerns",
                    },
                    {
                      step: "2",
                      title: "Personalized Plan",
                      desc: "Custom treatment protocol designed for your unique needs",
                    },
                    {
                      step: "3",
                      title: "Ongoing Support",
                      desc: "Regular follow-ups and adjustments to ensure optimal results",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#7c9d5c] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-[#2c2c2c] font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#666666] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#e8f0dc]">
        <div className="container">
          <h2 className="text-[2.5rem] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How long is a typical consultation?",
                answer:
                  "Initial consultations usually last 60-90 minutes. Follow-up sessions are typically 45-60 minutes.",
              },
              {
                question: "Do you accept insurance?",
                answer:
                  "We provide receipts for insurance reimbursement. Please check with your provider about coverage for holistic therapies.",
              },
              {
                question: "What should I bring to my first visit?",
                answer:
                  "Please bring any relevant medical records, a list of current medications, and any questions you may have.",
              },
              {
                question: "Can I book for someone else?",
                answer:
                  "Yes, you can book on behalf of a family member. Please provide their information in the form.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-[#4a5d3c] text-lg font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#666666]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
