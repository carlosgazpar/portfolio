import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../common/Breadcrumb";

const Portfolio = () => {
  return (
    <div className="container Portfolio-section">
      <Breadcrumb title="Portfolio" icon={faGripVertical} widthIcon={12} id='portfolio'/>
      <h1>
        Featured <span>Projects</span>
      </h1>
    </div>
  );
};

export default Portfolio;
