import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../common/Breadcrumb";
import foodhub from "../assets/img/foodhub.png";
import sappApp from "../assets/img/sapp-app.png";
import hamburger from "../assets/img/hamburger.png";
import carRepair from "../assets/img/car-repair.png";
import portfolioImg from "../assets/img/portfolio.png";
import PortfolioItem from "../common/PortfolioItem";
import "../styles/components/Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="container Portfolio-section">
      <Breadcrumb
        title="Portfolio"
        icon={faGripVertical}
        widthIcon={12}
        id="portfolio"
      />
      <h1>
        Featured <span>Projects</span>
      </h1>
      <div className="portfolio-cards">
        <PortfolioItem
          img={carRepair}
          title="Car Repair - Mechanic Services"
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
          title="Portfolio - Featured Projects"
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
          title="Foodhub - Recipe Website"
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
          title="Hamburger - Restaurant E-commerce"
          url="https://juanbarriosg.github.io/hamburger-theme/"
          tools={["Javascript", "SASS", "Git", "HTML", "Responsive Design"]}
        />
        <PortfolioItem
          img={sappApp}
          url="https://juanbarriosg.github.io/sapp-app/"
          title="SappApp - App Landing Page"
          tools={["Javascript", "CSS", "Git", "GitHub", "HTML"]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
