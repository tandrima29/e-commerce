import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import CustomProduct from "./Product";
import { FaChevronCircleDown } from "react-icons/fa";
import axios from "axios";
import AboutBrands from "../About-Components/AboutBrands";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const [productDetails, updateProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://633092a2591935f3c891ff0d.mockapi.io/products")
      .then((response) => {
        const result = response.data.products;
        console.log(response);
        updateProductDetails(result);
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col lg="3">
            <h2 className=" pb-4">Catagories</h2>
            <select className="form-control form-design ">
              <option>Gender</option>
              <option>Men</option>
              <option>Women</option>
            </select>
            <select className="form-control form-design ">
              <option>Sale</option>
              <option>Product</option>
              <option>Luxary</option>
            </select>
            <select className="form-control form-design ">
              <option>Product</option>
              <option>Bag</option>
              <option>Sweater</option>
              <option>Sunglass</option>
            </select>
          </Col>
          <Col lg="9" className=" ">
            <Row>
              <Col md="6" className="pb-3 pb-1">
                <span>ALL</span>
                <span className="mx-3">MEN'S</span>
                <span>WOMEN'S</span>
              </Col>
              <Col md="6" className="pb-4">
                <div className="d-flex">
                  <select className="form-control form-border ">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </Col>
            </Row>

            <Row>
              {productDetails.map((details, index) => {
                return (
                  <Col sm="auto" md="4" lg="4" key={index} className=" mb-4">
                    <Link
                      to="/product-details"
                      style={{ textDecoration: "none" }}
                    >
                      <CustomProduct
                        heading={details.title}
                        para={details.desc}
                        image={details.img}
                        price={details.price}
                      ></CustomProduct>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <AboutBrands />
    </div>
  );
}
