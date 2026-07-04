import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <span
        className="
        text-accent
        uppercase
        tracking-widest
      "
      >
        Contact
      </span>

      <h2
        className="
        text-5xl
        font-black
        mt-4
        mb-6
      "
      >
        Got something
        <span className="gradient-text">
          {" "}weird{" "}
        </span>
        to build?
      </h2>

      <p
        className="
        text-muted
        leading-relaxed
        mb-10
      "
      >
        Send your requirements,
        sketches, CAD files,
        ideas or specifications.
      </p>

      <div className="space-y-6">
        <div className="flex gap-4">
          <Mail className="text-accent" />
          <span>
            hello@forgeworks.com
          </span>
        </div>

        <div className="flex gap-4">
          <Phone className="text-accent" />
          <span>
            +91 XXXXX XXXXX
          </span>
        </div>

        <div className="flex gap-4">
          <MapPin className="text-accent" />
          <span>
            India
          </span>
        </div>
      </div>
    </div>
  );
}