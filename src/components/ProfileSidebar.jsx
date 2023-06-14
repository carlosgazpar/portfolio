import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import '../styles/components/ProfileSidebar.scss'

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      <p>Front-end Developer</p>
      <div className="profile-img">
        <img src="https://media.licdn.com/dms/image/C4E03AQGnqVabawA9SQ/profile-displayphoto-shrink_800_800/0/1654797211167?e=1692230400&v=beta&t=Hh66s0fQFi2Hh8JH92IHrBjeshzHs3MmaOlh9N6sYK4" alt="Juan Carlos Barrios" title="Juan Carlos Barrios"/>
      </div>
      <h2>Juan Carlos Barrios</h2>
      <h2>Base in Toluca,Mex</h2>
      <div className="profile-socials">
        <a href="https://www.linkedin.com/in/juan-carlos-barrios-gaspar-b13689241/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/juanbarriosg/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:juancarlosbarrios592@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5217291716643" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <a href="" className="button">
      <FontAwesomeIcon icon={faEnvelope} />
        Hire Me!
      </a>
    </div>
  );
};

export default ProfileSidebar;
