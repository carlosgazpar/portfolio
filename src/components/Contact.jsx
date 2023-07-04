import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Breadcrumb from "../common/Breadcrumb";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const { t } = useTranslation()

  return (
    <div className="container contact-section">
      <Breadcrumb title={t("contact")} icon={faEnvelope} widthIcon={12} id='contact'/>
      <h1>
        {t("contactTitle1")} <span>{t("contactTitle2")}</span>
      </h1>
      <a className="contact-email" href="mailto: juancarlosbarrios592@gmail.com">
        <h3>juancarlosbarrios592@gmail.com</h3>
      </a>
      <ContactForm />
    </div>
  );
};

export default Contact;
