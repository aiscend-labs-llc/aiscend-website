import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Impact from './sections/Impact'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { scrollToSection } from './lib/scroll'

function App() {
  useEffect(() => {
    // Clear any hash from the URL on initial load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  return (
    <>
      <button onClick={() => scrollToSection('hero')} className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#F8F8FF] focus:text-[#484848] focus:px-3 focus:py-2 focus:rounded-md">Skip to content</button>
      <Header />
      <main id="page" className="min-h-screen">
        <Hero />
        <Impact />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
