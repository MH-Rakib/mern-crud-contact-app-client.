import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "./UpdateContact.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateContacts = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    fetch(`http://localhost:4000/getUser/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleContactInfo = (e) => {
    const obj = data;
    obj[e.target.name] = e.target.value;
    setData({ ...obj });
  };

  const handleSubmitContactInfo = (e) => {
    e.preventDefault();
    const { name, email, gender, status, _id } = data;
    if (name && email && gender && status) {
      fetch(`http://localhost:4000/updateUser/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert("Contact Updated Successfully");
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
              <h3>Edit Contact</h3>
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
                    value={data.name}
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
                    value={data.email}
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
                      onChange={handleContactInfo}
                      value={data.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
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
                      onChange={handleContactInfo}
                      value={data.status}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </Row>

                <br />

                <button type="submit" class=" addContact">
                  Update
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateContacts;
