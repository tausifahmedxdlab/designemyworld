import ProcessStep from "./ProcessStep";
import { processSteps } from "./processData";

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Center Line */}

      <div
        className="
        hidden
        lg:block
        absolute
        left-1/2
        top-0
        bottom-0
        w-[2px]
        bg-gradient-to-b
        from-accent
        via-accent/40
        to-transparent
        -translate-x-1/2
      "
      />

      <div className="space-y-12">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`
              lg:grid
              lg:grid-cols-2
              lg:gap-16
              items-center
            `}
          >
            {index % 2 === 0 ? (
              <>
                <ProcessStep
                  step={step}
                  index={index}
                />

                <div className="hidden lg:block" />
              </>
            ) : (
              <>
                <div className="hidden lg:block" />

                <ProcessStep
                  step={step}
                  index={index}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}