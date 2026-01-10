// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  ArrowRight 
} from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS, SERVICES } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-navy-800 dark:bg-navy-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Column 1: About */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white text-xl font-bold">
                ॐ
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Maharshi Gautam</h3>
                <p className="text-sm text-gray-400">Jyotish & Vastu Sansthan</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing authentic Vedic astrology and Vastu Shastra guidance since 1998. 
              Helping thousands find their path to prosperity and peace.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-700 hover:bg-saffron-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-700 hover:bg-saffron-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-700 hover:bg-saffron-500 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-700 hover:bg-saffron-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold text-xl mb-6 text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-saffron-400 transition-colors group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book-consultation"
                  className="flex items-center gap-2 text-gray-300 hover:text-saffron-400 transition-colors group"
                >
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Book Consultation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold text-xl mb-6 text-gold-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-saffron-400 transition-colors group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold text-xl mb-6 text-gold-400">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-saffron-400 transition-colors"
                >
                  <Phone size={20} className="mt-1 flex-shrink-0 text-saffron-500" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-saffron-400 transition-colors"
                >
                  <Mail size={20} className="mt-1 flex-shrink-0 text-saffron-500" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-saffron-500" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-navy-700 rounded-lg">
              <h5 className="font-semibold text-gold-400 mb-2">Working Hours</h5>
              <p className="text-sm text-gray-300">
                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                Sunday: By Appointment Only
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-saffron-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-saffron-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}