import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarSocialsItem = ({ icon,link}) => {
  return (
    <a
      href={ link }
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SideBarSocialsItem;
