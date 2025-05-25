import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Bot, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="h-7 w-7 text-gray-900" />
          <span className="text-2xl font-semibold text-gray-900">99ais</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Agents
          </Link>
          <Link href="/categories" className="text-gray-600 hover:text-gray-900 font-medium">
            Categories
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">
            Pricing
          </Link>
          <SignedIn>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
              Dashboard
            </Link>
          </SignedIn>
        </nav>

        <div className="flex items-center space-x-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className="text-gray-600">
                Sign In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button className="bg-gray-900 hover:bg-gray-800">Get Started</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
