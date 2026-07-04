import { CheckCircle2 } from "lucide-react";

export default function ContactSuccess() {
  return (
    <div
      className="
      border
      border-green-500/30
      bg-green-500/10
      rounded-2xl
      p-8
      text-center
    "
    >
      <CheckCircle2
        size={48}
        className="
        mx-auto
        text-green-500
        mb-4
      "
      />

      <h3
        className="
        text-2xl
        font-bold
        mb-3
      "
      >
        Message Sent
      </h3>

      <p className="text-muted">
        We'll get back to you shortly.
      </p>
    </div>
  );
}