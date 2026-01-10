

// components/home/ServicesPreview.tsx
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
  ArrowRight 
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
}

export function ServicesPreview() {
  // Show first 6 services
  const previewServices = SERVICES.slice(0, 6)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-navy-800">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Sacred Services"
          subtitle="Comprehensive astrological and Vastu solutions for every aspect of your life"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {previewServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Scroll

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-navy-900 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Card Header with Icon */}
                <div className="p-6 pb-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-saffron-600 dark:text-gold-400 font-semibold">
                      {service.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {service.duration}
                    </span>
                  </div>

                  {/* Book Now Link */}
                  <Link
                    href={`/book-consultation?service=${service.id}`}
                    className="flex items-center gap-2 text-saffron-600 dark:text-gold-400 font-medium group-hover:gap-3 transition-all"
                  >
                    Book Now
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Decorative Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link href="/services">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={18} />}>
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}