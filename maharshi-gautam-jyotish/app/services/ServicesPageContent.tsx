// app/services/ServicesPageContent.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Scroll, 
  Briefcase, 
  Heart, 
  Home, 
  Building2, 
  Calendar,
  Gem,
  Sun,
  ArrowRight,
  Clock,
  IndianRupee
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  scroll: Scroll,
  briefcase: Briefcase,
  heart: Heart,
  home: Home,
  building: Building2,
  calendar: Calendar,
  gem: Gem,
  sun: Sun,
}

export function ServicesPageContent() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-navy-800 dark:to-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-saffron-100 dark:bg-navy-700 rounded-full text-saffron-700 dark:text-gold-400 text-sm font-medium mb-4">
              ॐ सर्वे भवन्तु सुखिनः
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 dark:text-white mb-6">
              Our Sacred Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive astrological and Vastu solutions tailored to guide you 
              through every aspect of life with clarity and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Scroll

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-50 dark:bg-navy-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-navy-800 dark:text-white mb-1">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-saffron-600 dark:text-gold-400 font-semibold">
                            <IndianRupee className="w-4 h-4" />
                            {service.price}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Book Now Button */}
                    <Link href={`/book-consultation?service=${service.id}`}>
                      <Button
                        variant="primary"
                        rightIcon={<ArrowRight size={18} />}
                        className="w-full sm:w-auto"
                      >
                        Book This Service
                      </Button>
                    </Link>
                  </div>

                  {/* Decorative Bottom */}
                  <div className="h-1 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How It Works"
            subtitle="Simple steps to get your personalized consultation"
          />

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Book', description: 'Schedule your consultation online or via WhatsApp' },
              { step: '2', title: 'Share', description: 'Provide your birth details and questions' },
              { step: '3', title: 'Consult', description: 'Meet with Guruji for personalized guidance' },
              { step: '4', title: 'Transform', description: 'Apply the wisdom and remedies in your life' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-saffron-500 to-gold-400" />
                )}

                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                  {item.step}
                </div>

                <h3 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-saffron-500 to-gold-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards understanding your destiny and creating the life you deserve.
            </p>
            <Link href="/book-consultation">
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                className="bg-white text-saffron-600 hover:bg-gray-100"
              >
                Book Your Consultation Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}