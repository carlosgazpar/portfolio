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
      <p>I design and code beautifully simple things and i love what i do. <br/>Just simple like that!</p>
      <a className='introduce-round-text' href="#portfolio">
        <img src={roundText} alt="My Projects" title='My Projects'/>
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </div>
  )
}

export default Introduce