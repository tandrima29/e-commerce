import React from "react";
import "./styles.css";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CustomPara from "./CustomPara";
import { Container, Row, Col } from "react-bootstrap";

const paraDetails = [
  {
    description: "Luxury",
  },
  {
    description: "Sport-Wear",
  },
  {
    description: "Men's Shoes",
  },
  {
    description: " Women's Shoes",
  },
  {
    description: "Popular Dress",
  },
  {
    description2: "Home ",
  },
  {
    description2: "Shop Location",
  },
  {
    description2: "FAQs",
  },
  {
    description2: "Contact",
  },
];
export default function Footer() {
  return (
    <footer className="back-color1">
      <Container>
        <Row>
          <Col xs="12" lg="4" md="4" className="pt-5">
            <h2 className="text-success  pb-3  ">Zay Shop</h2>
            <p>
              <span className="cursor text-color1">
                <FaMapMarkerAlt
                  className="footer-icon cursor text-color1"
                  size={"20px"}
                />
                123 Consectetur at ligula 10660
              </span>
            </p>
            <p>
              <span className=" cursor text-color1">
                <FaPhone className="footer-icon " size={"20px"} /> 010-020-0340
              </span>
            </p>
            <p>
              <span className=" cursor text-color1">
                <FaEnvelope className="footer-icon " size={"20px"} />{" "}
                info@company.com
              </span>
            </p>
          </Col>
          <Col xs="12" lg="4" md="4" className=" pt-5">
            <h2 class=" text-color1  pb-3 ">Products</h2>
            {paraDetails.map((details, index) => {
              return (
                <div key={index}>
                  <CustomPara para={details.description}></CustomPara>
                </div>
              );
            })}
          </Col>
          <Col xs="12" lg="4" md="4" className="pt-5">
            <h2 class="text-color1  pb-3 ">Further Info</h2>
            {paraDetails.map((details, index) => {
              return (
                <div key={index}>
                  <CustomPara para={details.description2}></CustomPara>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className=" text-light mb-4">
          <Col xs="12" lg="12" md="12" className="mb-3">
            <div className="w-100 my-3 border-top"></div>
          </Col>
          <Col xs="auto" className="me-auto">
            <div className="list-inline text-left footer-icons">
              <FaFacebookF className="footer-icon cursor" size={"20px"} />

              <FaInstagram className="footer-icon cursor" size={"20px"} />

              <FaTwitter className="footer-icon cursor" size={"20px"} />

              <FaLinkedin className="footer-icon cursor" size={"20px"} />
            </div>
          </Col>
          <Col className="col-auto">
            <label className="sr-only" for="subscribeEmail"></label>
            <div className="input-group mb-2">
              <input
                type="text"
                class="form-control back-color1 border-design"
                placeholder="Email address"
              ></input>
              <div className="input-group-text btn btn-success text-light">
                Subscribe
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="w-100 back-color py-3">
        <Container>
          <Row className=" pt-2">
            <Col>
              <p className="text-left text-light">
                Copyright &copy; 2021 Company Name | Designed by TemplateMo
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
