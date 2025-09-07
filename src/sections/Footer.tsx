function Footer() {
  return (
    <footer id="footer" className="py-16 bg-[#222222] text-[#F8F8FF] border-t">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Prism AI</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#hero" className="hover:underline">Top</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer


