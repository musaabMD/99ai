import { auth } from "@clerk/nextjs/server"
import { Protect } from "@clerk/nextjs"

export default async function DashboardPage() {
  const { has } = await auth()

  // Check for different plan access
  const hasBronzePlan = has({ plan: "bronze" })
  const hasGoldPlan = has({ plan: "gold" })
  const hasPremiumFeature = has({ feature: "premium_access" })

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        <div className="grid gap-6">
          {/* Basic Content - Available to all authenticated users */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Basic Features</h2>
            <p className="text-gray-600">This content is available to all signed-in users.</p>
          </div>

          {/* Bronze Plan Content */}
          <Protect
            plan="bronze"
            fallback={
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-yellow-800 mb-2">Bronze Plan Required</h2>
                <p className="text-yellow-700">Upgrade to Bronze plan to access these features.</p>
              </div>
            }
          >
            <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-300">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">Bronze Features</h2>
              <p className="text-yellow-700">Exclusive content for Bronze subscribers!</p>
            </div>
          </Protect>

          {/* Gold Plan Content */}
          <Protect
            plan="gold"
            fallback={
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Gold Plan Required</h2>
                <p className="text-amber-700">Upgrade to Gold plan to access premium features.</p>
              </div>
            }
          >
            <div className="bg-amber-100 p-6 rounded-lg border border-amber-300">
              <h2 className="text-xl font-semibold text-amber-800 mb-4">Gold Features</h2>
              <p className="text-amber-700">Premium content for Gold subscribers!</p>
            </div>
          </Protect>

          {/* Feature-based Content */}
          <Protect
            feature="premium_access"
            fallback={
              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Premium Access Required</h2>
                <p className="text-purple-700">This feature requires premium access.</p>
              </div>
            }
          >
            <div className="bg-purple-100 p-6 rounded-lg border border-purple-300">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">Premium Features</h2>
              <p className="text-purple-700">Advanced features for premium users!</p>
            </div>
          </Protect>

          {/* Permission-based Content */}
          <Protect
            permission="premium_access:manage"
            fallback={
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-red-800 mb-2">Management Permission Required</h2>
                <p className="text-red-700">You need management permissions to access this.</p>
              </div>
            }
          >
            <div className="bg-red-100 p-6 rounded-lg border border-red-300">
              <h2 className="text-xl font-semibold text-red-800 mb-4">Management Panel</h2>
              <p className="text-red-700">Administrative features for managers!</p>
            </div>
          </Protect>
        </div>

        {/* Plan Status Display */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Your Access Level</h2>
          <div className="space-y-2">
            <p className={`${hasBronzePlan ? "text-green-600" : "text-gray-400"}`}>
              Bronze Plan: {hasBronzePlan ? "✓ Active" : "✗ Not Active"}
            </p>
            <p className={`${hasGoldPlan ? "text-green-600" : "text-gray-400"}`}>
              Gold Plan: {hasGoldPlan ? "✓ Active" : "✗ Not Active"}
            </p>
            <p className={`${hasPremiumFeature ? "text-green-600" : "text-gray-400"}`}>
              Premium Access: {hasPremiumFeature ? "✓ Enabled" : "✗ Disabled"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
