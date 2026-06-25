import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/hero/Hero";
import Capabilities from "../components/capabilities/Capabilities";
import Projects from "../components/projects/Projects";
import Process from "../components/process/Process";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Capabilities />
        <Projects />
        <Process />
      </main>

      <Footer />
    </>
  );
}