import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      <span
        className="
        inline-flex
        w-fit
        mb-6
        px-4
        py-2
        rounded-full
        border
        border-accent/30
        text-sm
        text-accent
        tracking-widest
      "
      >
        WORKSHOP ONLINE — TAKING COMMISSIONS
      </span>

      <h1
        className="
        text-5xl
        md:text-7xl
        xl:text-8xl
        font-black
        leading-[0.9]
      "
      >
        We forge
        <span className="gradient-text">
          {" "}ideas{" "}
        </span>
        into machines
        <br />
        that move.
      </h1>

      <p
        className="
        mt-8
        text-lg
        md:text-xl
        text-muted
        max-w-xl
      "
      >
        A one-stop workshop for
        3D printing, robotics,
        embedded electronics,
        firmware and custom
        machine development.
      </p>

      <div className="flex gap-4 mt-10">
        <Button>
          Start a Project
        </Button>

        <Button
          variant="secondary"
          icon={false}
        >
          View Projects
        </Button>
      </div>
    </motion.div>
  );
}