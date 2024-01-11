import React, { useState, useRef } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { faqList } from "./FaqList";
import styles from "./Faq.module.css";
import SimpleMovingButton from "../Buttons/SimpleMovingButton/SimpleMovingButton";
import { motion, useInView } from "framer-motion";

export default function Faq() {
  const [isAnswerVisible, setIsAnswerVisible] = useState({});

  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const toggleAnswerVisibility = (id) => {
    setIsAnswerVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className={styles.faqSection}>
      <h2>FAQ</h2>
      <div className={styles.faqContainer}>
        {faqList.map((faq) => (
          <div
            key={faq.id}
            className={styles.faq}
            ref={ref}
            style={{
              borderRadius: isInView ? "5px" : "50%",
              opacity: isInView ? 1 : 0,
              transition:
                "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), border-radius 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            onClick={() => toggleAnswerVisibility(faq.id)}
          >
            <div className={styles.question}>
              <motion.p>{faq.question}</motion.p>
              {isAnswerVisible[faq.id] ? (
                <motion.div className={styles.circleButtons}>
                  <SimpleMovingButton>
                    <FaArrowCircleDown />
                  </SimpleMovingButton>
                </motion.div>
              ) : (
                <div className={styles.circleButtons}>
                  <SimpleMovingButton>
                    <FaArrowCircleUp />
                  </SimpleMovingButton>
                </div>
              )}
            </div>
            <div
              className={`${styles.answer} ${
                isAnswerVisible[faq.id] ? styles.visible : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
