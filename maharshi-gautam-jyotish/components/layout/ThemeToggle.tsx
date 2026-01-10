// components/layout/ThemeToggle.tsx
'use client'

import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-navy-700 animate-pulse" />
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={cn(
        'relative w-16 h-8 rounded-full p-1',
        'bg-gray-200 dark:bg-navy-700',
        'transition-colors duration-300'
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        layout
        className={cn(
          'w-6 h-6 rounded-full',
          'bg-white shadow-md',
          'flex items-center justify-center',
          theme === 'dark' ? 'ml-auto' : 'ml-0'
        )}
      >
        {theme === 'dark' ? (
          <Moon size={14} className="text-navy-800" />
        ) : (
          <Sun size={14} className="text-saffron-500" />
        )}
      </motion.div>
    </motion.button>
  )
}