"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

const allTags = [
  "Email Automation",
  "Content Creation",
  "Lead Generation",
  "Data Analysis",
  "Customer Support",
  "Social Media",
  "Productivity",
  "Marketing",
]

interface SearchAndFilterProps {
  onSearch?: (query: string) => void
  onFilterTags?: (tags: string[]) => void
}

export function SearchAndFilter({ onSearch, onFilterTags }: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    onSearch?.(query)
  }

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag) 
      ? selectedTags.filter((t) => t !== tag) 
      : [...selectedTags, tag]
    
    setSelectedTags(newTags)
    onFilterTags?.(newTags)
  }

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search AI agents..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 h-12 text-base border-input bg-background rounded-lg shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span>Filter by category</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTag(tag)}
              className={`rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTags.includes(tag)
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Selected filters display */}
        {selectedTags.length > 0 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            <div className="flex flex-wrap gap-1">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs px-2 py-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  {tag} ×
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
