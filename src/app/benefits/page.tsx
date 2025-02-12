import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Handshake, Globe, Users, BookOpen, Coins } from "lucide-react"

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6d1ea] to-pink-100 py-12">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">Benefits for Entrepreneurs</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">Why Choose Global Network For  Investors?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Growth Support",
                icon: TrendingUp,
                description: "Access to resources, mentorship, and networks to accelerate your business growth.",
              },
              {
                title: "Fair Profit Sharing",
                icon: Handshake,
                description: "Keep 70% of the profits while retaining full control of your business operations.",
              },
              {
                title: "Global Reach",
                icon: Globe,
                description: "Tap into our worldwide network of experts, partners, and potential customers.",
              },
              {
                title: "Personalized Guidance",
                icon: Users,
                description: "Receive tailored advice and support from experienced industry professionals.",
              },
              {
                title: "Knowledge Transfer",
                icon: BookOpen,
                description: "Gain insights and learn best practices from our team and other successful entrepreneurs.",
              },
              {
                title: "Financial Flexibility",
                icon: Coins,
                description: "Benefit from our unique investment model without giving up equity in your business.",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">Our Commitment to Your Success</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500">
                At Global Network For  Investors, we&#39;re not just investors – we&#39;re your partners in growth. Our commitment
                goes beyond financial support. We provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Ongoing mentorship and guidance from industry experts</li>
                <li>Access to our global network of business contacts and potential clients</li>
                <li>Regular workshops and training sessions to enhance your skills</li>
                <li>Marketing and PR support to boost your brand visibility</li>
                <li>Assistance with strategic planning and decision-making</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">Ready to Grow with Us?</h2>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-lg mb-4">
                If you have a great business idea or an existing business looking to expand, we want to hear from you.
                Join our network of successful entrepreneurs and take your venture to the next level.
              </p>
              <a
                href="/how-it-works"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn How to Apply
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

