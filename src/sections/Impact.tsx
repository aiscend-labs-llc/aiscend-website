import { Badge } from "@/components/ui/badge"
import { AIAdoptionChart } from "@/components/AIAdoptionChart"

function Impact() {
  return (
    <section id="impact" className="section--dark py-24 bg-[#333333]" aria-label="Impact">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 border-[#F8F8FF] text-[#F8F8FF]">Industry Insight</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-[#F8F8FF] font-saira">The AI Revolution is Here</h2>
          <p className="mt-4 text-lg text-[#F8F8FF]">
            Don't get left behind.
          </p>
          <p className="mt-2 text-lg text-[#F8F8FF]">
            Federal Reserve data shows rapid growth in AI adoption among businesses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <AIAdoptionChart />
        </div>
      </div>
    </section>
  )
}

export default Impact


