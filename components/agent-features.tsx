import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SignedOut, SignInButton } from "@clerk/nextjs"
import { CheckCircle, Zap, Shield, Clock, Code, BarChart3, Users } from "lucide-react"
import type { Agent } from "@/lib/agents-data"

interface AgentFeaturesProps {
  agent: Agent
}

export function AgentFeatures({ agent }: AgentFeaturesProps) {
  const features = [
    {
      icon: CheckCircle,
      title: "Compare AI models",
      description: "Experiment with various models and configurations to make sure you have the best setup for your use case.",
      image: "/images/compare-models.png"
    },
    {
      icon: Zap,
      title: "Smart escalation", 
      description: "Give your agent instructions in natural language on when to escalate queries to a human agents.",
      image: "/images/smart-escalation.png"
    },
    {
      icon: BarChart3,
      title: "Advanced reporting",
      description: "Gain insights and optimize agent performance with detailed analytics.",
      image: "/images/advanced-reporting.png"
    }
  ]

  const integrations = [
    { name: "Make", logo: "/logos/make.png", color: "#6366f1" },
    { name: "Zendesk", logo: "/logos/zendesk.png", color: "#03363d" },
    { name: "Notion", logo: "/logos/notion.png", color: "#000000" },
    { name: "Slack", logo: "/logos/slack.png", color: "#4a154b" },
    { name: "Stripe", logo: "/logos/stripe.png", color: "#635bff" },
    { name: "Salesforce", logo: "/logos/salesforce.png", color: "#00a1e0" },
    { name: "Calendly", logo: "/logos/calendly.png", color: "#006bff" },
    { name: "WhatsApp", logo: "/logos/whatsapp.png", color: "#25d366" },
    { name: "Zapier", logo: "/logos/zapier.png", color: "#ff4a00" },
    { name: "Messenger", logo: "/logos/messenger.png", color: "#0084ff" }
  ]

  const bottomFeatures = [
    {
      icon: Code,
      title: "API",
      description: "APIs, client libraries, and components to deeply integrate support into your product."
    },
    {
      icon: Shield,
      title: "Whitelabel",
      description: "Remove any Chatbase branding from the chat widget."
    },
    {
      icon: Clock,
      title: "Always improving",
      description: "Syncs with your systems and learns from previous interactions."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Feature Image */}
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-t-2xl flex items-center justify-center">
                  <feature.icon className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Works with your tools section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Works with your tools</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrate diverse data sources to enrich your agent's knowledge and capabilities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: integration.color }}
                >
                  <span className="text-white text-xs font-bold">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <feature.icon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started with {agent.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI agents to automate their workflows.
          </p>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg" className="bg-[#4285f4] hover:bg-[#3367d6] text-white px-12 py-6 rounded-2xl font-medium text-xl">
                <svg className="w-6 h-6 mr-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Get Started with Google
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </section>
  )
}
