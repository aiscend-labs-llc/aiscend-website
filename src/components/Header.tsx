import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { scrollToSection } from '@/lib/scroll'
import { staggerContainer, staggerItem } from '@/lib/animations'

function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b bg-stardust-a40/80 backdrop-blur"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container h-16 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer text-3xl font-semibold font-brand"
          variants={staggerItem}
        >
          aiscend
        </motion.button>
        <motion.div variants={staggerItem}>
          <Button onClick={() => scrollToSection('contact')} className="bg-stardust-a0 text-white hover:bg-stardust-a0/90">
            Talk to Us
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header


