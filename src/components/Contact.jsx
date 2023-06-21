import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Breadcrumb from "../common/Breadcrumb";

const Contact = () => {
  return (
    <div className="container Contact-section">
      <Breadcrumb title="Contact" icon={faEnvelope} widthIcon={12} id='contact'/>
      <h1>
        Let's Work <span>Together!</span>
      </h1>
    </div>
  );
};

export default Contact;
