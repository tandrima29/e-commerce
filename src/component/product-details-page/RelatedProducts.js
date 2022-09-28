import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shop_01 from "../../images/shop_01.jpg";
import shop_02 from "../../images/shop_02.jpg";
import shop_03 from "../../images/shop_03.jpg";
import shop_04 from "../../images/shop_04.jpg";
import shop_05 from "../../images/shop_05.jpg";
import shop_06 from "../../images/shop_06.jpg";
import "../../app/global.css";
import CustomCard from "../product-card/Card";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function RelatedProducts() {
  var settings = {
    arrows: false,
    slidesToShow: 4,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    // mobileFirst: true,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
    ],
    speed: 500,
    centerMode: false,
  };

  const slidesData = [
    {
      id: 1,
      review: 33,
      img: shop_01,
      price: 40,
    },
    {
      id: 2,
      review: 14,
      img: shop_02,
      price: 28,
    },
    {
      id: 3,
      review: 51,
      img: shop_03,
      price: 35,
    },
    {
      id: 4,
      review: 25,
      img: shop_04,
      price: 49,
    },
    {
      id: 5,
      review: 32,
      img: shop_05,
      price: 19,
    },
    {
      id: 6,
      review: 45,
      img: shop_06,
      price: 59,
    },
  ];
  return (
    <div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slidesData.map((slide, index) => {
            return (
              <div key={index} className="mb-4">
                <CustomCard
                  image={slide.img}
                  review={slide.review}
                  price={slide.price}
                ></CustomCard>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
