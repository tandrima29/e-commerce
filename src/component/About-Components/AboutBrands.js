import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import brand_01 from "../../images/brand_01.png";
import brand_02 from "../../images/brand_02.png";
import brand_03 from "../../images/brand_03.png";
import brand_04 from "../../images/brand_04.png";

export default function AboutBrands() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
  };
  const slidesData = [
    {
      id: 1,
      img: brand_02,
    },
    {
      id: 2,
      img: brand_04,
    },
    {
      id: 3,
      img: brand_01,
    },
    {
      id: 4,
      img: brand_03,
    },
  ];
  return (
    <div className="bg-light">
      <Container>
        <Row className="text-center py-3">
          <Col>
            <h1 className="h1">Our Brands</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
        <Col>
          <div className="slider-wrapper p-5 ">
            <Slider {...settings}>
              {slidesData.map((slide) => (
                <div className="slick-slide " key={slide.id}>
                  <img
                    className="slick-slide-image brand-img"
                    src={slide.img}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Container>
    </div>
  );
}
