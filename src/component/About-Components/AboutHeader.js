import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import aboutHero from "../../images/about-hero.svg";

export default function AboutHeader() {
  return (
    <div className="bg-success">
      <Container>
        <Row className="align-items-center py-5">
          <Col md={8} className="text-white">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col md={4}>
            <img src={aboutHero} alt="Hero" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
