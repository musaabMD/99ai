"use client"

import { useState, useMemo } from "react"
import { SearchAndFilter } from "@/components/search-and-filter"
import { AgentGrid } from "@/components/agent-grid"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { agents } from "@/lib/agents-data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           agent.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => agent.tags.includes(tag))
      
      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main className="container mx-auto px-6 py-8">
        <SearchAndFilter 
          onSearch={setSearchQuery}
          onFilterTags={setSelectedTags}
        />
        <AgentGrid agents={filteredAgents} />
      </main>
    </div>
  )
}
