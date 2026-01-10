// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'via.placeholder.com'],
      formats: ['image/avif', 'image/webp'],
    },
    experimental: {
      optimizeCss: true,
    },
  }
  
  module.exports = nextConfig