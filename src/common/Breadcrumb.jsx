import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/common/Breadcrumb.scss'

const Breadcrumb = ({title, icon}) => {
  return (
    <div className="breadcrumb">
      <FontAwesomeIcon icon={icon} />
      <h4>{title}</h4>
    </div>
  );
};

export default Breadcrumb;
