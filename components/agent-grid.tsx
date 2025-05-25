import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { Agent } from "@/lib/agents-data"

interface AgentGridProps {
  agents?: Agent[]
}

export function AgentGrid({ agents = [] }: AgentGridProps) {
  if (agents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No agents found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {agents.map((agent) => (
        <Link key={agent.id} href={`/agent/${agent.slug}`}>
          <Card
            className="rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden h-[600px]"
            style={{ backgroundColor: agent.cardBg }}
          >
            {/* Full Card Content */}
            <div className="p-10 h-full flex flex-col">
              {/* Image Section - Top 60% */}
              <div className="flex-[3] flex items-center justify-center mb-8">
                <div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-xl">
                  <Image
                    src="/images/prompt-ai-interface.png"
                    alt="AI Agent Interface"
                    width={500}
                    height={350}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text Section - Bottom 40% */}
              <div className="flex-[2] text-center text-white flex flex-col justify-center">
                {/* Main Title */}
                <h3 className="text-4xl font-bold mb-4 leading-tight">{agent.name}</h3>
                
                {/* Subtitle/Description - More readable */}
                <p className="text-white/95 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                  {agent.description}
                </p>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>
        </Link>
      ))}
    </div>
  )
}
