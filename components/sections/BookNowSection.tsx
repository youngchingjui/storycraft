import PaymentLink from "@/components/PaymentLink";
import { Button } from "../ui/button";
import { Wand2 } from "lucide-react";

const BookNowSection = () => (
    <section id="book-now" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600">
          Start Your Child&apos;s Magical Journey Today
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl text-gray-700 text-center max-w-[700px]">
            Create a one-of-a-kind storybook that captures your child&apos;s world and imagination. The perfect bedtime story or gift awaits!
          </p>
          <PaymentLink>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Wand2 className="w-6 h-6 mr-2" />
              Create Your Personalized Story - $200
            </Button>
          </PaymentLink>
          <p className="text-sm text-gray-600">Secure payment powered by Stripe</p>
        </div>
      </div>
    </section>
  )

export default BookNowSection;
