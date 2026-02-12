import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { scrollToSection } from '@/lib/scroll'
import { staggerContainer, staggerItem } from '@/lib/animations'

function Header() {
  const [open, setOpen] = useState(false)

  const servicesLeft = [
    {
      title: "AI & Automations",
      description: "Leverage artificial intelligence and automation to streamline your business processes."
    },
    {
      title: "Data Analysis & Science",
      description: "Transform your data into actionable insights with advanced analytics."
    }
  ]

  const servicesRight = [
    {
      title: "Web Services",
      description: "Build modern, scalable web applications tailored to your business needs."
    },
    {
      title: "IoT",
      description: "Connect and integrate Internet of Things devices to create smart solutions."
    },
    {
      title: "Training",
      description: "Empower your team with expert training on modern technologies."
    }
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 bg-stardust-a40/80 backdrop-blur border-b font-chakra"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container h-16 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="text-3xl font-semibold font-brand cursor-pointer"
          variants={staggerItem}
        >
          prism
        </motion.button>
        <motion.div variants={staggerItem}>
          <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => scrollToSection('impact')} className={navigationMenuTriggerStyle()}>
                Impact
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="!duration-100">
                <div className="w-[600px] p-4">
                  <div className="mb-3 pb-3 border-b">
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => scrollToSection('services')}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left cursor-pointer"
                      >
                        <div className="text-sm font-semibold leading-none">All Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View our complete range of offerings
                        </p>
                      </button>
                    </NavigationMenuLink>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      {servicesLeft.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => scrollToSection('services')}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left cursor-pointer"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {servicesRight.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => scrollToSection('services')}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left cursor-pointer"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => scrollToSection('contact')} className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </motion.div>
        <motion.div className="flex items-center gap-3" variants={staggerItem}>
          <Button onClick={() => scrollToSection('contact')} className="hidden sm:inline-flex bg-stardust-a0 text-white hover:bg-stardust-a0/90">
            Get started
          </Button>
          <Button variant="outline" size="sm" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(v => !v)} className="md:hidden">
            {open ? 'Close' : 'Menu'}
          </Button>
        </motion.div>
      </div>
      {open && (
        <motion.div
          className="md:hidden border-t bg-stardust-a40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="container py-3 grid gap-3 text-base" aria-label="Mobile">
            <Button variant="ghost" onClick={() => { setOpen(false); scrollToSection('impact') }} className="justify-start text-gray-700">Impact</Button>
            <Button variant="ghost" onClick={() => { setOpen(false); scrollToSection('services') }} className="justify-start text-gray-700">Services</Button>
            <Button variant="ghost" onClick={() => { setOpen(false); scrollToSection('contact') }} className="justify-start text-gray-700">Contact</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header


