import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6d1ea] to-pink-100 py-12">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About Global Network For  Investors</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Mission</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm md:text-xl text-[#8a50df] text-center mb-4 font-semibold">
                At Global Network For  Investors, we believe in the power of great ideas and the people behind them.
                Our mission is to empower visionary entrepreneurs worldwide, helping them turn their dreams into successful businesses.
                We provide the necessary funding, resources, and mentorship to support long-term growth and sustainability.
                Unlike traditional investment models, we prioritize the success of our partners by ensuring they have ample time to establish and scale their businesses.
                As part of our commitment to fairness and transparency, we take only 30% of the profit from the investment,
                and this profit-sharing model begins only after three years of business establishment.
                This allows entrepreneurs to focus on growth without immediate financial pressure,
                fostering innovation and stability in their ventures. Our goal is to create a thriving ecosystem where businesses can flourish,
                driving economic progress and creating lasting impact.
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
                description:
                  "We embrace diversity and seek innovative ideas from all corners of the world. Our global mindset allows us to identify emerging trends and opportunities, ensuring that we stay ahead in an ever-evolving market.",
              },
              {
                title: "People-Centric Approach",
                icon: Users,
                description:
                  "We invest in people, not just businesses, fostering long-term relationships with entrepreneurs. By prioritizing human connections, we empower individuals and teams to reach their full potential and drive meaningful change.",
              },
              {
                title: "Innovation",
                icon: Lightbulb,
                description:
                  "We champion groundbreaking ideas that have the potential to transform industries. Creativity and forward-thinking solutions are at the core of everything we do, enabling us to develop unique strategies for success.",
              },
              {
                title: "Sustainable Growth",
                icon: Target,
                description:
                  "We focus on long-term, sustainable business models that create value for all stakeholders. Our commitment to responsible growth ensures that our initiatives benefit not just our partners, but also the communities and environments in which we operate.",
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
                name: "Wilson Felix",
                position: "Founder & CEO",
                bio: "With over 20 years of experience in venture capital and entrepreneurship, Wilson leads our global investment strategy.",
              },
              {
                name: "Jane Alfred",
                position: "Chief Investment Officer",
                bio: "Jane brings her expertise in financial analysis and market trends to identify high-potential investment opportunities.",
              },
              {
                name: "Mike Alexander",
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

