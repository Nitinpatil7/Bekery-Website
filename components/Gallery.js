'use client'
import { motion } from 'framer-motion'
import { FiHeart, FiEye, FiShare2 } from 'react-icons/fi'

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Artisan Coffee',
      category: 'Coffee',
      image: '☕',
      description: 'Perfectly brewed artisanal coffee',
      likes: 128,
      views: '1.2k'
    },
    {
      id: 2,
      title: 'Chocolate Cake',
      category: 'Cakes',
      image: '🎂',
      description: 'Rich chocolate cake with ganache',
      likes: 256,
      views: '2.1k'
    },
    {
      id: 3,
      title: 'Fresh Croissants',
      category: 'Pastries',
      image: '🥐',
      description: 'Buttery, flaky croissants',
      likes: 189,
      views: '1.8k'
    },
    {
      id: 4,
      title: 'Cappuccino Art',
      category: 'Coffee',
      image: '☕',
      description: 'Latte art masterpiece',
      likes: 312,
      views: '3.5k'
    },
    {
      id: 5,
      title: 'Red Velvet Cake',
      category: 'Cakes',
      image: '🎂',
      description: 'Classic red velvet with cream cheese',
      likes: 445,
      views: '4.2k'
    },
    {
      id: 6,
      title: 'Danish Pastry',
      category: 'Pastries',
      image: '🥐',
      description: 'Sweet Danish with fruit filling',
      likes: 167,
      views: '1.6k'
    },
    {
      id: 7,
      title: 'Espresso Shot',
      category: 'Coffee',
      image: '☕',
      description: 'Perfect espresso extraction',
      likes: 203,
      views: '2.3k'
    },
    {
      id: 8,
      title: 'Wedding Cake',
      category: 'Cakes',
      image: '🎂',
      description: 'Elegant wedding cake design',
      likes: 567,
      views: '5.1k'
    }
  ]

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-cream">
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
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            Take a visual journey through our delicious creations. Each image tells a story of passion, 
            creativity, and the finest ingredients.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['All', 'Coffee', 'Cakes', 'Pastries'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-3 rounded-full bg-white hover:bg-primary-500 hover:text-white text-chocolate font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {item.image}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-4">
                    <button className="p-3 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform hover:scale-110">
                      <FiHeart className="text-red-500" />
                    </button>
                    <button className="p-3 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform hover:scale-110">
                      <FiEye className="text-blue-500" />
                    </button>
                    <button className="p-3 bg-white/90 hover:bg-white rounded-full transition-all duration-300 transform hover:scale-110">
                      <FiShare2 className="text-green-500" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-chocolate mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-chocolate/70 text-sm mb-4">
                  {item.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-chocolate/60">
                  <div className="flex items-center space-x-1">
                    <FiHeart className="text-red-400" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiEye className="text-blue-400" />
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary group">
            <span>Load More</span>
            <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery 