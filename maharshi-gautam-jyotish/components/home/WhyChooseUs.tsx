// components/home/WhyChooseUs.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Award, 
  BookOpen, 
  Users, 
  Target, 
  Shield, 
  HeartHandshake 
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WHY_CHOOSE_US } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  'book-open': BookOpen,
  users: Users,
  target: Target,
  shield: Shield,
  'heart-handshake': HeartHandshake,
}

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-navy-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-saffron-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Trusted by thousands for authentic Vedic guidance and transformative results"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-navy-800 dark:to-navy-700 hover:shadow-lg transition-shadow duration-300">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-heading font-bold text-navy-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line (for desktop) */}
                {index < WHY_CHOOSE_US.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-saffron-300 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl font-heading italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            "सत्यं वद। धर्मं चर।"
            <span className="block text-base mt-2 text-saffron-600 dark:text-gold-400 not-italic">
              — Speak the truth. Practice righteousness.
            </span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}