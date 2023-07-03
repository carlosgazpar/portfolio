import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/SwitchLanguage.scss";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { languages } from "../helpers/constants";
import { useTranslation } from "react-i18next";

const SwitchLanguage = () => {

  const [isVisible, setIsVisible] = useState(false)
  const { i18n } = useTranslation();

  const handleClick = (langCode) => {
    setIsVisible(!isVisible)
    i18n.changeLanguage(langCode); 
  };

  return (
    <>
      <div className="switch-language" onClick={() => setIsVisible(!isVisible)}>
        <FontAwesomeIcon icon={faCog} />
      </div>
      <div className={`switch-language-notification ${isVisible && 'switch-language-notification-show'}`}>
        {languages.map((language, key) => {
          return (
            <p onClick={() => handleClick(language.code)} key={key}>{language.label}</p>
          )
        })}
      </div>
    </>
  );
};

export default SwitchLanguage;
