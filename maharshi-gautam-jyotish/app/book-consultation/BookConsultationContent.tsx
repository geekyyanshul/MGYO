// app/book-consultation/BookConsultationContent.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Input, Select, Textarea } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROBLEM_TYPES, TIME_SLOTS, CONTACT_INFO, SERVICES } from '@/lib/constants'
import { formatWhatsAppUrl } from '@/lib/utils'

export function BookConsultationContent() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service') || ''

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    problemType: preselectedService 
      ? SERVICES.find(s => s.id === preselectedService)?.title || ''
      : '',
    date: '',
    timeSlot: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In production, you would send this to your backend
    console.log('Form submitted:', formData)

    setIsSubmitting(false)
    setSubmitStatus('success')

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        problemType: '',
        date: '',
        timeSlot: '',
        message: '',
      })
      setSubmitStatus('idle')
    }, 5000)
  }

  const whatsappMessage = `Hello! I would like to book a consultation.
Name: ${formData.name}
Service: ${formData.problemType}
Preferred Date: ${formData.date}
Time: ${formData.timeSlot}`

  const whatsappUrl = formatWhatsAppUrl(CONTACT_INFO.whatsapp, whatsappMessage)

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

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
              ॐ शुभं भवतु
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-800 dark:text-white mb-6">
              Book Your Consultation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Take the first step towards clarity and guidance. Fill in your details 
              below to schedule your personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 dark:bg-navy-800 rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold text-navy-800 dark:text-white mb-6">
                  Consultation Request Form
                </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-400">
                        Request Submitted Successfully!
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-500">
                        We will contact you shortly to confirm your appointment.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-800 dark:text-red-400">
                        Submission Failed
                      </p>
                      <p className="text-sm text-red-700 dark:text-red-500">
                        Please try again or contact us directly via WhatsApp.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <Input
                        label="Full Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                      <User className="absolute right-3 top-10 w-5 h-5 text-gray-400" />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Input
                        label="Phone Number *"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                      <Phone className="absolute right-3 top-10 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                    <Mail className="absolute right-3 top-10 w-5 h-5 text-gray-400" />
                  </div>

                  {/* Problem Type */}
                  <Select
                    label="Consultation Type *"
                    name="problemType"
                    value={formData.problemType}
                    onChange={handleInputChange}
                    required
                    options={[
                      { value: '', label: 'Select consultation type' },
                      ...PROBLEM_TYPES.map((type) => ({ value: type, label: type })),
                    ]}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="relative">
                      <Input
                        label="Preferred Date *"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={today}
                        required
                      />
                      <Calendar className="absolute right-3 top-10 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Time Slot */}
                    <Select
                      label="Preferred Time *"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      required
                      options={[
                        { value: '', label: 'Select time slot' },
                        ...TIME_SLOTS.map((slot) => ({ value: slot, label: slot })),
                      ]}
                    />
                  </div>

                  {/* Message */}
                  <Textarea
                    label="Brief Description of Your Query"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your concerns or questions briefly..."
                    rows={4}
                  />

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="flex-1"
                    >
                      Submit Request
                    </Button>
                    
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        leftIcon={<MessageCircle size={20} />}
                        className="w-full border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                      >
                        Quick Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-saffron-500 to-gold-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-heading font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/90 mb-6">
                  For urgent consultations or quick queries, reach out to us directly.
                </p>
                
                <div className="space-y-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                  <a
                    href={formatWhatsAppUrl(CONTACT_INFO.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-50 dark:bg-navy-800 rounded-2xl p-6">
                <h3 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-4">
                  Consultation Hours
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold text-navy-800 dark:text-white">9 AM - 7 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-navy-800 dark:text-white">By Appointment</span>
                  </li>
                </ul>
              </div>

              {/* What to Prepare */}
              <div className="bg-gray-50 dark:bg-navy-800 rounded-2xl p-6">
                <h3 className="text-xl font-heading font-bold text-navy-800 dark:text-white mb-4">
                  What to Prepare
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5" />
                    <span>Date, time & place of birth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5" />
                    <span>Existing Kundli (if available)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5" />
                    <span>Specific questions or concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5" />
                    <span>Property layout (for Vastu)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}