import React, { useEffect, useState } from "react";
import style from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [cursorStyle, setCursorStyle] = useState({
    x: 0,
    y: 0,
    width: "30px",
    height: "30px",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX, pageY, target } = e;
      const currentElement = target;
      setCursorStyle((prevStyle) => ({
        ...prevStyle,
        left: pageX - 20 + "px",
        top: pageY - 20 + "px",
      }));
      if (currentElement) {
        const cursorNone =
          window.getComputedStyle(currentElement).getPropertyValue("cursor") ===
          "none";
        setCursorStyle((prewStyle) => ({
          ...prewStyle,
          width: cursorNone ? "50px" : "30px",
          height: cursorNone ? "50px" : "30px",
        }));
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id='aura' className={style.cursor} style={cursorStyle}></div>;
}
