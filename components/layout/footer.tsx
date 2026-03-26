"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MapPin, Truck, Shield, CreditCard, Clock, Music } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

function FooterContent() {
  const { t } = useTranslation()

  const footerLinks = {
    shop: [
      { name: t("footer.cats"), href: "/cats" },
      { name: t("footer.dogs"), href: "/dogs" },
      { name: t("footer.birds"), href: "/birds" },
      { name: t("footer.others"), href: "/others" },
      { name: t("footer.brands"), href: "/brands" },
    ],
    support: [
      { name: t("footer.contact_us"), href: "/contact" },
    ],
  }

  const trustFeatures = [
    { icon: Truck, title: t("footer.fast_delivery"), description: t("footer.fast_delivery_desc") },
    { icon: Shield, title: t("footer.authentic_products"), description: t("footer.authentic_desc") },
    { icon: CreditCard, title: t("footer.secure_payment"), description: t("footer.secure_desc") },
    { icon: Clock, title: t("footer.free_shipping"), description: t("footer.free_shipping_desc") },
  ]
  return (
    <footer className="bg-secondary/90 text-foreground border-t border-border/60 mt-auto">
      {/* Trust Features */}
      <div className="border-b border-border/60">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3 group/feature">
                <div className="p-2 rounded-xl bg-primary/10 transition-all duration-300 group-hover/feature:bg-primary/20 group-hover/feature:scale-110">
                  <feature.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover/feature:scale-110" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12 bg-card rounded-xl p-1 shadow-sm border border-border">
                <Image src="/logo.png" alt="PETHOUSE" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-primary tracking-[0.14em] uppercase">PETHOUSE</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Premium pet lifestyle store for food, accessories, toys, and expert care for cats, dogs, birds, and more. Quality products delivered across Algeria.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">{t("footer.newsletter")}</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder={t("footer.email_placeholder")} className="bg-card" />
                <Button className="shrink-0">{t("footer.subscribe")}</Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pethouse.bba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-border"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@pet.house.bba?_r=1&_t=ZS-915bDrrtnpn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-border"
              >
                <Music className="h-5 w-5 transition-transform duration-300" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.shop")}</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.support")}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact_info")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?cid=15732382943059604595&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=en&gl=DZ&source=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Bordj Bou Arreridj, Algeria
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+213770874393" className="text-muted-foreground hover:text-primary">
                  +213 770 874 393
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:contact@pethouse.dz" className="text-muted-foreground hover:text-primary">
                  contact@pethouse.dz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="https://www.instagram.com/pethouse.bba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  @pethouse.bba
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Music className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="https://www.tiktok.com/@pet.house.bba?_r=1&_t=ZS-915bDrrtnpn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  @pet.house.bba
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PETHOUSE. {t("footer.copyright")}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  return <FooterContent />
}
