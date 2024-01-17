import React, { useRef } from "react";
import { useInView } from "framer-motion";
import ReactPlayer from "react-player";
import SimpleMovingButton from "../Buttons/SimpleMovingButton/SimpleMovingButton";
import ArrowMovingButton from "../Buttons/ArrowMovingButton/ArrowMovingButton";
import styles from "./FirstScreen.module.css";


export default function FirstScreeHome () {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <section className={styles.firstScreen}>
      <div className={styles.video}>
        <ReactPlayer
          url='assets/video/pexels-niezlyziom.mp4'
          playing='true'
          loop='true'
          width={'100%'}
          height={'100%'}
        />
      </div>
      {/* <video className={styles.video} autoplay="true" muted playsinline= "true" loop>
        <source
          src='/video/pexels-niezlyziom.webm'
          type='video/webm'
        ></source>
        <source
          src='assets/video/pexels-niezlyziom.mp4'
          type='video/mp4'
        ></source>
      </video> */}
      <div
        className={styles.heroSection}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        viewport={{ once: true }}
      >
        <h1>
          Easy, quality, IT - <span className={styles.boldText}>w</span>inning{" "}
          <span className={styles.boldText}>solutions</span> for your business
        </h1>
        <div className={styles.linkBlock}>
          <h2>it company</h2>
          <div className={styles.buttonSection}>
            <a href='#message'>
              <p> Contact us </p>
              <SimpleMovingButton>
                <ArrowMovingButton />
              </SimpleMovingButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
