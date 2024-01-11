import React from "react";
import BriefSection from "../components/BriefSection/BriefSection";
import FirstScreenTeam from "../components/FirstScreen/FirstScreenTeam";
import TeamPresentation from "../components/TeamPresentation/TeamPresentation";

export default function Team() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <FirstScreenTeam />
      <TeamPresentation/>
      <BriefSection />
    </div>
  );
}
