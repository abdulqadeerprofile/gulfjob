// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import './globals.css';
import favicon from './favicon.png';

// Dynamic imports for components
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const FloatingButtons = dynamic(() => import('@/components/FloatingButtons'), {
  ssr: false,
  loading: () => <div className="hidden" /> // Placeholder while loading
});

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true 
});

// Optimized metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://yourwebsite.com'),
  title: {
    default: 'My Professional Blog',
    template: '%s | My Professional Blog'
  },
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
  icons: {
    icon: favicon.src
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_AD_CLIENT_ID"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className="overflow-x-hidden">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow overflow-x-hidden">
            {children}
          </main>
          <FloatingButtons />
          <Footer />
        </div>
      </body>
    </html>
  );
}