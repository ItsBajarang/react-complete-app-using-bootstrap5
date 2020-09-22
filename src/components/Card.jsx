import React from "react";
import { NavLink } from "react-router-dom";
import web from "../assets/img/search.svg";
function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 max-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top img-size"  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Complete end-to-end solution which will help for smoother Customer experience and owner to build a revenue
            </p>
            <NavLink to="/" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
