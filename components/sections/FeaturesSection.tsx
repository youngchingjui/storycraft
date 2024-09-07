import { Users, Clock, Camera, Sparkles, Gift, Palette } from "lucide-react"
import FeatureCard from "./FeatureCard"

const FeaturesSection = () => (
  <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-green-50">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600">
        Personalized Magic at Your Fingertips
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <FeatureCard
          icon={<Users className="h-12 w-12 mb-2 text-yellow-500" />}
          title="Custom Characters"
          description="Include your child, family, and friends as characters in the story."
        />
        <FeatureCard
          icon={<Clock className="h-12 w-12 mb-2 text-green-500" />}
          title="Daily Adventures"
          description="Transform your child's everyday experiences into exciting story elements."
        />
        <FeatureCard
          icon={<Camera className="h-12 w-12 mb-2 text-pink-500" />}
          title="Stylized Images"
          description="Add AI-generated illustrations featuring your child and their world."
        />
        <FeatureCard
          icon={<Sparkles className="h-12 w-12 mb-2 text-purple-500" />}
          title="Endless Creativity"
          description="Create any type of story you want, from fantasy to educational tales."
        />
        <FeatureCard
          icon={<Gift className="h-12 w-12 mb-2 text-red-500" />}
          title="Perfect Gift"
          description="Share personalized stories with friends and family as unique gifts."
        />
        <FeatureCard
          icon={<Palette className="h-12 w-12 mb-2 text-blue-500" />}
          title="Customizable Themes"
          description="Choose from various themes or create your own magical world."
        />
      </div>
    </div>
  </section>
)

export default FeaturesSection