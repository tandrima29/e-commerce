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
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="  text-success  pb-3 border-design ">Zay Shop</h2>
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
          </div>
          <div className="col-md-4 pt-5">
            <h2 class=" text-color1  pb-3 border-design">Products</h2>
            {paraDetails.map((details, index) => {
              return (
                <div key={index}>
                  <CustomPara para={details.description}></CustomPara>
                </div>
              );
            })}
          </div>
          <div className="col-md-4 pt-5">
            <h2 class="text-color1  pb-3 border-design">Further Info</h2>
            {paraDetails.map((details, index) => {
              return (
                <div key={index}>
                  <CustomPara para={details.description2}></CustomPara>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-design"></div>
          </div>
          <div className="col-auto me-auto">
            <div className="list-inline text-left footer-icons">
              <FaFacebookF className="footer-icon cursor" size={"20px"} />

              <FaInstagram className="footer-icon cursor" size={"20px"} />

              <FaTwitter className="footer-icon cursor" size={"20px"} />

              <FaLinkedin className="footer-icon cursor" size={"20px"} />
            </div>
          </div>
          <div className="col-auto">
            <label className="sr-only" for="subscribeEmail"></label>
            <div className="input-group mb-2">
              <input
                type="text"
                class="form-control bg-dark border-design"
                placeholder="Email address"
              ></input>
              <div className="input-group-text btn btn-success text-light">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 back-color py-3">
        <div class="container">
          <div class="row pt-2">
            <div class="col-12">
              <p class="text-left text-light">
                Copyright &copy; 2021 Company Name | Designed by TemplateMo
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
