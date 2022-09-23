import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../Images/img1.jpg";
import Img2 from "../../Images/img2.jpg";
import Img3 from "../../Images/img3.jpg";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
export default function Hero() {
  return (
    <Carousel>
      <Carousel.Item className="bg-back">
        <div className="container ">
          <div className="row p-5">
            <div className="col-lg-6 justify-content-center align-items-center ">
              <h1>Repr in voluptate</h1>
              <h3> Ullamco laboris nisi ut</h3>
              <p>
                {" "}
                We bring you 100% free CSS templates for your websites. If you
                wish to support TemplateMo, please make a small contribution via
                PayPal or tell your friends about our website. Thank you.
              </p>
            </div>

            <div className="col-lg-6">
              <img className="img-fluid" src={Img1} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="bg-back">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-6 justify-content-center align-items-center ">
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
            </div>

            <div className="col-lg-6">
              <img className="img-fluid" src={Img2} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="bg-back">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-6 justify-content-center align-items-center ">
              <h1>Proident occaecat</h1>
              <h3>Aliquip ex ea commodo consequat</h3>
              <p>
                {" "}
                You are permitted to use this Zay CSS template for your
                commercial websites. You are not permitted to re-distribute the
                template ZIP file in any kind of template collection websites.
              </p>
            </div>

            <div className="col-lg-6">
              <img className="img-fluid" src={Img3} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
