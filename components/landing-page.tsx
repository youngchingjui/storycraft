'use client'

import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles, Clock, Palette, Wand2, Users, Gift, Camera } from "lucide-react"
import Link from "next/link"

const Header = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center bg-white bg-opacity-80 backdrop-blur-sm">
    <Link className="flex items-center justify-center" href="#">
      <BookOpen className="h-6 w-6 mr-2 text-indigo-600" />
      <span className="font-bold text-2xl text-indigo-600 magic-font">StoryAI</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#features">
        Features
      </Link>
      <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#how-it-works">
        How It Works
      </Link>
      <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#book-now">
        Book Now
      </Link>
    </nav>
  </header>
)

const MagicalBook = () => (
  <div className="relative w-full h-64 md:h-96 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="sparkleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      
      {/* Book */}
      <g className="book" transform="translate(50 50)">
        <path d="M-20,-15 L20,-15 A5,5 0 0,1 20,-10 L20,15 A5,5 0 0,1 15,20 L-15,20 A5,5 0 0,1 -20,15 Z" fill="#4F46E5" />
        <path d="M-18,-13 L18,-13 L18,13 L-18,13 Z" fill="#818CF8" />
        <path d="M-16,-11 L16,-11 L16,11 L-16,11 Z" fill="#C7D2FE" />
      </g>
      
      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <circle key={i} className={`sparkle sparkle-${i + 1}`} r="1" fill="url(#sparkleGradient)">
          <animateMotion
            dur={`${2 + Math.random() * 3}s`}
            repeatCount="indefinite"
            path={`M${Math.random() * 100} ${Math.random() * 100} q ${-50 + Math.random() * 100} ${-50 + Math.random() * 100} ${-50 + Math.random() * 100} ${-50 + Math.random() * 100}`}
          />
        </circle>
      ))}
    </svg>
  </div>
)

const HeroSection = () => (
  <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
    <div className="container px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
              Create Magical, Personalized Stories for Your Child
            </h1>
            <p className="mx-auto md:mx-0 max-w-[700px] text-gray-700 md:text-xl">
              Turn your child's day into an enchanting tale with AI-powered storytelling. Customize characters, add real-life experiences, and create unforgettable memories.
            </p>
          </div>
          <div className="space-y-4">
            <Link href="https://buy.stripe.com/test_aEUg2m7OXbiq4Uw000" passHref>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Create Your Personalized Story - $200
              </Button>
            </Link>
            <p className="text-sm text-gray-600">Bring your child's world to life in a custom storybook!</p>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-full">
          <MagicalBook />
        </div>
      </div>
    </div>
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
      }
      .book {
        animation: float 6s ease-in-out infinite;
      }
      .sparkle {
        animation: sparkle 2s ease-in-out infinite;
      }
      .sparkle-1 { animation-delay: 0s; }
      .sparkle-2 { animation-delay: 0.2s; }
      .sparkle-3 { animation-delay: 0.4s; }
      .sparkle-4 { animation-delay: 0.6s; }
      .sparkle-5 { animation-delay: 0.8s; }
    `}</style>
  </section>
)

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

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
    {icon}
    <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
)

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

const StepCard = ({ number, title, description }) => (
  <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-lg">
    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
      {number}
    </div>
    <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
)

const BookNowSection = () => (
  <section id="book-now" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-purple-50">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600">
        Start Your Child's Magical Journey Today
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-xl text-gray-700 text-center max-w-[700px]">
          Create a one-of-a-kind storybook that captures your child's world and imagination. The perfect bedtime story or gift awaits!
        </p>
        <Link href="https://buy.stripe.com/test_aEUg2m7OXbiq4Uw000" passHref>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Wand2 className="w-6 h-6 mr-2" />
            Create Your Personalized Story - $200
          </Button>
        </Link>
        <p className="text-sm text-gray-600">Secure payment powered by Stripe</p>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white bg-opacity-80 backdrop-blur-sm">
    <p className="text-xs text-gray-600">© 2023 StoryAI. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link className="text-xs hover:text-indigo-600 transition-colors" href="#">
        Terms of Service
      </Link>
      <Link className="text-xs hover:text-indigo-600 transition-colors" href="#">
        Privacy
      </Link>
    </nav>
  </footer>
)

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
        
        h1, h2, h3, .magic-font {
          font-family: 'Quicksand', sans-serif;
        }
      `}</style>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BookNowSection />
      </main>
      <Footer />
    </div>
  )
}