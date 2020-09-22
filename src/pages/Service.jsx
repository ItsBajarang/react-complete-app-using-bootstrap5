import React from "react";
import web from "../assets/img/search.svg";
import Card from "../components/Card";
import ServiceData from "../data/ServiceData";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 max-auto">
            <div className="row gy-4">
              {ServiceData.map((data, index) => {
                return <Card key={index} title={data.title} imgsrc={data.imgsrc} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
