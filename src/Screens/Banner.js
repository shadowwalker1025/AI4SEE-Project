import React from "react";
import "./banner.css";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./parth/Nav";
import Footer from "../components/LiveStates/Footer";
function Banner() {
  return (
    <>
      <Nav />
      <div className="container-fluid m-2">
        <div className="banner">
          <img
            className="img"
            src="https://ai-shala.com/img/bg/others_bg3-min.jpg"
            alt="bannerimage"
          />
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Banner;
