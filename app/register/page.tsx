import { Suspense } from "react"
import RegisterPageClient from "./register-client"

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterPageClient />
    </Suspense>
  )
}


