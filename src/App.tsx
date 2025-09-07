import Header from './components/Header'
import Hero from './sections/Hero'
import Impact from './sections/Impact'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#F8F8FF] focus:text-[#484848] focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      <Header />
      <main id="page" className="min-h-screen">
        <Hero />
        <Impact />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
