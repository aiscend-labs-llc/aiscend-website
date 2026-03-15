import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll"
import { staggerContainer, staggerItem } from "@/lib/animations"

const SCROLL_THRESHOLD = 48

const navItems = [
  { label: "Services", action: () => scrollToSection("solutions") },
  { label: "Thesis", href: "/thesis" },
  { label: "Team", action: () => scrollToSection("team") },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 topbar-glass ${scrolled ? "topbar-glass--compressed" : ""}`}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={{ height: scrolled ? 56 : 72 }}
    >
      <div className="container h-full flex items-center justify-between gap-4">
        <motion.button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer font-semibold font-brand transition-all duration-300"
          style={{ fontSize: scrolled ? "1.25rem" : "1.5rem" }}
          variants={staggerItem}
        >
          aiscend
        </motion.button>

        <motion.nav
          className="hidden sm:flex items-center gap-1"
          variants={staggerItem}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-stardust-a10 hover:text-stardust-a0 transition-colors rounded-md hover:bg-stardust-a30/40"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={item.action}
                className="cursor-pointer px-3 py-1.5 text-sm font-medium text-stardust-a10 hover:text-stardust-a0 transition-colors rounded-md hover:bg-stardust-a30/40"
              >
                {item.label}
              </button>
            )
          ))}
        </motion.nav>

        <motion.div variants={staggerItem}>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-stardust-a0 text-white hover:bg-stardust-a0/90"
          >
            Talk to Us
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header


