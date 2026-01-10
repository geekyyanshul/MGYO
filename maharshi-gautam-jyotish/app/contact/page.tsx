// app/contact/page.tsx
import { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan. Visit our office in Varanasi or reach out via phone, email, or WhatsApp.',
}

export default function ContactPage() {
  return <ContactPageContent />
}