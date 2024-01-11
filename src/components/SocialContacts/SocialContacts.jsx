import React, { useState } from "react";
import FeedbackIcons from "./FeedbackIcons/FeedbackIcons";
import ContactForm from "./ContactForm/ContactForm";

export default function SocialContacts() {
  const [selectedIcon, setSelectedIcon] = useState("email");

  return (
    <section id='message' style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
      <h2>Contact us</h2>
      <FeedbackIcons
        setSelectedIcon={setSelectedIcon}
        selectedIcon={selectedIcon}
      />
      {selectedIcon && <ContactForm selectedIcon={selectedIcon} />}
    </section>
  );
}
