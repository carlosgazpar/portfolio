import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ id, title, icon, iconWidth }) => {
  return (
    <a href={`#${id}`}>
      <span>{title}</span>
      <FontAwesomeIcon icon={icon} style={{ width: iconWidth }} />
    </a>
  );
};

export default MenuItem;
