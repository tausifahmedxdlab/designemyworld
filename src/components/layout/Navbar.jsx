import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "./Container";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
        sticky
        top-0
        z-40
        border-b
        border-border
        bg-background/90
        backdrop-blur-md
      "
      >
        <Container>
          <div
            className="
            h-20
            flex
            items-center
            justify-between
          "
          >
            <Link
              to="/"
              className="
              text-2xl
              font-black
              tracking-wider
            "
            >
              FORGEWORKS
            </Link>

            <nav
              className="
              hidden
              lg:flex
              items-center
              gap-8
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
            </nav>

            <div className="hidden lg:block">
              <Button href="#contact">
                Start a Build
              </Button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden"
            >
              <Menu size={30} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}