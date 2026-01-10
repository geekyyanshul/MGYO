// components/home/Testimonials.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-navy-800 to-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 mandala-bg" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Words of Blessing"
          subtitle="What our clients say about their transformative journey with us"
        />

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-gold-400 mb-6 opacity-50" />

                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 italic">
                    "{TESTIMONIALS[currentIndex].text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white text-xl font-bold">
                      {TESTIMONIALS[currentIndex].name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {TESTIMONIALS[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {TESTIMONIALS[currentIndex].location} • {TESTIMONIALS[currentIndex].service}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}