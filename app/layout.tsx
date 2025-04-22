import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ApolloWrapper } from '../providers/apollo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A modern blog built with Next.js and shadcn/ui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="min-h-screen">
      <body className={`${inter.className} text-neutral-700 font-sans`}>
        <ApolloWrapper>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
