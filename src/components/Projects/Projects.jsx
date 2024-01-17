import React from "react";
import Flickity from "react-flickity-component";
import ProjectData from "./ProjectData";
import styles from "./Projects.module.css";
import "flickity/css/flickity.css";

const flickityOptions = {
  wrapAround: true,
  fullscreen: true,
  hash: true,
  pageDots: false,
  prevNextButtons: true,
};

export default function Projects() {
  return (
    <section id='projects' className={styles.projects}>
      <h2>Our projects</h2>
      <div className={styles.sliderContainer}>
        <Flickity options={flickityOptions}>
          {ProjectData.map((project) => (
            <a href={project.link} key={project.id}>
              <div className={styles.projectSlice}>
                <div className={styles.img}>
                  <img src={project.img} alt='Project' />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.sliceNumber}>{project.id}/</div>
                  <div className={styles.text}>
                    <h3>{project.h3}</h3>
                    <p>{project.text}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Flickity>
      </div>
    </section>
  );
}
