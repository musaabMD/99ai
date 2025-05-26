import type React from "react"
import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "99AIs.com - Build AI Agents That Do the Work for You",
  description: "Design, deploy, and automate custom AI agents to handle tasks, save time, and scale your impact — no coding required.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-[#F3F2F1] min-h-screen antialiased">
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
