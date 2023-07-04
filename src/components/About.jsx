import { faUser } from "@fortawesome/free-regular-svg-icons";
import Breadcrumb from "../common/Breadcrumb";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container about-section">
      <Breadcrumb
        title={t("aboutTitle")}
        icon={faUser}
        widthIcon={10}
        id="about"
      />
      <h1>
        {t("about")} <span>{t("aboutSpan")}</span>{" "}
      </h1>
      <p>{t("aboutParagraph1")}</p>

      <br />
      <p>{t("aboutParagraph2")}</p>

      <br />
      <p>{t("aboutParagraph3")}</p>

      <br />
      <p>{t("aboutParagraph4")}</p>

      <br />
      <p>{t("aboutParagraph5")}</p>

      <br />
      <p>{t("aboutParagraph6")}</p>

      <br />
      <p>{t("aboutParagraph7")}</p>
    </div>
  );
};

export default About;
