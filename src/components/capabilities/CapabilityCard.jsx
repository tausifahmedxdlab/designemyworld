import { motion } from "framer-motion";

export default function CapabilityCard({
  title,
  description,
  Icon
}) {
  return (
    <motion.div
      whileHover={{
        y: -8
      }}
      transition={{
        duration: 0.3
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-panel
      p-8
      group
      cursor-pointer
    "
    >
      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        bg-gradient-to-br
        from-accent/10
        via-transparent
        to-transparent
      "
      />

      <div
        className="
        relative
        z-10
      "
      >
        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-accent/10
          flex
          items-center
          justify-center
          mb-6
        "
        >
          <Icon
            size={30}
            className="text-accent"
          />
        </div>

        <h3
          className="
          text-2xl
          font-bold
          mb-4
        "
        >
          {title}
        </h3>

        <p
          className="
          text-muted
          leading-relaxed
        "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}