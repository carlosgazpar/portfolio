import Breadcrumb from "../common/Breadcrumb";
import ResumeItem from "../common/ResumeItem";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import '../styles/components/Resume.scss'

const Resume = () => {
  return (
    <div className="container Resume-section">
      <Breadcrumb title="Resume" icon={faBriefcase} widthIcon={12} id='resume'/>
      <h1>
        Education & <span>Experience</span>
      </h1>
      <div className="Resume-timeline">
        <ResumeItem date=' June 2022 - Present' experiences={[
          {
            title: 'Front-End Developer', 
            description: 'Freelance'
          }
        ]} />
        <ResumeItem date='2019 - February 2023' experiences={[
          {
            title: 'Judicial Power of the Federation.', 
            description: 'Specialized Analyst.'
          }, 
          {
            title: 'Council of the Federal Judicature.',
            description: 'Protection of Magistrates of the Federal Government.',
          }
        ]} />
        <ResumeItem date='2017 - 2019' experiences={[
          {
            title: 'Judicial Power of the Federation.', 
            description: 'Middle Management Assistant.'
          }, 
          {
            title: 'Electoral Tribunal of the Federal Judiciary.',
            description: 'Protection of Magistrates of the Federal Government.'
          }
        ]} />
        <ResumeItem date='2014 - 2017' experiences={[
          {
            title: 'Judicial Power of the Federation.', 
            description: 'Security Officer.'
          }, 
          {
            title: 'Electoral Tribunal of the Federal Judiciary.',
            description: 'Protection of Real Estate, Assets and Officials of the Federal Government.',
          }
        ]} />
        <ResumeItem date='2007 - 2014' experiences={[
          {
            title: 'Federal Public Security Secretary.', 
            description: 'Personal Security to Government Officials.'
          }, 
          {
            title: 'Federal Protection Service.',
            description: 'Intramural Guard in Federal Buildings and Strategic Facilities.'
          }
        ]} />
        <ResumeItem date='1999 - 2007' experiences={[
          {
            title: 'Secretariat of Finance and Public Credit.', 
            description: 'Federal Tax Police.'
          }, 
          {
            title: 'General Administration of Customs.',
            description: 'Review of Foreign trade merchandise for the payment of taxes.',
          },
          {
            title: 'Tax Administration Service (SAT).',
            description: 'Review of petitions in different Customs of the country, checking the import or export of merchandise and vehicles, complying with the payment of taxes.'
          }
        ]} />
      </div>
    </div>
  );
};

export default Resume;
