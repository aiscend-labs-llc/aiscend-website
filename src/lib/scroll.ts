export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
  }
}
