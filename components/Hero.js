'use client'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-cream to-secondary-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-4 md:left-10 animate-float">
        <div className="w-3 h-3 md:w-4 md:h-4 bg-primary-300 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-4 md:right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-4 h-4 md:w-6 md:h-6 bg-secondary-300 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-40 left-4 md:left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-caramel rounded-full opacity-60"></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-sm text-chocolate/70">4.9/5 from 500+ reviews</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-chocolate mb-6"
            >
              Artisan
              <span className="text-gradient block">Coffee</span>
              & Fresh
              <span className="text-gradient block">Bakery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-chocolate/70 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Experience the perfect blend of artisanal coffee and freshly baked delights. 
              Every cup and every bite tells a story of passion and craftsmanship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary group">
                <span>Explore Menu</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group">
                <FiPlay className="mr-2" />
                <span>Watch Story</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-8 mt-8 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-600">500+</div>
                <div className="text-xs sm:text-sm text-chocolate/60">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-600">50+</div>
                <div className="text-xs sm:text-sm text-chocolate/60">Unique Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-600">5+</div>
                <div className="text-xs sm:text-sm text-chocolate/60">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">☕</div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold">Fresh Coffee & Pastries</div>
                    <div className="text-sm sm:text-base lg:text-lg opacity-90">Artisan Quality</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-primary-600">$4.99</div>
                  <div className="text-xs md:text-sm text-chocolate/60">Cappuccino</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-secondary-600">$3.99</div>
                  <div className="text-xs md:text-sm text-chocolate/60">Croissant</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 