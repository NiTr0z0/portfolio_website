import React from "react";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import Footer from "../components/footer";

const navbarItems = ["Projects", "Interests", "DSA"];

const Interests = () => {
  return (
    <>
      <Navbar logo="Abhianv SK" items={navbarItems} />

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
