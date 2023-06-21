import {faUser} from '@fortawesome/free-regular-svg-icons'
import Breadcrumb from "../common/Breadcrumb"

const About = () => {
  return (
    <div className="container about-section">
      <Breadcrumb title='About' icon={faUser} widthIcon={10} id='about' /> 
      <h1>Every great design begin with an even <span>better story</span> </h1>
      <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
    </div>
  )
}

export default About