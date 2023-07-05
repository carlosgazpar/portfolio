import Breadcrumb from "../common/Breadcrumb";
import ResumeItem from "../common/ResumeItem";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import "../styles/components/Resume.scss";

const Resume = () => {
  const { t } = useTranslation();
  return (
    <div className="container Resume-section">
      <Breadcrumb
        title={t("resumeTitle")}
        icon={faBriefcase}
        widthIcon={12}
        id="resume"
      />
      <h1>
        {t("resumeH1")}
        <span>{t("resumeh1")}</span>
      </h1>
      <div className="Resume-timeline">
        <ResumeItem
          date={t("resumeItemDate")}
          experiences={[
            {
              title: t("resumeItemTitle"),
              description: t("resumeItemDescription"),
            },
          ]}
        />
        <ResumeItem
          date={t("resumeItemDate1")}
          experiences={[
            {
              title: t("resumeItemTitle1"),
              description: t("resumeItemDescription1"),
            },
            {
              title: t("resumeItemTitle2"),
              description: t("resumeItemDescription2"),
            },
          ]}
        />
        <ResumeItem
          date="2017 - 2019"
          experiences={[
            {
              title: t("resumeItemTitle3"),
              description: t("resumeItemDescription3"),
            },
            {
              title: t("resumeItemTitle4"),
              description: t("resumeItemDescription4"),
            },
          ]}
        />
        <ResumeItem
          date="2014 - 2017"
          experiences={[
            {
              title: t("resumeItemTitle5"),
              description: t("resumeItemDescription5"),
            },
            {
              title: t("resumeItemTitle6"),
              description: t("resumeItemDescription6"),
            },
          ]}
        />
        <ResumeItem
          date="2007 - 2014"
          experiences={[
            {
              title: t("resumeItemTitle7"),
              description: t("resumeItemDescription7"),
            },
            {
              title: t("resumeItemTitle8"),
              description: t("resumeItemDescription8"),
            },
          ]}
        />
        <ResumeItem
          date="1999 - 2007"
          experiences={[
            {
              title: t("resumeItemTitle9"),
              description: t("resumeItemDescription9"),
            },
            {
              title: t("resumeItemTitle10"),
              description:t("resumeItemDescription10"),
            },
            {
              title: t("resumeItemTitle11"),
              description: t("resumeItemDescription11"),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Resume;
