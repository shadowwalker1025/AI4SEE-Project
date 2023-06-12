import React from "react";
import "./banner.css";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./parth/Nav";
import Footer from "../components/LiveStates/Footer";
import c1 from "../assets/counter_icon1.png";
import c4 from "../assets/counter_icon4.png";
import c2 from "../assets/counter_icon2.png";
import c3 from "../assets/counter_icon3.png";
import monitor from "../assets/laptop1.png";
import certficate from "../assets/certificate.png";
import "./features.css";

function Banner() {
  return (
    <>
      <Nav />
      <div className="container-fluid ">
        <div className="banner">
          <div className="bam  align-items-center justify-content-center">
            <div className="row  py-4">
              <div className="col-sm-4 ">
                <div class="card bg-transparent border-0 ">
                  <div>
                    <img
                      class="card-img-top tut "
                      src={c1}
                      alt="Card image cap"
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title text-light text-center ">
                      Job Preparation
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card bg-transparent border-0">
                  <img class="card-img-top tut" src={c4} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title text-light text-center">
                      Expert Mentorship
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card bg-transparent border-0">
                  <img
                    class="card-img-top tut"
                    src={monitor}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-light text-center">
                      Developer Discussion Forum
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-sm-4">
                <div class="card bg-transparent border-0">
                  <img class="card-img-top tut" src={c2} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title text-light text-center">
                      Certificate On Completion
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card bg-transparent border-0">
                  <img class="card-img-top tut" src={c3} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title text-light text-center">
                      Internship Opportunity
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card bg-transparent border-0">
                  <img
                    class="card-img-top tut "
                    src={certficate}
                    alt="Card image cap"
                  />
                  <div class="card-body mx-5">
                    <h5 class="card-title text-light text-center">
                      Card Title
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Banner;
