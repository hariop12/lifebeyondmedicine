import { ServiceLayout } from "@/components/service-layout"
import { Hand, Zap, Shield, DollarSign, Brain, Smile } from "lucide-react"

export const metadata = {
  title: "Sujok Smile Healer - Life Beyond Medicine",
  description: "Ancient Korean hand therapy for pain relief and healing with a smile",
}

export default function SujokPage() {
  return (
    <ServiceLayout
      title="Sujok Smile Healer"
      subtitle="Healing Through Your Hands with Joy"
      introImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
      introTitle="What is Sujok Smile Therapy?"
      introDescription={[
        'Sujok therapy is an ancient Korean healing art that uses the correspondence system found in your hands and feet. "Su" means hand and "Jok" means foot in Korean. This remarkable therapy allows you to treat various ailments by stimulating specific points on your hands and feet.',
        "Our Smile Healer approach combines traditional Sujok techniques with positive energy and joyful healing, making treatment not just effective but also uplifting and empowering.",
      ]}
      benefits={[
        {
          icon: <Hand size={48} />,
          title: "Simple & Accessible",
          description: "Easy-to-learn techniques you can use anywhere, anytime for self-healing",
        },
        {
          icon: <Zap size={48} />,
          title: "Quick Relief",
          description: "Often provides immediate pain relief and symptom reduction",
        },
        {
          icon: <Shield size={48} />,
          title: "Safe & Natural",
          description: "Non-invasive therapy with no side effects or contraindications",
        },
        {
          icon: <DollarSign size={48} />,
          title: "Cost-Effective",
          description: "Requires minimal equipment and can be self-administered",
        },
        {
          icon: <Brain size={48} />,
          title: "Holistic Healing",
          description: "Treats root causes and balances the body's energy systems",
        },
        {
          icon: <Smile size={48} />,
          title: "Joyful Experience",
          description: "Healing combined with positive energy and inner smile practice",
        },
      ]}
      treatments={[
        {
          icon: <Hand size={32} />,
          title: "Hand Reflexology",
          description: "Stimulation of correspondence points on hands to treat various organs and body parts.",
        },
        {
          icon: <Zap size={32} />,
          title: "Acupressure Points",
          description: "Precise pressure application on specific points for pain relief and energy balance.",
        },
        {
          icon: <Shield size={32} />,
          title: "Color Therapy",
          description: "Using colored markers or tapes on correspondence points to harness healing vibrations.",
        },
        {
          icon: <Brain size={32} />,
          title: "Magnet Therapy",
          description: "Strategic placement of magnets on hands to restore energy flow and reduce pain.",
        },
        {
          icon: <Smile size={32} />,
          title: "Seed Therapy",
          description: "Application of natural seeds on correspondence points for gentle, sustained healing.",
        },
        {
          icon: <DollarSign size={32} />,
          title: "Self-Healing Training",
          description: "Learn to treat yourself and your family with easy Sujok techniques.",
        },
      ]}
      conditions={[
        "Headaches & Migraines",
        "Joint & Muscle Pain",
        "Back & Neck Pain",
        "Digestive Problems",
        "Respiratory Issues",
        "Stress & Anxiety",
        "Insomnia",
        "Energy Imbalances",
      ]}
      ctaTitle="Experience Joyful Healing"
      ctaDescription="Discover the power of Sujok therapy with our Smile Healing approach"
    />
  )
}
