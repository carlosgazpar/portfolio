import { faShapes } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../common/Breadcrumb";

const MySkills = () => {
  return (
    <div className="container MySkills-section">
      <Breadcrumb title="MySkills" icon={faShapes} widthIcon={12} />
      <h1>
        My <span>Advantages</span>
      </h1>
    </div>
  );
};

export default MySkills;
