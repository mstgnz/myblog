import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Header from '@/components/header';
import Footer from '@/components/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A modern blog built with Next.js and shadcn/ui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="min-h-screen">
      <body className={`${inter.className} text-neutral-700 font-sans`}>
        <Providers>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
