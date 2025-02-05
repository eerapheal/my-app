import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About Global Investor Network</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Mission</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-center mb-4">
                At Global Investor Network, we believe in the power of great ideas and the people behind them. Our
                mission is to empower visionary entrepreneurs worldwide, helping them turn their dreams into successful
                businesses.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Global Perspective",
                icon: Globe,
                description: "We embrace diversity and seek innovative ideas from all corners of the world.",
              },
              {
                title: "People-Centric Approach",
                icon: Users,
                description:
                  "We invest in people, not just businesses, fostering long-term relationships with entrepreneurs.",
              },
              {
                title: "Innovation",
                icon: Lightbulb,
                description: "We champion groundbreaking ideas that have the potential to transform industries.",
              },
              {
                title: "Sustainable Growth",
                icon: Target,
                description:
                  "We focus on long-term, sustainable business models that create value for all stakeholders.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <value.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "John Doe",
                position: "Founder & CEO",
                bio: "With over 20 years of experience in venture capital and entrepreneurship, John leads our global investment strategy.",
              },
              {
                name: "Jane Smith",
                position: "Chief Investment Officer",
                bio: "Jane brings her expertise in financial analysis and market trends to identify high-potential investment opportunities.",
              },
              {
                name: "Mike Johnson",
                position: "Head of Entrepreneur Relations",
                bio: "Mike works closely with our portfolio companies, providing mentorship and strategic guidance for their growth.",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

