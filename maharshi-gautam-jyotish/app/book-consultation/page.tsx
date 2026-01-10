// app/book-consultation/page.tsx
import { Metadata } from 'next'
import { BookConsultationContent } from './BookConsultationContent'

export const metadata: Metadata = {
  title: 'Book Consultation',
  description: 'Book your personalized Jyotish or Vastu consultation with Pt. Maharshi Gautam Ji. Choose your preferred date, time, and service for expert guidance.',
}

export default function BookConsultationPage() {
  return <BookConsultationContent />
}