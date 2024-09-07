"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import MagicalBook from "./MagicalBook"
import styles from "./HeroSection.module.css"

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={`container px-4 md:px-6 ${styles.heroContainer}`}>
      <div className={`grid ${styles.heroGrid} md:${styles.heroGridMd}`}>
        <div className={`flex flex-col items-center md:items-start space-y-4 text-center md:text-left ${styles.heroText} md:${styles.heroTextMd}`}>
          <div className="space-y-2">
            <h1 className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none ${styles.heroTitle}`}>
              Create Magical, Personalized Stories for Your Child
            </h1>
            <p className={`mx-auto md:mx-0 ${styles.heroDescription}`}>
              Turn your child's day into an enchanting tale with AI-powered storytelling. Customize characters, add real-life experiences, and create unforgettable memories.
            </p>
          </div>
          <div className="space-y-4">
            <Link href="https://buy.stripe.com/test_aEUg2m7OXbiq4Uw000" passHref>
              <Button className={styles.heroButton}>
                Create Your Personalized Story - $200
              </Button>
            </Link>
            <p className={styles.heroNote}>Bring your child's world to life in a custom storybook!</p>
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