// app/contact/ContactPageContent.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin,Facebook,
  Instagram,
  Youtube,
  Twitter,
  Clock,
  MessageCircle,
  Send
  } from 'lucide-react'
  import { Input, Textarea } from '@/components/ui/Input'
  import { Button } from '@/components/ui/Button'
  import { SectionHeading } from '@/components/ui/SectionHeading'
  import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'
  import { formatWhatsAppUrl } from '@/lib/utils'
  import { useState } from 'react'
  
  export function ContactPageContent() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
  const { name, value } = e.target
  setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)// Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000))
  
  console.log('Contact form submitted:', formData)
  setIsSubmitting(false)
  
  // Reset form
  setFormData({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })}

  const contactMethods = [
  {
  icon: Phone,
  title: 'Phone',
  value: CONTACT_INFO.phone,
  href: `tel:${CONTACT_INFO.phone}`,
  description: 'Mon-Sat, 9 AM - 7 PM',
  },
  {
  icon: MessageCircle,
  title: 'WhatsApp',
  value: 'Chat with us',
  href: formatWhatsAppUrl(CONTACT_INFO.whatsapp),
  description: 'Quick response guaranteed',
  },
  {
  icon: Mail,
  title: 'Email',
  value: CONTACT_INFO.email,
  href: `mailto:${CONTACT_INFO.email}`,
  description: 'We reply within 24 hours',
  },
  {
  icon: MapPin,
  title: 'Visit Us',
  value: 'Kokta, MP',
  href: '#map',
  description: 'By appointment only',
  },
  ]
  
  const socialLinks = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  ]
  
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
  ॐ सर्वे भवन्तु सुखिनः
  </span>
  <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 dark:text-white mb-6">
  Get In Touch
  </h1>
  <p className="text-lg text-gray-600 dark:text-gray-300">
  We're here to guide you on your spiritual journey. Reach out to us
  for consultations, queries, or any assistance you need.
  </p>
  </motion.div>
  </div>
  </section>
  
  {/* Contact Methods */}
  <section className="py-12 bg-white dark:bg-navy-900">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.href}
            target={method.title === 'WhatsApp' ? '_blank' : undefined}
            rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group p-6 bg-gray-50 dark:bg-navy-800 rounded-2xl hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <method.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-heading font-bold text-navy-800 dark:text-white mb-1">
              {method.title}
            </h3>
            <p className="text-saffron-600 dark:text-gold-400 font-medium mb-1">
              {method.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {method.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>

  {/* Main Content: Form & Map */}
  <section className="py-20 bg-gray-50 dark:bg-navy-800">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-navy-800 dark:text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <Input
                label="Email Address *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />

              <Input
                label="Subject *"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                required
              />

              <Textarea
                label="Your Message *"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                rows={5}
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                rightIcon={<Send size={18} />}
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Map & Address */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Google Map */}
          <div id="map" className="bg-white dark:bg-navy-900 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={CONTACT_INFO.googleMapsUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Office Location"
            />
          </div>

          {/* Address Card */}
          <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-4">
              Our Office
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-navy-800 dark:text-white">Address</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-navy-800 dark:text-white">Working Hours</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-saffron-500 to-gold-500 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-heading font-bold mb-4">
              Connect With Us
            </h3>
            <p className="text-white/90 mb-6">
              Follow us on social media for daily insights, tips, and updates.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-20 bg-white dark:bg-navy-900">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Quick answers to common queries"
      />

      <div className="max-w-3xl mx-auto">
        {[
          {
            question: 'How do I book a consultation?',
            answer: 'You can book a consultation through our website by visiting the "Book Consultation" page, or reach out to us directly via WhatsApp or phone call.',
          },
          {
            question: 'What information do I need for a Kundli reading?',
            answer: 'You will need your exact date of birth, time of birth (as accurate as possible), and place of birth. If you have an existing Kundli, please bring that as well.',
          },
          {
            question: 'Do you offer online consultations?',
            answer: 'Yes, we offer consultations via video call for clients who cannot visit in person. The experience and accuracy remain the same as in-person consultations.',
          },
          {
            question: 'How long does a typical consultation take?',
            answer: 'A standard consultation typically takes 45-60 minutes. Comprehensive readings or Vastu consultations may take longer depending on the complexity.',
          },
          {
            question: 'Are the consultations confidential?',
            answer: 'Absolutely. All consultations and personal information shared are kept strictly confidential. Your privacy is our priority.',
          },
        ].map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-4"
          >
            <details className="group bg-gray-50 dark:bg-navy-800 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-heading font-semibold text-navy-800 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron-100 dark:bg-navy-700 flex items-center justify-center text-saffron-600 dark:text-gold-400 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
</div>)}  