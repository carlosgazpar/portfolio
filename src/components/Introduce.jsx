import Breadcrumb from '../common/Breadcrumb'
import { faHouse, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import roundText from '../assets/img/round-text.png'
import '../styles/components/introduce.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Introduce = () => {
  return (
    <div className="container introduce-section" >
      <Breadcrumb title='Introduce' icon={faHouse} id='introduce'/>
      <h1>Say Hi from <span>Juan Carlos</span>, Front-end Developer</h1>
      <p>I specialize in creating elegant and modern websites, online virtual stores. My passion is designing digital user experiences through a bold interface and meaningful interactions.</p>
      <a className='introduce-round-text' href="#portfolio">
        <img src={roundText} alt="My Projects" title='My Projects'/>
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </div>
  )
}

export default Introduce