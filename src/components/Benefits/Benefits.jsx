import React from "react";
import BenefitsText from "./BenefitsText";
import { motion } from "framer-motion";
import styles from "./Benefit.module.css";

export default function Benefits() {
  const listVariants = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 12,
        damping: 12,
        mass: 2,
        delay: i / 2,
      },
    }),
  };

  return (
    <section id='benefits' className={styles.benefits}>
      <h2>Our Benefits</h2>
      <ul className={styles.benefitsList}>
        {BenefitsText.map((benefit, index) => {
          return (
            <motion.li
              key={benefit.id}
              variants={listVariants}
              initial='hidden'
              whileInView='visible'
              custom={index}
              viewport={{ once: true }}
            >
              <div className={styles.container}>
                <div className={styles.benefitCard}>
                  <h3>{benefit.id}</h3>
                  <h4>{benefit.name}</h4>
                  <p>{benefit.content}</p>
                  <button type='button'> Show more</button>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
