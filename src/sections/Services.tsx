function Services() {
  return (
    <section id="services" className="py-24" aria-label="Services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-gray-600">From idea to shipped: pragmatic scope, fast cycles, measurable outcomes.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">AI Chat & Support</h3>
            <p className="mt-2 text-sm text-gray-600">Deploy domain-trained chat for docs and support deflection with guardrails.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>RAG over your knowledge base</li>
              <li>Brand voice, escalation handoff</li>
              <li>Analytics & A/B evaluation</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">Workflow Automation</h3>
            <p className="mt-2 text-sm text-gray-600">Automate repetitive ops: lead triage, content pipelines, reporting, and QA.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Zapier/Make + custom workers</li>
              <li>LLM tools for classification</li>
              <li>Observability & retries</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-medium">Prototypes & POCs</h3>
            <p className="mt-2 text-sm text-gray-600">Validate concepts quickly with clickable demos and user tests.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Rapid UI builds</li>
              <li>Evaluation + guardrails</li>
              <li>Handover to internal team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services


