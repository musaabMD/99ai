import { SignIn } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Bot } from "lucide-react"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">99ais</span>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>
        </div>

        {/* Sign In Card */}
        <Card className="border-border shadow-lg">
          <CardContent className="p-6">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-none bg-transparent p-0",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "w-full border-border hover:bg-accent text-foreground font-medium py-3 px-4 rounded-lg transition-colors",
                  socialButtonsBlockButtonText: "text-foreground font-medium",
                  dividerLine: "bg-border",
                  dividerText: "text-muted-foreground",
                  formButtonPrimary: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg transition-colors",
                  formFieldInput: "w-full border-border bg-background text-foreground rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent",
                  formFieldLabel: "text-foreground font-medium",
                  identityPreviewText: "text-foreground",
                  formHeaderTitle: "text-foreground",
                  formHeaderSubtitle: "text-muted-foreground",
                  footerActionLink: "text-primary hover:text-primary/90",
                  footerActionText: "text-muted-foreground",
                },
                variables: {
                  colorPrimary: "hsl(var(--primary))",
                  colorBackground: "hsl(var(--background))",
                  colorText: "hsl(var(--foreground))",
                  colorTextSecondary: "hsl(var(--muted-foreground))",
                  colorInputBackground: "hsl(var(--background))",
                  colorInputText: "hsl(var(--foreground))",
                  borderRadius: "0.5rem",
                },
              }}
              redirectUrl="/dashboard"
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-primary hover:text-primary/90 font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
} 