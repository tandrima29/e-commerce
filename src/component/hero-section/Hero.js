import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
export default function Hero() {
  return (
    <Carousel variant="dark">
      <Carousel.Item className="bg-back">
        <div className="container ">
          <Row className="p-5">
            <Col className="d-flex flex-column text-start justify-content-center ">
              <h1>Repr in voluptate</h1>
              <h3> Ullamco laboris nisi ut</h3>
              <p>
                We bring you 100% free CSS templates for your websites. If you
                wish to support TemplateMo, please make a small contribution via
                PayPal or tell your friends about our website. Thank you.
              </p>
            </Col>

            <Col>
              <img className="img-fluid" src={Img1} alt="First slide" />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item className="bg-back">
        <div className="container">
          <Row className="p-5">
            <Col className="d-flex flex-column text-start  justify-content-center ">
              <h1 className="text-success">Zay eCommerce</h1>
              <h3> Tiny and Perfect eCommerce Template</h3>
              <p>
                {" "}
                Zay Shop is an eCommerce HTML5 CSS template with latest version
                of Bootstrap 5 (beta 1). This template is 100% free provided by
                <span className="text-success">TemplateMo</span> website. Image
                credits go to{" "}
                <span className="text-success">Freepik Stories</span>,{" "}
                <span className="text-success">Unsplash</span>
                and <span className="text-success">Icons 8.</span>
              </p>
            </Col>

            <Col>
              <img className="img-fluid" src={Img2} alt="First slide" />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item className="bg-back">
        <div className="container">
          <Row className="p-5">
            <Col
              lg={6}
              className="d-flex flex-column text-start justify-content-center"
            >
              <h1 className="text-start">Proident occaecat</h1>
              <h3>Aliquip ex ea commodo consequat</h3>
              <p>
                {" "}
                You are permitted to use this Zay CSS template for your
                commercial websites. You are not permitted to re-distribute the
                template ZIP file in any kind of template collection websites.
              </p>
            </Col>

            <Col>
              <img className="img-fluid" src={Img3} alt="First slide" />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
