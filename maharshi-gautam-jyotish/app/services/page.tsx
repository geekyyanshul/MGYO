// app/services/page.tsx
import { Metadata } from 'next'
import { ServicesPageContent } from './ServicesPageContent'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of Vedic astrology and Vastu services including Kundli analysis, career guidance, marriage matching, and Vastu consultations.',
}

export default function ServicesPage() {
  return <ServicesPageContent />
}