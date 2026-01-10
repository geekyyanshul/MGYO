// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CONTACT_INFO } from '@/lib/constants'
import { formatWhatsAppUrl } from '@/lib/utils'

export function Hero() {
  const whatsappUrl = formatWhatsAppUrl(
    CONTACT_INFO.whatsapp,
    'Hello! I would like to book a consultation.'
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-saffron-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
        {/* Mandala Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 mandala-bg" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sanskrit Blessing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-saffron-100 dark:bg-navy-700 rounded-full text-saffron-700 dark:text-gold-400 text-sm font-medium">
              ॐ श्री गणेशाय नमः | सर्वे भवन्तु सुखिनः
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-navy-800 dark:text-white mb-6 leading-tight"
          >
            Authentic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-gold-500">
              Jyotish & Vastu
            </span>{' '}
            Guidance for a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-saffron-500">
              Balanced Life
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the ancient wisdom of Vedic astrology and Vastu Shastra. 
            Get personalized guidance for career, relationships, health, and prosperity 
            from experienced practitioners with 25+ years of expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/book-consultation">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
              >
                Book Consultation
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<MessageCircle size={20} />}
              >
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '10,000+', label: 'Happy Clients' },
              { number: '15+', label: 'Services Offered' },
              { number: '4.9/5', label: 'Client Rating' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-saffron-600 dark:text-gold-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-saffron-500 dark:border-gold-400 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-saffron-500 dark:bg-gold-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}