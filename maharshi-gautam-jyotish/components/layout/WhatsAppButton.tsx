// components/layout/WhatsAppButton.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'
import { formatWhatsAppUrl } from '@/lib/utils'

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const whatsappUrl = formatWhatsAppUrl(
    CONTACT_INFO.whatsapp,
    'Hello! I would like to inquire about your Jyotish/Vastu services.'
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-navy-800 rounded-lg shadow-xl p-4 w-64"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              👋 Need help? Chat with us on WhatsApp!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white text-center rounded-lg text-sm font-medium transition-colors"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg text-white transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
        
        {/* Pulse Animation */}
        <span className="absolute w-14 h-14 bg-green-500 rounded-full animate-ping opacity-25" />
      </motion.a>
    </div>
  )
}