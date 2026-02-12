import { motion } from "framer-motion"
import { scrollToSection } from '@/lib/scroll'
import { fadeUp, defaultViewport } from '@/lib/animations'

function Footer() {
  return (
    <footer id="footer" className="py-16 bg-stardust-a0 text-stardust-a40 border-t">
      <div className="container">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <p className="text-sm">© {new Date().getFullYear()} Prism AI</p>
          <nav className="flex items-center gap-4 text-sm">
            <button onClick={() => scrollToSection('hero')} className="hover:underline cursor-pointer">Top</button>
            <button onClick={() => scrollToSection('services')} className="hover:underline cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('contact')} className="hover:underline cursor-pointer">Contact</button>
          </nav>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


