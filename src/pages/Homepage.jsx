import React from "react";
import FirstScreen from "../components/FirstScreen/FirstScreeHome";
import Benefits from "../components/Benefits/Benefits";
import SocialContacts from "../components/SocialContacts/SocialContacts";
import Faq from "../components/FAQ/Faq";

export default function Homepage() {
  return (
    <div
      style={{
        color: "#fff",
        backgroundColor: "#000",
      }}
    >
      <FirstScreen />
      <Benefits />
      <SocialContacts />
      <Faq />
    </div>
  );
}
