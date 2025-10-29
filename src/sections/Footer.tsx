import { scrollToSection } from '@/lib/scroll'

function Footer() {
  return (
    <footer id="footer" className="py-16 bg-[#222222] text-[#F8F8FF] border-t">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Prism AI</p>
          <nav className="flex items-center gap-4 text-sm">
            <button onClick={() => scrollToSection('hero')} className="hover:underline cursor-pointer">Top</button>
            <button onClick={() => scrollToSection('services')} className="hover:underline cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('contact')} className="hover:underline cursor-pointer">Contact</button>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer


