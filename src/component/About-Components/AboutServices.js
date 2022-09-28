import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPercent, FaUser } from "react-icons/fa";

export default function AboutServices() {
  const services = [
    {
      id: 1,
      servicesIcon: FaTruck,
      text: "Delivery Services",
    },
    {
      id: 2,
      servicesIcon: FaExchangeAlt,
      text: "Shipping And Return",
    },
    {
      id: 3,
      servicesIcon: FaPercent,
      text: "Promotion",
    },
    {
      id: 4,
      servicesIcon: FaUser,
      text: "24 hours service",
    },
  ];
  return (
    <Container className="py-5">
      <Row className="text-center pt-5 pb-3">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>
      </Row>
      <Row>
        {services.map((item, index) => {
          return (
            <Col xs={12} md={3}>
              <div>
                <div className="h1 text-success text-center">
                  <item.servicesIcon />
                </div>
                <h2 className="h5 mt-4 text-center">{item.text}</h2>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
