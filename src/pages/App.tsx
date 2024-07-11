import "./App.css";
import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/footer.tsx";

const navbarItems = ["Projects", "Interests", "CP"];
function App() {
  return (
    <>
      <div className="main-page-container">
        <Navbar logo="Abhinav Khot" items={navbarItems} />
        <Hero />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
