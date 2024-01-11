import React from "react";
import {motion} from 'framer-motion'
import SimpleMovingButton from "../../Buttons/SimpleMovingButton/SimpleMovingButton";
import contactInform from "./FeedbackIconsList";
import styles from "./FeedbackIcons.module.css";

const listVariants = {
  hidden: (i) => ({
    x: -50*i,
    opacity: 0,
  }),
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 2,
      delay: i * 0.4,
    },
  }),
};

function FeedbackIcons({ setSelectedIcon, selectedIcon }) {
  return (
    <div className={styles.iconContainer}>
      <ul>
        {contactInform.map((contact, index) => (
          <motion.li
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            custom={index}
            key={contact.name}
            onClick={() => {
              setSelectedIcon(`${contact.name}`);
            }}
          >
            <SimpleMovingButton>
              {React.createElement(contact.icon, {
                className: `${styles.icon} ${
                  selectedIcon === contact.name && styles.selectedIcon
                }`,
              })}
              {contact.image}
            </SimpleMovingButton>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackIcons;
