import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">Join the waitlist</h1>
        <p className="mt-4 text-lg md:text-base leading-relaxed text-slate-600">
          This page does not exist. The next cohort seats are filling fast.
        </p>
        <div className="mt-8 max-w-md mx-auto text-left">
          <WaitlistForm />
        </div>
        <Link href="/" className="mt-6 inline-block font-medium text-indigo-600 hover:text-indigo-700">
          Back to homepage
        </Link>
      </div>
    </main>
  )
}
