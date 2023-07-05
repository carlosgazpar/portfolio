import { ErrorMessage, Field, Form, Formik } from "formik";
import "../styles/components/ContactForm.scss";
import app from "../helpers/firebase-config";
import { getDatabase, push, ref } from "firebase/database";
import Notification from "../common/Notification";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [IsNotificationVisible, setIsNotificationVisible] = useState(false);
  const { t } = useTranslation()

  const validate = (value, id) => {
    let errorMessage;

    if (!value && id !== "phone") {
      errorMessage = t("errorMessage1");
      return errorMessage;
    }

    if (id === "phone") {
      if (/\D/g.test(value)) {
        errorMessage = t("errorMessage2");
        return errorMessage;
      }
    }

    if (id === "email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = t("errorMessage3");
        return errorMessage;
      }
    }

    return errorMessage;
  };

  const handleSubmit = (values, resetForm) => {
    const database = getDatabase(app);
    const databaseRef = ref(database, "form");
    const pushDatabase = push(databaseRef, values);

    pushDatabase
      .then(() => {
        resetForm();
        setIsNotificationVisible(true);
        setTimeout(() => {
          setIsNotificationVisible(false);
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        <Form className="contact-form">
          <div className="contact-form-item">
            <label htmlFor="fullName">
              {t("fullName")} <span>*</span>
            </label>
            <Field
              id="fullName"
              name="fullName"
              placeholder={t("fullNamePlaceholder")}
              validate={(value) => validate(value, "fullName")}
            />
            <span className="contact-form-error">
              <ErrorMessage name="fullName" />
            </span>
          </div>

          <div className="contact-form-item">
            <label htmlFor="email">
              {t("email")} <span>*</span>
            </label>
            <Field
              id="email"
              name="email"
              placeholder={t("EmailAddressPlaceholder")}
              type="email"
              validate={(value) => validate(value, "email")}
            />
            <span className="contact-form-error">
              <ErrorMessage name="email" />
            </span>
          </div>

          <div className="contact-form-item">
            {" "}
            <label htmlFor="phone">{t("phone")}</label>
            <Field
              id="phone"
              name="phone"
              placeholder={t("phonePlaceholder")}
              type="tel"
              validate={(value) => validate(value, "phone")}
            />
            <span className="contact-form-error">
              <ErrorMessage name="phone" />
            </span>
          </div>

          <div className="contact-form-item">
            <label htmlFor="subject">
              {t("subject")}<span>*</span>
            </label>
            <Field
              id="subject"
              name="subject"
              placeholder={t("SubjectPlaceholder")}
              validate={(value) => validate(value, "subject")}
            />
            <span className="contact-form-error">
              <ErrorMessage name="subject" />
            </span>
          </div>
          <div className="contact-form-item">
            <label htmlFor="message">
              {t("message")} <span>*</span>
            </label>
            <Field
              id="message"
              name="message"
              placeholder={t("messagePlaceholder")}
              as="textarea"
              validate={(value) => validate(value, "message")}
            />
            <span className="contact-form-error">
              <ErrorMessage name="message" />
            </span>
          </div>

          <button className="button" type="submit">
            {t("submit")}
          </button>
        </Form>
      </Formik>
      <Notification
        icon={faCheckCircle}
        message="Your message has been sent successfully"
        isVisible={IsNotificationVisible}
      />
    </>
  );
};

export default ContactForm;
