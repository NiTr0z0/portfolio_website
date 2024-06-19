import Navbar from "../components/Navbar";
import Card from "../components/Card";
import projectData from "./Projects.json";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/footer";
import "./Project.css";

const navbarItems = ["Projects", "Interests", "CP"];

const Project = () => {
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
    <>
      <div className="main-page-container">
        <Navbar logo="Abhinav SK" items={navbarItems} />
        <div
          className={windowStatus ? "card-container-mobile" : "card-container"}
        >
          {projectData.map((item) => (
            <Card
              title={item.title}
              buttonLink={item.buttonLink}
              buttonImageName={item.buttonImageName}
            >
              {item.text}
            </Card>
          ))}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Project;
