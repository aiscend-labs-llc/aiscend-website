import { motion, useReducedMotion } from "framer-motion";

import {
  getInitialState,
  getViewportOptions,
  getViewportState,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const team = [
  {
    name: "Spencer Karns",
    role: "Co-founder",
    photo: "/team/spencer.jpg",
    bio: "Babson alum. Studied deep learning in Spain, co-founded the AI Generator Lab at Babson, and served on the Genius Bar in the Goldman Sachs 10,000 Small Businesses Innovators Bootcamp. Runs discovery, client relationships, and systems architecture for companies from $5M to $400M+ in revenue across engineering, medical, and real estate.",
  },
  {
    name: "Connor Raney",
    role: "Co-founder & Technical Lead",
    photo: "/team/connor.jpg",
    bio: "Babson alum and OpenAI lab member. Co-founded the AI Generator Lab at Babson and served on the Genius Bar in the Goldman Sachs 10,000 Small Businesses Innovators Bootcamp. Machine learning, system design, and the infrastructure that makes autonomous agent workflows run. Builds the backends that turn discovery insights into working software, with domain experience in cybersecurity.",
  },
  {
    name: "Arman Ozsu",
    role: "ML & Development",
    photo: "/team/arman.jpg",
    bio: "Babson alum. Served on the Genius Bar in the Goldman Sachs 10,000 Small Businesses Innovators Bootcamp. Data science, predictive analytics, and automation. Brings the quantitative rigor that turns messy enterprise data into structured, trainable systems.",
  },
];

function Team() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="team" className="bg-stardust-a40 py-24" aria-label="Team">
      <div className="container">
        <motion.div
          initial={getInitialState(shouldReduceMotion)}
          whileInView={getViewportState(shouldReduceMotion)}
          viewport={getViewportOptions(shouldReduceMotion)}
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
              <article key={member.name} className="space-y-4">
                {member.photo && (
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-stardust-a30/30">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {member.role}
                  </p>
                </div>
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
