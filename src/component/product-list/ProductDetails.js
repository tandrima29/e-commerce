import Shop1 from "../../images/pd-1.jpg";
import Shop2 from "../../images/pd-1.jpg";
import Shop3 from "../../images/pd-1.jpg";
import Shop4 from "../../images/pd-1.jpg";
import Shop5 from "../../images/pd-1.jpg";
import Shop6 from "../../images/pd-1.jpg";
import Shop7 from "../../images/pd-1.jpg";
import Sho81 from "../../images/pd-1.jpg";
import Shop9 from "../../images/pd-1.jpg";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./styles.css";
import CustomProduct from "./Product";

const productDetails = [
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
  {
    heading: "Oupidatat non",
    size: "M/L/X/XL",
    img: { Shop1 },
    price: 250,
  },
];
export default function ProductDetails() {
  return (
    <Container className="py-5">
      <Row>
        <Col lg="3">
          <h2 className=" pb-4">Catagories</h2>
          <p>Gender</p>
          <p>Sale</p>
          <p>Product</p>
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
                <div className="form-control"></div>
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
  );
}
export function SectionPart() {
  return (
    <div className="back-1 py-5">
      <Container className="my-5">
        <Row className="text-center py-3">
          <Col lg="6">
            <h1>Our Brands</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </Col>
          <Col lg="9">
            <Carousel>
              <Carousel.Item></Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
