import Breadcrumb from '../common/Breadcrumb'
import { faHouse, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import roundText from '../assets/img/round-text.png'
import '../styles/components/introduce.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

const Introduce = () => {
  const { t } = useTranslation()
  return (
    <div className="container introduce-section" >
      <Breadcrumb title={t("introduceTitle")} icon={faHouse} id='introduce'/>
      <h1>{t("introduceH1")} <span>Juan Carlos</span>, {t("introduceh1")}</h1>
      <p>{t("introduceParagraph")}</p>
      <a className='introduce-round-text' href="#portfolio">
        <img src={roundText} alt="My Projects" title='My Projects'/>
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </div>
  )
}

export default Introduce
