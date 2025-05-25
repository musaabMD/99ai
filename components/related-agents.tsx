import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { agents, type Agent } from "@/lib/agents-data"

interface RelatedAgentsProps {
  currentAgent: Agent
}

export function RelatedAgents({ currentAgent }: RelatedAgentsProps) {
  const relatedAgents = agents
    .filter((agent) => agent.id !== currentAgent.id && agent.tags.some((tag) => currentAgent.tags.includes(tag)))
    .slice(0, 3)

  if (relatedAgents.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Related AI Agents</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover other agents that might complement your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {relatedAgents.map((agent) => (
            <Link key={agent.id} href={`/agent/${agent.slug}`}>
              <Card
                className={`${agent.cardBg} p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden h-64`}
              >
                {/* Pricing Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-white/20 text-white border-none backdrop-blur-sm text-sm px-3 py-1 rounded-full font-medium">
                    {agent.pricing}
                  </Badge>
                </div>

                {/* Content Container - Centered */}
                <div className="flex flex-col items-center text-center h-full justify-center relative z-10">
                  {/* Centered Image */}
                  <div className="w-24 h-16 rounded-xl overflow-hidden mb-4 bg-white shadow-lg">
                    <Image
                      src="/images/prompt-ai-interface.png"
                      alt="AI Agent Interface"
                      width={96}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Centered Title */}
                  <h3 className="text-white text-xl font-bold mb-2 leading-tight">{agent.name}</h3>

                  {/* Centered Description */}
                  <p className="text-white/90 text-sm line-clamp-2 max-w-xs">{agent.description}</p>
                </div>

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
