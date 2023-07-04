import "../styles/components/menu.scss";
import {
  faBriefcase,
  faEnvelope,
  faGripVertical,
  faHouse,
  faShapes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../common/MenuItem";
import { useTranslation } from "react-i18next";
const Menu = () => {
  const { t } = useTranslation();
  return (
    <div className="menu">
      <MenuItem
        icon={faHouse}
        id="introduce"
        title={t("menuTitleH")}
        iconWidth={17}
      />
      <MenuItem
        icon={faUser}
        id="about"
        title={t("menuTitleA")}
        iconWidth={14}
      />
      <MenuItem
        icon={faBriefcase}
        id="resume"
        title={t("menuTitleR")}
        iconWidth={17}
      />
      <MenuItem
        icon={faShapes}
        id="myskills"
        title={t("menuTitleM")}
        iconWidth={17}
      />
      <MenuItem
        icon={faGripVertical}
        id="portfolio"
        title={t("menuTitleP")}
        iconWidth={17}
      />
      <MenuItem
        icon={faEnvelope}
        id="contact"
        title={t("menuTitleC")}
        iconWidth={17}
      />
    </div>
  );
};

export default Menu;
