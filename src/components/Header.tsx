import { Button } from "@/components/ui/button"
 
const navItems = [
  { label: "Services", href: "#solutions" },
  { label: "Thesis", href: "/thesis" },
  { label: "Team", href: "#team" },
]

function Header() {

  return (
    <header className="sticky top-0 z-50 topbar-glass">
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <a href="#hero" className="font-brand text-2xl font-semibold">
          aiscend
        </a>

        <nav className="hidden sm:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-stardust-a10 transition-colors hover:bg-stardust-a30/40 hover:text-stardust-a0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild className="bg-stardust-a0 text-white hover:bg-stardust-a0/90">
          <a href="#contact">Talk to Us</a>
        </Button>
      </div>
    </header>
  )
}

export default Header


