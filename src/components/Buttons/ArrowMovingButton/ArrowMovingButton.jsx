import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ArrowMovingButton.module.css";

export default function ArrowMovingButton() {
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const { x: arrowX, y: arrowY } = arrowPosition;

  const arrowMove = (e) => {
    setIsHover(true);
    const arrow = document.getElementById("arrow");
    const arrowContainer = document.getElementById("arrowContainer");

    const { clientX, clientY } = e;
    const { left, top, width, height } = arrow.getBoundingClientRect();
    const { width: parentWidth, height: parentHeight } =
      arrowContainer.getBoundingClientRect();

    let arrowX = Math.round(clientX - left - width / 2);
    let arrowY = Math.round(clientY - top - height / 2);

    const arrowLimitMoveX = parentWidth / 8;
    const arrowLimitMoveY = parentHeight / 8;

    arrowX = Math.min(Math.max(arrowX, -arrowLimitMoveX), arrowLimitMoveX);
    arrowY = Math.min(Math.max(arrowY, -arrowLimitMoveY), arrowLimitMoveY);

    setArrowPosition({ x: arrowX, y: arrowY });
  };

  const handleMouseLeave = () => {
    setArrowPosition(0, 0);
    setIsHover(false);
  };

  return (
    <div
      onMouseMove={arrowMove}
      onMouseLeave={handleMouseLeave}
      id='arrowContainer'
      className={`${styles.arrowContainer} ${isHover && styles.hoveredButton}`}
    >
      <motion.span
        id='arrow'
        animate={{ x: arrowX, y: arrowY }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 40,
          mass: 1,
        }}
      >
        &#10230;
      </motion.span>
    </div>
  );
}
