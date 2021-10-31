import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "./CreateContact.css";
import { Link } from "react-router-dom";

const CreateContact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    gender: "Male",
    status: "Active",
  });

  const handleContactInfo = (e) => {
    const obj = contactInfo;
    obj[e.target.name] = e.target.value;
    setContactInfo({ ...obj });
  };

  const handleSubmitContactInfo = (e) => {
    e.preventDefault();
    const { name, email, gender, status } = contactInfo;
    if (name && email && gender && status) {
      fetch(`http://localhost:4000/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert("Contact Added Successfully");
          } else {
            alert("Something Wrong Happened. Please Try Again.");
          }
        });
    } else {
      alert("Please Fill Up All The Fields Properly");
    }
  };

  return (
    <div>
      <Container>
        <Row
          className="d-flex align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          <Col md={7} lg={5} className="">
            <div className="createContact">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  <FaArrowLeft className="icon" /> Contact Page
                </p>
              </Link>
              <h3>Create A New Contact</h3>
              <form onSubmit={handleSubmitContactInfo}>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label for="name">Your Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="form-control input"
                    placeholder="Enter Name"
                    onChange={handleContactInfo}
                  />
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label for="email">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input"
                    placeholder="Enter Email"
                    onChange={handleContactInfo}
                  />
                </div>

                <Row>
                  <div
                    className="form-group col-md-6"
                    style={{ textAlign: "left" }}
                  >
                    <label for="inputState">Your Gender</label>
                    <select
                      id="inputState"
                      className=" otherinput"
                      name="gender"
                      onClick={handleContactInfo}
                    >
                      <option selected>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div
                    class="form-group col-md-6"
                    style={{ textAlign: "left" }}
                  >
                    <label for="inputState">Your Status</label>
                    <select
                      id="inputState"
                      className="otherinput"
                      name="status"
                      onClick={handleContactInfo}
                    >
                      <option selected>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </Row>

                <br />

                <button type="submit" class=" addContact">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateContact;
