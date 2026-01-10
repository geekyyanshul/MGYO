
// components/shared/ServiceCard.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, IndianRupee } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ServiceCardProps {
  id: string
  title: string
  shortDesc: string
  icon: React.ReactNode
  price: string
  duration: string
}

export function ServiceCard({
  id,
  title,
  shortDesc,
  icon,
  price,
  duration,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-navy-900 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
    >
      {/* Card Header with Icon */}
      <div className="p-6 pb-0">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {shortDesc}
        </p>

        {/* Price & Duration */}
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="flex items-center gap-1 text-saffron-600 dark:text-gold-400 font-semibold">
            <IndianRupee className="w-4 h-4" />
            {price}
          </span>
          <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
        </div>

        {/* Book Now Link */}
        <Link
          href={`/book-consultation?service=${id}`}
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
}