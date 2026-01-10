// app/blog/page.tsx
import { Metadata } from 'next'
import { BlogPageContent } from './BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore articles on Vedic astrology, Vastu Shastra, gemstones, and spiritual wisdom by Pt. Maharshi Gautam Ji.',
}

export default function BlogPage() {
  return <BlogPageContent />
}