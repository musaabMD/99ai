"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { GitCompare, Plus, X } from "lucide-react"
import type { Agent } from "@/lib/agents-data"
import { agents } from "@/lib/agents-data"

interface AgentCompareProps {
  currentAgent: Agent
}

export function AgentCompare({ currentAgent }: AgentCompareProps) {
  const [selectedAgents, setSelectedAgents] = useState<Agent[]>([currentAgent])
  const [showCompareModal, setShowCompareModal] = useState(false)

  const availableAgents = agents.filter(agent => agent.id !== currentAgent.id)

  const toggleAgent = (agent: Agent) => {
    setSelectedAgents(prev => {
      const exists = prev.find(a => a.id === agent.id)
      if (exists) {
        return prev.filter(a => a.id !== agent.id)
      } else if (prev.length < 3) {
        return [...prev, agent]
      }
      return prev
    })
  }

  const removeAgent = (agentId: string) => {
    setSelectedAgents(prev => prev.filter(a => a.id !== agentId))
  }

  const features = [
    "Email Automation",
    "Content Creation", 
    "Lead Generation",
    "Data Analysis",
    "Customer Support",
    "Social Media",
    "Productivity",
    "Marketing"
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Compare AI Agents</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare features and capabilities to find the perfect AI agent for your needs
          </p>
        </div>

        {/* Agent Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitCompare className="h-5 w-5" />
              Select Agents to Compare (Max 3)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableAgents.slice(0, 6).map((agent) => (
                <div
                  key={agent.id}
                  className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent cursor-pointer"
                  onClick={() => toggleAgent(agent)}
                >
                  <Checkbox
                    checked={selectedAgents.some(a => a.id === agent.id)}
                    disabled={!selectedAgents.some(a => a.id === agent.id) && selectedAgents.length >= 3}
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{agent.name}</h4>
                    <p className="text-sm text-muted-foreground">{agent.pricing}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        {selectedAgents.length > 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Features</th>
                      {selectedAgents.map((agent) => (
                        <th key={agent.id} className="text-center p-4 min-w-[200px]">
                          <div className="space-y-2">
                            <div className="flex items-center justify-center gap-2">
                              <h3 className="font-medium">{agent.name}</h3>
                              {agent.id !== currentAgent.id && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeAgent(agent.id)}
                                  className="h-6 w-6 p-0"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                            <Badge variant="secondary">{agent.pricing}</Badge>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature) => (
                      <tr key={feature} className="border-b">
                        <td className="p-4 font-medium">{feature}</td>
                        {selectedAgents.map((agent) => (
                          <td key={agent.id} className="p-4 text-center">
                            {agent.tags.includes(feature) ? (
                              <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            ) : (
                              <div className="w-6 h-6 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                                <span className="text-gray-400 text-xs">✗</span>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td className="p-4 font-medium">Description</td>
                      {selectedAgents.map((agent) => (
                        <td key={agent.id} className="p-4 text-center text-sm text-muted-foreground">
                          {agent.description}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Action</td>
                      {selectedAgents.map((agent) => (
                        <td key={agent.id} className="p-4 text-center">
                          <Button 
                            size="sm" 
                            variant={agent.id === currentAgent.id ? "default" : "outline"}
                            asChild
                          >
                            <a href={`/agent/${agent.slug}`}>
                              {agent.id === currentAgent.id ? "Current" : "View Details"}
                            </a>
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedAgents.length === 1 && (
          <div className="text-center py-12">
            <GitCompare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Select agents to compare</h3>
            <p className="text-muted-foreground">Choose up to 2 more agents to see a detailed comparison</p>
          </div>
        )}
      </div>
    </section>
  )
} 