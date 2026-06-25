import { Link } from "react-router-dom";

import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-border
      mt-32
    "
    >
      <Container>
        <div
          className="
          py-16
          grid
          md:grid-cols-3
          gap-10
        "
        >
          <div>
            <h3
              className="
              text-2xl
              font-black
              mb-4
            "
            >
              FORGEWORKS
            </h3>

            <p className="text-muted">
              From CAD models to fully
              functional machines.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              Navigation
            </h4>

            <div
              className="
              flex
              flex-col
              gap-3
            "
            >
              <Link to="/">
                Home
              </Link>

              <Link to="/projects">
                Projects
              </Link>

              <Link to="/process">
                Process
              </Link>

              <Link to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              Contact
            </h4>

            <p className="text-muted">
              hello@forgeworks.com
            </p>

            <p className="text-muted">
              +91 XXXXX XXXXX
            </p>
          </div>
        </div>

        <div
          className="
          border-t
          border-border
          py-6
          text-sm
          text-muted
        "
        >
          © 2026 ForgeWorks.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}