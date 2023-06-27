import { ErrorMessage, Field, Form, Formik } from "formik";
import "../styles/components/ContactForm.scss";
import app from "../helpers/firebase-config";
import { getDatabase, push, ref } from 'firebase/database'

const ContactForm = () => {
  const validate = (value, id) => {
    let errorMessage;

    if (!value && id !== 'phone') {
      errorMessage = "Please fill out this field.";
      return errorMessage;
    }

    if(id === "phone"){
      if(/\D/g.test(value)){
        errorMessage = "Invalid phone number";
        return errorMessage;  
      }
    }

    if (id === "email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = "Invalid email address";
        return errorMessage;
      }
    }

    return errorMessage;
  };

  const handleSubmit = (values, resetForm) => {
    const database = getDatabase(app)
    const databaseRef = ref(database, 'form')
    const pushDatabase = push(databaseRef, values)

    pushDatabase.then(() => {
      resetForm()
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm)
      }}
    >
      <Form className="contact-form">
        <div className="contact-form-item">
          <label htmlFor="fullName">
            Full Name <span>*</span>
          </label>
          <Field
            id="fullName"
            name="fullName"
            placeholder="Your Full Name"
            validate={(value) => validate(value, "fullName")}
          />
          <span className="contact-form-error">
            <ErrorMessage name="fullName" />
          </span>
        </div>

        <div className="contact-form-item">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <Field
            id="email"
            name="email"
            placeholder="Your email Address"
            type="email"
            validate={(value) => validate(value, "email")}
          />
          <span className="contact-form-error">
            <ErrorMessage name="email" />
          </span>
        </div>

        <div className="contact-form-item">
          {" "}
          <label htmlFor="phone">Phone (optional)</label>
          <Field
            id="phone"
            name="phone"
            placeholder="Your number phone"
            type="tel"
            validate={(value) => validate(value, "phone")}
          />
          <span className="contact-form-error">
            <ErrorMessage name="phone" />
          </span>
        </div>

        <div className="contact-form-item">
          <label htmlFor="subject">
            Subject <span>*</span>
          </label>
          <Field
            id="subject"
            name="subject"
            placeholder="Your subject"
            validate={(value) => validate(value, "subject")}
          />
          <span className="contact-form-error">
            <ErrorMessage name="subject" />
          </span>
        </div>
        <div className="contact-form-item">
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <Field
            id="message"
            name="message"
            placeholder="Write your message here..."
            as="textarea"
            validate={(value) => validate(value, "message")}
          />
          <span className="contact-form-error">
            <ErrorMessage name="message" />
          </span>
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
