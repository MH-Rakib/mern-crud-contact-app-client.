import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AllContacts.css";
import ContactList from "./../ContactList/ContactList";
import { Link } from "react-router-dom";

const AllContacts = () => {
  const [allContacts, setAllContacts] = useState([]);

  console.log(allContacts);

  useEffect(() => {
    fetch("http://localhost:4000/getUser")
      .then((res) => res.json())
      .then((data) => setAllContacts(data));
  }, []);

  const handleDeleteContact = (obj) => {
    const { _id } = obj;
    fetch(`http://localhost:4000/deleteUser/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const newContacts = allContacts.filter(
            (contact) => contact._id !== _id
          );
          setAllContacts(newContacts);
        }
      });
  };

  return (
    <Container>
      <Row className="section mt-5">
        <Col>
          <div className="">
            <Link to={"/createContact"}>
              <button className="createNew">Create New Contact</button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <p className="listHeading">All The Contacts</p>
        {allContacts.map((contact) => (
          <Col md={12}>
            <ContactList
              handleDeleteContact={handleDeleteContact}
              contact={contact}
            ></ContactList>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllContacts;
