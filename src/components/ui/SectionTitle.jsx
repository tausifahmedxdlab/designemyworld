export default function SectionTitle({
  eyebrow,
  title,
  description
}) {
  return (
    <div className="mb-16">
      <span
        className="
        text-accent
        uppercase
        tracking-[0.2em]
        text-sm
      "
      >
        {eyebrow}
      </span>

      <h2
        className="
        text-4xl
        md:text-6xl
        font-bold
        mt-4
        leading-tight
      "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-6
          max-w-2xl
          text-muted
          text-lg
        "
        >
          {description}
        </p>
      )}
    </div>
  );
}