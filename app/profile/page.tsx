import { UserProfile } from "@clerk/nextjs"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-foreground">Account Settings</CardTitle>
              <p className="text-muted-foreground">Manage your account preferences and settings</p>
            </CardHeader>
            <CardContent className="pt-0">
              <UserProfile
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-none bg-transparent",
                    headerTitle: "text-foreground",
                    headerSubtitle: "text-muted-foreground",
                    socialButtonsBlockButton: "border-border hover:bg-accent",
                    formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
                    formFieldInput: "border-border bg-background",
                    identityPreviewText: "text-foreground",
                    identityPreviewEditButton: "text-primary hover:text-primary/90",
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
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
