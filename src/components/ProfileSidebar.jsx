import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import '../styles/components/ProfileSidebar.scss'
import SideBarSocialsItem from "../common/SideBarSocialsItem";
import Button from "../common/Button";
import { useTranslation } from 'react-i18next';

const ProfileSidebar = () => {
  const { t } = useTranslation()
  return (
    <div className="profile-sidebar">
      <p>{t("profileP")}</p>
      <div className="profile-img">
        <img src="https://media.licdn.com/dms/image/C4E03AQGnqVabawA9SQ/profile-displayphoto-shrink_800_800/0/1654797211167?e=1692230400&v=beta&t=Hh66s0fQFi2Hh8JH92IHrBjeshzHs3MmaOlh9N6sYK4" alt="Juan Carlos Barrios" title="Juan Carlos Barrios"/>
      </div>
      <h2>Juan Carlos Barrios</h2>
      <h2>{t("profileH2")}</h2>
      <div className="profile-socials">
        <SideBarSocialsItem icon={faLinkedin} link='https://www.linkedin.com/in/juan-carlos-barrios-gaspar-b13689241/' />
        <SideBarSocialsItem icon={faGithub} link='https://github.com/juanbarriosg' />
        <SideBarSocialsItem icon={faEnvelope} link='mailto:juancarlosbarrios592@gmail.com' />
        <SideBarSocialsItem icon={faWhatsapp} link='https://api.whatsapp.com/send?phone=5217291716643' />
      </div>
      <Button text= {t("profileButton")} haveIcon={true} icon={faEnvelope} />
    </div>
  );
};

export default ProfileSidebar;
