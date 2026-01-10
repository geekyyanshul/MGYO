// app/page.tsx
import { Hero } from '@/components/home/Hero'
import { AboutPreview } from '@/components/home/AboutPreview'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { CTABanner } from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}