import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | PETHOUSE",
  description: "Terms and conditions for shopping on PETHOUSE.",
}

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-6">
          By using PETHOUSE, you agree to these terms for ordering, delivery, and returns.
        </p>

        <section className="space-y-3 mb-6">
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="text-muted-foreground">Orders are confirmed after availability and contact verification.</p>
        </section>

        <section className="space-y-3 mb-6">
          <h2 className="text-xl font-semibold">Pricing & Payment</h2>
          <p className="text-muted-foreground">Prices are displayed in DZD and may change without prior notice.</p>
        </section>

        <section className="space-y-3 mb-6">
          <h2 className="text-xl font-semibold">Returns</h2>
          <p className="text-muted-foreground">Returns and refunds are handled according to the published store policy.</p>
        </section>
      </div>
    </main>
  )
}
