import React, {useRef} from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { motion, useInView } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const footerLinks = [
  {
    id: "facebook",
    name: "facebook",
    icon: <FaFacebook />,
  },
  {
    id: "instagram",
    name: "instagram",
    icon: <FaInstagram />,
  },
  {
    id: "telegram",
    name: "telegram",
    icon: <FaTelegram />,
  },
  {
    id: "linkedin",
    name: "linkedin",
    icon: <FaLinkedin />,
  },
  {
    id: "tik tok",
    name: "tik tok",
    icon: <FaTiktok />,
  },
];

export default function Footer() {
  const displayComputer = useMediaQuery({
    minDeviceWidth: "990px",
  });

  const location = useLocation();
  let currentLocation = location.pathname;

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={`${
        currentLocation === "/contacts"
          ? styles.contactVerticalFooter
          : styles.classicFooter
      }`}
      ref={ref}
    >
      <div
        className={styles.contactBlock}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <a
          href='https://maps.app.goo.gl/2bE6maNeFmLD7tE77'
          rel='noreferrer'
          target='_blank'
        >
          <p className={styles.address}>Karla Miklʹosha, 7 </p>
          <p className={styles.country}>Lviv, Ukraine</p>
        </a>
        <a href='mailto:a@mail.com'>a@mail.com</a>
      </div>
      <div
        className={styles.contacts}
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <ul className={styles.socialList}>
          {footerLinks.map((link) => (
            <li key={link.name}>
              {currentLocation === "/contacts" ||
              (currentLocation !== "/contacts" && displayComputer)
                ? link.name
                : link.icon}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
