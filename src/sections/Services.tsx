import { Badge } from "@/components/ui/badge"

function Services() {
  return (
    <section id="services" className="py-24" aria-label="Services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4">What We Offer</Badge>
          <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-gray-600">From idea to shipped: pragmatic scope, fast cycles, measurable outcomes.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">AI & Automations</h3>
            <p className="mt-2 text-sm text-gray-600">Leverage artificial intelligence and automation to streamline your business processes and increase efficiency.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">Data Analysis & Science</h3>
            <p className="mt-2 text-sm text-gray-600">Transform your data into actionable insights with advanced analytics and data science solutions.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">Web Services</h3>
            <p className="mt-2 text-sm text-gray-600">Build modern, scalable web applications tailored to your business needs.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">IoT</h3>
            <p className="mt-2 text-sm text-gray-600">Connect and integrate Internet of Things devices to create smart, data-driven solutions.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">Training</h3>
            <p className="mt-2 text-sm text-gray-600">Empower your team with expert training on modern technologies and best practices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services


