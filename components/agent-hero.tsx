import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import type { Agent } from "@/lib/agents-data"

interface AgentHeroProps {
  agent: Agent
}

export function AgentHero({ agent }: AgentHeroProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-gray-100 text-gray-700 hover:bg-gray-200 text-lg px-4 py-2">
                {agent.pricing}
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {agent.name}
              </h1>
              
              <p className="text-2xl text-gray-600 mb-10 leading-relaxed">
                {agent.longDescription}
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

              <SignedIn>
                <Button size="lg" className="bg-[#1DB954] hover:bg-[#1ed760] text-white px-12 py-6 rounded-2xl font-medium text-xl">
                  Start Using {agent.name}
                </Button>
              </SignedIn>
            </div>

            {/* Right Image */}
            <div className="lg:pl-12">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
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
