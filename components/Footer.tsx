"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-muted/50">
      <div className="container flex flex-col gap-4 py-8 px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex flex-col md:flex-row gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              İletişim
            </Link>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>Blog Sayısı: 0</span>
            <Separator orientation="vertical" className="h-auto" />
            <span>Kategori Sayısı: 0</span>
          </div>
        </div>
        <Separator className="bg-border/50" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} My Blog. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
} 