import { motion } from "framer-motion";

import { defaultViewport, staggerContainer, staggerItem } from "@/lib/animations";

const team = [
  {
    name: "Spencer Karns",
    role: "Co-founder",
    bio: "Runs discovery, client relationships, and systems architecture. Started by upskilling C-suites on AI, realized the real value was in building the systems, not explaining them. Has mapped workflows for companies from $5M to $400M+ in revenue across engineering, medical, real estate, and defense.",
  },
  {
    name: "Connor Raney",
    role: "Co-founder & Technical Lead",
    bio: "Machine learning, system design, and the infrastructure that makes autonomous agent workflows actually run. Builds the backends that turn discovery insights into working software.",
  },
  {
    name: "Arman Ozsu",
    role: "ML & Development",
    bio: "Data science, predictive analytics, and automation. Brings the quantitative rigor that turns messy enterprise data into structured, trainable systems.",
  },
];

function Team() {
  return (
    <section id="team" className="bg-stardust-a40 py-24" aria-label="Team">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mx-auto max-w-5xl"
        >
          <motion.h2
            variants={staggerItem}
            className="text-3xl font-semibold tracking-tight lg:text-5xl"
          >
            Who we are.
          </motion.h2>

          <motion.div
            variants={staggerItem}
            className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            {team.map((member) => (
              <article key={member.name} className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground">
                  {member.role}
                </p>
                <p className="text-sm leading-7 text-stardust-a0/90 lg:text-base">
                  {member.bio}
                </p>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;
