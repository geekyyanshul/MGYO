// app/about/AboutPageContent.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Award, 
  BookOpen, 
  Users, 
  Target, 
  Eye,
  GraduationCap,
  Heart
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { JOURNEY_TIMELINE } from '@/lib/constants'

export function AboutPageContent() {
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
              ॐ गुरवे नमः
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 dark:text-white mb-6">
              About Our Sansthan
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Dedicated to preserving and sharing the sacred knowledge of Vedic astrology 
              and Vastu Shastra for the benefit of humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-saffron-100 to-gold-100 dark:from-navy-700 dark:to-navy-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white text-6xl shadow-2xl">
                      ॐ
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-navy-800 dark:text-white">
                      Pt. Maharshi Gautam Ji
                    </h3>
                    <p className="text-saffron-600 dark:text-gold-400">
                      Founder & Chief Consultant
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-saffron-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800 dark:text-white mb-6">
                Meet Our Founder
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-navy-800 dark:text-white">Pandit Maharshi Gautam Ji</strong> is 
                  a distinguished Vedic astrologer and Vastu Shastra expert with over 25 years of experience 
                  in guiding individuals and families towards prosperity and peace.
                </p>
                <p>
                  Born into a family of traditional astrologers in the sacred city of Varanasi, 
                  he was initiated into the cosmic sciences at the tender age of 12 by his grandfather, 
                  the late Pt. Shri Vishwanath Shastri Ji, a renowned scholar of his time.
                </p>
                <p>
                  After completing his formal education in Jyotish Shastra from Sampurnanand Sanskrit 
                  Vishwavidyalaya, he dedicated his life to helping people understand their destiny 
                  and overcome life's challenges through the wisdom of the stars.
                </p>
                <p>
                  His unique approach combines traditional Parashari and Jaimini systems with practical 
                  remedial measures, making ancient wisdom accessible and applicable to modern life.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: 'Jyotish Acharya' },
                  { icon: Award, text: 'Jyotish Shiromani Award' },
                  { icon: BookOpen, text: 'Vastu Visharad' },
                  { icon: Users, text: 'AIFAS Member' },
                ].map((cert, index) => (
                  <motion.div
                    key={cert.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-saffron-50 dark:bg-navy-800 rounded-lg"
                  >
                    <cert.icon className="w-5 h-5 text-saffron-600 dark:text-gold-400" />
                    <span className="text-sm font-medium text-navy-800 dark:text-white">
                      {cert.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Guiding principles that drive our service to humanity"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-800 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide authentic, ethical, and accessible astrological guidance that 
                empowers individuals to make informed decisions, overcome obstacles, and 
                align their lives with cosmic harmony for lasting prosperity and peace.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-800 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be a beacon of Vedic wisdom in the modern world, preserving the sacred 
                traditions of Jyotish and Vastu while making them relevant and practical 
                for contemporary life challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Milestones in our pursuit of astrological excellence"
          />

          <div className="max-w-3xl mx-auto">
            {JOURNEY_TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-saffron-500 to-gold-500" />
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-saffron-500 border-4 border-white dark:border-navy-900 shadow-lg" />

                {/* Content */}
                <div className="bg-saffron-50 dark:bg-navy-800 rounded-xl p-6 ml-4">
                  <span className="inline-block px-3 py-1 bg-saffron-500 text-white text-sm font-semibold rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every consultation and interaction"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'Every consultation is approached with empathy and genuine care for the client\'s well-being.',
              },
              {
                icon: BookOpen,
                title: 'Authenticity',
                description: 'We uphold the traditional methods and ethics of Vedic astrology without compromise.',
              },
              {
                icon: Users,
                title: 'Accessibility',
                description: 'Quality astrological guidance should be available to all, regardless of background.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <value.icon className="w-10 h-10 text-gold-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}