import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/common/Notification.scss'

const Notification = ({ icon, message, isVisible }) => {
  return (
    <div className={`Notification ${isVisible && 'Notification-show'}`}>
      <p className='Notification-message'>
        <FontAwesomeIcon icon={icon} />
        {message}
      </p>
    </div>
  )
}

export default Notification