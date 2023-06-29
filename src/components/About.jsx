import { faUser } from "@fortawesome/free-regular-svg-icons";
import Breadcrumb from "../common/Breadcrumb";

const About = () => {
  return (
    <div className="container about-section">
      <Breadcrumb title="About" icon={faUser} widthIcon={10} id="about" />
      <h1>
        Every great development begin with an even <span>better story</span>{" "}
      </h1>
      <p>
        Experienced Security Professional Transitioning to Dynamic Web
        Development with React.js and JavaScript.
      </p>

      <br/>
      <p>
        I am a versatile and motivated candidate with 20 years of experience in
        the security industry!. I am embarking on an exciting new journey in the
        realm of web development, specializing in React.js and JavaScript.
      </p>

      <br/>
      <p>
        Throughout my extensive career in security, I have honed my
        problem-solving skills, attention to detail, and ability to adapt to
        dynamic environments. Now, I am eager to channel these strengths into
        the world of web development, leveraging my wealth of experience to
        excel in this evolving field.
      </p>

      <br/>
      <p>
        Equipped with a deep passion for continuous learning, I thrive on
        embracing new challenges head-on. I am committed to expanding my
        knowledge and skill set each day, ensuring that I stay at the forefront
        of technological advancements and industry trends. As a highly adaptable
        individual, I am prepared to take on any obstacles that come my way,
        armed with an unwavering determination to succeed.
      </p>

      <br/>
      <p>
        With a solid foundation in React.js and JavaScript, I am poised to
        create captivating and user-friendly web experiences. I possess a keen
        eye for development and a knack for crafting intuitive interfaces that
        elevate user engagement and satisfaction.
      </p>

      <br/>
      <p>
        As a professional dedicated to growth and excellence, I am now actively
        seeking opportunities to contribute my unique blend of security
        expertise and burgeoning web development skills to an innovative
        organization. Together, let's surpass expectations and create
        extraordinary digital experiences that leave a lasting impact.
      </p>

      <br/>
      <p>
        Contact me today, and let's embark on this transformative journey
        together.
      </p>
    </div>
  );
};

export default About;
