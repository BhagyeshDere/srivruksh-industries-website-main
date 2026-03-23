import { Suspense } from "react"
import ContactClient from "./ContactClient"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#0B2E5B]">
              Loading...
            </p>
          </div>
        }
      >
        <ContactClient />
      </Suspense>
    </main>
  )
}