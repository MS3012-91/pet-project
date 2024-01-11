import React from "react";
import { Field } from "formik";
import ErrorMessageComponent from "../SocialContacts/ErrorMessageComponent/ErrorMessageComponent";
import styles from "./BriefSection.module.css";

export default function Fields({ typeOfField }) {
  return (
    <div>
      <div>
        <label className={styles.label} htmlFor={typeOfField}>
          {typeOfField}:
        </label>
        <Field
          as={typeOfField === "message" ? "textarea" : ""}
          type='text'
          className={styles.field}
          id={typeOfField}
          name={typeOfField}
          placeholder={typeOfField}
        />
      </div>
      <ErrorMessageComponent name={typeOfField} />
    </div>
  );
}
