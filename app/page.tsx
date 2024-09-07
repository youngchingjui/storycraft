import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import BookNowSection from "@/components/sections/BookNowSection"
import Footer from "@/components/sections/Footer"
import "@/styles/globals.css"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <BookNowSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}
