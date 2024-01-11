import React from "react";
import { Formik, Form } from "formik";
import { FaRegEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { validationSchema } from "../SocialContacts/ContactForm/YupValidation";
import Fields from "./Field";
import styles from "./BriefSection.module.css";

export default function BriefSection() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values) => {
    const data = JSON.stringify({
      name: values.name,
      email: values.email,
      message: values.message,
    });
    alert(data);
  };

  return (
    <section id='brief' className={styles.briefSection}>
      <h2>Fill out brief</h2>
      <div className={styles.briefContainer}>
        <motion.div
          className={styles.infoBlock}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            opacity: 1,
            translateX: 200,
          }}
        >
          <h3>What is brief?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel minima
            animi eos suscipit sequi reiciendis quidem, quia praesentium, sint
            beatae eum perferendis, laborum molestias doloribus ab aut velit
            excepturi optio!
          </p>
        </motion.div>
        <motion.div
          className={styles.form}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{
            opacity: 1,
            translateX: -200,
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema("email")}
            onSubmit={handleSubmit}
          >
            <Form className={styles.formik}>
              <div className={styles.icon}>
                <FaRegEnvelope className={styles.envelope} />
              </div>
              <Fields typeOfField='name' />
              <Fields typeOfField='email' />
              <Fields typeOfField='message' />
              <button className={styles.fillOutButton} type='submit'>
                Get brief to fill out
              </button>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </section>
  );
}
