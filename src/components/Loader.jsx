import { useEffect, useState } from "react";
import "../styles/components/Loader.scss";

const Loader = () => {

  const [isLoading, setIsLOading] = useState(true)

  useEffect(() => {
    setTimeout(() => [
      setIsLOading(false)
    ], 1300)
  }, [])

  return (
    <div className={`loader ${!isLoading && 'hide'}`}>
      <div className="loader-bounce"></div>
    </div>
  );
};

export default Loader;
