'use client'
import { motion } from 'framer-motion'
import { FiCoffee, FiHeart, FiStar, FiShoppingCart } from 'react-icons/fi'

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Coffee',
      icon: '☕',
      description: 'Artisanal coffee blends from around the world',
      items: [
        { name: 'Espresso', price: '$3.50', rating: 4.8, image: '☕' },
        { name: 'Cappuccino', price: '$4.99', rating: 4.9, image: '☕' },
        { name: 'Latte', price: '$4.50', rating: 4.7, image: '☕' },
        { name: 'Americano', price: '$3.99', rating: 4.6, image: '☕' },
      ],
      color: 'primary'
    },
    {
      id: 2,
      name: 'Cakes',
      icon: '🎂',
      description: 'Handcrafted cakes for every celebration',
      items: [
        { name: 'Chocolate Cake', price: '$28.99', rating: 4.9, image: '🎂' },
        { name: 'Vanilla Cake', price: '$25.99', rating: 4.8, image: '🎂' },
        { name: 'Red Velvet', price: '$32.99', rating: 4.9, image: '🎂' },
        { name: 'Carrot Cake', price: '$26.99', rating: 4.7, image: '🎂' },
      ],
      color: 'secondary'
    },
    {
      id: 3,
      name: 'Pastries',
      icon: '🥐',
      description: 'Freshly baked pastries and breads',
      items: [
        { name: 'Croissant', price: '$3.99', rating: 4.8, image: '🥐' },
        { name: 'Danish Pastry', price: '$4.50', rating: 4.7, image: '🥐' },
        { name: 'Pain au Chocolat', price: '$4.99', rating: 4.9, image: '🥐' },
        { name: 'Sourdough Bread', price: '$6.99', rating: 4.8, image: '🥐' },
      ],
      color: 'caramel'
    }
  ]

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
    <section id="menu" className="section-padding bg-gradient-to-b from-cream to-white">
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
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            Discover our carefully curated selection of artisanal coffee and freshly baked delights. 
            Each item is crafted with passion and the finest ingredients.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className={`p-8 rounded-t-3xl bg-gradient-to-br from-${category.color}-100 to-${category.color}-200`}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-playfair font-bold text-chocolate mb-2">
                    {category.name}
                  </h3>
                  <p className="text-chocolate/70">{category.description}</p>
                </div>
              </div>

              {/* Category Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{item.image}</div>
                        <div>
                          <h4 className="font-semibold text-chocolate">{item.name}</h4>
                          <div className="flex items-center space-x-1">
                            <FiStar className="text-yellow-400 text-sm" />
                            <span className="text-sm text-chocolate/60">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-primary-600">{item.price}</span>
                        <button className="p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors duration-300">
                          <FiShoppingCart className="text-primary-600" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View All Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 py-3 px-6 bg-${category.color}-500 hover:bg-${category.color}-600 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>View All {category.name}</span>
                  <FiCoffee className="text-lg" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-playfair font-bold mb-4">
            Special Offer Today!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get 20% off on all coffee and pastries when you order online
          </p>
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CategorySection 