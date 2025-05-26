import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { AgentHero } from "@/components/agent-hero"
import { AgentFeatures } from "@/components/agent-features"
import { AgentCompare } from "@/components/agent-compare"
import { RelatedAgents } from "@/components/related-agents"
import { agents } from "@/lib/agents-data"

interface AgentPageProps {
  params: {
    slug: string
  }
}

export default function AgentPage({ params }: AgentPageProps) {
  const agent = agents.find((a) => a.slug === params.slug)

  if (!agent) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AgentHero agent={agent} />
      <AgentFeatures agent={agent} />
      <AgentCompare currentAgent={agent} />
      <RelatedAgents currentAgent={agent} />
    </div>
  )
}

export function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }))
}
