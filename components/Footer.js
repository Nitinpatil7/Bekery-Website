'use client'
import { motion } from 'framer-motion'
import { FiCoffee, FiMail, FiPhone, FiMapPin, FiClock, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Careers', href: '#' }
    ],
    services: [
      { name: 'Coffee Menu', href: '#menu' },
      { name: 'Custom Cakes', href: '#custom-order' },
      { name: 'Catering', href: '#' },
      { name: 'Events', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Order Status', href: '#' },
      { name: 'Returns', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiYoutube, href: '#', label: 'YouTube' }
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
    <footer className="bg-chocolate text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-6">
                <FiCoffee className="text-3xl text-primary-400" />
                <span className="text-2xl font-playfair font-bold">
                  Sweet Delights
                </span>
              </motion.div>
              <motion.p variants={itemVariants} className="text-gray-300 mb-6 leading-relaxed">
                Crafting exceptional coffee and bakery experiences since 2019. 
                We're passionate about quality, community, and creating moments of joy.
              </motion.p>
              
              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-primary-400" />
                  <span className="text-gray-300">123 Coffee Street, BD 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-primary-400" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="text-primary-400" />
                  <span className="text-gray-300">hello@sweetdelights.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiClock className="text-primary-400" />
                  <span className="text-gray-300">Mon-Sat: 7AM-8PM</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <motion.div key={category} variants={itemVariants}>
                    <h3 className="text-lg font-semibold mb-4 capitalize">
                      {category}
                    </h3>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for exclusive offers, new menu items, and bakery updates.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © {currentYear} Sweet Delights. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>We accept:</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">💳</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">📱</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">💻</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </footer>
  )
}

export default Footer 