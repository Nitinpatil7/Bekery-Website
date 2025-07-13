'use client'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiUsers, FiTrendingUp, FiClock, FiStar, FiCoffee } from 'react-icons/fi'

const OrderSummary = () => {
  const stats = [
    {
      id: 1,
      icon: FiShoppingCart,
      number: '2,500+',
      label: 'Total Orders',
      description: 'Orders completed successfully',
      color: 'primary',
      trend: '+15%'
    },
    {
      id: 2,
      icon: FiUsers,
      number: '500+',
      label: 'Daily Customers',
      description: 'Happy customers served daily',
      color: 'secondary',
      trend: '+8%'
    },
    {
      id: 3,
      icon: FiTrendingUp,
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Customer satisfaction score',
      color: 'caramel',
      trend: '+2%'
    },
    {
      id: 4,
      icon: FiClock,
      number: '5 min',
      label: 'Average Wait',
      description: 'Average order preparation time',
      color: 'primary',
      trend: '-10%'
    }
  ]

  const recentOrders = [
    {
      id: 1,
      customer: 'Sarah M.',
      items: ['Cappuccino', 'Croissant'],
      total: '$8.98',
      time: '2 min ago',
      status: 'completed'
    },
    {
      id: 2,
      customer: 'Mike R.',
      items: ['Espresso', 'Danish'],
      total: '$7.49',
      time: '5 min ago',
      status: 'preparing'
    },
    {
      id: 3,
      customer: 'Emma L.',
      items: ['Latte', 'Chocolate Cake'],
      total: '$12.99',
      time: '8 min ago',
      status: 'completed'
    },
    {
      id: 4,
      customer: 'David K.',
      items: ['Americano', 'Sourdough'],
      total: '$9.98',
      time: '12 min ago',
      status: 'completed'
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
            Order <span className="text-gradient">Summary</span>
          </h2>
          <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
            Real-time insights into our daily operations and customer satisfaction metrics.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center`}>
                  <stat.icon className={`text-2xl text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-medium text-${stat.color}-600 bg-${stat.color}-100 px-2 py-1 rounded-full`}>
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-bold text-chocolate mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-chocolate mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-chocolate/60">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Orders & Analytics */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-playfair font-bold text-chocolate">
                Recent Orders
              </h3>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <FiCoffee className="text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-chocolate">{order.customer}</div>
                      <div className="text-sm text-chocolate/60">
                        {order.items.join(', ')}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-chocolate">{order.total}</div>
                    <div className="text-sm text-chocolate/60">{order.time}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'completed' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Analytics Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-playfair font-bold text-chocolate mb-6">
              Daily Analytics
            </h3>
            
            <div className="space-y-6">
              {/* Sales Chart */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-chocolate font-medium">Today's Sales</span>
                  <span className="text-primary-600 font-bold">$2,847</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-chocolate/60 mt-1">
                  <span>Target: $3,000</span>
                  <span>75%</span>
                </div>
              </div>

              {/* Orders Chart */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-chocolate font-medium">Orders Today</span>
                  <span className="text-secondary-600 font-bold">127</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-secondary-500 to-caramel h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-chocolate/60 mt-1">
                  <span>Target: 150</span>
                  <span>85%</span>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-chocolate font-medium">Customer Rating</span>
                  <div className="flex items-center space-x-1">
                    <FiStar className="text-yellow-400" />
                    <span className="font-bold text-chocolate">4.9</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-chocolate/60 mt-1">
                  <span>Based on 500+ reviews</span>
                  <span>98%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="btn-primary text-sm py-2">
                View Reports
              </button>
              <button className="btn-secondary text-sm py-2">
                Export Data
              </button>
            </div>
          </motion.div>
        </div>

        {/* Performance Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Outstanding Performance
            </h3>
            <p className="text-lg opacity-90 mb-6">
              We're proud to serve our community with excellence every day
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-sm opacity-90">Orders This Month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98.5%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OrderSummary 