import React, { useRef, useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import SimpleMovingButton from "../Buttons/SimpleMovingButton/SimpleMovingButton";
import BurgerMovingButton from "../Buttons/BurgerMovingButton/BurgerMovingButton";
import { useInView } from "framer-motion";

export default function Header() {
  const location = useLocation().pathname;
  const navLinks = [
    {
      id: 1,
      linkTo: "/",
      name: "Home",
    },
    {
      id: 2,
      linkTo: "/services",
      name: "Services",
    },
    {
      id: 3,
      linkTo: "/projects",
      name: "Projects",
    },
    {
      id: 4,
      linkTo: "/team",
      name: "Team",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [selectedLink, setSelectedLink] = useState(1);
  const handleMenuNavigation = (key) => {
    setSelectedLink(key);
  };

  return (
    <div
      ref={ref}
      className={`${
        location === "/contacts"
          ? styles.topContainerContacts
          : styles.topContainer
      } ${location === "/" ? styles.homePage : ""}`}
    >
      <div
        className={styles.logo}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <NavLink to='/' onClick={() => setSelectedLink(1)}>
          <img src='assets/vnv logo-05.png' alt='logo' />
        </NavLink>
      </div>
      <div className={styles.rightNavigation}>
        <div
          className={`${
            location === "/contacts" ? styles.contactNav : styles.navigateBlock
          }`}
        >
          <nav
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <ul
              className={`${
                location === "/contacts"
                  ? styles.columnNavigate
                  : styles.blackPages
              }`}
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => handleMenuNavigation(link.id)}
                  //ссылка на текущую стр невидима
                  className={`${
                    styles.links && selectedLink === link.id
                      ? styles.invisible
                      : ""
                  }`}
                >
                  <NavLink to={link.linkTo}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.buttonContainer}>
          <NavLink to='/contacts'>
            <SimpleMovingButton>
              <BurgerMovingButton />
            </SimpleMovingButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
