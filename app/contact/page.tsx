import { Suspense } from "react"
import Contact from "./ContactClient"

export const dynamic = "force-dynamic"

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <Contact />
    </Suspense>
  )
}