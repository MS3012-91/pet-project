import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "../ErrorPage/ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className={styles.errorPage}>
      <h1> ErrorPage </h1>
      <i> {error.statusText || error.message} </i>
      <p>
        Sorry, an error has occurred. Please try to reload page or{" "}
        <a href='mailto:a@mail.com'>send us a message </a> about problem
      </p>
    </div>
  );
}
