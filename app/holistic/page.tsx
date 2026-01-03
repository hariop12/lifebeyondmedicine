import { ServiceLayout } from "@/components/service-layout"
import { Fingerprint, Search, Puzzle, Users, Leaf, Infinity } from "lucide-react"

export const metadata = {
  title: "Holistic Healer - Life Beyond Medicine",
  description: "Comprehensive healing addressing body, mind, and spirit as an integrated whole",
}

export default function HolisticPage() {
  return (
    <ServiceLayout
      title="Holistic Healing"
      subtitle="Complete Wellness for Body, Mind & Spirit"
      introImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop"
      introTitle="What is Holistic Healing?"
      introDescription={[
        "Holistic healing is a comprehensive approach to wellness that considers the whole person - body, mind, emotions, and spirit. Rather than treating isolated symptoms, we address the interconnected systems that make up your complete being.",
        "Our integrative approach combines multiple healing modalities including energy work, bodywork, nutritional guidance, emotional release techniques, and spiritual practices to support your complete transformation and optimal well-being.",
      ]}
      benefits={[
        {
          icon: <Fingerprint size={48} />,
          title: "Complete Balance",
          description: "Addresses all aspects of your being for true, lasting wellness",
        },
        {
          icon: <Search size={48} />,
          title: "Root Cause Focus",
          description: "Uncovers and heals underlying imbalances, not just symptoms",
        },
        {
          icon: <Puzzle size={48} />,
          title: "Integrative Care",
          description: "Combines best practices from multiple healing traditions",
        },
        {
          icon: <Users size={48} />,
          title: "Personalized Approach",
          description: "Customized healing plans designed uniquely for you",
        },
        {
          icon: <Leaf size={48} />,
          title: "Natural Methods",
          description: "Supports your body's innate healing abilities naturally",
        },
        {
          icon: <Infinity size={48} />,
          title: "Lasting Results",
          description: "Creates sustainable wellness and prevents future imbalances",
        },
      ]}
      treatments={[
        {
          icon: <Fingerprint size={32} />,
          title: "Energy Healing",
          description: "Reiki, pranic healing, and chakra balancing to restore your energetic flow and vitality.",
        },
        {
          icon: <Search size={32} />,
          title: "Bodywork Therapies",
          description: "Therapeutic massage, acupressure, and reflexology for physical healing and relaxation.",
        },
        {
          icon: <Puzzle size={32} />,
          title: "Emotional Release",
          description: "Techniques to process and release trapped emotions and traumas stored in the body.",
        },
        {
          icon: <Users size={32} />,
          title: "Nutritional Healing",
          description: "Personalized dietary guidance to nourish and heal your body from within.",
        },
        {
          icon: <Leaf size={32} />,
          title: "Breathwork",
          description: "Transformative breathing practices to release blockages and increase life force energy.",
        },
        {
          icon: <Infinity size={32} />,
          title: "Spiritual Guidance",
          description: "Support for your spiritual journey and connection to higher consciousness.",
        },
      ]}
      conditions={[
        "Chronic Illnesses",
        "Emotional Trauma",
        "Energy Imbalances",
        "Life Transitions",
        "Spiritual Crisis",
        "Unexplained Symptoms",
        "Relationship Issues",
        "Life Purpose Questions",
      ]}
      ctaTitle="Experience Complete Holistic Healing"
      ctaDescription="Transform your life through integrated mind-body-spirit wellness"
    />
  )
}
