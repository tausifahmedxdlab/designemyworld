import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileMenu({
  open,
  setOpen
}) {
  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/95
      z-50
      flex
      flex-col
      p-8
    "
    >
      <div className="flex justify-end">
        <button
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>
      </div>

      <div
        className="
        flex-1
        flex
        flex-col
        justify-center
        gap-8
      "
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-4xl font-bold"
        >
          Home
        </Link>

        <Link
          to="/projects"
          onClick={() => setOpen(false)}
          className="text-4xl font-bold"
        >
          Projects
        </Link>

        <Link
          to="/process"
          onClick={() => setOpen(false)}
          className="text-4xl font-bold"
        >
          Process
        </Link>

        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="text-4xl font-bold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}