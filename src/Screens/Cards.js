import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import proj from "../proj";
import { useNavigate } from "react-router-dom";
import "./cards.css";

function Cards(props) {
  const navigate = useNavigate();
  const handleViewDetails = (project) => {
    navigate("/about", { state: project });
  };
  const cardRows = [];
  let cards = [];
  proj.forEach((p, index) => {
    cards.push(
      <div className="col-md-4 mar " key={index}>
        <div className="card border border-3 cha shadow-lg">
          <button
            onClick={() => handleViewDetails(p)}
            className="btn btn-warning m-3 change"
          >
            {p.domain}
          </button>
          <img
            class="card-img-top m-y img-fluid"
            src={p.img}
            width="300"
            height="150"
            alt="Card image cap"
          />

          <div className="card-body">
            <h5 className="card-title  truncate title ml-3 ">{p.title}</h5>
            <p className="card-text duratioin card-text duration truncate">
            Duration Of the Course: {p.duration}
            </p>
            <hr />
            <div className="d-flex flex-row-reverse">
              {" "}
              <button
                onClick={() => handleViewDetails(p)}
                className="btn btn-outline-info"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    if ((index + 1) % 3 === 0 || index === proj.length - 1) {
      cardRows.push(
        <div className="mt-5">
          <div className="row m-3" key={index}>
            {cards}
          </div>
        </div>
      );
      cards = [];
    }
  });

  return <div className="container-fluid">{cardRows}</div>;
}

export default Cards;
