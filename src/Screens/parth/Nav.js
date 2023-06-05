import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleViewDetails = () => {
    navigate("/banner");
  };

  const handleSignIn = () => {
    // Handle sign in logic
  };

  const handleSignOut = () => {
    // Handle sign out logic
  };

  const handlecontact = () => {
    navigate("/about/form");
  };
  const handlefeature = () => {
    navigate("/about/features");
  };
  const handleroot = () => {
    navigate("/");
  };
  const handleabout = () => {
    navigate("/link");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid m-2">
          <a className="navbar-brand text-light" href="#" onClick={handleroot}>
            <FontAwesomeIcon icon={faTypo3} />
            <span className="m-3"> AI4SEE </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav justify-content-between">
              <li className="nav-item">
                <a
                  className="nav-link text-light "
                  onClick={handleViewDetails}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  onClick={handlefeature}
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  onClick={handleabout}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  onClick={handlecontact}
                >
                  Contact Us{" "}
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-primary me-2" onClick={handleSignIn}>
                  <FontAwesomeIcon icon={faSignInAlt} /> Sign In
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
