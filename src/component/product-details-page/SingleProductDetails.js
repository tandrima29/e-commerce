import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCarousel from "./ProductCarousel";
import ProductDetails from "./ProductDetails";
import "../../app/global.css";
import RelatedProducts from "./RelatedProducts";

export default function SingleProductDetails() {
  return (
    <div>
      <div clasName="bg-back">
        <Container>
          <div className="py-5">
            <Row>
              <Col xs={12} md={5}>
                <ProductCarousel />
              </Col>
              <Col xs={12} md={7}>
                <ProductDetails />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <Row className="my-5">
          <h1 className="text-center">Related Products</h1>
          <RelatedProducts />
        </Row>
      </Container>
    </div>
  );
}
