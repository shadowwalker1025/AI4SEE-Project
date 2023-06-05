import React from "react";
import Nav from "./Nav";
import JoinUs from "./Joinus";
import Topcourses from "./Topcourses";
import LiveStates from "../../components/LiveStates/LiveStates";
import Footer from "../../components/LiveStates/Footer";
import Tutors from "./Tutors";
import Student from "../../components/LiveStates/Student";
function Parth() {
  return (
    <div>
      <Nav />
      <JoinUs />
      <Topcourses />
      <Tutors />
      <LiveStates />
      <Student />
      <Footer />
    </div>
  );
}

export default Parth;
