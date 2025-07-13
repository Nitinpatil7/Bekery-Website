'use client'
import { motion } from 'framer-motion'
import { FiAward, FiCoffee, FiHeart, FiClock, FiStar, FiUsers } from 'react-icons/fi'

const WhyUs = () => {
  const features = [
    {
      id: 1,
      icon: FiAward,
      title: 'Award Winning',
      description: 'Recognized for excellence in artisanal coffee and pastry making',
      color: 'primary'
    },
    {
      id: 2,
      icon: FiCoffee,
      title: 'Fresh Daily',
      description: 'All our products are baked fresh every morning',
      color: 'secondary'
    },
    {
      id: 3,
      icon: FiHeart,
      title: 'Made with Love',
      description: 'Every creation is crafted with passion and care',
      color: 'caramel'
    },
    {
      id: 4,
      icon: FiClock,
      title: 'Quick Service',
      description: 'Fast and efficient service without compromising quality',
      color: 'primary'
    },
    {
      id: 5,
      icon: FiStar,
      title: 'Premium Quality',
      description: 'Only the finest ingredients make it into our recipes',
      color: 'secondary'
    },
    {
      id: 6,
      icon: FiUsers,
      title: 'Community Focused',
      description: 'Building relationships with our local community',
      color: 'caramel'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '50+', label: 'Unique Recipes' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Fresh Daily' }
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
    <section id="about" className="section-padding bg-gradient-to-b from-cream to-white">
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
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            We're not just another coffee shop. We're a community of passionate artisans 
            dedicated to creating exceptional experiences through every cup and every bite.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${feature.color}-100 flex items-center justify-center group-hover:bg-${feature.color}-200 transition-colors duration-300`}>
                <feature.icon className={`text-3xl text-${feature.color}-600`} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-chocolate mb-4">
                {feature.title}
              </h3>
              <p className="text-chocolate/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Our Numbers Speak
            </h3>
            <p className="text-lg opacity-90">
              Trusted by hundreds of customers daily
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-playfair font-bold text-chocolate mb-6">
              Our Story
            </h3>
            <p className="text-lg text-chocolate/70 mb-6 leading-relaxed">
              What started as a small passion project has grown into a beloved community hub. 
              Our journey began with a simple dream: to create the perfect cup of coffee and 
              the most delicious pastries that would bring people together.
            </p>
            <p className="text-lg text-chocolate/70 mb-8 leading-relaxed">
              Today, we continue to honor that dream with every batch we bake and every cup 
              we brew. Our commitment to quality, community, and craftsmanship remains at 
              the heart of everything we do.
            </p>
            <button className="btn-primary">
              Read Our Full Story
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl h-80 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏆</div>
                <div className="text-2xl font-playfair font-bold">Our Journey</div>
                <div className="text-lg opacity-90">From Dream to Reality</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">2019</div>
                <div className="text-sm text-chocolate/60">Founded</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600">2024</div>
                <div className="text-sm text-chocolate/60">Today</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs 