import { motion } from "framer-motion";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";

import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
      section-padding
      relative
    "
    >
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Recent builds from the floor."
          description="
          From custom robotics to
          industrial electronics,
          every project is engineered
          from concept to completion.
          "
        />

        <FeaturedProject />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
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
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
            >
              <ProjectCard
                project={project}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}