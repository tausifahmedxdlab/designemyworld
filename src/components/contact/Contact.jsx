import Container
from "../layout/Container";

import ContactInfo
from "./ContactInfo";

import ContactForm
from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      section-padding
    "
    >
      <Container>
        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-start
        "
        >
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}