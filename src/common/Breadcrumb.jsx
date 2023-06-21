import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/common/Breadcrumb.scss'

const Breadcrumb = ({title, icon, widthIcon, id}) => {
  return (
    <div className="breadcrumb" id={id}>
      <FontAwesomeIcon style={{ width: widthIcon }} icon={icon} />
      <h4>{title}</h4>
    </div>
  );
};

export default Breadcrumb;
