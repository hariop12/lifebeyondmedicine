import { ServiceLayout } from "@/components/service-layout"
import { Scale, Zap, UtensilsCrossed, Shield, Smile, Heart } from "lucide-react"

export const metadata = {
  title: "Nutritionist - Life Beyond Medicine",
  description: "Personalized nutrition plans based on Ayurvedic principles and modern science",
}

export default function NutritionistPage() {
  return (
    <ServiceLayout
      title="Holistic Nutrition"
      subtitle="Food as Medicine for Optimal Health"
      introImage="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
      introTitle="Ayurvedic & Holistic Nutrition"
      introDescription={[
        "Our holistic nutrition approach combines ancient Ayurvedic wisdom with modern nutritional science to create personalized dietary plans that nourish your body, balance your constitution, and support optimal health.",
        "We believe that food is medicine, and the right dietary choices can prevent disease, enhance energy, and promote longevity. Let us guide you to discover the foods that heal and energize your unique body type.",
      ]}
      benefits={[
        {
          icon: <Scale size={48} />,
          title: "Healthy Weight",
          description: "Achieve and maintain your ideal weight naturally without restrictive dieting",
        },
        {
          icon: <Zap size={48} />,
          title: "Increased Energy",
          description: "Experience sustained energy throughout the day with proper nutrition",
        },
        {
          icon: <UtensilsCrossed size={48} />,
          title: "Better Digestion",
          description: "Improve gut health and eliminate digestive discomfort",
        },
        {
          icon: <Shield size={48} />,
          title: "Stronger Immunity",
          description: "Boost your immune system with nutrient-dense, healing foods",
        },
        {
          icon: <Smile size={48} />,
          title: "Glowing Skin",
          description: "Achieve clear, radiant skin from the inside out",
        },
        {
          icon: <Heart size={48} />,
          title: "Disease Prevention",
          description: "Reduce risk of chronic diseases through optimal nutrition",
        },
      ]}
      treatments={[
        {
          icon: <UtensilsCrossed size={32} />,
          title: "Personalized Meal Plans",
          description: "Customized nutrition plans based on your dosha, health goals, lifestyle, and food preferences.",
        },
        {
          icon: <Scale size={32} />,
          title: "Dosha Assessment",
          description:
            "Determine your Ayurvedic constitution (Vata, Pitta, Kapha) and learn which foods balance your dosha.",
        },
        {
          icon: <Shield size={32} />,
          title: "Detox Programs",
          description: "Gentle, supervised detoxification programs to cleanse and reset your digestive system.",
        },
        {
          icon: <Heart size={32} />,
          title: "Mindful Eating Coaching",
          description: "Learn to develop a healthy relationship with food and practice conscious eating habits.",
        },
        {
          icon: <Zap size={32} />,
          title: "Weight Management",
          description: "Sustainable, holistic approach to achieving and maintaining your healthy weight.",
        },
        {
          icon: <Smile size={32} />,
          title: "Supplement Guidance",
          description: "Personalized recommendations for herbs, vitamins, and supplements to support your health.",
        },
      ]}
      conditions={[
        "Weight Management",
        "Diabetes Management",
        "Heart Health",
        "Digestive Disorders",
        "Hormonal Balance",
        "Food Allergies",
        "Autoimmune Conditions",
        "Sports Nutrition",
      ]}
      ctaTitle="Transform Your Health Through Nutrition"
      ctaDescription="Start your journey to optimal wellness with personalized nutrition guidance"
    />
  )
}
