import "./App.css";
import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/footer.tsx";

const navbarItems = ["Projects", "Interests", "CP"];
function App() {
  return (
    <>
      <Navbar logo="Abhinav SK" items={navbarItems} />
      <div className="main-page-container">
        <Hero />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
