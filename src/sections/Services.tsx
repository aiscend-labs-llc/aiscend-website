import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Database, Globe, Radio, GraduationCap } from "lucide-react"
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from '@/lib/animations'

interface Service {
  id: number
  title: string
  shortTitle: string
  description: string
  fullDescription: string
  icon: typeof Brain
}

const services: Service[] = [
  {
    id: 0,
    title: "AI & Automations",
    shortTitle: "AI & Automations",
    description: "Leverage artificial intelligence and automation to streamline your business processes.",
    fullDescription: "Transform your business operations with cutting-edge AI solutions and intelligent automation. We help you identify automation opportunities, implement AI-driven workflows, and integrate machine learning models that adapt to your unique business needs.",
    icon: Brain
  },
  {
    id: 1,
    title: "Data Analysis & Science",
    shortTitle: "Data Science",
    description: "Transform your data into actionable insights with advanced analytics.",
    fullDescription: "Unlock the hidden value in your data with our comprehensive data science solutions. From predictive analytics to custom dashboards, we turn complex datasets into clear, actionable insights that drive strategic decision-making and business growth.",
    icon: Database
  },
  {
    id: 2,
    title: "Web Services",
    shortTitle: "Web Services",
    description: "Build modern, scalable web applications tailored to your business needs.",
    fullDescription: "Create powerful, user-friendly web applications that scale with your business. Our full-stack development expertise ensures responsive, secure, and performant solutions that deliver exceptional user experiences across all devices.",
    icon: Globe
  },
  {
    id: 3,
    title: "IoT Solutions",
    shortTitle: "IoT",
    description: "Connect and integrate Internet of Things devices to create smart solutions.",
    fullDescription: "Bridge the physical and digital worlds with our IoT expertise. We design and implement connected device ecosystems that collect, analyze, and act on real-time data, enabling smarter operations and new business models.",
    icon: Radio
  },
  {
    id: 4,
    title: "Training & Enablement",
    shortTitle: "Training",
    description: "Empower your team with expert training on modern technologies.",
    fullDescription: "Build internal capability and confidence with customized training programs. We deliver hands-on workshops and comprehensive enablement sessions that equip your team with the skills to leverage new technologies and maintain solutions long-term.",
    icon: GraduationCap
  }
]

function Services() {
  const [activeService, setActiveService] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Reset progress when service changes
    setProgress(0)

    // Update progress bar every 50ms
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = (100 / 12000) * 50 // 100% over 12000ms, update every 50ms
        return Math.min(prev + increment, 100)
      })
    }, 50)

    // Change service after 12 seconds
    const rotateInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 12000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(rotateInterval)
    }
  }, [activeService])

  const handleServiceClick = (id: number) => {
    setActiveService(id)
  }

  const ActiveIcon = services[activeService].icon

  return (
    <section id="services" className="py-24 bg-[#F8F8FF]" aria-label="Services">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <Badge variant="outline" className="mb-4">What We Offer</Badge>
          </motion.div>
          <motion.h2 className="text-3xl font-semibold tracking-tight" variants={staggerItem}>
            Our Services
          </motion.h2>
          <motion.p className="mt-3 text-gray-600" variants={staggerItem}>
            Put AI to work in your business.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          {/* Left Sidebar - Service Cards */}
          <div className="lg:col-span-4 space-y-3">
            {services.map((service) => {
              const ServiceIcon = service.icon
              const isActive = activeService === service.id
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className={`relative w-full text-left rounded-lg border p-5 transition-all cursor-pointer overflow-hidden ${
                    isActive
                      ? 'border-[#333333] bg-[#333333] text-[#F8F8FF] shadow-lg'
                      : 'border-gray-200 bg-white hover:border-[#333333] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <ServiceIcon className={`w-5 h-5 mt-0.5 shrink-0 ${
                      isActive ? 'text-[#F8F8FF]' : 'text-[#333333]'
                    }`} />
                    <div className="flex-1">
                      <h3 className={`text-lg font-medium ${
                        isActive ? '!text-[#F8F8FF]' : 'text-[#333333]'
                      }`}>
                        {service.shortTitle}
                      </h3>
                      <p className={`mt-1 text-sm ${
                        isActive ? '!text-[#F8F8FF]/80' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar - Only show on active card */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F8F8FF]/20">
                      <div
                        className="h-full bg-[#F8F8FF] transition-all duration-50 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right Content Area - Active Service Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg border border-gray-200 p-8 lg:p-12 min-h-[400px] flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#333333] flex items-center justify-center">
                    <ActiveIcon className="w-8 h-8 text-[#F8F8FF]" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-[#333333]">
                    {services[activeService].title}
                  </h3>
                </div>

                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {services[activeService].fullDescription}
                </p>

                {/* Progress Indicator */}
                <div className="mt-8 flex gap-2">
                  {services.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        index === activeService ? 'bg-[#333333]' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services


