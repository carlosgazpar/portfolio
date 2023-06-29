const ResumeItem = ({ date, experiences }) => {
  return (
    <div className="Resume-timeline-item">
      <h3>{date}</h3>
      {experiences.map((experience, key) => {
        return (
          <div key={key}>
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeItem;
