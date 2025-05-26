import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {

  return (
    <header className="bg-[#F3F2F1] border-b border-gray-200/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo size="md" />
        </Link>

        {/* Join Waitlist Button */}
        <div>
          <Link href="/waitlist">
            <Button size="sm" className="bg-black hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg">
              Join Waitlist
            </Button>
          </Link>
        </div>
        </div>
      </header>
  )
}
