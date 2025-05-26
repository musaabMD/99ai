import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SignedOut } from "@clerk/nextjs"
import { CheckCircle, Zap, Shield, Clock, Code, BarChart3, Users, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Agent } from "@/lib/agents-data"

interface AgentFeaturesProps {
  agent: Agent
}

export function AgentFeatures({ agent }: AgentFeaturesProps) {
  const keyFeatures = [
    {
      icon: CheckCircle,
      title: "Smart Automation",
      description: "Intelligent workflows that adapt to your business needs and optimize over time."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process thousands of requests per minute with enterprise-grade performance."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and reporting to track performance and ROI."
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Seamlessly integrate with your existing tools and workflows via REST API."
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Works around the clock without breaks, holidays, or downtime."
    }
  ]

  const integrations = [
    { name: "Slack", color: "#4a154b" },
    { name: "Notion", color: "#000000" },
    { name: "Zapier", color: "#ff4a00" },
    { name: "Make", color: "#6366f1" },
    { name: "Zendesk", color: "#03363d" },
    { name: "Stripe", color: "#635bff" },
    { name: "Salesforce", color: "#00a1e0" },
    { name: "Calendly", color: "#006bff" },
    { name: "WhatsApp", color: "#25d366" },
    { name: "Messenger", color: "#0084ff" }
  ]

  const capabilities = [
    "Natural Language Processing",
    "Multi-language Support", 
    "Custom Workflows",
    "Real-time Processing",
    "Data Export & Import",
    "Team Collaboration",
    "Custom Branding",
    "Priority Support"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Badge variant="secondary" className="text-sm">
              Featured Agent
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need in {agent.name}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {agent.longDescription}
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities List */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Core Capabilities</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost productivity
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent transition-colors">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Works with your favorite tools</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with the tools you already use and love
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: integration.color }}
                >
                  <span className="text-white text-xs font-bold">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <span className="text-foreground font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to get started with {agent.name}?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI agents to automate their workflows and boost productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SignedOut>
                  <Link href="/sign-up">
                    <Button size="lg" className="px-8 py-4 text-lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                      Sign In
                    </Button>
                  </Link>
                </SignedOut>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Free to start • No credit card required • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
