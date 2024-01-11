import React, { useRef } from "react";
import styles from "./FirstScreen.module.css";
import { useInView } from "framer-motion";

export default function FirstScreenTeam() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <section
      className={styles.heroSection}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s ease 0.5s",
      }}
    >
      <h2 className={styles.mobileHeader && styles.noHeroSection}>Our Team</h2>
      <h1>
        Loyal prices - <span className={styles.boldText}>w</span>inning
        optimization, support, and improvement
        <span className={styles.boldText}> solutions </span>for Your project
      </h1>
    </section>
  );
}
