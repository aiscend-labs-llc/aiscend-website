import { Badge } from "@/components/ui/badge"

function Impact() {
  return (
    <section id="impact" className="section--dark py-24 bg-[#333333] text-[#F8F8FF]" aria-label="Impact">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 border-[#F8F8FF] text-[#F8F8FF]">Our Results</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8F8FF]">Impact Snapshot</h2>
          <p className="mt-3 text-[#F8F8FF]">Practical wins across launches, support deflection, and team productivity.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg border p-6 text-center">
            <div className="text-3xl font-bold">123%</div>
            <div className="mt-1 text-sm text-[#F8F8FF]">Lift in qualified leads</div>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <div className="text-3xl font-bold">48k</div>
            <div className="mt-1 text-sm text-[#F8F8FF]">Automations run monthly</div>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <div className="text-3xl font-bold">7.4x</div>
            <div className="mt-1 text-sm text-[#F8F8FF]">Faster prototyping</div>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <div className="text-3xl font-bold">99.9%</div>
            <div className="mt-1 text-sm text-[#F8F8FF]">Uptime for critical flows</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact


