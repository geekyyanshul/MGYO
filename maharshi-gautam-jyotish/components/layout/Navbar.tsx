// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme, mounted } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-navy-800 dark:bg-navy-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="text-saffron-400">ॐ नमः शिवाय</span>
            <span className="text-gold-400">|</span>
            <span>श्री गणेशाय नमः</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="flex items-center gap-2 hover:text-saffron-400 transition-colors"
            >
              <Phone size={14} />
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              {/* Logo placeholder - Om symbol */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                ॐ
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-heading font-bold text-navy-800 dark:text-white leading-tight">
                Maharshi Gautam
              </h1>
              <p className="text-xs md:text-sm text-saffron-600 dark:text-gold-400">
                Jyotish & Vastu Sansthan
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-base font-medium transition-colors duration-200',
                  'hover:text-saffron-600 dark:hover:text-gold-400',
                  pathname === link.href
                    ? 'text-saffron-600 dark:text-gold-400'
                    : 'text-navy-800 dark:text-white'
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron-500 to-gold-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  'hover:bg-gray-100 dark:hover:bg-navy-700',
                  'text-navy-800 dark:text-white'
                )}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Book Consultation Button - Desktop */}
            <Link href="/book-consultation" className="hidden md:block">
              <Button variant="primary" size="sm">
                Book Consultation
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                'hover:bg-gray-100 dark:hover:bg-navy-700',
                'text-navy-800 dark:text-white'
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-navy-900 border-t border-gray-100 dark:border-navy-700"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-3 px-4 rounded-lg text-lg font-medium transition-colors',
                        'hover:bg-saffron-50 dark:hover:bg-navy-800',
                        pathname === link.href
                          ? 'text-saffron-600 dark:text-gold-400 bg-saffron-50 dark:bg-navy-800'
                          : 'text-navy-800 dark:text-white'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.1 }}
                  className="pt-4"
                >
                  <Link href="/book-consultation" className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      Book Consultation
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}