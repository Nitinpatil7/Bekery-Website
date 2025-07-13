import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import Gallery from '../components/Gallery'
import WhyUs from '../components/WhyUs'
import OrderSummary from '../components/OrderSummary'
import Testimonials from '../components/Testimonials'
import CustomOrderForm from '../components/CustomOrderForm'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CategorySection />
      <Gallery />
      <WhyUs />
      <OrderSummary />
      <Testimonials />
      <CustomOrderForm />
      <ContactForm />
      <Footer />
    </main>
  )
} 