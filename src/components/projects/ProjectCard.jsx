import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project
}) {
  return (
    <motion.div
      whileHover={{
        y: -8
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-panel
    "
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-[280px]
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
        />
      </div>

      <div className="p-8">
        <span
          className="
          text-accent
          text-sm
          uppercase
          tracking-widest
        "
        >
          {project.category}
        </span>

        <h3
          className="
          text-2xl
          font-bold
          mt-3
          mb-4
        "
        >
          {project.title}
        </h3>

        <p
          className="
          text-muted
          leading-relaxed
        "
        >
          {project.description}
        </p>

        <button
          className="
          flex
          items-center
          gap-2
          mt-6
          text-accent
        "
        >
          View Project

          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}