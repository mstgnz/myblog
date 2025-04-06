import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "A modern blog built with Next.js and shadcn/ui",
};

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="tr" className="min-h-screen">
      <body className={`${inter.className} flex min-h-screen flex-col bg-background antialiased px-[10%]`}>
        <Providers>
          <Header />
          <main className="flex-1 container py-8">
            <div className="flex gap-8">
              <div className="w-4/5">
                {children}
              </div>
              <div className="w-1/5">
                <Sidebar />
              </div>
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
