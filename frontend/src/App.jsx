import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
