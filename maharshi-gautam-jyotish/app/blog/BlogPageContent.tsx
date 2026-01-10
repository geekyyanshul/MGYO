// app/blog/BlogPageContent.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { BLOG_POSTS } from '@/lib/constants'

export function BlogPageContent() {
  const categories = ['All', ...new Set(BLOG_POSTS.map((post) => post.category))]

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
              ज्ञानं परमं बलम्
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 dark:text-white mb-6">
              Wisdom & Insights
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore the depths of Vedic knowledge through our articles on astrology, 
              Vastu, and spiritual wisdom for modern life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-navy-900 border-b border-gray-100 dark:border-navy-700 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-saffron-100 dark:hover:bg-saffron-900/30 hover:text-saffron-600 dark:hover:text-saffron-400"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-navy-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-saffron-100 to-gold-100 dark:from-navy-700 dark:to-navy-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-30">📿</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-saffron-500 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-3 group-hover:text-saffron-600 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-saffron-600 dark:text-gold-400 font-medium group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Stay Connected with Cosmic Wisdom
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for weekly insights on astrology, Vastu tips, 
              and auspicious dates directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </form>

            <p className="mt-4 text-sm text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}