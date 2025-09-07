import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-[#F8F8FF]/80 backdrop-blur border-b font-chakra">
      <div className="container h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold font-brand">prism</a>
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
          <a href="#impact" className="text-gray-600 hover:text-[#484848]">Impact</a>
          <a href="#services" className="text-gray-600 hover:text-[#484848]">Services</a>
          <a href="#about" className="text-gray-600 hover:text-[#484848]">About</a>
          <a href="#contact" className="text-gray-600 hover:text-[#484848]">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-md bg-[--color-brand] text-white px-4 py-2 text-sm font-medium hover:opacity-90">Get started</a>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-[#F8F8FF]">
          <nav className="container py-3 grid gap-3 text-sm" aria-label="Mobile">
            <button type="button" onClick={() => { setOpen(false); window.location.hash = '#impact' }} className="text-left text-gray-700">Impact</button>
            <button type="button" onClick={() => { setOpen(false); window.location.hash = '#services' }} className="text-left text-gray-700">Services</button>
            <button type="button" onClick={() => { setOpen(false); window.location.hash = '#about' }} className="text-left text-gray-700">About</button>
            <button type="button" onClick={() => { setOpen(false); window.location.hash = '#contact' }} className="text-left text-gray-700">Contact</button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header


