import React from "react";
import { NavLink } from "react-router-dom";
import web from "../assets/img/youtube.svg";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex justify-content-evenly">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 max-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                  <h1>
                    {props.title}
                    <strong className="brand-name">Brand New Solution</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developers making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home image "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
