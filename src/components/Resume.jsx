import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../common/Breadcrumb";

const Resume = () => {
  return (
    <div className="container Resume-section">
      <Breadcrumb title="Resume" icon={faBriefcase} widthIcon={12} />
      <h1>
        Education & <span>Experience</span>
      </h1>
    </div>
  );
};

export default Resume;
