'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiStar, FiMessageSquare, FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      rating: 5,
      image: '👩',
      text: 'The coffee here is absolutely amazing! I love their artisanal approach and the attention to detail. The pastries are always fresh and delicious. This has become my go-to spot for morning coffee.',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Coffee Enthusiast',
      rating: 5,
      image: '👨',
      text: 'As someone who\'s traveled the world tasting coffee, I can say this place serves some of the best espresso I\'ve ever had. The baristas are true professionals who care about their craft.',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Wedding Planner',
      rating: 5,
      image: '👩',
      text: 'I ordered a custom wedding cake from Sweet Delights and it was absolutely stunning! Not only did it look perfect, but it tasted incredible too. All my clients loved it!',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Local Business Owner',
      rating: 5,
      image: '👨',
      text: 'I bring clients here for meetings all the time. The atmosphere is perfect, the service is excellent, and the quality is consistently outstanding. Highly recommended!',
      date: '1 month ago'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Food Blogger',
      rating: 5,
      image: '👩',
      text: 'I\'ve reviewed hundreds of cafes, and Sweet Delights stands out for their commitment to quality. Every visit is a delightful experience. Their croissants are to die for!',
      date: '2 weeks ago'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="section-padding bg-gradient-to-b from-cream to-white">
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
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12"
        >
          <div className="text-center">
            {/* Quote Icon */}
                          <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <FiMessageSquare className="text-3xl text-primary-600" />
              </div>

            {/* Rating */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>

            {/* Testimonial Text */}
                          <p className="text-xl text-chocolate/80 leading-relaxed mb-8 max-w-4xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
                              <div className="text-4xl">{testimonials[currentIndex].image}</div>
              <div className="text-left">
                                  <div className="font-bold text-chocolate text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-chocolate/60">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-chocolate/40">
                    {testimonials[currentIndex].date}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-primary-50"
          >
            <FiChevronLeft className="text-chocolate text-xl" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-500' 
                    : 'bg-gray-300 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-primary-50"
          >
            <FiChevronRight className="text-chocolate text-xl" />
          </button>
        </div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-chocolate/80 mb-4 leading-relaxed">
                "{testimonial.text.length > 120 
                  ? testimonial.text.substring(0, 120) + '...' 
                  : testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-chocolate">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-chocolate/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-playfair font-bold mb-4">
            Overall Rating
          </h3>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="text-6xl font-bold">4.9</div>
            <div className="text-left">
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-300 text-xl" />
                ))}
              </div>
              <div className="text-sm opacity-90">Based on 500+ reviews</div>
            </div>
          </div>
          <p className="text-lg opacity-90">
            Join thousands of satisfied customers who love our coffee and pastries!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 