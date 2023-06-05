import React from "react";
import Navbar from "../components/Navbar/Navbar";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/Footer";
import TopCourses from "../components/TopCourses/TopCourses";
import LiveStates from "../components/LiveStates/LiveStates";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/banner");
  };
  return (
    <div>
      {/* <Navbar />
      <JoinUs />
      <TopCourses />
      <LiveStates />
      <Footer /> */}
    </div>
  );
}

export default HomePage;
