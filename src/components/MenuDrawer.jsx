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
import { useTranslation } from "react-i18next";

const MenuDrawer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = ( ) => {
    setIsVisible(!isVisible)
  }
  const { t } = useTranslation();
  return (
    <>
      <div className="menu-trigger" onClick={handleClick}>
        <span></span>
        <span></span>
      </div>
      <div className={`menu-overlay ${isVisible && "menu-overlay-show"}`} onClick={handleClick} ></div>
      <div className={`menu-drawer ${isVisible && "menu-drawer-show"}`}>
        <p>{t("menuDrawerItemTitle")}</p>
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faHouse}
          iconSize={15}
          texto={t("menuDrawerItemH")}
          id="introduce"
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faUser}
          id="about"
          texto={t("menuDrawerItemA")}
          iconSize={14}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faBriefcase}
          id="resume"
          texto={t("menuDrawerItemR")}
          iconSize={17}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faShapes}
          id="myskills"
          texto={t("menuDrawerItemM")}
          iconSize={17}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faGripVertical}
          id="portfolio"
          texto={t("menuDrawerItemP")}
          iconSize={17}
        />
        <MenuDrawerItem
          setIsVisible={setIsVisible}
          icon={faEnvelope}
          id="contact"
          texto={t("menuDrawerItemC")}
          iconSize={17}
        />
      </div>
    </>
  );
};

export default MenuDrawer;
