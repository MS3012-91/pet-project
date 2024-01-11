import React, { useRef } from "react";
import peoples from "./team";
import styles from "./TeamPresentation.module.css";
import { useInView, motion } from "framer-motion";

export default function TeamPresentation() {
  const ref = useRef(null);
  const refDescription = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isTextInView = useInView(refDescription);
  const listRef = useRef(null);
  const isInViewList = useInView(listRef, {
    once: true,
  });

  return (
    <section className={styles.team} id='teamSection'>
      <div className={styles.imagePlans} ref={ref}>
        <img
          src='assets/plans.jpg'
          alt='plans'
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
        <div
          ref={refDescription}
          className={styles.aboutCompany}
          style={{
            transform: isTextInView ? "none" : "translateX(200px)",
            opacity: isTextInView ? 1 : 0,
            transition: "cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum
            repudiandae numquam accusamus doloribus voluptatem beatae architecto
            quaerat! Temporibus cum enim voluptas impedit numquam totam rerum
            possimus dolores odit dignissimos.
          </p>
        </div>
      </div>
      <div className={styles.photosBlock}>
        <ul className={styles.workersList} ref={listRef}>
          {peoples.map((people, index) => (
            <motion.li
              key={people.position}
              transition={{
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 1,
              }}
              whileInView={{
                opacity: isInViewList ? 1 : 0,
                translateX: isInViewList ? (index % 2 === 0 ? 200 : -200) : 0,
              }}
            >
              <a href='#brief'>
                <div className={styles.card}>
                  <div
                    className={styles.photo}
                    style={{ backgroundImage: `url(${people.image})` }}
                  ></div>
                  <div className={styles.position}>
                    <h3>{people.position}</h3>
                    <p> {people.responsibility}</p>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
