import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | PETHOUSE",
  description: "Privacy policy for PETHOUSE customers.",
}

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">
          We collect only the data needed to process orders, shipping, and customer support.
        </p>

        <section className="space-y-3 mb-6">
          <h2 className="text-xl font-semibold">What we collect</h2>
          <p className="text-muted-foreground">Name, phone number, email, shipping address, and order details.</p>
        </section>

        <section className="space-y-3 mb-6">
          <h2 className="text-xl font-semibold">How we use data</h2>
          <p className="text-muted-foreground">Order fulfillment, delivery updates, account management, and support requests.</p>
        </section>

        <section className="space-y-3 mb-6">
          <h2 className="text-xl font-semibold">Your rights</h2>
          <p className="text-muted-foreground">You can request correction or deletion of your personal data by contacting support.</p>
        </section>
      </div>
    </main>
  )
}
