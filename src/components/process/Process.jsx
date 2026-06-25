import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

import ProcessTimeline from "./ProcessTimeline";

export default function Process() {
  return (
    <section
      id="process"
      className="
      section-padding
      relative
      overflow-hidden
    "
    >
      {/* Glow */}

      <div
        className="
        absolute
        left-0
        top-0
        w-[500px]
        h-[500px]
        bg-accent/5
        blur-[140px]
        rounded-full
      "
      />

      <Container>
        <SectionTitle
          eyebrow="Process"
          title="From CAD to switched on."
          description="
          Every project follows a proven workflow
          that ensures reliable execution from
          idea to finished product.
          "
        />

        <ProcessTimeline />
      </Container>
    </section>
  );
}