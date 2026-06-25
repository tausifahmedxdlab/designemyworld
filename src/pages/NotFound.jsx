import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mb-4">
        404
      </h1>

      <p className="text-muted mb-6">
        Page not found
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-accent text-black rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
}