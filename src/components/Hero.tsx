import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [windowStatus, setMobileMode] = useState(false);
  useEffect(() => {
    console.log("yes");
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    };
    if (window.innerWidth < 768) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        windowStatus
          ? "side-by-side-container-mobile"
          : "side-by-side-container"
      }
    >
      <div className="greeting-container">
        <br />
        <div className="press-start-2p-regular">Hello there!</div>
        <br />
        <div className="noto-sans-kannada">ನಮಸ್ಕಾರ</div>
      </div>
      <div className="greeting-container">
        Hey there! I'm Abhinav Khot from Bengaluru, a sophomore studying
        Computer Science at IIT Gandhingar, Gujurat. I have a deep interest in
        puzzle solving and algorithms. This website showcases my projects, my
        interests and other statistics pertaining to competitive programming.
      </div>
    </div>
  );
};

export default Hero;
