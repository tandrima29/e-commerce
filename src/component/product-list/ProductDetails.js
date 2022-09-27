import Shop1 from "../../images/pd-1.jpg";
import Shop2 from "../../images/pd-2.jpg";
import Shop3 from "../../images/pd-3.jpg";
import Shop4 from "../../images/pd-4.jpg";
import Shop5 from "../../images/pd-5.jpg";
import Shop6 from "../../images/pd-6.jpg";
import Shop7 from "../../images/pd-7.jpg";
import Shop8 from "../../images/pd-8.jpg";
import Shop9 from "../../images/pd-9.jpg";
import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import CustomProduct from "./Product";
import { FaChevronCircleDown } from "react-icons/fa";
import axios from "axios";
import BrandDetails from "./BrandDetails";
const productDetails = [
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop1,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop2,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop3,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop4,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop5,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop6,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop7,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop8,
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: Shop9,
    price: 250,
  },
];

export default function ProductDetails() {
  const [productDetails, updateProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://630722593a2114bac75a5755.mockapi.io/netflix-clone/top-10-to-watch"
      )
      .then((response) => {
        const result = response.data.content;
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
                    <CustomProduct
                      heading={details.heading}
                      para={details.size}
                      image={details.img}
                      price={details.price}
                    ></CustomProduct>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <BrandDetails />
    </div>
  );
}
