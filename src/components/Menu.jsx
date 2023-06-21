import '../styles/components/menu.scss'
import { faBriefcase, faEnvelope, faGripVertical, faHouse, faShapes, faUser } from '@fortawesome/free-solid-svg-icons'
import MenuItem from '../common/MenuItem'
const Menu = () => {
  return (
    <div className='menu'>
      <MenuItem icon={faHouse} id='introduce' title='Home' iconWidth={17} />
      <MenuItem icon={faUser} id='about' title='About' iconWidth={14} />
      <MenuItem icon={faBriefcase} id='resume' title='Resume' iconWidth={17} />
      <MenuItem icon={faShapes} id='myskills' title='MySkills' iconWidth={17} />
      <MenuItem icon={faGripVertical} id='portfolio' title='Portfolio' iconWidth={17} />
      <MenuItem icon={faEnvelope} id='contact' title='Contact' iconWidth={17} />
    </div>
  )
}

export default Menu