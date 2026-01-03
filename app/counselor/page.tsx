import { ServiceLayout } from "@/components/service-layout"
import { MessageCircle, Lightbulb, Wrench, HeartCrack, Users, TrendingUp } from "lucide-react"

export const metadata = {
  title: "CPA Counselor - Life Beyond Medicine",
  description: "Compassionate counseling for mental wellness and emotional healing",
}

export default function CounselorPage() {
  return (
    <ServiceLayout
      title="CPA Counseling"
      subtitle="Compassionate Guidance for Mental & Emotional Wellness"
      introImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop"
      introTitle="Compassionate Professional Counseling"
      introDescription={[
        "Our CPA (Certified Professional Advisor) counseling services provide a safe, supportive space for you to explore your emotions, overcome challenges, and develop healthy coping strategies for life's difficulties.",
        "We combine evidence-based therapeutic techniques with holistic wellness principles to support your mental and emotional health. Whether you're dealing with anxiety, depression, relationship issues, or life transitions, we're here to walk alongside you on your healing journey.",
      ]}
      benefits={[
        {
          icon: <MessageCircle size={48} />,
          title: "Safe Space",
          description: "Confidential environment to express yourself without judgment",
        },
        {
          icon: <Lightbulb size={48} />,
          title: "Self-Awareness",
          description: "Gain deeper understanding of your thoughts, feelings, and behaviors",
        },
        {
          icon: <Wrench size={48} />,
          title: "Coping Skills",
          description: "Learn practical strategies to manage stress and challenges",
        },
        {
          icon: <HeartCrack size={48} />,
          title: "Emotional Healing",
          description: "Process past traumas and release emotional pain",
        },
        {
          icon: <Users size={48} />,
          title: "Better Relationships",
          description: "Improve communication and connection with others",
        },
        {
          icon: <TrendingUp size={48} />,
          title: "Personal Growth",
          description: "Develop resilience and reach your full potential",
        },
      ]}
      treatments={[
        {
          icon: <MessageCircle size={32} />,
          title: "Individual Counseling",
          description:
            "One-on-one sessions focused on your personal mental health, emotional wellness, and life goals.",
        },
        {
          icon: <Users size={32} />,
          title: "Couples Counseling",
          description: "Strengthen your relationship, improve communication, and resolve conflicts together.",
        },
        {
          icon: <Lightbulb size={32} />,
          title: "Family Therapy",
          description: "Address family dynamics, improve relationships, and create a harmonious home environment.",
        },
        {
          icon: <HeartCrack size={32} />,
          title: "Trauma Therapy",
          description: "Specialized support for processing and healing from traumatic experiences.",
        },
        {
          icon: <Wrench size={32} />,
          title: "Child & Adolescent",
          description: "Age-appropriate counseling for children and teens facing emotional or behavioral challenges.",
        },
        {
          icon: <TrendingUp size={32} />,
          title: "Career Counseling",
          description: "Navigate career transitions, workplace stress, and professional development.",
        },
      ]}
      conditions={[
        "Anxiety & Panic Attacks",
        "Depression & Mood Disorders",
        "Trauma & PTSD",
        "Relationship Issues",
        "Grief & Loss",
        "Stress Management",
        "Self-Esteem Issues",
        "Life Transitions",
      ]}
      ctaTitle="Take the First Step Toward Healing"
      ctaDescription="Reach out today for compassionate, professional counseling support"
    />
  )
}
