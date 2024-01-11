import React from 'react';
import ServicesComponent from "../components/Services/Services";
import BriefSection from "../components/BriefSection/BriefSection";

export default function Services() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <ServicesComponent />
      <BriefSection />
    </div>
  );
}
