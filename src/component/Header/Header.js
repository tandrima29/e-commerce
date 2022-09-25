import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../app/global.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="text-success mx-5" href="#home">
            <h3>Zay</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-between widthclass">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item>
                <Nav.Link href="/home">
                  <BiSearchAlt2 />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <FaCartArrowDown />
                  <span className="position-absolute top-1 left-100 translate-middle badge rounded-pill bg-success text-dark">
                    7
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <FaUserAlt />
                  <span className="position-absolute top-1 left-100 translate-middle badge rounded-pill bg-success text-dark">
                    +99
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
