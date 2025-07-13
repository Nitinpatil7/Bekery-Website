'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiUser, FiPhone, FiCalendar, FiMessageSquare, FiSend } from 'react-icons/fi'

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    cakeFlavor: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const cakeFlavors = [
    'Chocolate',
    'Vanilla',
    'Red Velvet',
    'Carrot',
    'Lemon',
    'Strawberry',
    'Coffee',
    'Custom'
  ]

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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.date) {
      newErrors.date = 'Date is required'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past'
      }
    }

    if (!formData.cakeFlavor) {
      newErrors.cakeFlavor = 'Please select a cake flavor'
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
        phone: '',
        date: '',
        cakeFlavor: '',
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
    <section className="section-padding bg-gradient-to-b from-white to-cream">
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
            Custom <span className="text-gradient">Order</span>
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            Have a special celebration coming up? Let us create a custom cake just for you. 
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
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
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                  Order Submitted Successfully!
                </h3>
                <p className="text-chocolate/70 mb-6">
                  Thank you for your custom order. We'll contact you within 24 hours to discuss the details.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Place Another Order
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
                    <FiPhone className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-chocolate font-medium mb-2">
                    <FiCalendar className="inline mr-2" />
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.date 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-chocolate font-medium mb-2">
                    <FiMessageSquare className="inline mr-2" />
                    Cake Flavor *
                  </label>
                  <select
                    name="cakeFlavor"
                    value={formData.cakeFlavor}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.cakeFlavor 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500'
                    }`}
                  >
                    <option value="">Select a flavor</option>
                    {cakeFlavors.map((flavor) => (
                      <option key={flavor} value={flavor}>
                        {flavor}
                      </option>
                    ))}
                  </select>
                  {errors.cakeFlavor && (
                    <p className="text-red-500 text-sm mt-1">{errors.cakeFlavor}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-chocolate font-medium mb-2">
                    <FiMessageSquare className="inline mr-2" />
                    Special Instructions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all duration-300"
                    placeholder="Tell us about your special requirements, design preferences, or any other details..."
                  />
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
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-lg" />
                        <span>Submit Order</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Pricing Info */}
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-6">
              <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                Pricing Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-chocolate">Basic Cake (6-8 servings)</span>
                  <span className="font-bold text-primary-600">$25-35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-chocolate">Medium Cake (10-12 servings)</span>
                  <span className="font-bold text-primary-600">$40-55</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-chocolate">Large Cake (15-20 servings)</span>
                  <span className="font-bold text-primary-600">$60-80</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-chocolate">Custom Decorations</span>
                  <span className="font-bold text-primary-600">+$10-25</span>
                </div>
              </div>
            </div>

            {/* Process Info */}
            <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-6">
              <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate">Submit Order</h4>
                    <p className="text-sm text-chocolate/70">Fill out the form with your requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate">We'll Contact You</h4>
                    <p className="text-sm text-chocolate/70">Within 24 hours to discuss details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate">Pickup Your Cake</h4>
                    <p className="text-sm text-chocolate/70">Fresh and ready on your chosen date</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-chocolate mb-4">
                Need Help?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-primary-600" />
                  <span className="text-chocolate">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMessageSquare className="text-primary-600" />
                  <span className="text-chocolate">orders@sweetdelights.com</span>
                </div>
                <p className="text-sm text-chocolate/70 mt-4">
                  For urgent orders or special requests, please call us directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CustomOrderForm 