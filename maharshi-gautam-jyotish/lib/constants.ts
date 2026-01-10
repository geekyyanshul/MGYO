// lib/constants.ts

// Contact Information
export const CONTACT_INFO = {
    phone: '+91 9754933444',
    whatsapp: '+91 9754933444',
    email: 'info@mgvastuanusandhan.com',
    address: '43-Rajdhani Parisar Infront of kokta RTO,Bhopal-462023(M.P.)',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115736.89829818584!2d82.91093891640625!3d25.317645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890',
  }
  
  // Social Media Links
  export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/mgvastuanusandhan',
    instagram: 'https://instagram.com/mgvastuanusandhan',
    youtube: 'https://youtube.com/@mgvastuanusandhan',
    twitter: 'https://twitter.com/mgvastuanusandhan',
  }
  
  // Navigation Links
  export const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]
  
  // Services Data
  export const SERVICES = [
    {
      id: 'kundli-analysis',
      title: 'Kundli Analysis',
      shortDesc: 'Detailed birth chart analysis for life insights',
      fullDesc: 'Get comprehensive insights into your life path through detailed Kundli analysis. Our expert astrologers examine planetary positions, houses, and aspects to provide guidance on career, relationships, health, and spiritual growth.',
      icon: 'scroll',
      price: '₹1,100',
      duration: '45-60 mins',
    },
    {
      id: 'career-guidance',
      title: 'Career Guidance',
      shortDesc: 'Astrological guidance for professional success',
      fullDesc: 'Navigate your professional journey with clarity. We analyze your 10th house, planetary periods, and career indicators to suggest the most favorable fields, timing for job changes, and business opportunities.',
      icon: 'briefcase',
      price: '₹1,500',
      duration: '45-60 mins',
    },
    {
      id: 'marriage-matching',
      title: 'Marriage Matching',
      shortDesc: 'Kundli matching for harmonious partnerships',
      fullDesc: 'Ensure a harmonious and prosperous married life through traditional Kundli matching. We analyze 36 Gunas, Manglik dosha, and other compatibility factors for both partners.',
      icon: 'heart',
      price: '₹2,100',
      duration: '60-90 mins',
    },
    {
      id: 'vastu-home',
      title: 'Vastu for Home',
      shortDesc: 'Create positive energy in your living space',
      fullDesc: 'Transform your home into a sanctuary of positive energy. Our Vastu consultation covers room placement, direction alignment, color schemes, and remedies for any existing Vastu doshas.',
      icon: 'home',
      price: '₹3,500',
      duration: 'Site visit required',
    },
    {
      id: 'vastu-office',
      title: 'Vastu for Office',
      shortDesc: 'Enhance business success with Vastu principles',
      fullDesc: 'Boost productivity and prosperity in your workplace. We provide comprehensive Vastu analysis for office layout, cabin placements, reception area, and cash counter positioning.',
      icon: 'building',
      price: '₹5,000',
      duration: 'Site visit required',
    },
    {
      id: 'muhurat',
      title: 'Muhurat Selection',
      shortDesc: 'Find auspicious timing for important events',
      fullDesc: 'Choose the most auspicious moments for new beginnings. Whether it\'s a wedding, business launch, property purchase, or any significant event, we calculate the perfect Muhurat based on your Kundli.',
      icon: 'calendar',
      price: '₹800',
      duration: '30-45 mins',
    },
    {
      id: 'remedies',
      title: 'Astrological Remedies',
      shortDesc: 'Personalized solutions for planetary afflictions',
      fullDesc: 'Receive customized remedial measures for challenging planetary periods. We suggest appropriate gemstones, mantras, yantras, and ritualistic remedies based on your unique horoscope.',
      icon: 'gem',
      price: '₹1,200',
      duration: '45 mins',
    },
    {
      id: 'yearly-prediction',
      title: 'Yearly Predictions',
      shortDesc: 'Comprehensive forecast for the year ahead',
      fullDesc: 'Plan your year with confidence through detailed yearly predictions. We analyze Mahadasha, Antardasha, and annual transits to provide month-by-month guidance.',
      icon: 'sun',
      price: '₹2,500',
      duration: '60-90 mins',
    },
  ]
  
  // Testimonials Data
  export const TESTIMONIALS = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'The Kundli analysis was incredibly accurate. Guruji predicted my job change 3 months in advance, and it happened exactly as he said. Highly recommended!',
      service: 'Kundli Analysis',
      avatar: '/images/testimonials/avatar1.jpg',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'We consulted for marriage matching and the guidance was invaluable. The detailed analysis of both kundlis gave us and our families great confidence.',
      service: 'Marriage Matching',
      avatar: '/images/testimonials/avatar2.jpg',
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'After implementing the Vastu changes suggested for my office, I have seen a remarkable improvement in business. My revenue increased by 40% in 6 months!',
      service: 'Vastu for Office',
      avatar: '/images/testimonials/avatar3.jpg',
    },
    {
      id: 4,
      name: 'Sunita Devi',
      location: 'Jaipur',
      rating: 5,
      text: 'The remedies suggested by Guruji helped me overcome a very difficult period in my life. His knowledge and compassion are truly remarkable.',
      service: 'Astrological Remedies',
      avatar: '/images/testimonials/avatar4.jpg',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Lucknow',
      rating: 5,
      text: 'I was skeptical at first, but the accuracy of the predictions left me amazed. The Muhurat selected for our house-warming brought great prosperity.',
      service: 'Muhurat Selection',
      avatar: '/images/testimonials/avatar5.jpg',
    },
  ]
  
  // Blog Posts Data
  export const BLOG_POSTS = [
    {
      id: 1,
      title: 'Understanding the Power of Navagrahas in Your Life',
      slug: 'understanding-navagrahas',
      excerpt: 'Discover how the nine planets influence different aspects of your life and how to harness their positive energies.',
      content: '',
      image: '/images/blog/navagraha.jpg',
      category: 'Jyotish',
      author: 'Pt. Maharshi Gautam',
      publishedAt: '2024-01-15',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Vastu Tips for a Prosperous Home',
      slug: 'vastu-tips-prosperous-home',
      excerpt: 'Simple yet effective Vastu principles that can transform your home into a hub of positive energy and prosperity.',
      content: '',
      image: '/images/blog/vastu-home.jpg',
      category: 'Vastu',
      author: 'Pt. Maharshi Gautam',
      publishedAt: '2024-01-10',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'The Significance of Mahadasha in Vedic Astrology',
      slug: 'significance-of-mahadasha',
      excerpt: 'Learn about the planetary periods (Dasha) and how they shape the major events and phases of your life.',
      content: '',
      image: '/images/blog/mahadasha.jpg',
      category: 'Jyotish',
      author: 'Pt. Maharshi Gautam',
      publishedAt: '2024-01-05',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Gemstones: Your Cosmic Allies for Success',
      slug: 'gemstones-cosmic-allies',
      excerpt: 'A comprehensive guide to understanding which gemstones can enhance your planetary strengths.',
      content: '',
      image: '/images/blog/gemstones.jpg',
      category: 'Remedies',
      author: 'Pt. Maharshi Gautam',
      publishedAt: '2024-01-01',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Choosing the Right Muhurat for Marriage',
      slug: 'muhurat-for-marriage',
      excerpt: 'Understanding the astrological factors that make a wedding date truly auspicious for the couple.',
      content: '',
      image: '/images/blog/marriage-muhurat.jpg',
      category: 'Muhurat',
      author: 'Pt. Maharshi Gautam',
      publishedAt: '2023-12-28',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Vastu Remedies Without Demolition',
      slug: 'vastu-remedies-without-demolition',
      excerpt: 'Practical Vastu solutions that don\'t require structural changes to your existing property.',
      content: '',
      image: '/images/blog/vastu-remedies.jpg',
      category: 'Vastu',
      author: 'Pt. Maharshi Gautam',
      publishedAt: '2023-12-20',
      readTime: '5 min read',
    },
  ]
  
  // Why Choose Us Data
  export const WHY_CHOOSE_US = [
    {
      title: '25+ Years Experience',
      description: 'Decades of dedicated practice in Vedic astrology and Vastu Shastra',
      icon: 'award',
    },
    {
      title: 'Authentic Knowledge',
      description: 'Traditional wisdom passed down through generations of learned scholars',
      icon: 'book-open',
    },
    {
      title: '10,000+ Consultations',
      description: 'Successfully guided thousands of individuals and families',
      icon: 'users',
    },
    {
      title: 'Personalized Approach',
      description: 'Every consultation is tailored to your unique birth chart and needs',
      icon: 'target',
    },
    {
      title: 'Confidential Service',
      description: 'Your personal information and consultations remain strictly private',
      icon: 'shield',
    },
    {
      title: 'Affordable Guidance',
      description: 'Quality astrological services accessible to everyone',
      icon: 'heart-handshake',
    },
  ]
  
  // Timeline/Journey Data
  export const JOURNEY_TIMELINE = [
    {
      year: '1998',
      title: 'Beginning of the Journey',
      description: 'Started learning Vedic astrology under the guidance of revered Guru Pt. Shri Ram Sharma in Varanasi.',
    },
    {
      year: '2003',
      title: 'Formal Education Completed',
      description: 'Completed Jyotish Acharya from Sampurnanand Sanskrit Vishwavidyalaya, Varanasi.',
    },
    {
      year: '2005',
      title: 'Vastu Shastra Mastery',
      description: 'Obtained certification in Vastu Shastra from All India Federation of Astrologers\' Societies.',
    },
    {
      year: '2010',
      title: 'Established Sansthan',
      description: 'Founded Maharshi Gautam Jyotish & Vastu Anusandhan Sansthan to serve the community.',
    },
    {
      year: '2015',
      title: 'National Recognition',
      description: 'Received "Jyotish Shiromani" award from the Astrological Society of India.',
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Launched online consultation services to reach devotees across the globe.',
    },
    {
      year: 'Present',
      title: 'Continuing the Mission',
      description: 'Serving thousands of families with authentic Jyotish and Vastu guidance.',
    },
  ]
  
  // Problem Types for Consultation Form
  export const PROBLEM_TYPES = [
    'Kundli Analysis',
    'Career & Business',
    'Marriage & Relationship',
    'Health Concerns',
    'Vastu Consultation',
    'Muhurat Selection',
    'Astrological Remedies',
    'Child Birth & Education',
    'Financial Issues',
    'Legal Matters',
    'Other',
  ]
  
  // Time Slots for Consultation
  export const TIME_SLOTS = [
    
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
  ]