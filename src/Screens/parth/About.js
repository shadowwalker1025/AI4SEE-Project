import React from "react";
import Nav from "./Nav";
// import "./about.css";
import Footer from "../../components/LiveStates/Footer";
function About() {
  return (
    <div>
      <Nav />
      <div className="kool">
        <div className="container ">
          <h1 className="text-light p-5 text-center">About us</h1>
        </div>
      </div>
      <div className="m-5 p-5">
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
