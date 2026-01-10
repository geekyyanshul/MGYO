// app/layout.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan',
    template: '%s | Maharshi Gautam Jyotish',
  },
  description: 'Authentic Vedic astrology and Vastu Shastra guidance for career, marriage, health, and prosperity. 25+ years of experience. Book your consultation today.',
  keywords: [
    'Jyotish',
    'Vastu Shastra',
    'Vedic Astrology',
    'Kundli',
    'Horoscope',
    'Marriage Matching',
    'Vastu Consultant',
    'Astrologer in Varanasi',
    'Muhurat',
    'Gemstones',
  ],
  authors: [{ name: 'Pt. Maharshi Gautam' }],
  creator: 'Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan',
  publisher: 'Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mgvastuanusandhan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan',
    description: 'Authentic Vedic astrology and Vastu guidance for a balanced life. Book your consultation today.',
    url: 'https://mgvastuanusandhan.com',
    siteName: 'Maharshi Gautam Jyotish',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan',
    description: 'Authentic Vedic astrology and Vastu guidance for a balanced life.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className="bg-white dark:bg-navy-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}