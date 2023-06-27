import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/common/button.scss'

const Button = ({ icon, text, haveIcon }) => {
  return (
    <a href="" className="button">
      {haveIcon  && <FontAwesomeIcon icon={icon} />}
      {text}
    </a>
  );
};

export default Button;
