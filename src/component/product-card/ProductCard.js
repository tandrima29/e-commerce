import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../../images/pic1.jpg";
import Image2 from "../../images/image2.jpg";
import Image3 from "../../images/pic3.jpg";
import CustomCard from "./Card";

const cardDetails = [
  {
    heading: "Gym Weight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: Image1,
    review: 45,
    price: 600,
  },
  {
    heading: "Nike Shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: Image2,
    review: 67,
    price: 456,
  },
  {
    heading: "Addidas Shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: Image3,
    review: 23,
    price: 900,
  },
];
export default function ProductCard() {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <Row className="text-center py-3">
          <Col lg={6} className="m-auto">
            <h2>Featured Product</h2>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </Col>
        </Row>
        <Row>
          {cardDetails.map((details, index) => {
            return (
              <Col xs={12} md={4} key={index} className="mb-4">
                <CustomCard
                  heading={details.heading}
                  para={details.description}
                  review={details.review}
                  image={details.img}
                  price={details.price}
                ></CustomCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
