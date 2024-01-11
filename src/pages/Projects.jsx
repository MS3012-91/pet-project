import React from 'react';
import BriefSection from "../components/BriefSection/BriefSection";
import ProjectsSection from "../components/Projects/Projects";

export default function Projects() {
  return (
    <div style={{backgroundColor:'#000', color:'#fff'}}>
      <ProjectsSection />
      <BriefSection />
    </div>
  );
}
