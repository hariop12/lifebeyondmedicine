import { ServiceLayout } from "@/components/service-layout"
import { Droplets, Leaf, Apple, Sun, Wind, Hand } from "lucide-react"

export const metadata = {
  title: "Naturopath - Life Beyond Medicine",
  description: "Natural healing through the power of nature's remedies and lifestyle modifications",
}

export default function NaturopathPage() {
  return (
    <ServiceLayout
      title="Naturopathy"
      subtitle="Healing Through the Power of Nature"
      introImage="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"
      introTitle="What is Naturopathy?"
      introDescription={[
        "Naturopathy is a holistic system of healing that uses natural therapies to help the body heal itself. It recognizes the body's inherent ability to maintain and restore health when given the proper support.",
        "Our naturopathic approach combines traditional healing wisdom with modern scientific understanding to address the root causes of illness rather than merely suppressing symptoms.",
      ]}
      benefits={[
        {
          icon: <Leaf size={48} />,
          title: "Natural Healing",
          description: "Uses natural remedies, herbs, and therapies to support the body's healing process",
        },
        {
          icon: <Sun size={48} />,
          title: "Root Cause Treatment",
          description: "Addresses underlying causes rather than just treating symptoms",
        },
        {
          icon: <Hand size={48} />,
          title: "No Side Effects",
          description: "Gentle, safe therapies with minimal to no adverse effects",
        },
        {
          icon: <Apple size={48} />,
          title: "Personalized Care",
          description: "Individualized treatment plans tailored to your unique needs",
        },
        {
          icon: <Wind size={48} />,
          title: "Preventive Health",
          description: "Focuses on prevention and building long-term wellness",
        },
        {
          icon: <Droplets size={48} />,
          title: "Holistic Approach",
          description: "Treats the whole person - body, mind, and spirit",
        },
      ]}
      treatments={[
        {
          icon: <Droplets size={32} />,
          title: "Hydrotherapy",
          description:
            "Therapeutic use of water in various forms and temperatures to stimulate healing, improve circulation, and detoxify the body.",
        },
        {
          icon: <Leaf size={32} />,
          title: "Herbal Medicine",
          description:
            "Plant-based remedies to support healing, boost immunity, and restore balance to bodily systems.",
        },
        {
          icon: <Apple size={32} />,
          title: "Dietary Counseling",
          description:
            "Personalized nutrition plans based on your constitution, health goals, and specific conditions.",
        },
        {
          icon: <Sun size={32} />,
          title: "Mud Therapy",
          description: "Application of medicinal mud to detoxify, reduce inflammation, and promote healing.",
        },
        {
          icon: <Wind size={32} />,
          title: "Fasting Therapy",
          description: "Supervised fasting programs to cleanse the body, reset metabolism, and promote healing.",
        },
        {
          icon: <Hand size={32} />,
          title: "Massage Therapy",
          description: "Therapeutic massage techniques to improve circulation, relieve tension, and support healing.",
        },
      ]}
      conditions={[
        "Digestive Disorders",
        "Chronic Pain",
        "Skin Conditions",
        "Respiratory Issues",
        "Hormonal Imbalances",
        "Stress & Anxiety",
        "Metabolic Disorders",
        "Autoimmune Conditions",
      ]}
      ctaTitle="Ready to Experience Natural Healing?"
      ctaDescription="Book your consultation today and start your journey to wellness"
    />
  )
}
