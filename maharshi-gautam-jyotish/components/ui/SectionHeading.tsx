// components/ui/SectionHeading.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      {/* Om Symbol Decoration */}
      <div className={cn('flex items-center gap-4 mb-4', centered && 'justify-center')}>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-saffron-500" />
        <span className="text-2xl text-saffron-500 dark:text-gold-400">ॐ</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-saffron-500" />
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-800 dark:text-white mb-4">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Decorative Line */}
      <div className={cn('flex items-center gap-2 mt-6', centered && 'justify-center')}>
        <span className="h-1 w-16 bg-gradient-to-r from-saffron-500 to-gold-400 rounded-full" />
        <span className="h-2 w-2 bg-saffron-500 rounded-full" />
        <span className="h-1 w-16 bg-gradient-to-l from-saffron-500 to-gold-400 rounded-full" />
      </div>
    </motion.div>
  )
}