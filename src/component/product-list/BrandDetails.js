import Brand1 from "../../images/brand-1.png";
import Brand2 from "../../images/brand-2.png";
import Brand3 from "../../images/brand-3.png";
import Brand4 from "../../images/brand-4.png";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export default function BrandDetails() {
  return (
    <div className="back-1 py-5">
      <Container className="my-5">
        <Row className="text-center py-3">
          <Col lg="6" className="container-fluid">
            <h1>Our Brands</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </Col>
          <Col lg="9" className="container-fluid">
            <Carousel variant="dark design-btn">
              <Carousel.Item>
                <Col>
                  <img className="img-fluid " src={Brand1} alt="First slide" />
                  <img className="img-fluid" src={Brand2} alt="First slide" />
                  <img className="img-fluid" src={Brand3} alt="First slide" />
                  <img className="img-fluid" src={Brand4} alt="First slide" />
                </Col>
              </Carousel.Item>
              <Carousel.Item>
                <Col>
                  <img className="img-fluid " src={Brand1} alt="First slide" />
                  <img className="img-fluid" src={Brand2} alt="First slide" />
                  <img className="img-fluid" src={Brand3} alt="First slide" />
                  <img className="img-fluid" src={Brand4} alt="First slide" />
                </Col>
              </Carousel.Item>
              <Carousel.Item>
                <Col>
                  <img className="img-fluid " src={Brand1} alt="First slide" />
                  <img className="img-fluid" src={Brand2} alt="First slide" />
                  <img className="img-fluid" src={Brand3} alt="First slide" />
                  <img className="img-fluid" src={Brand4} alt="First slide" />
                </Col>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
