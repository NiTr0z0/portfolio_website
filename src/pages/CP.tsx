import "../components/Hero.css";
import "./CP.css";
import Navbar from "../components/Navbar";
import leedCodeLogo from "../assets/leetcode.svg";
import cfLogo from "../assets/code-forces.svg";
import Footer from "../components/footer";

const navbarItems = ["Projects", "Interests", "CP"];
const CP = () => {
  return (
    <div>
      <Navbar items={navbarItems} logo="Abhinav Khot" />
      <div className="page-container">
        <h3>
          <center>You can find me on:</center>
        </h3>
        <div className="links-container">
          <a href="https://leetcode.com/u/skabhinav018/" className="icon">
            <img className="icon" src={leedCodeLogo} alt="leetcode"></img>
            <figcaption font-family="arial">LeetCode</figcaption>
          </a>
          <a href="https://codeforces.com/profile/gh0ul__" className="icon">
            <img className="icon" src={cfLogo} alt="cf"></img>
            <figcaption font-family="arial">CodeForces</figcaption>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CP;
