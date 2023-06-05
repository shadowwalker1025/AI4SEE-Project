import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { collection, addDoc } from "firebase/firestore";
import st from "./states";
import cit from "./cities";
import core from "./country";
import db from "./Firebase";
import "./form.css";
import { Alert, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from "./parth/Nav";
import Footer from "../components/LiveStates/Footer";

function Form() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mname, setmname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [add2, setadd2] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");

  const [city, setCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //  firebase storing
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      fname,
      lname,
      email,
      zipcode,
      education,
      phoneNumber,
      address,
      city,
      gender,
    });

    try {
      await addDoc(collection(db, "users"), {
        fname,
        lname,
        email,
        zipcode,
        education,
        phoneNumber,
        address,
        gender,
        selectedCountry,
        selectedState,
        mname,
        add2,
      });
      console.log("Document successfully saved to Firestore!");
      // Reset the form after successful submission
      setShowAlert(true);
      setShowModal(true);
      restart();
    } catch (error) {
      console.error("Error saving document to Firestore: ", error);
      setShowAlert(true);
      setShowModal(true);
    }
  };
  function restart() {
    setfname("");
    setmname("");
    setlname("");
    setEmail("");
    setzipcode("");
    setEducation("");
    setPhoneNumber("");
    setAddress("");
    setCity("");
    setGender("");
    setadd2("");
  }
  const [phoneNumber, setPhoneNumber] = React.useState();
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };
  console.log(st);

  const handlePayment = () => {
    navigate("/customer/payment");
  };

  return (
    <>
      <Nav />
      <section class="h-100 bg-dark">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample"
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5 text-uppercase">
                        Student registration form
                      </h3>
                      <form
                        class="row g-3 needs-validation"
                        onSubmit={handleSubmit}
                        novalidate
                      >
                        <div class="col-md-4">
                          <label for="validationCustom01" class="form-label">
                            {" "}
                            First name <span className="mandiatory">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            value={fname}
                            onChange={(e) => {
                              setfname(e.target.value);
                            }}
                            required
                          />
                          <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="col-md-4">
                          <label for="validationCustom02" class="form-label">
                            {" "}
                            Middle name{" "}
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustom02"
                            value={mname}
                            onChange={(e) => {
                              setmname(e.target.value);
                            }}
                          />
                        </div>
                        <div class="col-md-4">
                          <label
                            for="validationCustomUsername"
                            class="form-label"
                          >
                            {" "}
                            Last name <span className="mandiatory">*</span>
                          </label>
                          <div class="input-group has-validation">
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustomUsername"
                              aria-describedby="inputGroupPrepend"
                              value={lname}
                              onChange={(e) => {
                                setlname(e.target.value);
                              }}
                              required
                            />
                            <div class="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        </div>
                        {/* <!-- gender--> */}
                        <div className="col-md-12">
                          <label
                            for="validationCustomUsername"
                            class="form-label"
                          >
                            {" "}
                            Gender<span className="mandiatory">*</span>
                          </label>
                          <select
                            className="form-select"
                            id="validationCustom04"
                            value={gender}
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            required
                          >
                            <option>Choose</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </select>
                        </div>

                        <div className="col-md-12">
                          <label
                            for="validationCustomUsername"
                            class="form-label"
                          >
                            {" "}
                            Address 1 <span className="mandiatory">*</span>
                          </label>
                          <div class="input-group has-validation">
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustomUsername"
                              aria-describedby="inputGroupPrepend"
                              value={address}
                              maxLength={45}
                              onChange={(e) => setAddress(e.target.value)}
                              required
                            />
                            <div class="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label
                            for="validationCustomUsername"
                            class="form-label"
                          >
                            {" "}
                            Address{" "}
                          </label>
                          <div class="input-group has-validation">
                            <input
                              type="text"
                              class="form-control"
                              maxLength={50}
                              id="validationCustomUsername"
                              aria-describedby="inputGroupPrepend"
                              value={add2}
                              onChange={(e) => {
                                setadd2(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <label for="validationCustom03" class="form-label">
                            {" "}
                            City <span className="mandiatory">*</span>
                          </label>
                          <select
                            className="form-select"
                            id="validationCustom04"
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                            required
                          >
                            {cit.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>

                          <div class="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label for="validationCustom04" class="form-label">
                            {" "}
                            State <span className="mandiatory">*</span>
                          </label>
                          <select
                            id="state"
                            className="form-select"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                          >
                            {st.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>

                          <div class="invalid-feedback">
                            Please select a valid state.
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label for="validationCustom05" class="form-label">
                            {" "}
                            Zip <span className="mandiatory">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustom05"
                            maxLength={5} // Set the maximum length to 5 characters
                            value={zipcode}
                            pattern="[0-9]{5}" // Use a regular expression to validate 5 digits
                            onChange={(e) => {
                              setzipcode(e.target.value);
                            }}
                            required
                          />
                          <div class="invalid-feedback">
                            Please provide a valid zip.
                          </div>
                        </div>
                        {/* phoneNumber */}
                        <div className="row ">
                          <div className="col-md-8">
                            <label
                              htmlFor="phoneNumber"
                              className="form-label m-3"
                            >
                              Phone Number <span className="mandiatory">*</span>
                            </label>
                            <PhoneInput
                              id="phoneNumber"
                              country={"us"} // Set the default country code if needed
                              placeholder="Enter phone number"
                              value={phoneNumber}
                              onChange={handlePhoneNumberChange}
                            />
                          </div>
                          <div className="col-md-4">
                            <label
                              htmlFor="phoneNumber"
                              className="form-label m-3"
                            >
                              country <span className="mandiatory">*</span>
                            </label>{" "}
                            <select
                              id="country"
                              className="form-select"
                              value={selectedCountry}
                              onChange={(e) => {
                                setSelectedCountry(e.target.value);
                              }}
                            >
                              {core.map((item) => (
                                <option key={item}>{item}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* status */}
                        <div className="col-md-12 m-2">
                          <label for="validationCustom05" class="form-label">
                            {" "}
                            Status <span className="mandiatory">*</span>
                          </label>
                          <select
                            class="form-select"
                            id="validationTooltip04"
                            value={education}
                            onChange={(e) => {
                              setEducation(e.target.value);
                            }}
                            required
                          >
                            <option selected disabled value="">
                              Choose...
                            </option>
                            <option>Employed</option>
                            <option>Studying</option>
                            <option>Others</option>
                          </select>
                          <div class="invalid-tooltip">
                            Please select a valid state.
                          </div>
                        </div>
                        {/* email */}
                        <div className="col-md-12">
                          <label for="validationCustom05" class="form-label">
                            {" "}
                            Email <span className="mandiatory">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustom05"
                            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                          />
                          <div class="invalid-feedback">
                            Please provide a valid zip.
                          </div>
                        </div>

                        <div className="col-md-12"></div>
                        <div class="col-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="invalidCheck"
                              required
                            />
                            <label class="form-check-label" for="invalidCheck">
                              Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div className="row">
                            <div className="col-sm-4 ">
                              <button
                                class="btn btn-warning m-2"
                                onClick={restart}
                              >
                                Reset form
                              </button>
                            </div>
                            <div className="col-sm-4">
                              <button class="btn btn-primary m-2" type="submit">
                                Submit form
                              </button>
                            </div>
                            <div className="col-sm-4">
                              <button
                                class="btn btn-danger m-2"
                                type="submit"
                                onClick={handlePayment}
                              >
                                Payment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* Success Alert */}
                      {showAlert && (
                        <Alert
                          variant="success"
                          onClose={() => setShowAlert(false)}
                          dismissible
                        >
                          Form submitted successfully!
                        </Alert>
                      )}

                      {/* Success Modal */}
                      <Modal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Success</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>Your form has been submitted successfully!</p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Form;
