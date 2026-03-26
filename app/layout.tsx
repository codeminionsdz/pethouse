import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ClientLayout } from "@/components/layout/client-layout"
import { CartProvider } from "@/lib/cart-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import { Toaster } from "@/components/ui/toaster"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" })
const sora = Sora({ subsets: ["latin"], variable: "--font-heading", weight: ["600", "700", "800"] })

export const metadata: Metadata = {
  title: "PETHOUSE | Premium Pet Lifestyle",
  description:
    "Premium pet products, expert care, and everything your companions need. Delivered across Algeria.",
  keywords: ["pets", "pet shop", "pet lifestyle", "pet food", "pet accessories", "pet care", "algeria"],
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#7FA8FF",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning dir="ltr">
      <body className={`${manrope.variable} ${sora.variable} font-sans antialiased`} suppressHydrationWarning>
        <CartProvider>
          <WishlistProvider>
            <ClientLayout>{children}</ClientLayout>
          </WishlistProvider>
        </CartProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
