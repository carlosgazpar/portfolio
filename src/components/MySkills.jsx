import Breadcrumb from "../common/Breadcrumb";
import MySkillsItem from "../common/MySkillsItem";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import ReactImg from '../assets/img/react.svg'
import FirebaseImg from '../assets/img/firebase.png'
import JavascriptImg from '../assets/img/javascript.png'
import SassImg from '../assets/img/sass.png'
import ViteImg from '../assets/img/vite_logo_icon-2.png'
import GitImg from '../assets/img/logo-git.png'
import GithubImg from '../assets/img/github.png'
import BashImg from '../assets/img/bash-logo-2.png'


import '../styles/components/MySkills.scss'

const MySkills = () => {
  const { t } = useTranslation();
  return (
    <div className="container MySkills-section">
      <Breadcrumb title={t("mySkillsTitle")} icon={faShapes} widthIcon={12} id='myskills'/>
      <h1>
        {t("mySkillsH1")} <span>{t("mySkillsSpan")}</span>
      </h1>
      <div className="MySkills-content">
        <MySkillsItem img={ReactImg} title='React' />
        <MySkillsItem img={FirebaseImg} title='Firebase' />
        <MySkillsItem img={JavascriptImg} title='Javascript' />
        <MySkillsItem img={SassImg} title='Sass' />
        <MySkillsItem img={ViteImg} title='Vite' />
        <MySkillsItem img={GitImg} title='Git' />
        <MySkillsItem img={GithubImg} title='Github' />
        <MySkillsItem img={BashImg} title='Bash' />
      </div>
    </div>
  );
};

export default MySkills;
