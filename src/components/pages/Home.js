import React, { useEffect } from "react";
import "../../App.css";
import Herosection2 from "../../components/Herosection2";
import Herosection from "../../components/Herosection";

import Footer from "../Footer";

function Home({ setNavbarColor }) {
  useEffect(() => {
    setNavbarColor("#171717");
  }, []);
  return (
    <>
      <Herosection />
      <Herosection2 />

      <Footer />
    </>
  );
}

export default Home;
