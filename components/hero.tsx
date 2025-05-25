"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { Bot, Zap, Brain, Sparkles, Cpu, Workflow } from "lucide-react"

const icons = [
  { Icon: Bot, color: "#3B82F6" },
  { Icon: Zap, color: "#10B981" },
  { Icon: Brain, color: "#8B5CF6" },
  { Icon: Sparkles, color: "#F59E0B" },
  { Icon: Cpu, color: "#EF4444" },
  { Icon: Workflow, color: "#06B6D4" },
]

export function Hero() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = icons[currentIconIndex].Icon
  const currentColor = icons[currentIconIndex].color

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Dynamic Icon */}
        <div className="mb-8 flex justify-center">
          <div 
            className="w-32 h-32 rounded-3xl flex items-center justify-center transition-all duration-500 shadow-2xl"
            style={{ backgroundColor: currentColor }}
          >
            <CurrentIcon className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Discover real-world
          <br />
          <span className="text-gray-600">AI automation.</span>
        </h1>

        <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Featuring over 50 AI agents and 200+ automation workflows —
          <br />
          New agents added weekly.
        </p>

        <div className="space-y-6">
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
                Continue with Google
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Button size="lg" className="bg-[#1DB954] hover:bg-[#1ed760] text-white px-12 py-6 rounded-2xl font-medium text-xl">
              Explore AI Agents
            </Button>
          </SignedIn>
          
          <p className="text-lg text-gray-500">Free to start • No credit card required</p>
        </div>
      </div>
    </section>
  )
}
