// components/home/CTABanner.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CONTACT_INFO } from '@/lib/constants'
import { formatWhatsAppUrl } from '@/lib/utils'

export function CTABanner() {
  const whatsappUrl = formatWhatsAppUrl(
    CONTACT_INFO.whatsapp,
    'Hello! I would like to book a consultation.'
  )

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-saffron-500 via-saffron-600 to-gold-500 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        
        {/* Om Pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[40rem] font-heading text-white">ॐ</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Begin Your Journey to{' '}
            <span className="text-navy-800">Clarity & Prosperity</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Take the first step towards understanding your destiny. Book a consultation 
            today and discover the cosmic guidance that awaits you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-consultation">
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                className="bg-white text-saffron-600 hover:bg-gray-100"
              >
                Book Consultation
              </Button>
            </Link>

            <a href={`tel:${CONTACT_INFO.phone}`}>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Phone size={20} />}
                className="border-white text-white hover:bg-white/10"
              >
                Call Now
              </Button>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<MessageCircle size={20} />}
                className="border-white text-white hover:bg-white/10"
              >
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <span className="text-2xl">🛡️</span>
            <span className="text-white font-medium">
              100% Confidential • Personalized Guidance • Satisfaction Guaranteed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}