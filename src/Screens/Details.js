import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Nav from "./parth/Nav";

function Details() {
  const location = useLocation();
  const project = location.state;

  const [showOverview, setShowOverview] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const toggleCurriculum = () => {
    setShowCurriculum(!showCurriculum);
  };
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/about/form");
  };
  const handlePayment = () => {
    navigate("/customer/payment");
  };
  return (
    <>
      <Nav />
      <div className="container">
        <div className=" align-self-center d-flex justify-content-center">
          <img src={project.king} alt={project.title} />
        </div>
        <div className="jumbotron kool border-0 border-white rounded mt-2 shadow-lg">
          {project.duration && <h2>{project.title}</h2>}
          <button
            className="btn btn-primary rounded-pill btn-lg px-5 my-2"
            onClick={handleRegistration}
          >
            Register
          </button>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h4 onClick={toggleOverview}>
                <button className="btn btn-danger">Overview</button>
              </h4>
              <br/>
              {showOverview && <p>{project.overview}</p>}
            </div>
            <div className="col-md-6">
              <h4 onClick={toggleCurriculum}>
                {" "}
                <button className="btn btn-danger">Curriculum</button>{" "}
              </h4>
              <br/>
              {showCurriculum && (
                <ul>
                  {project.Curriculum ? (
                    project.Curriculum.map((item, index) => (
                      <><li key={index}>{item}</li><br/></>
                    ))
                  ) : (
                    <li>No curriculum available.</li>
                  )}
                </ul>
              )}
            </div>
          </div>
          <div>
            <h4>Training program benefits:</h4>

            {project.Training_program_benefits &&
              project.Training_program_benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </div>
          <hr className="" />
          <div>
            <div className="row">
              <div className="col-sm-6">
                {project.Tutors && <h5>Tutors:{project.Tutors}</h5>}

                <div className="row">
                  <div className="col-md-4">
                    {project.Students && <p>Students:{project.Students}</p>}
                  </div>
                  <div className="col-md-4">
                    {project.Lectures && <p>Lectures:{project.Lectures}</p>}
                  </div>
                  <div className="col-md-4">
                    {project.starting && <p>Start Date: {project.starting}</p>}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                {project.domain && <h5>Category: {project.domain}</h5>}

                <button
                  className="btn btn-primary rounded-pill btn-lg px-5 m-5"
                  onClick={handlePayment}
                >
                  <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
