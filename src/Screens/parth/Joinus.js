import React from "react";
import edu_illustration from "../../assets/edu_illustration.png.webp";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./JoinUs.css";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();

  const banner = () => {
    navigate("/banner");
  };
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="textcontainer1 ">
            <h2 className="text1">Get to learn from Experts</h2>
            <p className="text2">
              Build skills with courses, certificates, and degrees online from
              world-class universities and companies
            </p>
            <p>
              How it benefits you... With this program, you will learn how to
              approach and solve problems using machine learning. It will give
              you complete guidance for your interviews and also a
              recommendation letter from your mentor. Your mentor will give you
              regular performance evaluation, which will help you improve upon
              your weak areas. And guess what, you will be gauranteed a job post
              completion!
            </p>
            <button className="btn btn-primary" onClick={banner}>
              Join now
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="edu_illustration">
            <img
              src={edu_illustration}
              alt="Education Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
