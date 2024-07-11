import Navbar from "../components/Navbar";
import Quote from "../components/Quote";

const navbarItems = ["Projects", "Interests", "CP"];

const Interests = () => {
  return (
    <>
      <Navbar logo="Abhinav Khot" items={navbarItems} />

      <center
        style={{
          paddingTop: "30vh",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2>Coming soon</h2>
        <Quote />
      </center>
    </>
  );
};

export default Interests;
