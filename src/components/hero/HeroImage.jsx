import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1
      }}
      className="relative"
    >
      <div
        className="
        absolute
        inset-0
        blur-[120px]
        bg-accent/20
        rounded-full
      "
      />

      <img
        src="/images/robot.png"
        alt="Robot"
        className="
        relative
        z-10
        w-full
        rounded-3xl
        border
        border-border
      "
      />
    </motion.div>
  );
}