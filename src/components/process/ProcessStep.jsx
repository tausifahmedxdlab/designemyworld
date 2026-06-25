import { motion } from "framer-motion";

export default function ProcessStep({
  step,
  index
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 ? 60 : -60
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.6
      }}
      className="relative"
    >
      <div
        className="
        bg-panel
        border
        border-border
        rounded-3xl
        p-8
        hover:border-accent/40
        transition-all
      "
      >
        <div className="flex items-center gap-5">
          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-accent/10
            flex
            items-center
            justify-center
          "
          >
            <Icon
              size={30}
              className="text-accent"
            />
          </div>

          <div>
            <span
              className="
              text-accent
              text-sm
              tracking-widest
            "
            >
              STEP {step.id}
            </span>

            <h3
              className="
              text-2xl
              font-bold
              mt-1
            "
            >
              {step.title}
            </h3>
          </div>
        </div>

        <p
          className="
          mt-6
          text-muted
          leading-relaxed
        "
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}