import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServicesInfo from "./ServicesInfo";
import { motion } from "framer-motion";
import styles from "./Services.module.css";

const typeOfServices = [
  "Landing page",
  "Multi-page site",
  "Online store",
  "Site audit",
  "Personal consultation",
];

export default function Services() {
  const [selectedService, setSelectedService] = useState("Landing page");

  const handleServiceClick = (id) => {
    setSelectedService(id);
  };

  const selectedServiceInfo = ServicesInfo.find(
    (service) => service.id === selectedService
  );

  const variants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 4,
        damping: 3,
        mass: 0.8,
        delay: i / 2,
      },
    }),
  };

  return (
    <section id='services' className={styles.services}>
      <h2>Our services</h2>
      <div className={styles.headLine}>
        <div className={styles.circlesBlock}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <ul>
          {typeOfServices.map((service, index) => (
            <motion.li
              key={index}
              initial='hidden'
              variants={variants}
              whileInView='visible'
              viewport={{ once: true }}
            >
              <button
                className={
                  selectedService === service
                    ? styles.checkedBtn
                    : styles.headerBtn
                }
                onClick={() => handleServiceClick(service)}
              >
                {service}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className={styles.serviceInfo}>
        {selectedServiceInfo && (
          <div className={styles.infoBlock}>
            <div className={styles.mainContent}>
              <h3>{selectedServiceInfo.header}</h3>
              <p>{selectedServiceInfo.about}</p>
              <p>{selectedServiceInfo.motivate}</p>
              <ul>
                {selectedServiceInfo.benefits.map((benefit, index) => (
                  <li key={index}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#fff", marginRight: "3px" }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button type='button' className={styles.infoButton}>
                See more options
              </button>
            </div>
            <div className={styles.image}>
              <img
                src={selectedServiceInfo.image}
                alt={selectedServiceInfo.id}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
