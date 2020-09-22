import React from "react";
import { NavLink } from "react-router-dom";
import web from "../assets/img/youtube.svg";
import Common from "../components/Common";

function Home() {
  return (
    <>
        <Common
        title="Grow your business with Our "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
