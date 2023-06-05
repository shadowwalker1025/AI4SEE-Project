import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tutor.css";
function Tutors() {
  return (
    <div className=" p-3 backl mb-5">
      <div className="container m-2 p-2">
        <h1 className="text-light text-center">Our Tutors</h1>
        <p className="text-light text-center">
          Meet our expert tutors who will guide you throughout your journey with
          us.
        </p>
        {/* <div className="row">
          <div className="col-sm-4">
            <div class="card border-0">
              <div className="d-flex align-items-center">
                <img
                  class="card-img-top tut rounded-circle"
                  src="	https://ai-shala.com/img/team/akshay-removebg-preview.png"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Dr. Akshay Agarwal</h5>
                <p class="card-text">
                  Postdoc associate @ University at Buffalo, New York, USA
                  Expertise in Computer Vision
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card border-0">
              <img
                class="card-img-top tut"
                src="	https://ai-shala.com/img/team/akshay-removebg-preview.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card border-0">
              <img
                class="card-img-top img-fluid tut"
                src="	https://ai-shala.com/img/team/akshay-removebg-preview.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row p-5">
          <div className="col-sm-4">
            <div class="card bg-transparent border-1">
              <img
                class="card-img-top tut rounded-circle"
                src="https://ai-shala.com/img/team/akshay-removebg-preview.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title text-light">Job preparation</h5>
                <p class="card-text text-light">
                  Become job ready with our interview guidance and machine
                  learning job interview case studies.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card bg-transparent border-1">
              <img
                class="card-img-top tut rounded-circle"
                src="https://ai-shala.com/img/team/akshay-removebg-preview.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title text-light">Expert Mentorship</h5>
                <p class="card-text text-light">
                  Interact with expert tutors for doubt clearance and guidance
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card bg-transparent border-0">
              <img
                class="card-img-top tut rounded-circle"
                src="https://ai-shala.com/img/team/akshay-removebg-preview.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title text-light">
                  Developer and discussion forum
                </h5>
                <p class="card-text text-light">
                  Life time access to our community forums for anytime doubt
                  clearance.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutors;
