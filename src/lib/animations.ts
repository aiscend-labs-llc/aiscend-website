import { type Variants } from 'framer-motion'

// Common easing for smooth, natural animations
const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

// Fade up animation - subtle upward movement with opacity
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease
    }
  }
}

// Fade in animation - just opacity, no movement
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease
    }
  }
}

// Stagger container - for lists and grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Stagger item - for children of stagger containers
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease
    }
  }
}

// Scale fade - subtle scale with opacity
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease
    }
  }
}

// Slide in from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease
    }
  }
}

// Slide in from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease
    }
  }
}

// Default viewport options for consistent trigger points
export const defaultViewport = {
  once: true, // Only animate once
  amount: 0.2, // Trigger when 20% is visible
  margin: "0px 0px -100px 0px" // Trigger slightly before element enters viewport
}
