import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import "./footer.css";
function Footer() {
  return (
    <div className="back pt-3 text-light">
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-sm-4 ">
            {/* <div className="align-items-center justify-content-center p-2">
              <FontAwesomeIcon icon={faTypo3} size="3x" />
            </div> */}
            <p>
              AI-ClassRoom is an ed-tech platform where students and working
              professionals can learn skills essential to start a career in
              Artificial Intelligence. Our aim is to provide training programs
              to make your job ready. Our proud hiring partners believe in our
              training programs and consistently hire from us.
            </p>
          </div>
          <div className="col-sm-4">
            <h4 className="jack">Contact Us</h4>
            <div>
              {" "}
              <a href="#">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </a>
              <span className="m-2"> +91-8867583329</span>
            </div>
            <div>
              {" "}
              <a href="#">
                <i className="fa fa-envelope " aria-hidden="true"></i>
              </a>
              <span className="m-2"> basha.and.ai@ai4sees.com</span>
            </div>
            <div>
              {" "}
              <a href="#">
                <i className="fa fa-map" aria-hidden="true"></i>
              </a>
              <span className="m-2">
                AI-ClassRoom Training Institute, White Field, Bangalore - 560048 ,
                India
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div>
              <h4 className="jack p-2">Follow Us</h4>
              <div className="row">
                <div className="col-sm-2">
                  <a href="#">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                </div>
                <div className="col-sm-2">
                  <a href="#">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
                <div className="col-sm-2">
                  <a href="#">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
