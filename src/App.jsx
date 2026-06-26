import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Equipment from './components/Equipment'
import Services from './components/Services'
import PersonalTraining from './components/PersonalTraining'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Equipment />
        <Services />
        <PersonalTraining />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
