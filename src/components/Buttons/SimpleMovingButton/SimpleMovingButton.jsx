import React, { useState, createContext } from "react";
import { motion } from "framer-motion";

const MouseMoveContext = createContext();
  export { MouseMoveContext };

export default function SimpleMovingButton({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

 const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = Math.round(clientX - left - width / 2);
    const y = Math.round(clientY - top - height / 2);

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition(0, 0);
  };

  const { x, y } = position;

  return (
    <>
      <MouseMoveContext.Provider value={{ handleMouseLeave, handleMouseMove }}>
        <motion.button
          type='button'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x, y }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
        >
          {children}
        </motion.button>
      </MouseMoveContext.Provider>
    </>
  );
}
