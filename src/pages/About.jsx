import React from "react";
import { NavLink } from "react-router-dom";
import network from "../assets/img/network.svg";
import Common from "../components/Common";

function About() {
  return (
    <>
      <Common
        title="Welcome to About Page "
        imgsrc={network}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
