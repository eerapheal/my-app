import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
const Home = () => {
  return (
    <div>
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Empowering Global Entrepreneurs</h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          We invest in people with great ideas and businesses around the world.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
          <Link href="/how-it-works">Learn How It Works</Link>
        </Button>
      </section>

      {/* Featured Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-600 mb-4">
                  Learn about our mission, values, and the team behind Global Investor Network.
                </p>
                <Link href="/about" className="text-blue-600 hover:text-blue-800 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                <p className="text-gray-600 mb-4">
                  Discover the advantages of partnering with us for your business growth.
                </p>
                <Link href="/benefits" className="text-blue-600 hover:text-blue-800 flex items-center">
                  Explore Benefits <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
                <p className="text-gray-600 mb-4">
                  Read about entrepreneurs who have thrived with our support and investment.
                </p>
                <Link href="/success-stories" className="text-blue-600 hover:text-blue-800 flex items-center">
                  View Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Turn Your Idea into Reality?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          We&#39;re excited to hear about your business idea or growth plans. Apply now and let&#39;s create something amazing
          together.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
          <Link href="/how-it-works">Start Your Journey</Link>
        </Button>
      </section>
    </div>
  )
}

export default Home;
