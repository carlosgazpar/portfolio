import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../common/Breadcrumb";
import foodhub from "../assets/img/foodhub.png";
import sappApp from "../assets/img/sapp-app.png";
import hamburger from "../assets/img/hamburger.png";
import carRepair from "../assets/img/car-repair.png";
import portfolioImg from "../assets/img/portfolio.png";
import PortfolioItem from "../common/PortfolioItem";
import { useTranslation } from "react-i18next";

import "../styles/components/Portfolio.scss";

const Portfolio = () => {
  const { t } = useTranslation()
  return (
    <div className="container Portfolio-section">
      <Breadcrumb
        title={t("portfolioTitle")}
        icon={faGripVertical}
        widthIcon={12}
        id="portfolio"
      />
      <h1>
        {t("portfolioH1")} <span>{t("portfolioSpan")}</span>
      </h1>
      <div className="portfolio-cards">
        <PortfolioItem
          img={carRepair}
          title={t("portfolioItemTitle")}
          url="https://juanbarriosg.github.io/car-repair/"
          tools={[
            "React.js",
            "Javascript",
            "Vite",
            `API's`,
            "SASS",
            "Git",
            "Responsive Design",
          ]}
        />
        <PortfolioItem
          img={portfolioImg}
          title={t("portfolioItemTitle2")}
          url="https://juanbarriosg.github.io/portfolio/"
          tools={[
            "React.js",
            "Javascript",
            "Vite",
            "SASS",
            "Git",
            "Responsive Design",
          ]}
        />
        <PortfolioItem
          img={foodhub}
          title={t("portfolioItemTitle3")}
          url="https://juanbarriosg.github.io/foodhub/"
          tools={[
            "Javascript",
            `API's`,
            "SASS",
            "Git",
            "HTML",
            "Responsive Design",
          ]}
        />
        <PortfolioItem
          img={hamburger}
          title={t("portfolioItemTitle4")}
          url="https://juanbarriosg.github.io/hamburger-theme/"
          tools={["Javascript", "SASS", "Git", "HTML", "Responsive Design"]}
        />
        <PortfolioItem
          img={sappApp}
          url="https://juanbarriosg.github.io/sapp-app/"
          title={t("portfolioItemTitle5")}
          tools={["Javascript", "CSS", "Git", "GitHub", "HTML"]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
