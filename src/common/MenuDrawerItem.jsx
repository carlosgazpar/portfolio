import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuDrawerItem = ({ id, icon, iconSize, texto, setIsVisible }) => {

  const handleClick = () => {
    setIsVisible(false)
  }

  return (
    <a href={`#${id}`} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} style={{ fontSize: iconSize }} />
      {texto}
    </a>
  );
};

export default MenuDrawerItem;
