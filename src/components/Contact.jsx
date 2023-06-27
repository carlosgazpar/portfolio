import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Breadcrumb from "../common/Breadcrumb";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container contact-section">
      <Breadcrumb title="Contact" icon={faEnvelope} widthIcon={12} id='contact'/>
      <h1>
        Let's Work <span>Together!</span>
      </h1>
      <a className="contact-email" href="mailto: juancarlosbarrios592@gmail.com">
        <h3>juancarlosbarrios592@gmail.com</h3>
      </a>
      <ContactForm />
    </div>
  );
};

export default Contact;
