import { ServiceLayout } from "@/components/service-layout"
import { User, Wind, Armchair, Brain, Heart, Moon } from "lucide-react"

export const metadata = {
  title: "Yoga Therapist - Life Beyond Medicine",
  description: "Therapeutic yoga practices tailored to your individual health needs and goals",
}

export default function YogaPage() {
  return (
    <ServiceLayout
      title="Yoga Therapy"
      subtitle="Unite Body, Mind, and Spirit Through Ancient Practice"
      introImage="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop"
      introTitle="What is Yoga Therapy?"
      introDescription={[
        "Yoga therapy is the therapeutic application of yoga practices to help individuals face health challenges at every level - physical, mental, emotional, and spiritual. It goes beyond general yoga classes to provide personalized sessions tailored to your specific needs and conditions.",
        "Our certified yoga therapists work with you one-on-one to design a customized practice that addresses your unique health goals and supports your healing journey.",
      ]}
      benefits={[
        {
          icon: <User size={48} />,
          title: "Increased Flexibility",
          description: "Gentle stretching and poses improve range of motion and reduce stiffness",
        },
        {
          icon: <Heart size={48} />,
          title: "Enhanced Strength",
          description: "Build muscle strength and endurance through targeted asanas",
        },
        {
          icon: <Wind size={48} />,
          title: "Better Breathing",
          description: "Pranayama techniques improve lung capacity and oxygen flow",
        },
        {
          icon: <Brain size={48} />,
          title: "Mental Clarity",
          description: "Meditation and mindfulness enhance focus and cognitive function",
        },
        {
          icon: <Armchair size={48} />,
          title: "Stress Relief",
          description: "Reduces cortisol levels and promotes deep relaxation",
        },
        {
          icon: <Moon size={48} />,
          title: "Improved Balance",
          description: "Enhances stability, coordination, and body awareness",
        },
      ]}
      treatments={[
        {
          icon: <User size={32} />,
          title: "Individual Sessions",
          description:
            "Personalized one-on-one sessions designed specifically for your health needs, limitations, and goals.",
        },
        {
          icon: <Wind size={32} />,
          title: "Pranayama (Breathwork)",
          description:
            "Specialized breathing techniques to enhance vitality, calm the mind, and improve respiratory function.",
        },
        {
          icon: <Armchair size={32} />,
          title: "Restorative Yoga",
          description: "Gentle, supported poses that promote deep relaxation and activate the body's healing response.",
        },
        {
          icon: <Brain size={32} />,
          title: "Meditation Practices",
          description: "Guided meditation techniques to cultivate inner peace, mindfulness, and emotional balance.",
        },
        {
          icon: <Heart size={32} />,
          title: "Therapeutic Asanas",
          description:
            "Modified yoga poses specifically designed to address chronic pain, injuries, and health conditions.",
        },
        {
          icon: <Moon size={32} />,
          title: "Yoga Nidra",
          description: "Deep relaxation technique that promotes healing sleep and reduces stress and anxiety.",
        },
      ]}
      conditions={[
        "Chronic Back Pain",
        "Arthritis & Joint Pain",
        "Anxiety & Depression",
        "Insomnia",
        "High Blood Pressure",
        "PTSD & Trauma",
        "Digestive Issues",
        "Respiratory Conditions",
      ]}
      ctaTitle="Begin Your Yoga Healing Journey"
      ctaDescription="Experience the transformative power of personalized yoga therapy"
    />
  )
}
