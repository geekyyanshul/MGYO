// components/home/AboutPreview.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AboutPreview() {
  const features = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Decades of dedicated practice in Vedic sciences',
    },
    {
      icon: BookOpen,
      title: 'Traditional Knowledge',
      description: 'Authentic teachings passed through generations',
    },
    {
      icon: Users,
      title: '10,000+ Consultations',
      description: 'Trusted by families across India and abroad',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Placeholder for Guruji's image */}
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-100 to-gold-100 dark:from-navy-700 dark:to-navy-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white text-5xl">
                    ॐ
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Pt. Maharshi Gautam Ji
                  </p>
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-saffron-500/30 dark:border-gold-400/30 rounded-xl pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-navy-800 rounded-2xl shadow-xl p-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-saffron-600 dark:text-gold-400">
                  25+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Years of<br />Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            >
            <SectionHeading title="About Our Guruji" subtitle="Carrying forward the ancient wisdom of Vedic astrology" centered={false} />
            
            <div className="space-y-6 mb-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            <strong className="text-navy-800 dark:text-white">Pt. Maharshi Gautam Ji</strong> is 
            a renowned Vedic astrologer and Vastu consultant with over 25 years of experience. 
            Born into a family of traditional astrologers in Varanasi, he began his journey 
            into the cosmic sciences at a young age under the guidance of his grandfather.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            He holds a Jyotish Acharya degree from Sampurnanand Sanskrit Vishwavidyalaya 
            and has been recognized with the prestigious "Jyotish Shiromani" award. His 
            approach combines traditional wisdom with practical solutions for modern life challenges.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-saffron-50 dark:bg-navy-800 rounded-xl"
            >
              <feature.icon className="w-8 h-8 text-saffron-600 dark:text-gold-400 mb-3" />
              <h4 className="font-semibold text-navy-800 dark:text-white text-sm mb-1">
                {feature.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Link href="/about">
          <Button variant="primary" rightIcon={<ArrowRight size={18} />}>
            Learn More About Us
          </Button>
        </Link>
      </motion.div>
    </div>
  </div>
</section>)}