import { useEffect } from "react";
import { useState } from "react";

const WindowWitdhChecker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=> {
    const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    
  }, [])


  return <div>
    <h3>Screen Width {windowWidth}px</h3>
  </div>;
};

export default WindowWitdhChecker;
