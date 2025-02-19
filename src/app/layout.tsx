// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import './globals.css';
import FloatingButtons from '@/components/FloatingButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Professional Blog',
  description: 'A professional blogging website with SEO optimization and AdSense compliance.',
  keywords: ['blog', 'jobs', 'news', 'internships'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  openGraph: {
    title: 'My Professional Blog',
    description: 'A professional blogging website with SEO optimization and AdSense compliance.',
    url: 'https://yourwebsite.com',
    siteName: 'My Professional Blog',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Professional Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_AD_CLIENT_ID"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}