function About() {
  return (
    <section id="about" className="py-24" aria-label="About">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About Us</h2>
            <p className="mt-3 text-gray-600">We’re a lean team focused on practical AI—shipping what matters and cutting scope where it doesn’t. We partner closely with founders and product teams.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Fast discovery → prototype cycles</li>
              <li>Tooling and guardrails from day one</li>
              <li>Clear metrics and post-launch support</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6 h-64">
            <div className="h-full w-full rounded bg-gray-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


