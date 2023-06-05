import React from "react";
import { Carousel } from "react-bootstrap";
import reviews from "./reviews";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import "./student.css";
function Student() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "star-icon" : "star-icon empty-star"}
        />
      );
    }
    return stars;
  };
  return (
    <div>
      <h1 className="text-center">What Our Students Say</h1>
      <p className="text-center">Hear it from our Students</p>
      <div className="m-5 bg-dark text-light align-items-center justify-content-center p-5">
        <Carousel>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-content">
                <div className="row">
                  <div className="col-md-4 ">
                    <img
                      src={img1}
                      alt="student"
                      className=" img-thumbnail img-fluid imgs"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="text-center align-items-center justify-content-center">
                      {review.name}
                    </h3>
                    <p className="text-center align-items-center justify-content-center">
                      {review.occupation}, {review.location}
                    </p>
                    <p className="text-end align-items-end justify-content-center ">
                      {review.comment}
                    </p>
                  </div>
                </div>
                <div className="text-center align-items-center justify-content-center pb-5">
                  <div className="star-rating">
                    {renderStars(review.rating)}
                  </div>
                  <p>{review.review}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Student;
