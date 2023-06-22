const PortfolioItem = ({ img, title, tools, url }) => {
  return (
    <a  href={url} target="_blank" rel="noreferrer" className="portfolio-item">
      <div className="portfolio-item-img">
        <img src={img} alt={title} title={title} />
        <div className="portfolio-item-tags">
          {tools.map((tool, index) => {
            return <span key={index}>{tool}</span>;
          })}
        </div>
      </div>
      <p>{title}</p>
    </a>
  );
};

export default PortfolioItem;
