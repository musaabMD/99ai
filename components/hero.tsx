"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Zap, Brain, Sparkles, Cpu, Workflow, CheckCircle } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'
import Link from "next/link"

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
  const [showSuccess, setShowSuccess] = useState(false)
  const [state, handleSubmit] = useForm("xjkwyaql")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true)
      // Hide success message after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  const CurrentIcon = icons[currentIconIndex].Icon
  const currentColor = icons[currentIconIndex].color

  return (
    <section className="bg-[#F3F2F1] py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Dynamic Icon */}
        <div className="mb-8 flex justify-center">
          <div 
            className="w-24 h-24 rounded-3xl flex items-center justify-center transition-all duration-500 shadow-2xl border border-gray-200/50"
            style={{ backgroundColor: currentColor }}
          >
            <CurrentIcon className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Build AI Agents That
          <br />
          <span className="text-gray-500">Do the Work for You</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          Design, deploy, and automate custom AI agents to handle tasks, save time, and scale your impact — no coding required.
        </p>

        {/* Success Notification */}
        {showSuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Thanks for joining! We'll notify you when we launch.</span>
          </div>
        )}

        {/* Email Signup Form */}
        <div className="max-w-lg mx-auto mb-20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-lg rounded-2xl border-0 bg-white shadow-lg focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#F3F2F1] font-medium"
                required
              />
              <Button 
                type="submit" 
                disabled={state.submitting}
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg whitespace-nowrap transition-all duration-200"
              >
                {state.submitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </form>
          <p className="text-sm text-gray-500 mt-6 font-medium">Be the first to know when we launch</p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Purpose-built for LLMs</h3>
              <p className="text-gray-600 text-center leading-relaxed">Language models with reasoning capabilities for effective responses to complex queries.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Designed for simplicity</h3>
              <p className="text-gray-600 text-center leading-relaxed">Create, manage, and deploy AI Agents easily, even without technical skills.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Workflow className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Engineered for security</h3>
              <p className="text-gray-600 text-center leading-relaxed">Enjoy peace of mind with robust encryption and strict compliance standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
