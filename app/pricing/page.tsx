import { Header } from "@/components/header"
import { PricingTable } from '@clerk/nextjs'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for you. No hidden fees.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
            <PricingTable />
          </div>
        </div>
      </section>
    </div>
  )
}
