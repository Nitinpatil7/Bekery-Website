'use client'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiCoffee, FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FiCoffee className="text-2xl md:text-3xl text-primary-500 animate-bounce-gentle" />
            <span className="text-lg md:text-2xl font-playfair font-bold text-chocolate">
              Sweet Delights
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-chocolate hover:text-primary-500 font-medium transition-colors duration-300 relative group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-primary flex items-center space-x-2 text-sm lg:text-base">
              <FiShoppingCart className="text-lg" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-chocolate hover:text-primary-500 transition-colors duration-300 p-1"
          >
            {isOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg mx-4 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-chocolate hover:text-primary-500 hover:bg-primary-50 rounded-md transition-all duration-300 text-sm"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <button className="btn-primary w-full flex items-center justify-center space-x-2 text-sm">
                <FiShoppingCart className="text-lg" />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 