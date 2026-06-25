import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
    "
    >
      {/* Background Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.08]
      "
        style={{
          backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.2) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,0.2) 1px,
            transparent 1px
          )
        `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[600px]
        h-[600px]
        bg-accent/10
        blur-[160px]
        rounded-full
      "
      />

      <Container>
        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
        >
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}