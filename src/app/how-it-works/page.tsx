import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, PiggyBank, BarChart } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6d1ea] to-pink-100 py-12">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">How It Works</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">Our Investment Process</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Apply",
                icon: CheckCircle,
                description: "Submit your business idea or existing business for consideration.",
              },
              {
                title: "Evaluate",
                icon: Users,
                description: "Our team reviews your application and assesses the potential of your idea or business.",
              },
              {
                title: "Invest",
                icon: PiggyBank,
                description: "If approved, we provide the necessary funding and support to help you succeed.",
              },
              {
                title: "Grow",
                icon: TrendingUp,
                description: "We work together to grow your business and achieve your goals.",
              },
            ].map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <step.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">Profit Sharing Model</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-6">
                <BarChart className="w-16 h-16 text-blue-600" />
              </div>
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 text-center mb-4">
                After 3 years of setup and operation, we implement our unique profit-sharing model:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">70%</h3>
                  <p className="text-gray-700">Goes to the entrepreneur running the day-to-day operations</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-green-800">30%</h3>
                  <p className="text-gray-700">Goes to our investment fund</p>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600">
                This model ensures that you retain the majority of your profits while we continue to support your
                growth.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "What types of businesses do you invest in?",
                answer:
                  "We invest in a wide range of businesses across various industries, focusing on innovative ideas with global potential.",
              },
              {
                question: "How much funding can I receive?",
                answer:
                  "Funding amounts vary based on the needs and potential of each business. We typically invest between $50,000 and $500,000.",
              },
              {
                question: "Do you take equity in the business?",
                answer:
                  "No, we don't take equity. Our profit-sharing model allows you to retain full ownership of your business.",
              },
              {
                question: "What kind of support do you provide besides funding?",
                answer:
                  "We offer mentorship, networking opportunities, and access to our global network of experts and resources.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 font-semibold text-xl hover:bg-blue-700 text-white">
            <Link href="/apply"> Apply for Investment</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

