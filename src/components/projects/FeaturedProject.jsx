import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{ once: true }}
      className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-border
      bg-panel
      mb-16
    "
    >
      <div
        className="
        grid
        lg:grid-cols-2
      "
      >
        <div className="p-10 lg:p-16">
          <span
            className="
            text-accent
            uppercase
            tracking-widest
          "
          >
            Featured Build
          </span>

          <h3
            className="
            text-4xl
            md:text-6xl
            font-black
            mt-4
            mb-6
          "
          >
            Autonomous
            Inspection
            Robot
          </h3>

          <p
            className="
            text-muted
            text-lg
            leading-relaxed
          "
          >
            Custom robotic platform
            designed for industrial
            inspection, autonomous
            navigation and remote
            telemetry collection.
          </p>
        </div>

        <img
          src="/images/robot.png"
          alt="robot"
          className="
          w-full
          h-full
          object-cover
        "
        />
      </div>
    </motion.div>
  );
}