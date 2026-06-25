import { motion } from "framer-motion";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import CapabilityCard from "./CapabilityCard";

import { capabilities } from "./capabilitiesData";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="
      section-padding
      relative
    "
    >
      <Container>
        <SectionTitle
          eyebrow="Capabilities"
          title="Three disciplines, one workbench."
          description="
          We combine mechanical design,
          electronics and software under
          one roof to create complete
          functional systems.
          "
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {capabilities.map(item => (
            <motion.div
              key={item.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
            >
              <CapabilityCard
                title={item.title}
                description={
                  item.description
                }
                Icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}