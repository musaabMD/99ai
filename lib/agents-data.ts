export interface Agent {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  pricing: string
  tags: string[]
  cardBg: string
}

export const agents: Agent[] = [
  {
    id: "1",
    name: "LinkedIn Post Writer",
    slug: "linkedin-post-writer",
    description: "Transform content ideas into LinkedIn posts that match your writing style.",
    longDescription:
      "Transform your content ideas into engaging LinkedIn posts with our AI that understands your unique writing style and professional voice.",
    pricing: "$29/month",
    tags: ["Content Creation", "Social Media", "Marketing"],
    cardBg: "#3B82F6", // Clean Blue
  },
  {
    id: "2",
    name: "Email Automation",
    slug: "email-automation",
    description: "Automatically categorize and prioritize incoming emails using AI.",
    longDescription:
      "Streamline your email workflow with intelligent categorization, prioritization, and automated responses that save you hours every day.",
    pricing: "Free",
    tags: ["Email Automation", "Productivity", "Customer Support"],
    cardBg: "#10B981", // Clean Green
  },
  {
    id: "3",
    name: "Lead Enricher",
    slug: "lead-enricher",
    description: "Enrich lead data with comprehensive information automatically.",
    longDescription:
      "Enhance your lead database with comprehensive contact information, company details, and behavioral insights using advanced AI technology.",
    pricing: "$49/month",
    tags: ["Lead Generation", "Data Analysis", "Marketing"],
    cardBg: "#8B5CF6", // Clean Purple
  },
  {
    id: "4",
    name: "Data Insights",
    slug: "data-insights",
    description: "Transform raw data into actionable insights with automated analysis.",
    longDescription:
      "Turn your raw data into powerful business insights with automated analysis, trend detection, and predictive modeling.",
    pricing: "$39/month",
    tags: ["Data Analysis", "Productivity", "Marketing"],
    cardBg: "#F59E0B", // Clean Orange
  },
  {
    id: "5",
    name: "Support Assistant",
    slug: "support-assistant",
    description: "Provide 24/7 customer support with intelligent responses.",
    longDescription:
      "Deliver exceptional customer support around the clock with AI that understands context and provides accurate, helpful responses.",
    pricing: "$19/month",
    tags: ["Customer Support", "Productivity"],
    cardBg: "#EF4444", // Clean Red
  },
  {
    id: "6",
    name: "Social Manager",
    slug: "social-manager",
    description: "Schedule and optimize social media content across platforms.",
    longDescription:
      "Maximize your social media impact with intelligent content scheduling, optimization, and performance tracking across all platforms.",
    pricing: "$35/month",
    tags: ["Social Media", "Content Creation", "Marketing"],
    cardBg: "#06B6D4", // Clean Cyan
  },
]
