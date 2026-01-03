import { ServiceLayout } from "@/components/service-layout"
import { Smile, Heart, Brain, Waves, HandHeart, Battery } from "lucide-react"

export const metadata = {
  title: "Smile Meditation - Life Beyond Medicine",
  description: "Transform your life through the power of inner smile and mindful meditation",
}

export default function MeditationPage() {
  return (
    <ServiceLayout
      title="Smile Meditation"
      subtitle="Transform Your Life Through Inner Smile"
      introImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
      introTitle="What is Smile Meditation?"
      introDescription={[
        'Smile Meditation is a powerful practice that combines the ancient Taoist "Inner Smile" technique with modern mindfulness meditation. By cultivating a gentle smile and directing loving energy to your organs and body systems, you activate profound healing and transformation.',
        "This practice helps you develop self-compassion, reduce stress, enhance emotional well-being, and create a deep sense of peace and contentment that radiates from within.",
      ]}
      benefits={[
        {
          icon: <Smile size={48} />,
          title: "Inner Joy",
          description: "Cultivate genuine happiness and contentment from within",
        },
        {
          icon: <Heart size={48} />,
          title: "Self-Love",
          description: "Develop compassion and loving-kindness towards yourself",
        },
        {
          icon: <Brain size={48} />,
          title: "Mental Clarity",
          description: "Clear mental fog and enhance focus and concentration",
        },
        {
          icon: <Waves size={48} />,
          title: "Deep Relaxation",
          description: "Release tension and achieve profound states of calm",
        },
        {
          icon: <HandHeart size={48} />,
          title: "Emotional Healing",
          description: "Process and release negative emotions with gentleness",
        },
        {
          icon: <Battery size={48} />,
          title: "Increased Energy",
          description: "Activate your body's natural vitality and healing power",
        },
      ]}
      treatments={[
        {
          icon: <Smile size={32} />,
          title: "Individual Sessions",
          description: "One-on-one guided meditation sessions tailored to your specific needs and goals.",
        },
        {
          icon: <Heart size={32} />,
          title: "Group Classes",
          description: "Weekly meditation circles where you practice together and share experiences in community.",
        },
        {
          icon: <Brain size={32} />,
          title: "Meditation Courses",
          description: "Comprehensive 8-week programs to establish a deep, sustainable meditation practice.",
        },
        {
          icon: <Waves size={32} />,
          title: "Evening Practices",
          description: "Special evening sessions for deep relaxation and preparation for restful sleep.",
        },
        {
          icon: <HandHeart size={32} />,
          title: "Retreats",
          description: "Immersive meditation retreats for deepening your practice in peaceful settings.",
        },
        {
          icon: <Battery size={32} />,
          title: "Online Guidance",
          description: "Virtual sessions and recorded meditations for practice anywhere, anytime.",
        },
      ]}
      conditions={[
        "Stress & Anxiety",
        "Depression",
        "Insomnia",
        "Chronic Pain",
        "High Blood Pressure",
        "PTSD & Trauma",
        "Anger Management",
        "Life Transitions",
      ]}
      ctaTitle="Begin Your Meditation Journey"
      ctaDescription="Discover inner peace and joy through the power of Smile Meditation"
    />
  )
}
