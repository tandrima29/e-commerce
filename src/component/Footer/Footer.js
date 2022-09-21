import React from "react";
import "./styles.css";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="  text-success border-bottom pb-3 border-design ">
              Zay Shop
            </h2>
            <p>
              <span className="cursor text-light">
                <FaMapMarkerAlt className="footer-icon" size={"20px"} />
                123 Consectetur at ligula 10660
              </span>
            </p>
            <p>
              <span className=" cursor text-light">
                <FaPhone className="footer-icon" size={"20px"} /> 010-020-0340
              </span>
            </p>
            <p>
              <span className=" cursor text-light">
                <FaEnvelope className="footer-icon" size={"20px"} />{" "}
                info@company.com
              </span>
            </p>
          </div>
          <div className="col-md-4 pt-5">
            <h2 class=" text-light border-bottom pb-3 border-design">
              Products
            </h2>
            <p>
              <span className="cursor text-light">Luxury</span>
            </p>
            <p>
              <span className=" cursor text-light"> Sport-Wear</span>
            </p>
            <p>
              <span className=" cursor text-light"> Men's Shoes</span>
            </p>
            <p>
              <span className=" cursor text-light"> Men's Shoes</span>
            </p>
            <p>
              <span className=" cursor text-light"> Women's Shoes</span>
            </p>
            <p>
              <span className=" cursor text-light"> Popular Dress</span>
            </p>
            <p>
              <span className=" cursor text-light"> Gym Accessories</span>
            </p>
            <p>
              <span className=" cursor text-light"> Sport Shoes</span>
            </p>
          </div>
          <div className="col-md-4 pt-5">
            <h2 class="text-light border-bottom pb-3 border-design">
              Further Info
            </h2>
            <p>
              <span className="cursor text-light">Home</span>
            </p>
            <p>
              <span className=" cursor text-light"> About Us</span>
            </p>
            <p>
              <span className=" cursor text-light"> Shop Locations</span>
            </p>
            <p>
              <span className=" cursor text-light"> FAQs</span>
            </p>
            <p>
              <span className=" cursor text-light"> Contact</span>
            </p>
          </div>
        </div>
        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-design"></div>
          </div>
          <div className="col-auto me-auto">
            <div className="list-inline text-left footer-icons">
              <span className="cursor">
                <FaFacebookF className="footer-icon" size={"20px"} />
              </span>
              <span className="cursor">
                <FaInstagram className="footer-icon" size={"20px"} />
              </span>
              <span className="cursor">
                <FaTwitter className="footer-icon" size={"20px"} />
              </span>
              <span className="cursor">
                <FaLinkedin className="footer-icon" size={"20px"} />
              </span>
            </div>
          </div>
          <div className="col-auto">
            <label className="sr-only" for="subscribeEmail">
              Email address
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                class="form-control bg-dark border-design"
                placeholder="Email address"
              ></input>
              <div className="input-group-text btn-success text-light">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
