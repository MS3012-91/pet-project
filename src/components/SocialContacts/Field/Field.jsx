import React from "react";
import { Field } from "formik";
import ErrorMessageComponent from "../ErrorMessageComponent/ErrorMessageComponent";
import styles from "../ContactForm/ContactForm.module.css";

export default function Fields({ typeofField }) {
  return (
    <div>
      <div className={styles.fields}>
        <label htmlFor={typeofField} className={styles.label}>
          {typeofField}:
        </label>
        <Field 
          as={typeofField === "message" ? "textarea" : ""}
          type={typeofField === "message" ? "" : "text"}
          name={typeofField}
          id={typeofField}
          className={styles.input}
        />
      </div>
      <ErrorMessageComponent name={typeofField} />
    </div>
  );
}
