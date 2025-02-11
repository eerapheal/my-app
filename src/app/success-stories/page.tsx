import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6d1ea] to-pink-100 py-12">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Success Stories
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Entrepreneurs Who Thrived with Our Support
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Sarah Johnson",
                company: "EcoTech Solutions",
                story:
                  "Sarah&#39;s innovative recycling technology caught our attention. With our investment and guidance, EcoTech Solutions expanded from a local operation to a global leader in sustainable waste management within just 3 years.",
                quote:
                  "The support from Global Network For Investors was instrumental in scaling our business. Their guidance helped us navigate challenges and seize opportunities we hadn&#39;t even considered.",
                videoUrl: "/videos/sarahjohnson.mp4",
              },
              {
                name: "Carlos Rodriguez",
                company: "HealthConnect",
                story:
                  "Carlos had a vision for telemedicine in underserved areas. We provided the capital and connections needed to turn HealthConnect into a platform that now serves millions across South America.",
                quote:
                  "Global Network For Investors didn&#39;t just provide funds; they opened doors. Their network and strategic advice were game-changers for HealthConnect.",
                videoUrl: "/videos/carlos-rodriguez.mp4",
              },
              {
                name: "Aisha Patel",
                company: "FoodFusion",
                story:
                  "Aisha&#39;s meal-kit delivery service started in her kitchen. Our investment helped FoodFusion expand its operations, improve logistics, and become a household name in the UK and beyond.",
                quote:
                  "The team at Global Network For Investors believed in my vision when others didn't. Their support allowed me to scale FoodFusion without compromising on quality or our core values.",
                videoUrl: "/videos/aisha-patel.mp4",
              },
              {
                name: "Tom Andersson",
                company: "GreenRide",
                story:
                  "Tom's electric bike-sharing startup needed capital to expand. We saw the potential and invested. Today, GreenRide operates in over 50 cities across Europe, promoting sustainable urban transport.",
                quote:
                  "The mentorship and global perspective provided by Global Network For Investors were invaluable. They helped us think big and execute effectively.",
                videoUrl: "/videos/tom-andersson.mp4",
              },
            ].map((story, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-blue-600 mb-4">{story.company}</p>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="flex items-start mt-4">
                    <Quote className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                    <p className="italic text-gray-700">{story.quote}</p>
                  </div>
                  {story.videoUrl && (
                    <div className="mt-4">
                      <video
                        controls
                        className="w-full h-[200] rounded-md shadow-lg"
                      >
                        <source src={story.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Join Our Success Stories
          </h2>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-lg mb-4">
                Your business could be our next success story. If you have a
                great idea or a growing business that needs support to reach the
                next level, we want to hear from you.
              </p>
              <a
                href="/how-it-works"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Journey
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
