import { useState } from "react";
import "../styles/components/Loader.scss";

const Loader = () => {

  const [isLoading, setIsLOading] = useState(true)

  window.addEventListener('load', () => {
    setIsLOading(false)
  })

  return (
    <div className={`loader ${!isLoading && 'hide'}`}>
      <div className="loader-bounce"></div>
    </div>
  );
};

export default Loader;
