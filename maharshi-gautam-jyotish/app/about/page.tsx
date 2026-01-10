// app/about/page.tsx
import { Metadata } from 'next'
import { AboutPageContent } from './AboutPageContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Pt. Maharshi Gautam Ji and our 25+ years journey in Vedic astrology and Vastu Shastra. Discover our mission, vision, and the lineage of authentic knowledge.',
}

export default function AboutPage() {
  return <AboutPageContent />
}