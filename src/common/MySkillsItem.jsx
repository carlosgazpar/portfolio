const MySkillsItem = ({ img, title }) => {
  return (
    <div className="MySkills-item">
      <div className="MySkills-img">
        <img src={img} alt={title} title={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default MySkillsItem;
