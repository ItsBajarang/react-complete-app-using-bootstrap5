import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setData((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${data.name} \nEmail: ${data.email} \nPhone Number: ${data.phone} \nMessage: ${data.message}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={inputHandler}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={inputHandler}
                  placeholder="First and Last Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={inputHandler}
                  placeholder="Mobile Number"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={inputHandler}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
