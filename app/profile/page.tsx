import { UserProfile } from "@clerk/nextjs"
import { Header } from "@/components/header"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

            <UserProfile
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-none",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
