import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"
import type { Agent } from "@/lib/agents-data"

interface AgentHeroProps {
  agent: Agent
}

export function AgentHero({ agent }: AgentHeroProps) {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
                {agent.pricing}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {agent.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {agent.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

                <SignedIn>
                  <Button size="lg" className="px-8 py-4 text-lg">
                    Start Using {agent.name}
                  </Button>
                </SignedIn>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Free to start • No credit card required
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:pl-12">
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
                <Image
                  src="/images/prompt-ai-interface.png"
                  alt={`${agent.name} interface`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
