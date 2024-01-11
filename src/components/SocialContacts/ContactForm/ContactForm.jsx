import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./YupValidation";
import Fields from '../Field/Field'
import axios from "axios";
import styles from "./ContactForm.module.css";

function FeedbackForm({ selectedIcon }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleFormSubmit = (values, formikBag) => {
    const data = JSON.stringify({
      typeOfContact: selectedIcon,
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    });
    let responseMessage;
    axios
      .post("http://someURL/api/...", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        responseMessage = response.data;
        setNotification(responseMessage);
        setSuccess(response.data);
        formikBag.resetForm();
      })
      .catch((error) => {
        responseMessage = error.message;
        setNotification(responseMessage);
        setError(error);
      });
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedIcon,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(selectedIcon)}
      onSubmit={handleFormSubmit}
    >
      <Form className={styles.form}>
        <h2>Feedback Form ({selectedIcon})</h2>
        <Fields typeofField='name'></Fields>
        {selectedIcon === "email" ? (
          <Fields typeofField='email'></Fields>
        ) : (
          <Fields typeofField='phone'></Fields>
        )}
        <Fields typeofField='message' /> 
        {notification && (
          <div
            className={`${styles.responseMessage} ${
              success ? styles.successfullySending : styles.sendingError
            }`}
          >
            {`${success ? "Congratulation:" : "Try again:"}  ${notification}`}
            <button
              className={styles.closeNotification}
              onClick={() => setNotification(false)}
            >
              Close
            </button>
          </div>
        )}
        <button type='submit' className={styles.submitForm}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FeedbackForm;
