"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

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
    <div className="mb-12 text-center">
      {/* Search Bar */}
      <div className="mb-10">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          <Input
            placeholder="Search AI agents..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-14 h-14 text-lg border-2 border-gray-200 focus:border-gray-400 focus:ring-0 bg-white rounded-full shadow-sm"
          />
        </div>
      </div>

      {/* Airbnb Style Filter Buttons */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-200 border-2 ${
                selectedTags.includes(tag)
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
