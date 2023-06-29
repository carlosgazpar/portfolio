import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/SwitchLanguage.scss";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { languages } from "../helpers/constants";

const SwitchLanguage = () => {

  const [isVisible, setIsVisible] = useState(false)

const handleClick = () => {

}

  return (
    <>
      <div className="switch-language" onClick={() => setIsVisible(!isVisible)}>
        <FontAwesomeIcon icon={faCog} />
      </div>
      <div className={`switch-language-notification ${isVisible && 'switch-language-notification-show'}`}>
        {languages.map((language, key) => {
          return (
            <p onClick={() => setIsVisible(!isVisible)} key={key}>{language.label}</p>
          )
        })}
      </div>
    </>
  );
};

export default SwitchLanguage;
