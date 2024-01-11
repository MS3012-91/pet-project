import React, { useEffect, useState,  } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./BurgerMovingButton.module.css";

export default function BurgerMovingButton() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (!isActive && location.pathname === "/contacts") {
      navigate("/");
    }
  }, [isActive, location.pathname, navigate]);
  return (
    <div
      onClick={handleButtonClick}
      id='button'
      className={`${styles.navigateButton} ${isActive && styles.active}`}
    >
      <span className={styles.lines} />
      <span className={styles.lines} />
      <span className={styles.lines} />
    </div>
  );
}
