import StepCard from "./StepCard"

const HowItWorksSection = () => (
  <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-blue-50">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600">
        How It Works
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <StepCard
          number="1"
          title="Share Your Child's World"
          description="Tell us about your child's day, their friends, and favorite things."
        />
        <StepCard
          number="2"
          title="Customize Your Story"
          description="Choose themes, add characters, and select key story elements."
        />
        <StepCard
          number="3"
          title="AI Magic Happens"
          description="Our AI crafts a unique story and generates custom illustrations."
        />
        <StepCard
          number="4"
          title="Review and Refine"
          description="Preview your story and make any desired adjustments."
        />
        <StepCard
          number="5"
          title="Bring the Story to Life"
          description="Receive your beautifully crafted, personalized storybook."
        />
        <StepCard
          number="6"
          title="Share the Joy"
          description="Read the story with your child or gift it to loved ones."
        />
      </div>
    </div>
  </section>
)

export default HowItWorksSection