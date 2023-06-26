import "../styles/components/MenuDrawer.scss";
import {
  faBriefcase,
  faEnvelope,
  faGripVertical,
  faHouse,
  faShapes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MenuDrawerItem from "../common/MenuDrawerItem";
import { useState } from "react";

const MenuDrawer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = ( ) => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <div className="menu-trigger" onClick={handleClick}>
        <span></span>
        <span></span>
      </div>
      <div className={`menu-overlay ${isVisible && "menu-overlay-show"}`} onClick={handleClick} ></div>
      <div className={`menu-drawer ${isVisible && "menu-drawer-show"}`}>
        <p>Menu</p>
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faHouse}
          iconSize={15}
          texto="Home"
          id="introduce"
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faUser}
          id="about"
          texto="About"
          iconSize={14}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faBriefcase}
          id="resume"
          texto="Resume"
          iconSize={17}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faShapes}
          id="myskills"
          texto="MySkills"
          iconSize={17}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faGripVertical}
          id="portfolio"
          texto="Portfolio"
          iconSize={17}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faEnvelope}
          id="contact"
          texto="Contact"
          iconSize={17}
        />
      </div>
    </>
  );
};

export default MenuDrawer;
