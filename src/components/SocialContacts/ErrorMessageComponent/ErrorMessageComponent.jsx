import React from "react";
import { ErrorMessage } from "formik";
import styles from "./ErrorMessageComponent.module.css";

export default function ErrorMessageComponent({ name }) {
  return (
    <ErrorMessage
      name={name}
      component='div'
      className={styles.formikError}
    />
  );
}
