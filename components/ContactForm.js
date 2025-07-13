'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiClock } from 'react-icons/fi'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you. 
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">📧</div>
                <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-chocolate/70 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-chocolate font-medium mb-2">
                    <FiUser className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-chocolate font-medium mb-2">
                    <FiMail className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-chocolate font-medium mb-2">
                    <FiMessageSquare className="inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500'
                    }`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-lg" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-6">
              <h3 className="text-2xl font-playfair font-bold text-chocolate mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate">Address</h4>
                    <p className="text-chocolate/70">123 Coffee Street<br />Bakery District, BD 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate">Phone</h4>
                    <p className="text-chocolate/70">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-caramel rounded-full flex items-center justify-center">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate">Email</h4>
                    <p className="text-chocolate/70">hello@sweetdelights.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <FiClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate">Hours</h4>
                    <p className="text-chocolate/70">Mon-Sat: 7AM-8PM<br />Sunday: 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                Find Us
              </h3>
              <div className="bg-gradient-to-br from-primary-200 to-secondary-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">🗺️</div>
                  <div className="text-lg font-semibold">Google Maps</div>
                  <div className="text-sm opacity-90">Interactive map would be embedded here</div>
                  <button className="mt-4 px-6 py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-6">
              <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                Follow Us
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <button className="p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📘</div>
                    <div className="text-sm font-medium text-chocolate">Facebook</div>
                  </div>
                </button>
                <button className="p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📷</div>
                    <div className="text-sm font-medium text-chocolate">Instagram</div>
                  </div>
                </button>
                <button className="p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🐦</div>
                    <div className="text-sm font-medium text-chocolate">Twitter</div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 