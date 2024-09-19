"use client"

import { Button } from "@/components/ui/button"
import PaymentLink from "@/components/PaymentLink"
import MagicalBook from "./MagicalBook"

const HeroSection = () => (
  <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
    <div className="container px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
              Create Magical, Personalized Stories for Your Child
            </h1>
            <p className="mx-auto md:mx-0 max-w-[700px] text-gray-700 md:text-xl">
              Turn your child&apos;s day into an enchanting tale with AI-powered storytelling. Customize characters, add real-life experiences, and create unforgettable memories.
            </p>
          </div>
          <div className="space-y-4">
            <PaymentLink>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Create Your Personalized Story - $500
              </Button>
            </PaymentLink>
            <p className="text-sm text-gray-600">Bring your child&apos;s world to life in a custom storybook!</p>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-full">
          <MagicalBook />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection